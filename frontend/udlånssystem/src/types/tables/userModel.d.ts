interface userModel {
  UUID: number;
  username: string;
  mail: string;
  date_created: string | Date;
  date_updated: string | Date;
  img_name?: string;
}
