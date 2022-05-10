import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../model/noticias.model';

@Injectable({
  providedIn: 'root'
})
export class BuscarNoticiasService {

  private API_KEY: string = '22bd3675e2da40b3a1cf9bf7bcbb3932';
  private URL: string = 'https://newsapi.org/v2/';

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarNoticias(termo: string): Observable<Noticias> {
    return this.httpClient.get<Noticias>(
      `${this.URL}/everything?language=pt&apiKey=${this.API_KEY}&q=${termo}`
    );
  }

  buscarNoticiasTopHeadlines(termo: string, categoria: string): Observable<Noticias> {
    return this.httpClient.get<Noticias>(
      `${this.URL}/top-headlines?country=br&apiKey=${this.API_KEY}&q=${termo}&category=${categoria}`
    );
  }

}
