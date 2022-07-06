import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdSearchComponent } from './bird-search.component';

describe('BirdSearchComponent', () => {
  let component: BirdSearchComponent;
  let fixture: ComponentFixture<BirdSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirdSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BirdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
