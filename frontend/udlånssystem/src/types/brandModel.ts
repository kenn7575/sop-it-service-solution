export class brandModel {
  UUID: number | undefined | null;
  name: string | undefined | null;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }

  //validate
  validateUpdate(): boolean {
    if (this.UUID === undefined || this.UUID === null) return false;
    if (this.name === undefined || this.name === null) return false;
    return true;
  }
  validateCreate(): boolean {
    if (this.name === undefined || this.name === null || this.name === "")
      return false;
    return true;
  }
}
