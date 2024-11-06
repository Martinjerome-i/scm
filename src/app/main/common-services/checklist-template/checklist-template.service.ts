import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ChecklistTemplateService {

  private apiUrl: string = 'http://scmapi.corestructuralconsultants.com';
  private checklistTemplateListURL: string = this.apiUrl + "/CheckListTemplate/v1/GetCheckListTemplate";
  private addChecklistTemplateListURL: string = this.apiUrl + "/CheckListTemplate/v1/AddCheckListTemplate";
  private updateChecklistTemplateListURL: string = this.apiUrl + "/CheckListTemplate/v1/UpdateCheckListTemplate";
  private defaultChecklistTemplateListURL: string = this.apiUrl + "/CheckListTemplate/v1/GetCheckListTemplate/ID=";

  // Question Type List
  private getQuestionType: string = this.apiUrl + "/CheckListTemplate/v1/GetQuestionType";

  // CRUD Checklist Question List
  private listQuestionData: string = this.apiUrl + "/CheckListQuestion/v1/GetCheckListQuestion/Template=";
  private addQuestionData: string = this.apiUrl + "/CheckListQuestion/v1/AddCheckListQuestion";
  private updateQuestionData: string = this.apiUrl + "/CheckListQuestion/v1/UpdateCheckListQuestion";

  // Add & Update Checklist Question Option List
  private addQuestionOptionData: string = this.apiUrl + "/CheckListQuestionOption/v1/AddCheckListQuestionOption";
  private updateQuestionOptionData: string = this.apiUrl + "/CheckListQuestionOption/v1/UpdateCheckListQuestionOption";

  constructor() { }

  // Save / Update Checklist Template Based on Template ID ( 0 = Save, Else = Update )
  saveChecklist(data: any, token: any, checkListTemplateID: any){
    if (checkListTemplateID == "0") {
      return axios.put(this.addChecklistTemplateListURL, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    } else {
      return axios.post(this.updateChecklistTemplateListURL, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    }
  }

  // Save / Update Checklist Template Question Based on Template Question ID ( 0 = Save, Else = Update )
  saveChecklistQuestion(data: any, token: any, checkListTemplateQuestionID: any){
    if (checkListTemplateQuestionID == "0") {
      return axios.put(this.addQuestionData, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    } else {
      return axios.post(this.updateQuestionData, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    }
  }

  // Save / Update Checklist Template Question Options Based on Template Question Options ID ( 0 = Save, Else = Update )
  saveChecklistQuestionOption(data: any, token: any, checkListTemplateQuestionID: any){
    if (checkListTemplateQuestionID == "0") {
      return axios.put(this.addQuestionOptionData, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    } else {
      return axios.post(this.updateQuestionOptionData, data, {
        headers:{
          "Authorization":"Bearer " + token
        }
      });
    }
  }

  // Get Specific Checklist Template Data Based on Checklist Template ID
  defaultChecklist(token: any, LoginAuditID: any, SecretKey: any, pageId: any, checkListTemplateID: any){
    var data = {
      "LoginAuditID": LoginAuditID,
      "SecretKey": SecretKey,
      "PageID": pageId
    }
    return axios.post(this.defaultChecklistTemplateListURL+checkListTemplateID, data, {
      headers:{
        "Authorization":"Bearer " + token
      }
    });
  }

  // Get All Checklist Template List
  getChecklistTemplateList(token: any, LoginAuditID: any, SecretKey: any, pageId: any){
    var data = {
      "LoginAuditID": LoginAuditID,
      "SecretKey": SecretKey,
      "PageID": pageId
    }
    return axios.post(this.checklistTemplateListURL,data,{
      headers:{
        "Authorization": "Bearer " + token
      },
    });
  }

  // Get All Checklist Template List
  getChecklistTemplateQuestionList(token: any, LoginAuditID: any, SecretKey: any, pageId: any, templateId: any){
    var data = {
      "LoginAuditID": LoginAuditID,
      "SecretKey": SecretKey,
      "PageID": pageId
    }
    return axios.post(this.listQuestionData+templateId,data,{
      headers:{
        "Authorization": "Bearer " + token
      },
    });
  }

  // Get All Checklist Template Question List
  getQuestionTypeList(token: any, LoginAuditID: any, SecretKey: any, pageId: any){
    var data = {
      "LoginAuditID": LoginAuditID,
      "SecretKey": SecretKey,
      "PageID": pageId
    }
    return axios.post(this.getQuestionType,data,{
      headers:{
        "Authorization": "Bearer " + token
      },
    });
  }

  // Get Specific Checklist Template Question Data Based on Checklist Template Question ID


  // Get Specific Checklist Template Question Option Data Based on Checklist Template Question Option ID


}
