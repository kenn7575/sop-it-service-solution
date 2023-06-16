import type { AuthorizationLevelModel } from "./authorizationLevel";

export class RoleModel {
  //fields
  UUID: number;
  name: string;

  //objects
  authorization_level: AuthorizationLevelModel;
}
