import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {ActivatedRoute, Router} from "@angular/router";
import {ChecklistTemplateService} from "../../common-services/checklist-template/checklist-template.service";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {questionTypeCommonInterface, questionTypeOptionCommonInterface} from "../../common-interface/common-interface";
import swal from "sweetalert";

@Component({
  selector: 'app-question-add',
  standalone: true,
  imports: [
    FormsModule,
    MatGridList,
    MatGridTile,
    ReactiveFormsModule,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './question-add.component.html',
  styleUrl: './question-add.component.css'
})
export class QuestionAddComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;

  // negotiationStatusLastData: any;

  questionTypeOptionList: questionTypeOptionCommonInterface [] = [];

  questionTypeList: questionTypeCommonInterface [] = [];
  questionTypeSelect: any;

  currentSelectedQuestionType: number = 0;
  currentSelectedQuestionId: any = "0";

  date: Date;

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private checklistTemplateService: ChecklistTemplateService,
  ){
    this.getData()
  }

  async getData(){
    var token = localStorage.getItem("token");
    var LoginAuditID = localStorage.getItem("LoginAuditID");
    var SecretKey = localStorage.getItem("SecretKey");
    var pageId= localStorage.getItem("PageID");

    try {
      const response = await this.checklistTemplateService.getQuestionTypeList(token, LoginAuditID, SecretKey, pageId);
      this.questionTypeList = response.data.map((item:questionTypeCommonInterface) =>({
        "QuestionTypeID": item.QuestionTypeID,
        "QuestionType": item.QuestionType,
        "QuestionTypeDescription": item.QuestionTypeDescription,
      }));
      console.log(this.questionTypeList)
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      QuestionTitle: ['', Validators.required],
      QuestionDescription: ['', Validators.required],
      AnswerBox: ['', Validators.required],
      Paragraph: ['', Validators.required],
      Checkbox: ['', Validators.required],
      RadioButton: ['', Validators.required],
      FileType: ['', Validators.required],
      DateType: ['', Validators.required],
      DateTimeType: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    console.log("working");
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    // if (this.form.invalid) {
    //   return;
    // }

    var token = localStorage.getItem("token");
    var LoginAuditID = localStorage.getItem("LoginAuditID");
    var SecretKey = localStorage.getItem("SecretKey");
    var pageId = localStorage.getItem("PageID");
    var checkListTemplateID = localStorage.getItem("checkListTemplateID");

    this.loading = true;

    console.log(this.currentSelectedQuestionType == 3)
    console.log(this.questionTypeOptionList.length == 0)

    if (this.currentSelectedQuestionId == "0") {
      var data = {
        "CheckListTemplateID": checkListTemplateID,
        "QuestionTitle": this.f['QuestionTitle'].value,
        "QuestionDescription": "",
        "QuestionTypeID": this.currentSelectedQuestionType,
        "QuestionDisplayOrder": "1",
        "IsActive": true
      };

      var addVendor = {
        "DataRequest": {
          "LoginAuditID": LoginAuditID,
          "SecretKey": SecretKey,
          "PageID": pageId
        },
        "CheckListQuestions": [
          data
        ],
      }

      console.log(this.questionTypeOptionList);
      this.checklistTemplateService.saveChecklistQuestion(addVendor, token, "0")
        .then(response => {
          localStorage.setItem("checkListQuestionID", response.data[0]['CheckListQuestionID']);
          this.currentSelectedQuestionId = response.data[0]['CheckListQuestionID']
          swal("Added!", "Question Added Successfully!", "success");
        })
        .catch((error: any) => {
          // Handle login errors
          // this.alertService.error(error);
          console.log(error); // Remove this line after implementing alertService
          this.loading = false;
        })
        .finally(() => {
          // Always set loading to false
          this.loading = false;
        });
    }
  }

  setQuestionType() {
    this.currentSelectedQuestionType = this.questionTypeSelect;
  }

  setOption(optionType: number) {

    var token = localStorage.getItem("token");
    var LoginAuditID = localStorage.getItem("LoginAuditID");
    var SecretKey = localStorage.getItem("SecretKey");
    var pageId = localStorage.getItem("PageID");
    this.currentSelectedQuestionId = localStorage.getItem("checkListQuestionID");

    this.questionTypeOptionList.push(
      {
        "CheckListQuestionID": Number(this.currentSelectedQuestionId),
        "QuestionValue": optionType == 3 ? this.f['RadioButton'].value : this.f['Checkbox'].value,
        "QuestionOptionDisplayOrder": 1,
        "IsActive": true
      }
    )
    if (optionType == 3) {
      this.f['Checkbox'].setValue("")
    } else {
      this.f['RadioButton'].setValue("")
    }
    console.log(this.questionTypeOptionList);
    var addVendor = {
      "DataRequest": {
        "LoginAuditID": LoginAuditID,
        "SecretKey": SecretKey,
        "PageID": pageId
      },
      "QuestionOptions": [
        {
          "CheckListQuestionID": Number(this.currentSelectedQuestionId),
          "QuestionValue": optionType == 3 ? this.f['RadioButton'].value : this.f['Checkbox'].value,
          "QuestionOptionDisplayOrder": 1,
          "IsActive": true
        }
      ],
    }

    console.log(addVendor);
    this.checklistTemplateService.saveChecklistQuestionOption(addVendor, token, "0")
      .then(response => {
        swal("Added!", "Option Added Successfully!", "success");
      })
      .catch((error: any) => {
        // Handle login errors
        // this.alertService.error(error);
        console.log(error); // Remove this line after implementing alertService
        this.loading = false;
      })
      .finally(() => {
        // Always set loading to false
        this.loading = false;
      });
  }
}
