export class categoryModel {
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;
  category_group_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.category_group_id = json.category_group_id;
  }

  validate(): boolean {
    if (!this.name) return false;
    if (!this.category_group_id) return false;
    return true;
  }
}
