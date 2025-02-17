import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorProductosComponent } from './proveedor-productos.component';

describe('ProveedorProductosComponent', () => {
  let component: ProveedorProductosComponent;
  let fixture: ComponentFixture<ProveedorProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProveedorProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
