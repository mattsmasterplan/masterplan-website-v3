import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazilTwentytwentyComponent } from './brazil-twentytwenty.component';

describe('BrazilTwentytwentyComponent', () => {
  let component: BrazilTwentytwentyComponent;
  let fixture: ComponentFixture<BrazilTwentytwentyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrazilTwentytwentyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazilTwentytwentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
