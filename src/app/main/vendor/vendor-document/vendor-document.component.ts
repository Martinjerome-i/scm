import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import { VendorDocumentService } from './service/vendor-document.service';


interface documentData{
  OriginalFileName: string;
  description: string;
  LastUpdatedOn: string;
}




@Component({
  selector: 'app-vendor-document',
  standalone: true,
  imports: [MatPaginatorModule,MatMenuModule,MatIconModule,NgForOf],
  templateUrl: './vendor-document.component.html',
  styleUrl: './vendor-document.component.css'
})
export class VendorDocumentComponent {

  // vendorDocumentList: documentData [] =[];
  vendorDocumentTable: documentData []= [];
  vendorDocumentTableJson = [
    {
      "OriginalFileName": "Testing",
      "description": "Normal File",
      "LastUpdatedOn": "08-03-2024"
    },
    {
      "OriginalFileName": "Uploaded File",
      "description": "Normal Uploaded File",
      "LastUpdatedOn": "08-03-2024"
    }
  ];

  vendorID: number;
  companyName: string;
  contactName: string;
  contactNo: number;
  status: string;
  materialName: string;
  category: string;
  qualificationStatus: string;
  expectedclosingDate: string;
  casNumber: number;
  itemNumber: number;

  constructor(private router: Router, private documentService: VendorDocumentService){
    this.getVendors()
    this.getDocumentdata()
    this.getMaterials()
  }

  async getVendors(){
    try{
      this.companyName= "Company Name";
      this.vendorID= 1;
      this.contactName= "Suresh";
      this.contactNo= 1234567890;
      this.status= "Pending";
    }
    catch(error){
      console.log(error)
    }
  }


  async getDocumentdata(){

    try{
      this.vendorDocumentTable = this.vendorDocumentTableJson.map((item:documentData) =>({
        "OriginalFileName": item.OriginalFileName,
        "description": item.description,
        "LastUpdatedOn": item.LastUpdatedOn
      }));
      console.log(this.vendorDocumentTable)

    }
    catch(error){
      console.log(error)
    }

  }

  async getMaterials(){
      try{
      this.casNumber= 45878;
      this.materialName= "Material Name";
      this.itemNumber = 13242;
      this.expectedclosingDate= "07-03-2024";

      }
      catch(error){
        console.log(error)
      }
  }
}
