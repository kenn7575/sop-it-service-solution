export class UserModel {
  constructor(json: any) {
    this.UUID = json.UUID;
    this.username = json.username;
    this.name = json.name;
    this.mail = json.mail;
    this.img_name = json.img_name;
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
  education_id: number;
  role_id: number;

  validate(): boolean {
    if (!this.username) {
      console.log("1");
      return false;
    }
    if (!this.name) {
      console.log("2");
      return false;
    }
    // if (!this.mail) {
    //   console.log("3");
    //   return false;
    // }
    if (!this.education_id) {
      console.log("6");
      return false;
    }
    if (!this.role_id) {
      console.log("7");
      return false;
    }
    return true;
  }
}
