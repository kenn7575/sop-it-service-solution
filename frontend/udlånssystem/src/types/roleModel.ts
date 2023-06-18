import type { authorizationLevelModel } from "./authorizationLevelModel";

export class RoleModel {
  //fields
  UUID: number;
  name: string;

  //objects
  authorization_level_id: authorizationLevelModel;
}
