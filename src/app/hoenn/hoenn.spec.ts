import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hoenn } from './hoenn';

describe('Hoenn', () => {
  let component: Hoenn;
  let fixture: ComponentFixture<Hoenn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoenn],
    }).compileComponents();

    fixture = TestBed.createComponent(Hoenn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
