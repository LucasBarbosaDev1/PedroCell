import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoriosPageComponent } from './acessorios-page.component';

describe('AcessoriosPageComponent', () => {
  let component: AcessoriosPageComponent;
  let fixture: ComponentFixture<AcessoriosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoriosPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessoriosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
