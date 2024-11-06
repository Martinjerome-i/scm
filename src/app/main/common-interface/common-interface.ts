// Common Vendor-Material Interface Based on Vendor-Material Details ID API
export interface vendorMaterialCommonInterface {
  VendorMaterialMappingDetailsID: number,
  MappingID: number,
  VendorID: number,
  CompanyName: string,
  MaterialID: number,
  CASNumber: string,
  MaterialNumber: string,
  MaterialDescription: string,
  QuotedPrice: number,
  LeadTime: number,
  MaterialStatusID: number,
  MaterialStatus: string,
  StatusColorCode: string,
  PaymentTermsID: number,
  PaymentTerms: string,
  AdvancePercentage: number,
  LastUpdatedBy: string,
  LastUpdatedOn: string,
  AccountNumber: string,
  ContactName: string,
  ContactNo: string,
  MaterialTypeID: number,
  MaterialTypeName: string,
  CurrencyID: number,
  CurrencyName: string,
  MarketPrice: number,
  LastSCMOfferPrice: number,
  LastVendorRevisedPrice: number,
  LastNegotiationQuantity: number,
  UnitID: number,
  UnitName: string,
}

// vendorlistingdata common interface(updated by dhaya on 07-03-2024)
export interface VendorData {
  VendorID: number;
  CompanyName: string;
  ContactName: string;
  ContactNo: string;
  VendorStatusID: number;
  VendorStatus: string;
  StatusColorCode: string;
}

// materiallistingData common interface(updated by dhaya on 07-03-2024)
export interface materialData {
  VendorMaterialMappingDetailsID: number;
  CASNumber: number;
  MaterialNumber: string;
  MaterialDescription: string;
  MaterialStatus: string;
  StatusColorCode: string;
  LeadTime: number;
}

//material-add common interface(updated by dhaya on 07-03-2024)
export interface addmaterialvendorData {
  CompanyName: string;
  ContactNo: number;
  PostalCode: number;
}

// Common Material Interface Based on Material Details
export interface materialCommonInterface {
  MaterialID: number,
  CASNumber: string,
  MaterialTypeID: number,
  MaterialTypeName: string,
  UnitID: number,
  UnitName: string,
  Plant: string,
  MaterialNumber: string,
  MaterialDescription: string,
  IsActive: boolean,
  LastUpdatedBy: string,
  LastUpdatedOn: string
}

// Common Vendor Interface Based on Vendor Details
export interface vendorCommonInterface {
  VendorID: number;
  CompanyName: string;
  ContactName: string;
  ContactNo: string;
  VendorStatusID: number;
  VendorStatus: string;
  StatusColorCode: string;
}

// Common Checklist Template Questions Interface
export interface questionTypeCommonInterface {
  QuestionTypeID: number,
  QuestionType: string,
  QuestionTypeDescription: string
}

// Common Checklist Template Questions Options Interface
export interface questionTypeOptionCommonInterface {
  CheckListQuestionID: number,
  QuestionValue: string,
  QuestionOptionDisplayOrder: number,
  IsActive: boolean
}

// Common Payment Terms Interface
export interface paymentTermsCommonInterface {
  MaterialPaymentTermsID: number,
  MaterialPaymentTerms: string,
  Description: string,
  IsActive: boolean
}

export interface checklistTemplateQuestionCommonInterface {
  CheckListQuestionID: number,
  CheckListTemplateID: number,
  QuestionTitle: string,
  QuestionDescription: string,
  QuestionTypeID: number,
  QuestionType: string,
  QuestionDisplayOrder: number,
  IsActive: boolean,
  LastUpdatedBy: string,
  LastUpdatedOn: string,
  Options: checklistTemplateQuestionOptionCommonInterface[]
}

export interface checklistTemplateQuestionOptionCommonInterface {
  QuestionOptionsID: number,
  CheckListQuestionID: number,
  QuestionValue: string,
  QuestionOptionDisplayOrder: number,
  IsActive: boolean,
  LastUpdatedBy: string,
  LastUpdatedOn: string
}
