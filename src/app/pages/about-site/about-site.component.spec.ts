import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {AboutSiteComponent} from './about-site.component';

describe('AboutSiteComponent', () => {
  let component: AboutSiteComponent;
  let fixture: ComponentFixture<AboutSiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSiteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
