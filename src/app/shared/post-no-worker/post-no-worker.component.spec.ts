import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNoWorkerComponent } from './post-no-worker.component';

describe('PostNoWorkerComponent', () => {
  let component: PostNoWorkerComponent;
  let fixture: ComponentFixture<PostNoWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNoWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNoWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
