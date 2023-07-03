export class cableModel {
  //fields
  UUID: number | null | undefined;
  date_created: string | null | undefined;
  date_updated: string | null | undefined;
  name: string | null | undefined;
  amount_total: number | null | undefined;
  amount_lent: number | null | undefined;
  category_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.name = json.name;
    this.amount_total = json.amount_total;
    this.amount_lent = json.amount_lent;
    this.category_id = json.category_id;
  }
  validate(): boolean {
    if (!this.name) return false;
    if (!this.amount_total) return false;
    if (!this.amount_lent) return false;
    if (!this.category_id) return false;
    return true;
  }
}
