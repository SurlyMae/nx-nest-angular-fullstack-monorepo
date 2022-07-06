import { Component, OnInit } from '@angular/core';
import { Bird } from '@fullstack-monorepo/api-interfaces';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { BirdService } from '../bird.service';

@Component({
  selector: 'app-bird-search',
  templateUrl: './bird-search.component.html',
  styleUrls: ['./bird-search.component.css'],
})
export class BirdSearchComponent implements OnInit {
  birds$!: Observable<Bird[]>;
  private searchTerms = new Subject<string>();

  constructor(private birdService: BirdService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.birds$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.birdService.searchBirds(term))
    );
  }
}
