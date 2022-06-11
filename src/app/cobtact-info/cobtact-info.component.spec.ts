import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobtactInfoComponent } from './cobtact-info.component';

describe('CobtactInfoComponent', () => {
  let component: CobtactInfoComponent;
  let fixture: ComponentFixture<CobtactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobtactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobtactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
