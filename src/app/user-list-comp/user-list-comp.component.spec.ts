import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListCompComponent } from './user-list-comp.component';

describe('UserListCompComponent', () => {
  let component: UserListCompComponent;
  let fixture: ComponentFixture<UserListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
