import type { categoryGroupModel } from "./categoryGroupModel";

export class categoryModel {
  //fields
  UUID: number;
  name: string;

  //objects
  category_group_id: categoryGroupModel;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.category_group_id = json.category_group_id;
  }
}
