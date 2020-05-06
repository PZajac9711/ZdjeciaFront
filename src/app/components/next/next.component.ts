import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {
  static number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  increaseNumber() {
    NextComponent.number = NextComponent.number + 1;
  }

  get getStatic() {
    return NextComponent.number + 1;
  }

}
