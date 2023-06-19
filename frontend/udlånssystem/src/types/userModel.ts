import type { RoleModel } from "./roleModel";
import type { EducationModel } from "./educationModel";
import type { AddressModel } from "./addressModel";

export class UserModel {
  //fields
  UUID: number;
  username: string;
  name: string;
  mail: string;
  date_created: Date;
  date_updated: Date;
  img_name: string;

  //objects
  address_id: AddressModel | null;
  education_id: EducationModel;
  role_id: RoleModel;
}
