export interface productModel {
  UUID: number;
  name: string;
  brand_id: number;
  category_id: number;
  date_created: string | Date;
  date_updated: string | Date;
  product_id_prefix: string;
  image_name?: string;
  max_loan_time: number;
}
