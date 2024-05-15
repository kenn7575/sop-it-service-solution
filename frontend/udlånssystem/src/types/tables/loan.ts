export interface loanModel {
  UUID: number;
  date_created: string | Date;
  date_updated: string | Date;
  date_of_return?: string;
  location_of_use_id?: number;
  user_id: number;
  helpdesk_personel_id: number;
  selfservice_case_id: number;
  receipt_type_id: number;
  loan_length: number;
}
