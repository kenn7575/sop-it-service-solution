export class productStatusModel {
  UUID: number | null | undefined;
  status_name: string | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.status_name = json.status_name;
  }
  validate(): boolean {
    if (!this.status_name) return false;
    return true;
  }
}
