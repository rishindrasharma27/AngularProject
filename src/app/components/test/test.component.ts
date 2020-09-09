import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template:`  
              <h2>{{GreeText}}</h2><button (click)="onClick()">Greet</button>{{greeting}}
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

public GreeText = "Hello User";
public greeting = "";
  constructor() { }

  ngOnInit(): void {
  }
  onClick()
  {
    console.log('Welcome user!!');
    this.greeting = "Welcome Buddy";
    
  }

}
