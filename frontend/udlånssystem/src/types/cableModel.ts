import type { categoryModel } from "./categoryModel";

export class cableModel {
  //fields
  UUID: number;
  date_created: string;
  date_updated: string;
  name: string;
  amount_total: number;
  amount_lent: number;

  //objects
  category_id: categoryModel;
}
