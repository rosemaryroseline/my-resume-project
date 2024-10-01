import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesDetailsComponent } from './hobbies-details.component';

describe('HobbiesDetailsComponent', () => {
  let component: HobbiesDetailsComponent;
  let fixture: ComponentFixture<HobbiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
