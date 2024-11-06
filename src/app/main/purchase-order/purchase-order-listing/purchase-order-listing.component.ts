import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../common-services/vendor-listing/vendor.service';
import { response } from 'express';
import { error } from 'console';
import { NgFor } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {VendorData} from '../../common-interface/common-interface'

@Component({
  selector: 'app-purchase-order-listing',
  standalone: true,
  imports: [NgFor,MatPaginatorModule,MatExpansionModule,MatIconModule,MatMenuModule,MatButtonModule],
  templateUrl: './purchase-order-listing.component.html',
  styleUrl: './purchase-order-listing.component.css'
})
export class PurchaseOrderListingComponent {

}
