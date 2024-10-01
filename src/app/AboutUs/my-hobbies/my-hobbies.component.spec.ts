import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHobbiesComponent } from './my-hobbies.component';

describe('MyHobbiesComponent', () => {
  let component: MyHobbiesComponent;
  let fixture: ComponentFixture<MyHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHobbiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
