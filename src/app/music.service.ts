import { Injectable, HostListener } from '@angular/core';
import { Note } from './models/note.model';
import { Track } from './models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  curRecording: Note[] = [];

  tempRecording: Note[] = [];

  savedRecordings: Track[];

  recordOn: boolean = false;

  swapRecord(){
    this.recordOn = !this.recordOn;
    console.log(this.recordOn)
  }

  playNote(note: string, instrument: string){
    let audio = new Audio();
    audio.src = `/assets/${instrument}/${note}.wav`;
    audio.load();
    audio.play();
  }

  recordNote(note: string, time: any, instrument: string){
    this.curRecording.push({
      note: note,
      time: time,
      instrument: instrument
    });
  }

  createTempRecording(){
    this.tempRecording = [...this.curRecording];
    this.playRecording();
  }

  // saveTrack(track: string){
  //   this.curRecording.name = track;
  //   this.savedRecordings.push(this.curRecording)
  // }

  playRecording(){
    let note: Note = this.tempRecording.shift();
    this.playNote(note.note, note.instrument);
    if(this.tempRecording.length > 0){
      let timeDiff = this.tempRecording[0].time - note.time;
      setTimeout(this.playRecording.bind(this), timeDiff);
    }
    else{
      this.tempRecording = [];
      return;
    }
  }

  constructor() { }
}
