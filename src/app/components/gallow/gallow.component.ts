import { Component, ElementRef, OnInit, ViewChild, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gallow',
  templateUrl: './gallow.component.html',
  styleUrls: ['./gallow.component.css']
})
export class GallowComponent implements OnInit {

  @ViewChild('fondovalor')
  fondovalor!: ElementRef;

  randomNum = Math.floor(Math.random() * 10 + 1);

  word = ["carro", "casa", "arvore", "paralelepipedo", "cardapio", "inventario", "ponto","caderno", "caligrafia", "coxinha"];

  selectedWord = this.word[this.randomNum];

  wordSplit = this.selectedWord.split('');

  wordSplitNew = this.wordSplit;

  wordInput: string  | undefined;

  wordArray: [] | undefined;

  @Input() letra: string | undefined;
  @Input() palavra: string | undefined;

  ngOnChanges(){
    if(this.palavra == null){
      this.wordSplit = this.word[this.randomNum].split('');
      this.wordInput = '';
      for(let i = 0; i < this.wordSplit.length; i++ ){
        if(this.wordSplit[i] == this.letra && this.wordSplitNew[i] == ' _'){
          this.wordSplitNew[i] = this.letra + ' ';
        }else if(this.letra == null){
          this.wordSplitNew[i] = ' _';
        }
      }

      for(let f = 0; f < this.wordSplitNew.length; f++){
        this.wordInput += this.wordSplitNew[f];
      }
    }else{
      if(this.palavra == this.selectedWord){
        alert("Você acertou, parabens");
      }else{
        alert("você errou, mais sorte na proxima");
      }
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
