export class UserModel {
  constructor(json: any) {
    this.UUID = json.UUID;
    this.username = json.username;
    this.name = json.name;
    this.mail = json.mail;
    this.img_name = json.img_name;
    this.address_id = json.address_id || null;
    this.education_id = json.education_id;
    this.role_id = json.role_id;
    if (json.password) {
      this.password = json.password;
    } else {
      this.password = null;
    }
  }
  //fields
  UUID: number | null | undefined;
  username: string | null | undefined;
  name: string | null | undefined;
  mail: string | null | undefined;
  password?: string | null | undefined;
  img_name: string | null | undefined;
  address_id: number;
  education_id: number;
  role_id: number;

  //validate
  validateUpdate(): boolean {
    return true;
  }
  validateCreate(): boolean {
    return true;
  }
}
