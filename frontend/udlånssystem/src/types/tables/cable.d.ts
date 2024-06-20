interface cableModel extends defaultModel {
  date_created: string | Date;
  date_updated: string | Date;
  amount_total: number;
  amount_lent: number;

  category_id: cableCategoryModel["UUID"];
}
