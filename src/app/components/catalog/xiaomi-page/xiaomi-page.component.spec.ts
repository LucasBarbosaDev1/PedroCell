import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiPageComponent } from './xiaomi-page.component';

describe('XiaomiPageComponent', () => {
  let component: XiaomiPageComponent;
  let fixture: ComponentFixture<XiaomiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XiaomiPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XiaomiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
