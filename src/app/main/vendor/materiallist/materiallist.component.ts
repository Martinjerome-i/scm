import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MateriallistService } from '../../common-services/vendor-material-listing/materiallist.service';
import {DatePipe, NgForOf} from "@angular/common";
import { Router } from '@angular/router';
import {MatIconButton} from "@angular/material/button";
import { materialData } from '../../common-interface/common-interface';




@Component({
  selector: 'app-materiallist',
  standalone: true,
  imports: [MatPaginatorModule, MatMenuModule, MatIconModule, NgForOf, MatIconButton, DatePipe],
  templateUrl: './materiallist.component.html',
  styleUrl: './materiallist.component.css'
})
export class MateriallistComponent {

  vendormaterialList: materialData [] = [];
  VendorID: number;
  CompanyName: string;
  ContactName: string;
  ContactNo: number;

  date: Date;

  vendorMaterialListJson: any

  constructor(private router: Router,private materialListService: MateriallistService) {
    this.date = new Date();
    this.vendorMaterialListJson = [
      {
        "VendorMaterialMappingDetailsID": 1,
        "CASNumber": "123456",
        "MaterialNumber": "8749854",
        "MaterialDescription": "Box",
        "MaterialStatus": "Pending",
        "StatusColorCode": "approved",
        "LeadTime": "08-03-2024",
      },
      {
        "VendorMaterialMappingDetailsID": 1,
        "CASNumber": "1234598",
        "MaterialNumber": "8749854767",
        "MaterialDescription": "Pack",
        "MaterialStatus": "Pending",
        "StatusColorCode": "approved",
        "LeadTime": this.date.getDate(),
      }
    ]
    this.getMaterials()
    this.getVendor()
  }

  async getMaterials() {
    try {

      this.vendormaterialList = this.vendorMaterialListJson.map((item:materialData) =>({
        "VendorMaterialMappingDetailsID": item.VendorMaterialMappingDetailsID,
        "CASNumber": item.CASNumber,
        "MaterialNumber": item.MaterialNumber,
        "MaterialDescription": item.MaterialDescription,
        "MaterialStatus": item.MaterialStatus,
        "StatusColorCode": item.StatusColorCode,
        "LeadTime": this.date.setDate(this.date.getDate() + item.LeadTime),
      }));
      console.log(this.vendormaterialList);
    }

    catch(error){
      console.log(error);
    }
  }


  async getVendor() {
    try {

      this.VendorID = 1
      this.CompanyName= "Company Name"
      this.ContactName= "Suresh"
      this.ContactNo= 12345678890

      console.log(this.VendorID)
      console.log(this.ContactName);
      // console.log(vendorid)
    }

    catch(error){
      console.log(error);
    }
  }

  toNegotiationList(VendorMaterialMappingDetailsID: any) {
    // localStorage.setItem("vendorMaterialMappingDetailsID", VendorMaterialMappingDetailsID.toString());
    // Navigate
    this.router.navigateByUrl('/admin/Vendor/vendorNegotiationListing');
  }

  toDocumentList(VendorMaterialMappingDetailsID: any) {
    // localStorage.setItem("vendorMaterialMappingDetailsID", VendorMaterialMappingDetailsID.toString());
    // Navigate
    this.router.navigateByUrl('/admin/Vendor/vendorDocument');
  }

  toMaterialDetails(VendorMaterialMappingDetailsID: number) {
    this.router.navigateByUrl('/admin/Vendor/materialDetail');
  }
}
