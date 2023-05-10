import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeCardDetailComponent } from './episode-card-detail.component';

describe('EpisodeCardDetailComponent', () => {
  let component: EpisodeCardDetailComponent;
  let fixture: ComponentFixture<EpisodeCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpisodeCardDetailComponent]
    });
    fixture = TestBed.createComponent(EpisodeCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
