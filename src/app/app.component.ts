import { Component } from '@angular/core';
import { Noticias } from './model/noticias.model';
import { BuscarNoticiasService } from './services/buscar-noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticias';
  noticias = new Noticias();
  tipoPesquisa = 'T'; // U -> ULTIMAS, T -> TUDO
  termo: string = 'mario';
  categoria: string = '';

  constructor(
    private buscarNoticiasService: BuscarNoticiasService
  ) {
    this.buscarNoticias();
  }

  buscarNoticias(): void {
    if (this.tipoPesquisa === 'T') {
      this.buscarNoticiasService.buscarNoticias(this.termo).subscribe((noticias: Noticias) => {
        this.noticias = noticias;
      });
    } else if (this.tipoPesquisa === 'U') {
      this.buscarNoticiasService.buscarNoticiasTopHeadlines(this.termo, this.categoria).subscribe((noticias: Noticias) => {
        this.noticias = noticias;
      });
    }
  }

}
