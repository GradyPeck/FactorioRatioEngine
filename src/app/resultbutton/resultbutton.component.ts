import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resultbutton',
  templateUrl: './resultbutton.component.html',
  styleUrls: ['./resultbutton.component.css']
})
export class ResultbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() itemName: string;
  @Input() itemQuant: string;

  public toSnake(notsnek: string): string {
    notsnek = notsnek.replace(/ /g, "_");
    notsnek = notsnek + ".png";
    return notsnek;
  }

}
