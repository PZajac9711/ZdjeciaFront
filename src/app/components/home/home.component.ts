import {Component, OnInit} from '@angular/core';
import {PageImagesService} from '../../services/page-images.service';
import {NextComponent} from '../next/next.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images$: any;

  constructor(private pageService: PageImagesService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.getImages();
  }

  getImages() {
    this.images$ = this.pageService.getImages(NextComponent.number).subscribe(response => {
      this.images$ = response;
    });
  }
}
