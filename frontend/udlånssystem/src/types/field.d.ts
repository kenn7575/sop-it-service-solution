interface Field<T extends FieldType = any> {
  label: string;
  binding: keyof T;
  type?: 'text' | 'number' | 'select';
  required?: boolean;
  options?: { UUID: number; name: string }[] | string;
  disabled?: boolean;
}

type FieldType =
  | brandModel
  | buildingModel
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
