export class categoryModel {
  //fields
  UUID: number;
  name: string;
  category_group_id: number | any;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.category_group_id = json.category_group_id;
  }

  validateUpdate(): boolean {
    return true;
  }
  validateCreate(): boolean {
    return true;
  }
}
