import { Component, OnInit } from '@angular/core';
import { Bird } from '@fullstack-monorepo/api-interfaces';
import { BirdService } from '../bird.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.css'],
})
export class BirdsComponent implements OnInit {
  birds: Bird[] = [];

  constructor(private birdService: BirdService) {}

  ngOnInit(): void {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getBirds().subscribe((birds) => (this.birds = birds));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.birdService.addBird({ name } as Bird).subscribe((bird: Bird) => {
      this.birds.push(bird);
    });
  }

  delete(bird: Bird): void {
    this.birds = this.birds.filter((h) => h !== bird);
    this.birdService.deleteBird(bird.id).subscribe();
  }
}
