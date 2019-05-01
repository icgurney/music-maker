import { Injectable, HostListener } from '@angular/core';
import { Note } from './models/note.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  tempRecording: Note[] = [];

  playNote(src: string, instrument: string){
    let audio = new Audio();
    audio.src = `/assets/${instrument}/${src}.wav`;
    audio.load();
    audio.play();
  }

  recordNote(src: string, time: any, instrument: string){
    this.tempRecording.push({
      note: src,
      time: time,
      instrument: instrument
    });
  }

  playRecording(){
    let note: Note = this.tempRecording.shift();
    this.playNote(note.note, note.instrument);
    if(this.tempRecording.length > 0){
      let timeDiff = this.tempRecording[0].time - note.time;
      setTimeout(this.playRecording.bind(this), timeDiff);
    }
    else{
      return;
    }
  }

  constructor() { }
}
