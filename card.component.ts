import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


title: string;
  constructor() { 
    this.title = "this my card"
  }

  ngOnInit(): void {
  }

}
