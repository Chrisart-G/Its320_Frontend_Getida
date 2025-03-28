import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayqoutesComponent } from './displayqoutes.component';

describe('DisplayqoutesComponent', () => {
  let component: DisplayqoutesComponent;
  let fixture: ComponentFixture<DisplayqoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayqoutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayqoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
