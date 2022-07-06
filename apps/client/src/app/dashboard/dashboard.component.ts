import { Component, OnInit } from '@angular/core';
import { Bird } from '@fullstack-monorepo/api-interfaces';
import { BirdService } from '../bird.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  birds: Bird[] = [];

  constructor(private birdService: BirdService) {}

  ngOnInit(): void {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService
      .getBirds()
      .subscribe((birds) => (this.birds = birds.slice(1, 5)));
  }
}
