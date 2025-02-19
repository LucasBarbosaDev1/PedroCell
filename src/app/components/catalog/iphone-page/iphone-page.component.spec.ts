import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphonePageComponent } from './iphone-page.component';

describe('IphonePageComponent', () => {
  let component: IphonePageComponent;
  let fixture: ComponentFixture<IphonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IphonePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
