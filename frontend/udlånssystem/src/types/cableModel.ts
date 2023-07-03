export class cableModel {
  //fields
  UUID: number;
  date_created: string;
  date_updated: string;
  name: string;
  amount_total: number;
  amount_lent: number;
  category_id: number;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.name = json.name;
    this.amount_total = json.amount_total;
    this.amount_lent = json.amount_lent;
    this.category_id = json.category_id;
  }
}
