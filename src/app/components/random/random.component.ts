import {Component, OnInit} from '@angular/core';
import {StorageJwtService} from '../../services/storage-jwt.service';
import {RandomService} from '../../services/random.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  constructor(private random: RandomService) {
  }
  name: string;
  title: string;
  points: number;
  logged = false;
  ngOnInit(): void {
    this.getRandomImage();
  }
  getRandomImage(){
    this.random.getRandomPicture().subscribe(response => {
      console.log(response);
      this.name = response.name;
      this.title = response.title;
      this.points = response.points;
      this.logged = true;
    });
  }
}
