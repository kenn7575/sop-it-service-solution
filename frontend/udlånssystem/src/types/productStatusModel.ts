export class productStatusModel {
  UUID: number;
  status_name: string;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.status_name = json.status_name;
  }
}
