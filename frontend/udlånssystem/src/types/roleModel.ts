import type { authorizationLevelModel } from "./authorizationLevelModel";

export class RoleModel {
  //fields
  UUID: number;
  name: string;

  //objects
  authorization_level_id: authorizationLevelModel;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.authorization_level_id = json.authorization_level_id;
  }
}
