import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevateProjectLibraryComponent } from './elevate-project-library.component';

describe('ElevateProjectLibraryComponent', () => {
  let component: ElevateProjectLibraryComponent;
  let fixture: ComponentFixture<ElevateProjectLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevateProjectLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevateProjectLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
