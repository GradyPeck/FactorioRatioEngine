import { Component, OnInit, Input, Output } from '@angular/core';
import { denseIng } from '../recipebank.service';
import { toolkit } from '../../toolkit';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultbutton',
  templateUrl: './resultbutton.component.html',
  styleUrls: ['./resultbutton.component.css']
})
export class ResultbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() checky: boolean = false;
  @Input() myItem: denseIng;
  @Output() perfToggle: EventEmitter<any> = new EventEmitter();
  tooly = toolkit;

  public toSnake(notsnek: string): string {
    notsnek = notsnek.replace(/ /g, "_");
    notsnek = notsnek + ".png";
    return notsnek;
  }

  public PerfecToggle() {
    this.perfToggle.emit(this.myItem.name);
  }

}
