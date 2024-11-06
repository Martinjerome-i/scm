import {Component, OnInit} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {Router} from "@angular/router";
import {VendorMaterialService} from "../../common-services/vendor-material/vendor-material.service";
import {vendorMaterialCommonInterface} from "../../common-interface/common-interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-material-vendor-list',
  standalone: true,
  imports: [MatTabsModule, MatPaginatorModule, MatExpansionModule, MatIconModule, MatMenuModule, MatButtonModule, NgForOf],
  templateUrl: './material-vendor-list.component.html',
  styleUrl: './material-vendor-list.component.css'
})
export class MaterialVendorListComponent implements OnInit {

  MaterialDescription: string = ""
  MaterialNumber: string = ""
  MaterialTypeName: string = ""
  CASNumber: string = ""
  UnitName: string = ""

  vendorMaterialList: vendorMaterialCommonInterface [] = [];
  vendorMaterialListJson = [
    {
      "VendorMaterialMappingDetailsID": 1,
      "MappingID": 1,
      "VendorID": 1,
      "CompanyName": "CompanyName",
      "MaterialID": 1,
      "CASNumber": "6568",
      "MaterialNumber": "677676",
      "MaterialDescription": "Box",
      "QuotedPrice": 100,
      "LeadTime": 24,
      "MaterialStatusID": 1,
      "MaterialStatus": "Pending",
      "StatusColorCode": "",
      "PaymentTermsID": 1,
      "PaymentTerms": "Partial",
      "AdvancePercentage": 50,
      "LastUpdatedBy": "SCM",
      "LastUpdatedOn": "08-03-2024",
      "AccountNumber": "65656",
      "ContactName": "Suresh",
      "ContactNo": "1234567890",
      "MaterialTypeID": 1,
      "MaterialTypeName": "KSM",
      "CurrencyID": 1,
      "CurrencyName": "INR",
      "MarketPrice": 60,
      "LastSCMOfferPrice": 50,
      "LastVendorRevisedPrice": 58,
      "LastNegotiationQuantity": 10,
      "UnitID": 1,
      "UnitName": "Box"
    },
    {
      "VendorMaterialMappingDetailsID": 1,
      "MappingID": 1,
      "VendorID": 1,
      "CompanyName": "CompanyName",
      "MaterialID": 1,
      "CASNumber": "878",
      "MaterialNumber": "8796789",
      "MaterialDescription": "Pack",
      "QuotedPrice": 100,
      "LeadTime": 24,
      "MaterialStatusID": 1,
      "MaterialStatus": "Pending",
      "StatusColorCode": "",
      "PaymentTermsID": 1,
      "PaymentTerms": "Partial",
      "AdvancePercentage": 50,
      "LastUpdatedBy": "SCM",
      "LastUpdatedOn": "08-03-2024",
      "AccountNumber": "65656",
      "ContactName": "Ramesh",
      "ContactNo": "1234567899",
      "MaterialTypeID": 1,
      "MaterialTypeName": "KSM",
      "CurrencyID": 1,
      "CurrencyName": "INR",
      "MarketPrice": 60,
      "LastSCMOfferPrice": 50,
      "LastVendorRevisedPrice": 58,
      "LastNegotiationQuantity": 10,
      "UnitID": 1,
      "UnitName": "Box"
    }
  ];

  constructor(private router: Router,private vendorMaterialService: VendorMaterialService) {
    this.getMaterialsData()
    this.getVendorList()
  }

  async getMaterialsData() {
    try {
      this.MaterialDescription = "Box"
      this.MaterialNumber = "65675"
      this.MaterialTypeName = "KSM"
      this.CASNumber = "4365467"
      this.UnitName = "KGS"
    }

    catch(error){
      console.log(error);
    }
  }


  async getVendorList() {
    try {

      this.vendorMaterialList = this.vendorMaterialListJson.map((item:vendorMaterialCommonInterface) =>({
        "VendorMaterialMappingDetailsID": item.VendorMaterialMappingDetailsID,
        "MappingID": item.MappingID,
        "VendorID": item.VendorID,
        "CompanyName": item.CompanyName,
        "MaterialID": item.MaterialID,
        "CASNumber": item.CASNumber,
        "MaterialNumber": item.MaterialNumber,
        "MaterialDescription": item.MaterialDescription,
        "QuotedPrice": item.QuotedPrice,
        "LeadTime": item.LeadTime,
        "MaterialStatusID": item.MaterialStatusID,
        "MaterialStatus": item.MaterialStatus,
        "StatusColorCode": item.StatusColorCode,
        "PaymentTermsID": item.PaymentTermsID,
        "PaymentTerms": item.PaymentTerms,
        "AdvancePercentage": item.AdvancePercentage,
        "LastUpdatedBy": item.LastUpdatedBy,
        "LastUpdatedOn": item.LastUpdatedOn,
        "AccountNumber": item.AccountNumber,
        "ContactName": item.ContactName,
        "ContactNo": item.ContactNo,
        "MaterialTypeID": item.MaterialTypeID,
        "MaterialTypeName": item.MaterialTypeName,
        "CurrencyID": item.CurrencyID,
        "CurrencyName": item.CurrencyName,
        "MarketPrice": item.MarketPrice,
        "LastSCMOfferPrice": item.LastSCMOfferPrice,
        "LastVendorRevisedPrice": item.LastVendorRevisedPrice,
        "LastNegotiationQuantity": item.LastNegotiationQuantity,
        "UnitID": item.UnitID,
        "UnitName": item.UnitName
      }));
      console.log(this.vendorMaterialList);
    }

    catch(error){
      console.log(error);
    }
  }

  ngOnInit(): void {
    //
  }

  toNegotiationList(VendorMaterialMappingDetailsID: any) {
    localStorage.setItem("vendorMaterialMappingDetailsID", VendorMaterialMappingDetailsID.toString());
    // Navigate
    this.router.navigateByUrl('/admin/Materials/vendorNegotiationListing');
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
