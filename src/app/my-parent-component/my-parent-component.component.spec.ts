import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParentComponentComponent } from './my-parent-component.component';

describe('MyParentComponentComponent', () => {
  let component: MyParentComponentComponent;
  let fixture: ComponentFixture<MyParentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyParentComponentComponent]
    });
    fixture = TestBed.createComponent(MyParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
