import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListingComponent } from './invoice-listing.component';

describe('InvoiceListingComponent', () => {
  let component: InvoiceListingComponent;
  let fixture: ComponentFixture<InvoiceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
