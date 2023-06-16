import type { RoleModel } from "./role";
import type { EducationModel } from "./education";
import type { AddressModel } from "./address";

export class UserModel {
  //fields
  UUID: number;
  Username: string;
  Name: string;
  Mail: string;
  DateCreated: Date;
  DateUpdated: Date;
  ImageName: string;

  //objects
  Address: AddressModel;
  Education: EducationModel;
  Role: RoleModel;
}
