export class itemModel {
  //fields
  UUID: number | null | undefined;
  date_created: string | null | undefined;
  date_updated: string | null | undefined;
  product_status_id: number | null | undefined;
  product_id: number | null | undefined;
  storage_location_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.product_status_id = json.product_status_id;
    this.product_id = json.product_id;
    this.storage_location_id = json.storage_location_id;
  }
  validate(): boolean {
    if (!this.product_status_id) return false;
    if (!this.product_id) return false;
    return true;
  }
}
