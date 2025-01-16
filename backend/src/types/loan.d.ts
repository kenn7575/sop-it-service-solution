interface ILoanCreateInput {
  loan: {
    user_id: number;
    loan_length: number;
    helpdesk_personel_id: number;
  };
  products: {
    UUID: number;
    withBag: boolean;
    withLock: boolean;
  }[];
  personel_username: string;
  personel_password: string;
}
