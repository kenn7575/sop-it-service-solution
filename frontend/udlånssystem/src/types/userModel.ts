import type { RoleModel } from "./roleModel";
import type { EducationModel } from "./educationModel";
import type { AddressModel } from "./addressModel";

export class UserModel {
  constructor(json: any) {
    this.UUID = json.UUID;
    this.username = json.username;
    this.name = json.name;
    this.mail = json.mail;
    this.img_name = json.img_name;
    this.address_id = json.address_id;
    this.education_id = json.education_id;
    this.role_id = json.role_id;
    if (json?.password) {
      this.password = json.password;
    }
  }
  //fields
  UUID: number | null | undefined;
  username: string | null | undefined;
  name: string | null | undefined;
  mail: string | null | undefined;
  password?: string | null | undefined;
  img_name: string | null | undefined;

  //objects
  address_id: AddressModel | null;
  education_id: EducationModel;
  role_id: RoleModel;

  //validate
  validateUpdate(): boolean {
    return true;
  }
  validateCreate(): boolean {
    return true;
  }
}
