import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPodcastComponent } from './detail-podcast.component';

describe('DetailPodcastComponent', () => {
  let component: DetailPodcastComponent;
  let fixture: ComponentFixture<DetailPodcastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPodcastComponent]
    });
    fixture = TestBed.createComponent(DetailPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
