import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-form-left',
  templateUrl: './form-left.component.html',
  styleUrls: ['./form-left.component.css']
})
export class FormLeftComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  @Output() public enviarPalavra = new EventEmitter();

  @Input() lose: string | undefined;

  disable = false;

  letter: string | undefined;

  word: string | undefined;

  ngOnChanges(){

  }

  ngOnInit(): void {
  }

  handleClick(){
    console.log("Elemento pai:"+this.lose);
    if(this.lose == "1"){
      this.disable = true;
      console.log("estou no if");
    }
    this.enviarDados.emit(this.letter);
  }

  handleClick2(){
    this.enviarPalavra.emit(this.word);
  }

  constructor() {}
}
