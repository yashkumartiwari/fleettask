import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindColorsComponent } from './find-colors.component';

describe('FindColorsComponent', () => {
  let component: FindColorsComponent;
  let fixture: ComponentFixture<FindColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
