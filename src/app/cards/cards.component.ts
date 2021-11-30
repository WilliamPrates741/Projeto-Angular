import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() price!: string;
  @Input() name!: string;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
