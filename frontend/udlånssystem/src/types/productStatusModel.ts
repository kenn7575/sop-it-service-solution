export class productStatusModel {
  UUID: number | null | undefined;
  name: string | null | undefined;
  status_name: string | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.status_name;
  }
  validate(): boolean {
    if (!this.name) return false;
    return true;
  }
}
