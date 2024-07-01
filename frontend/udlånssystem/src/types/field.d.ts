interface Field<T extends FieldType = any> {
  label: string;
  binding: keyof T;
  type?: "text" | "number" | "select";
  required?: boolean;
  options?: { UUID: number; name: string }[] | string;
}

type FieldType =
  | brandModel
  | buildingModel
  | cableModel
  | cableCategoryModel
  | cableinLoanModel
  | categoryModel
  | categoryGroupModel
  | itemModel
  | itemInLoanModel
  | loanModel
  | productModel
  | productStatusModel
  | storageLocationModel
  | userModel
  | zoneModel;
