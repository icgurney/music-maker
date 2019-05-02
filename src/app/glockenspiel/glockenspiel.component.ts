import { Component, OnInit, HostListener } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-glockenspiel',
  templateUrl: './glockenspiel.component.html',
  styleUrls: ['./glockenspiel.component.scss']
})
export class GlockenspielComponent implements OnInit {

  time: number = 0;

  savedTrack: string = "";

  instrument: string = 'glockenspiel'

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    this.time = event.timeStamp;
    let sound = event.key;
    this.passNote(sound);
  }

  buttonClick(event){
    this.time = event.timeStamp;
    this.passNote(event.target.value);
  }

  keys: string[] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '['];

  passNote(key: string){
    this.musicService.playNote(key, this.instrument);
    if(this.musicService.recordOn == true){
      this.musicService.recordNote(key, this.time, this.instrument);
    }
  }

  saveTrack(){
    this.musicService.saveTrack(this.savedTrack);
  }

  constructor(private musicService: MusicService) { }

  ngOnInit() {}

}
