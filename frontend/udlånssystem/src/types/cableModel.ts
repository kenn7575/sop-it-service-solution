export class cableModel {
  //fields
  UUID: number | null | undefined;
  Oprettet: string | null | undefined;
  Opdateret: string | null | undefined;
  Navn: string | null | undefined;
  Total: number | null | undefined;
  Tilgaengeligt: number | null | undefined;
  Kategori: number | null | undefined;
  Lånt: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.Oprettet = json.date_created;
    this.Opdateret = json.date_updated;
    this.Navn = json.name;
    this.Total = json.amount_total;
    this.Tilgaengeligt = json.amount_lent;
    this.Kategori = json.category_id;
    this.Lånt = 0;
  }
  validate(): boolean {
    if (!this.Navn) return false;
    if (!this.Total) return false;
    if (!this.Tilgaengeligt) return false;
    if (!this.Kategori) return false;
    return true;
  }
}
