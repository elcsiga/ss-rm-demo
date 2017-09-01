import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrListComponent } from './cr-list.component';

describe('CrListComponent', () => {
  let component: CrListComponent;
  let fixture: ComponentFixture<CrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
