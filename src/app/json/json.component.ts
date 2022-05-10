import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  @Input()
  dados: unknown;

  constructor() { }

  ngOnInit(): void {
  }

  converterParaString(): string {
    return JSON.stringify(this.dados, undefined, 4);
  }

}
