interface itemModel {
  UUID: number;
  date_created: string;
  date_updated: string;
  product_status_id: productStatusModel["UUID"];
  product_id: productModel["UUID"];
  storage_location_id: storageLocationModel["UUID"];
  description: string;
  barcode: string;
}
