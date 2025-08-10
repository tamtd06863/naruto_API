import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAcsynComponent } from './card-acsyn.component';

describe('CardAcsynComponent', () => {
  let component: CardAcsynComponent;
  let fixture: ComponentFixture<CardAcsynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAcsynComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAcsynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
