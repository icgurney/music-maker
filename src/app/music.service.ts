import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  tempRecord: Object[] = [];

  playNote(key: object){
    let audio = new Audio();
    audio.src = key['src'];
    audio.load();
    audio.play();
  }

  recordNote(key: string, time: any){
    this.tempRecord.push({
      key: key,
      time: time
    });
  }

  constructor() { }
}
