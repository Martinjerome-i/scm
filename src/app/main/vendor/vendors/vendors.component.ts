import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VendorService } from '../../common-services/vendor-listing/vendor.service';
import { response } from 'express';
import { error } from 'console';
import { NgFor } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {VendorData} from '../../common-interface/common-interface'



@Component({
  selector: 'app-vendors',
  standalone: true,
  imports: [NgFor, MatTabsModule,MatPaginatorModule,MatExpansionModule,MatIconModule,MatMenuModule,MatButtonModule],
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})

export class VendorsComponent {
  vendorList: VendorData [] = [];

  vendorListJson = [
    {
      "VendorID": 1,
      "CompanyName": "Company Name",
      "ContactName": "Suresh",
      "ContactNo": "1234567890",
      "VendorStatusID": 1,
      "VendorStatus": "Pending",
      "StatusColorCode": "",
    },
    {
      "VendorID": 1,
      "CompanyName": "Company Name",
      "ContactName": "Ramesh",
      "ContactNo": "1234567899",
      "VendorStatusID": 1,
      "VendorStatus": "Pending",
      "StatusColorCode": "",
    }
  ]
  constructor(private router: Router, private vendorService: VendorService) {
    // this.getVendor()
    this.vendorList = this.vendorListJson.map((item:VendorData) =>({
      "VendorID": item.VendorID,
      "CompanyName": item.CompanyName,
      "ContactName": item.ContactName,
      "ContactNo": item.ContactNo,
      "VendorStatusID": item.VendorStatusID,
      "VendorStatus": item.VendorStatus,
      "StatusColorCode": item.StatusColorCode,
    }));
  }

  async getVendor(){
    try{
      var token = localStorage.getItem("token");
      var LoginAuditID = localStorage.getItem("LoginAuditID");
      var SecretKey = localStorage.getItem("SecretKey");
      var pageId= localStorage.getItem("PageID");

      const response = await this.vendorService.getVendors(token,LoginAuditID,SecretKey,pageId);

      this.vendorList = response.data.map((item:VendorData) =>({
        "VendorID": item.VendorID,
        "CompanyName": item.CompanyName,
        "ContactName": item.ContactName,
        "ContactNo": item.ContactNo,
        "VendorStatusID": item.VendorStatusID,
        "VendorStatus": item.VendorStatus,
        "StatusColorCode": item.StatusColorCode,
      }));

      console.log(this.vendorList);

    }
    catch(error){
      console.log(error);
    }

  }

  toMaterialList(VendorID: any) {
    localStorage.setItem("vendorId", VendorID.toString());
    // Navigate
    this.router.navigateByUrl('/admin/Vendor/materialList');
  }

  addQuestion(CheckListTemplateID: number) {
    // alert(CheckListTemplateID.toString())
    localStorage.setItem('checkListTemplateID', '1');
    // Navigate to URL
    this.router.navigateByUrl('/admin/CheckListTemplate');
  }
}
