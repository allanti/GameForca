import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-game-forca';
  letra: string | undefined;
  word: string | undefined;
  lose: string | undefined;

  public enviarDado(e: string) {
    this.letra = e;
    if(this.letra == null){
      console.log('vazio');
    }else{
      console.log('tem valor');
    }
  }

  public enviarPalavra(p: string){
    this.word = p;
  }

  public status(f: any){
    this.lose = f;
  }

}


