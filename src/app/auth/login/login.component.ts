import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {LoginServiceService} from "./services/loginservice.service";
import {NgClass} from "@angular/common";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  form!: FormGroup;
  loading = false;
  submitted = false;

  // Initializing LocalStorage
  // localStorage = require('localStorage');

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginServiceService,
   // private alertService: AlertService
  ){
    // console.log("Login service: " + this.localStorage.getItem('token'));
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
       this.submitted = true;

        this.router.navigateByUrl('/admin/Dashboard');
}
}