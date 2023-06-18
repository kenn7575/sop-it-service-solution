import type { categoryGroupModel } from "./categoryGroupModel";

export class categoryModel {
  //fields
  UUID: number;
  name: string;

  //objects
  category_group_id: categoryGroupModel;
}
