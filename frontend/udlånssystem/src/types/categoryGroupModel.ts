export class categoryGroupModel {
  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;
}
