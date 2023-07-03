export class brandModel {
  UUID: number | undefined | null;
  name: string | undefined | null;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }

  //validate
  validate(): boolean {
    if (!this.name) return false;
    return true;
  }
}
