export class loanModel {
    UUID: number | undefined | null;
    date_created: string | undefined | null;
    date_updated: string | undefined | null;
    date_of_return: string | undefined | null;
    location_of_use_id: number | undefined | null;
    user_id: number | undefined | null;
    helpdesk_personel_id: number | undefined | null;
    selfservice_case_id: number | undefined | null;
    recipient_type_id: number | undefined | null;
    loan_length: number | undefined | null;

    constructor(json: any) {
        this.UUID = json.UUID;
        this.date_created = json.date_created;
        this.date_updated = json.date_updated;
        this.date_of_return = json.date_of_return;
        this.location_of_use_id = json.location_of_use_id;
        this.user_id = json.user_id;
        this.helpdesk_personel_id = json.helpdesk_personel_id;
        this.selfservice_case_id = json.selfservice_case_id;
        this.recipient_type_id = json.recipient_type_id;
        this.loan_length = json.loan_length;
    }
  
    //validate
    validate(): boolean {
      if (!this.user_id) return false;
      return true;
    }
  }