import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'No Weapon Configuration to Display....';
  weapons = JSON.parse(localStorage.getItem('weapon')) || [];
  constructor() { }

  ngOnInit() {
  }

}
