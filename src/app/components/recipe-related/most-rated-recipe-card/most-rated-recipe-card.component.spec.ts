import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRatedRecipeCardComponent } from './most-rated-recipe-card.component';

describe('MostRatedRecipeCardComponent', () => {
  let component: MostRatedRecipeCardComponent;
  let fixture: ComponentFixture<MostRatedRecipeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostRatedRecipeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostRatedRecipeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
