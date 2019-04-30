import { Component, OnInit, HostListener } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-glockenspiel',
  templateUrl: './glockenspiel.component.html',
  styleUrls: ['./glockenspiel.component.scss']
})
export class GlockenspielComponent implements OnInit {


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent){
    let time = event.timeStamp;
    let sound = `/assets/glockenspiel/${event.key}.wav`;
  }

    // switch(event.key){
    //   case 'a':
    //     this.passNote(this.keys[0]);
    //     break;
    //   case 's':
    //     this.passNote(this.keys[1]);
    //     break;
    //   case 'd':
    //     this.passNote(this.keys[2]);
    //     break;
    //   case 'f':
    //     this.passNote(this.keys[3]);
    //     break;
    //   case 'g':
    //     this.passNote(this.keys[4]);
    //     break;
    //   case 'h':
    //     this.passNote(this.keys[5]);
    //     break;
    //   case 'j':
    //     this.passNote(this.keys[6]);
    //     break;
    // }


  recordOn: boolean = false;

  keyss: Array<string> = ['A', 'B', 'C'];

  keys: Object[] = [
    {
      note: "A",
      src: "/assets/glockenspiel/glockenspiel-20-a3-02.wav"
    },
    {
      note: "B",
      src: "/assets/glockenspiel/glockenspiel-29-b3-02.wav"
    },
    {
      note: "C",
      src: "/assets/glockenspiel/glockenspiel-33-c4-02.wav"
    },
    {
      note: "D",
      src: "/assets/glockenspiel/glockenspiel-37-d4-02.wav"
    },
    {
      note: "E",
      src: "/assets/glockenspiel/glockenspiel-41-e4-02.wav"
    },
    {
      note: "F",
      src: "/assets/glockenspiel/glockenspiel-44-f4-02.wav"
    },
    {
      note: "G",
      src: "/assets/glockenspiel/glockenspiel-16-g3-02.wav"
    }
  ]

  passNote(key: Object){
    this.musicService.playNote(key);
    if(this.recordOn == true){

    }
  }

  swapRecord(){
    this.recordOn = !this.recordOn;
    console.log(this.recordOn)
  }

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    console.log(document.getElementsByTagName("body"))
  }

}
