export class itemsFromLoan {
  UUID: number | null | undefined;
  "Dato oprettet": string | null | undefined;
  "Produkt navn": number | null | undefined;
  "Produkt status": string | null | undefined;
  date_returned: string | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this["Dato oprettet"] = json["Dato oprettet"];
    this["Produkt navn"] = json["Produkt navn"];
    this["Produkt status"] = json["Produkt status"];
    this.date_returned = json.date_returned;
  }
  validate(): boolean {
    if (this.UUID === null || this.UUID === undefined) return false;
    return true;
  }
}
