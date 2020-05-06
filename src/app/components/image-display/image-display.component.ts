import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() name: string;
  @Input() title: string;
  @Input() score: number;
}
