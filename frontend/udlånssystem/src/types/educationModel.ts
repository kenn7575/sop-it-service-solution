export class EducationModel {
  UUID: number;
  name: string;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
  }
}
