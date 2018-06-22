import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellouscompComponent } from './marvellouscomp.component';

describe('MarvellouscompComponent', () => {
  let component: MarvellouscompComponent;
  let fixture: ComponentFixture<MarvellouscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvellouscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellouscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
