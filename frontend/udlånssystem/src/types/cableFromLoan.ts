export class cableFromLoan {
  UUID: number | null | undefined;
  "Oprettet": string | null | undefined;
  "Kabel navn": number | null | undefined;
  "loan_id": number | null | undefined;
  "Returneret": string | null | undefined;
  "Mængde lånt": number | null | undefined;
  "Mængde returneret": number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this["Oprettet"] = json["Oprettet"];
    this["Kabel navn"] = json["Kabel navn"];
    this.loan_id = json.loan_id;
    this.Returneret = json.Returneret;
    this["Mængde returneret"] = json["Maengde returneret"];
    this["Mængde lånt"] = json["Maengde laant"] - json["Maengde returneret"];
  }
  validate(): boolean {
    if (this.UUID === null || this.UUID === undefined) return false;
    return true;
  }
}
