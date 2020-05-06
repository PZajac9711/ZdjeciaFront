import { Component, OnInit } from '@angular/core';
import {NextComponent} from '../components/next/next.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    NextComponent.number = 0;
  }
}
