export class productModel {
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;
  date_created: string | null | undefined;
  date_updated: string | null | undefined;
  image_name: string | null | undefined;
  category_id: number | null | undefined;
  brand_id: number | null | undefined;

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
    if (!this.name) return false;
    if (!this.category_id) return false;
    if (!this.brand_id) return false;
    return true;
  }
}
