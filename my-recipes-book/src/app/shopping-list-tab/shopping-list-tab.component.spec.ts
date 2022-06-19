import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTabComponent } from './shopping-list-tab.component';

describe('ShoppingListTabComponent', () => {
  let component: ShoppingListTabComponent;
  let fixture: ComponentFixture<ShoppingListTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
