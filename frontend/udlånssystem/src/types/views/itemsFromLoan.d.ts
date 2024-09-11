interface itemsFromLoan {
  UUID: number;
  Oprettet: string;
  'Produkt navn': string;
  Produkt_navn: string;
  Stregkode: string;
  'Produkt status': string;
  Produkt_status: string;
  Returneret?: string | Date;
  loan_id: number;
}
