import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-data',
  templateUrl: './testing-data.component.html',
  styleUrls: ['./testing-data.component.css']
})
export class TestingDataComponent implements OnInit {
  isOn = false;
 
  
  constructor() { }

  ngOnInit(): void {
  }
  clicked() { 
    this.isOn = !this.isOn ; 
  }

  message() {
     return `The light is ${this.isOn ? 'On' : 'Off'}`;
     }

}
