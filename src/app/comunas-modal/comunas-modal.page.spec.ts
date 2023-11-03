import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunasModalPage } from './comunas-modal.page';

describe('ComunasModalPage', () => {
  let component: ComunasModalPage;
  let fixture: ComponentFixture<ComunasModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComunasModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
