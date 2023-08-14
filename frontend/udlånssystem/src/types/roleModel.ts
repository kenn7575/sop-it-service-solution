export class RoleModel {
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;
  authorization_level_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.authorization_level_id = json.authorization_level_id;
  }
  validate(): boolean {
    if (!this.name) return false;
    if (!this.authorization_level_id) return false;
    return true;
  }
}
