interface cableinLoanModel {
  UUID: number;
  loan_id: loanModel["UUID"];
  cable_id: cableModel["UUID"];
  amount_lent: number;
  amount_returned: number;
  date_returned?: string | Date;
}
