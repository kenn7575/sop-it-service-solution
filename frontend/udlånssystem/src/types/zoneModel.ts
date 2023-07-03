export class zoneModel {
  //fields
  UUID: number | null | undefined;
  name: string | null | undefined;
  floor_lavel: number | null | undefined;
  building_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.floor_lavel = json.floor_lavel;
    this.building_id = json.building_id;
  }
  validate(): boolean {
    if (!this.name) return false;
    if (!this.floor_lavel) return false;
    if (!this.building_id) return false;
    return true;
  }
}
