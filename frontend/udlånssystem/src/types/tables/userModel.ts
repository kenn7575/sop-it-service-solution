export interface UserModel {
  UUID: number;
  username: string;
  name: string;
  mail: string;
  password?: string;
  img_name?: string;
  education_id: number;
  role_id: number;
}
