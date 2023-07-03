export class storageLocationModel {
  //fields
  UUID: number | null | undefined;
  kabinet: string | null | undefined;
  shelf: string | null | undefined;
  idle_since: string | null | undefined;
  img_name: string | null | undefined;
  date_updated: string | null | undefined;
  zone_id: number | null | undefined;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.kabinet = json.kabinet;
    this.shelf = json.shelf;
    this.idle_since = json.idle_since;
    this.img_name = json.img_name;
    this.date_updated = json.date_updated;
    this.zone_id = json.zone_id;
  }
  validate(): boolean {
    if (!this.kabinet) return false;
    if (!this.shelf) return false;
    if (!this.idle_since) return false;
    if (!this.img_name) return false;
    if (!this.zone_id) return false;
    return true;
  }
}
