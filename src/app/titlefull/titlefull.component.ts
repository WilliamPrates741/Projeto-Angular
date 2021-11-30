import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlefull',
  templateUrl: './titlefull.component.html',
  styleUrls: ['./titlefull.component.css']
})
export class TitlefullComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
