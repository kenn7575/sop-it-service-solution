export class AddressModel {
  UUID?: number;
  city?: string;
  address_line_1?: string;
  address_line_2?: string;
  postal_code?: number;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.city = json.city;
    this.address_line_1 = json.address_line_1;
    this.address_line_2 = json.address_line_2;
    this.postal_code = json.postal_code;
  }
  validate(): boolean {
    if (!this.city) return false;
    if (!this.address_line_1) return false;
    if (!this.postal_code) return false;
    return true;
  }
}
