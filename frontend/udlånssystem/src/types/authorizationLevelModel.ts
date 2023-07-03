export class authorizationLevelModel {
  UUID: number;
  name: string;
  level: number;

  constructor(json: any) { 
    this.UUID = json.UUID;
    this.name = json.name;
    this.level = json.level;
  }
}
