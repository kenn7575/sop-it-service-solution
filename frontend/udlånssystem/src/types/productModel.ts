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
