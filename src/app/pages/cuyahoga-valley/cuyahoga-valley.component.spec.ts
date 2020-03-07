import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuyahogaValleyComponent } from './cuyahoga-valley.component';

describe('CuyahogaValleyComponent', () => {
  let component: CuyahogaValleyComponent;
  let fixture: ComponentFixture<CuyahogaValleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuyahogaValleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuyahogaValleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
