export class RoleModel {
  //fields
  UUID: number;
  name: string;
  authorization_level_id: number;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.authorization_level_id = json.authorization_level_id;
  }
}
