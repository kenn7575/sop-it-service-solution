import type { categoryModel } from "./categoryModel";
import type { brandModel } from "./brandModel";

export class productModel {
  //fields
  UUID: number;
  name: string;
  date_created: string;
  date_updated: string;
  image_name: string;
  product_id_prefix: string;

  //objects
  category_id: categoryModel;
  brand_id: brandModel;
}
