import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostTabComponent } from './new-post-tab.component';

describe('NewPostTabComponent', () => {
  let component: NewPostTabComponent;
  let fixture: ComponentFixture<NewPostTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
