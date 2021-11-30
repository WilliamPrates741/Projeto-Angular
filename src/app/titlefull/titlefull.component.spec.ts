import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlefullComponent } from './titlefull.component';

describe('TitlefullComponent', () => {
  let component: TitlefullComponent;
  let fixture: ComponentFixture<TitlefullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlefullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlefullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
