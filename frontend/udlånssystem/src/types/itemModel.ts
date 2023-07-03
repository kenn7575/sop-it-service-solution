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

  constructor(json: any) {
    this.UUID = json.UUID;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.product_status_id = json.product_status_id;
    this.product_id = json.product_id;
    this.storage_location_id = json.storage_location_id;
  }
}
