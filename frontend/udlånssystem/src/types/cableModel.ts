export class cableModel {
  //fields
  UUID: number | null | undefined;
  Navn: string | null | undefined;
  Total: number | null | undefined;
  Tilgaengelige: number | null | undefined;
  Kategori: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.Navn = json.name;
    this.Total = json.amount_total;
    this.Tilgaengelige = json.amount_lent;
    this.Kategori = json.category_id;
  }
  validate(): boolean {
    if (!this.Navn) return false;
    if (!this.Total) return false;
    if (!this.Tilgaengelige) return false;
    if (!this.Kategori) return false;
    return true;
  }
}
