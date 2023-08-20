import { LiteralPrimitive } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  @Input() letra: string | undefined;

  @Output() lose = new EventEmitter();

  letras = " ";

  quantLetra = 1;


  ngOnChanges(){
    console.log("letra tem:"+this.quantLetra);
    //this.lose.emit("0");
    if(this.letra != null && this.quantLetra < 41){
      this.letras += this.letra+" | ";
      this.quantLetra = this.quantLetra + 4;
    }if(this.quantLetra == 41){
      this.lose.emit("1");
    }
  }

  constructor() {
  
   }

  ngOnInit(): void {
  }

}
