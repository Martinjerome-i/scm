import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MaterialDialogService} from "../../material-dialog/service/material-dialog.service";
import {VendorMaterialService} from "../../common-services/vendor-material/vendor-material.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import swal from "sweetalert";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-material-market-price',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './material-market-price.component.html',
  styleUrl: './material-market-price.component.css'
})
export class MaterialMarketPriceComponent implements OnInit {

  myForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder:FormBuilder,
    public dialog:MatDialog,
    private router: Router,
    private vendorMaterialService: VendorMaterialService
  ){
    // this.getMaterial()
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      uploadDocument: ['', Validators.required],
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  // convenience getter for easy access to form fields
  get f() { return this.myForm.controls; }

  uploadMultiFile = async (event: any)  => {
    try{
      // Use type assertion to tell TypeScript that 'event.target' is an input element
      const inputElement = event.target as HTMLInputElement;

      // Check if 'inputElement.files' is not null or undefined
      if (inputElement.files) {
        const files: FileList = inputElement.files;
        console.log(files[0]);

        const formData = new FormData();

        formData.append('UploadFile', files[0]);

        return formData;
      }
    else{
      return null;
    }

    }
    catch (error) {
      console.error(error);
      return null;

    } finally {
      // Always set loading to false
      this.loading = false;
    }

  }

  async onSubmit() {
    this.submitted = true;
    const token = localStorage.getItem("token");
    const loginAuditID = localStorage.getItem("LoginAuditID");
    const secretKey = localStorage.getItem("SecretKey");
    var pageId = localStorage.getItem("PageID");

    this.loading = true;

    try {

      swal("Uploaded!", "Market Price Uploaded Successfully!", "success");
      // Navigate
      this.closeDialog();

    if (FormData) {
    
    // Assuming uploadRequest is defined somewhere
    const uploadResponse = await this.vendorMaterialService.uploadMarketPrice(
      FormData,
      loginAuditID,
      secretKey,
      pageId,
      token
    );
    const uploadData = uploadResponse.data;
    console.log(uploadData);
    }
   

  
    } 
  catch (error) {
      console.error(error);
      // Handle errors or use an alert service
    } finally {
      // Always set loading to false
      this.loading = false;
    }
  }
}
