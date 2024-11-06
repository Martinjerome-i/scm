import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../dashboard/dashboard/dashboard.component";
import {
  BusinessRequirementsListingComponent
} from "./business-requirements-listing/business-requirements-listing.component";
import {BusinessRequirementsAddComponent} from "./business-requirements-add/business-requirements-add.component";

const routes: Routes = [
  {
    path: '',
    component: BusinessRequirementsListingComponent,
  },
  {
    path: 'add',
    component: BusinessRequirementsAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRequirementsRoutingModule { }
