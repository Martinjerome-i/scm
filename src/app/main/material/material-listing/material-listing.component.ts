import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MaterialListingService } from './service/material-listing.service';
import {materialCommonInterface} from "../../common-interface/common-interface";
import {MaterialVendorListService} from "../material-vendor-list/service/material-vendor-list.service";
import {VendorMaterialService} from "../../common-services/vendor-material/vendor-material.service";
import {MaterialMarketPriceComponent} from "../material-market-price/material-market-price.component";


@Component({
  selector: 'app-material-listing',
  standalone: true,
  imports: [NgFor,MatTabsModule,MatPaginatorModule,MatExpansionModule,MatIconModule,MatMenuModule,MatButtonModule,MatDialogModule],
  templateUrl: './material-listing.component.html',
  styleUrls: ['./material-listing.component.css']
})

export class MaterialListingComponent{
  materialList:materialCommonInterface []= [];
  materialListJson = [
    {
      "MaterialID" : 1,
      "CASNumber" : "21354165",
      "MaterialTypeID" : 1,
      "MaterialTypeName" : "Box",
      "UnitID" : 1,
      "UnitName": "KSM",
      "Plant" : "ML5",
      "MaterialNumber" : "8374",
      "MaterialDescription": "Box",
      "IsActive": true,
      "LastUpdatedBy": "",
      "LastUpdatedOn": ""
    },
    {
      "MaterialID" : 2,
      "CASNumber" : "7656",
      "MaterialTypeID" : 1,
      "MaterialTypeName" : "Cover",
      "UnitID" : 1,
      "UnitName": "KSM",
      "Plant" : "ML5",
      "MaterialNumber" : "868767",
      "MaterialDescription": "Pack",
      "IsActive": true,
      "LastUpdatedBy": "",
      "LastUpdatedOn": ""
    },
  ];

  constructor(
    private router: Router,
    private vendorMaterialService: VendorMaterialService,
    public dialog:MatDialog,
    ) {
    this.getMaterial();
  }

  async getMaterial(){
    try{
      this.materialList = this.materialListJson.map((item:materialCommonInterface) =>({
          "MaterialID" : item.MaterialID,
          "CASNumber" : item.CASNumber,
          "MaterialTypeID" : item.MaterialTypeID,
          "MaterialTypeName" : item.MaterialTypeName,
          "UnitID" : item.UnitID,
          "UnitName" : item.UnitName,
          "Plant" : item.Plant,
          "MaterialNumber" : item.MaterialNumber,
          "MaterialDescription" : item.MaterialDescription ,
          "IsActive": true,
          "LastUpdatedBy": "",
          "LastUpdatedOn": ""
      }));
    }
    catch(error){
      console.log(error);
    }
  }

  toVendorList(MaterialID: any) {
    localStorage.setItem("materialId", MaterialID.toString());
    // Navigate
    this.router.navigateByUrl('/admin/Materials/vendor');
  }
  openDialog() {
    const dialogRef = this.dialog.open(MaterialMarketPriceComponent, {
      height: '300px',
      width: '596px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
