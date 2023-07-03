export class productModel {
  //fields
  UUID: number | undefined;
  name: string | undefined;
  date_created: string | undefined;
  date_updated: string | undefined;
  image_name: string | undefined;
  category_id: number;
  brand_id: number;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.image_name = json.image_name;
    this.category_id = json.category_id;
    this.brand_id = json.brand_id;
  }

  //validate fields
  validate(): boolean {
    if (!this.UUID) return false;
    if (!this.name) return false;
    if (!this.date_created) return false;
    if (!this.date_updated) return false;
    if (!this.category_id) return false;
    if (!this.brand_id) return false;
    return true;
  }
}
