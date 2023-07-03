export class buildingModel {
  //fields
  UUID: number;
  name: string;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }
}
