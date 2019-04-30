import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  

  playNote(key: object){
    let audio = new Audio();
    audio.src = key['src'];
    audio.load();
    audio.play();
  }

  constructor() { }
}
