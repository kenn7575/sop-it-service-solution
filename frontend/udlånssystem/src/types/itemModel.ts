import type { productMpdel } from "./productModel";
import type { productStatusModel } from "./productStatusModel";
import type { storageLocationModel } from "./storageLocationModel";

export class itemModel {
  //fields
  UUID: number;
  date_created: string;
  date_updated: string;

  //objects
  product_staus_id: productStatusModel;
  product_id: productMpdel;
  storage_location_id: storageLocationModel;
}
