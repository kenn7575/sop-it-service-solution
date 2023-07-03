export class buildingModel {
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }
  validate(): boolean {
    if (!this.name) return false;
    return true;
  }
}
