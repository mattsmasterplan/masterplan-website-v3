import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {GettingStartedTypescriptComponent} from './getting-started-typescript.component';

describe('GettingStartedTypescriptComponent', () => {
  let component: GettingStartedTypescriptComponent;
  let fixture: ComponentFixture<GettingStartedTypescriptComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GettingStartedTypescriptComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
