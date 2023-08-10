export class loanModel {
  UUID: number;
  date_created: string;
  date_updated: string;
  date_of_return: string | null;
  location_of_use_id: number | null;
  user_id: number;
  helpdesk_personel_id: number;
  selfservice_case_id: number;
  receipt_type_id: number;
  loan_length: number;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.date_created = json.date_created;
    this.date_updated = json.date_updated;
    this.date_of_return = json.date_of_return ?? null;
    this.location_of_use_id = json.location_of_use_id ?? null;
    this.user_id = json.user_id;
    this.helpdesk_personel_id = json.helpdesk_personel_id;
    this.selfservice_case_id = json.selfservice_case_id;
    this.receipt_type_id = json.receipt_type_id;
    this.loan_length = json.loan_length;
  }
  validate(): boolean {
    return true;
  }
}
