import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesTabComponent } from './recipes-tab.component';

describe('RecipesTabComponent', () => {
  let component: RecipesTabComponent;
  let fixture: ComponentFixture<RecipesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
