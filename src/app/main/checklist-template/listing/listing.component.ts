import { Component } from '@angular/core';
import {MatAccordion, MatExpansionPanel} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatPaginator} from "@angular/material/paginator";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {ChecklistTemplateService} from "../../common-services/checklist-template/checklist-template.service";

interface ChecklistTemplateData {
  CheckListTemplateID: number,
  TemplateCode: string,
  TemplateName: string,
  TemplateDescription: string,
  IsActive: boolean,
  LastUpdatedBy: string,
  LastUpdatedOn: string,
}

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatPaginator,
    MatTab,
    MatTabGroup,
    NgForOf,
    MatMenuTrigger,
    NgIf
  ],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  checkLisTemplateList: ChecklistTemplateData[] = [];
  checkLisTemplateListJson = [
    {
      "CheckListTemplateID": 1,
      "TemplateCode": "65656",
      "TemplateName": "SCM Vendor",
      "TemplateDescription": "",
      "IsActive": true,
      "LastUpdatedBy": "SCM",
      "LastUpdatedOn": "09-03-2024",
    }
  ];
  checkListType: any = "0"

  constructor(private router: Router, private checklistTemplateService: ChecklistTemplateService) {
    this.getChecklist()
    this.checkListType = localStorage.getItem('checkListTemplateID')
  }

  async getChecklist(){
    try{
      this.checkLisTemplateList = this.checkLisTemplateListJson.map((item:ChecklistTemplateData) =>({
        "CheckListTemplateID": item.CheckListTemplateID,
        "TemplateCode": item.TemplateCode,
        "TemplateName": item.TemplateName,
        "TemplateDescription": item.TemplateDescription,
        "IsActive": item.IsActive,
        "LastUpdatedBy": item.LastUpdatedBy,
        "LastUpdatedOn": item.LastUpdatedOn,
      }));

      console.log(this.checkLisTemplateList);

    }
    catch(error){
      console.log(error);
    }

  }

  onEdit(CheckListTemplateID: number) {
    localStorage.setItem('checkListTemplateID', CheckListTemplateID.toString());
    // Navigate to URL
    this.router.navigateByUrl('/admin/CheckListTemplate/add');
  }

  onDelete(CheckListTemplateID: number) {
    //
  }

  addChecklist() {
    localStorage.setItem('checkListTemplateID', '0');
    // Navigate to URL
    this.router.navigateByUrl('/admin/CheckListTemplate/add');
  }

  addQuestion(CheckListTemplateID: number) {
    localStorage.setItem('checkListTemplateID', CheckListTemplateID.toString());
    // Navigate to URL
    this.router.navigateByUrl('/admin/CheckListTemplate/question');
  }
}
