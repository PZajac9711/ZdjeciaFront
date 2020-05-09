import {Component, Input, OnInit} from '@angular/core';
import {ScoreService} from '../../services/score.service';

// Jeśli ktoś to czyta niech wie ,że słabo mi było jak wyciągałem tego hedera :(

@Component({
  selector: 'app-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css']
})
export class ImageDisplayComponent implements OnInit {

  constructor(private service: ScoreService) {
  }

  ngOnInit(): void {
  }

  @Input() name: string;
  @Input() title: string;
  @Input() score: number;

  setScore() {
    this.service.scoreImage(this.name).subscribe(resp => {
      this.score = Number(resp.headers.get('actualScore'));
    });
  }
}
