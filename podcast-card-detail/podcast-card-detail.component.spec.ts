import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastCardDetailComponent } from './podcast-card-detail.component';

describe('PodcastCardDetailComponent', () => {
  let component: PodcastCardDetailComponent;
  let fixture: ComponentFixture<PodcastCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastCardDetailComponent]
    });
    fixture = TestBed.createComponent(PodcastCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
