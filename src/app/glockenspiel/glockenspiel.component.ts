import { Component, OnInit, HostListener } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-glockenspiel',
  templateUrl: './glockenspiel.component.html',
  styleUrls: ['./glockenspiel.component.scss']
})
export class GlockenspielComponent implements OnInit {

  time: number = 0;


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.time = event.timeStamp;
    let sound = event.key;
    this.passNote(sound);
  }

  @HostListener('click' ['$event.target'])
  handleClickEvent(event: MouseEvent){
    this.time = event.timeStamp;
    let sound = event.button;
    this.passNote(this.keys[sound]);
  }

  recordOn: boolean = false;

  keys: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '['];

  passNote(key: string){
    let instrument: string = 'glockenspiel'
    this.musicService.playNote(key, instrument);
    if(this.recordOn == true){
      this.musicService.recordNote(key, this.time, instrument);
    }
  }

  swapRecord(){
    this.recordOn = !this.recordOn;
    console.log(this.recordOn)
  }

  constructor(private musicService: MusicService) { }

  ngOnInit() {}

}
