export class itemsFromLoan {
  UUID: number | null | undefined;
  "Oprettet": string | null | undefined;
  "Produkt navn": number | null | undefined;
  "Barcode": string | null | undefined;
  "Produkt status": string | null | undefined;
  Returneret: string | null | undefined;
  "loan_id": number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this["Oprettet"] = json["Oprettet"];
    this["Produkt navn"] = json["Produkt navn"];
    this["Barcode"] = json["Barcode"];
    this["Produkt status"] = json["Produkt status"];
    this.Returneret = json.Returneret;
    this.loan_id = json.loan_id;
  }
  validate(): boolean {
    if (this.UUID === null || this.UUID === undefined) return false;
    return true;
  }
}
