import type { categoryModel } from "./categoryModel";
import type { brandModel } from "./brandModel";

export class productModel {
  //fields
  UUID: number | undefined;
  name: string | undefined;
  date_created: string | undefined;
  date_updated: string | undefined;
  image_name: string | undefined;

  //objects
  category_id: categoryModel;
  brand_id: brandModel;

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
  validateImport(): boolean {
    if (this.UUID === undefined || this.UUID === null) return false;
    if (this.name === undefined || this.name === null) return false;
    if (this.date_created === undefined || this.date_created === null)
      return false;
    if (this.date_updated === undefined || this.date_updated === null)
      return false;
    if (this.category_id === undefined || this.category_id === null)
      return false;
    if (this.brand_id === undefined || this.brand_id === null) return false;
    return true;
  }
  validateExport(): boolean {
    if (this.name === undefined || this.name === null) return false;
    if (this.category_id === undefined || this.category_id === null)
      return false;
    if (this.brand_id === undefined || this.brand_id === null) return false;
    return true;
  }
}
