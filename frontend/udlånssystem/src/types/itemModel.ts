import type { productModel } from "./productModel";
import type { productStatusModel } from "./productStatusModel";
import type { storageLocationModel } from "./storageLocationModel";

export class itemModel {
  //fields
  UUID: number;
  date_created: string;
  date_updated: string;

  //objects
  product_status_id: productStatusModel;
  product_id: productModel;
  storage_location_id: storageLocationModel;
}
