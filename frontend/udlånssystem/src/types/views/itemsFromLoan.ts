export interface itemsFromLoan {
  UUID: number;
  Oprettet: string;
  "Produkt navn": string;
  Barcode: string;
  "Produkt status": string;
  Returneret?: string | Date;
  loan_id: number;
}
