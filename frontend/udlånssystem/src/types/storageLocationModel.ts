import type { zoneModel } from "./zoneModel";

export class storageLocationModel {
  //fields
  UUID: number;
  kabinet: string;
  shelf: string;
  idle_since: string;
  img_name: string;
  date_updated: string;

  //objects
  zone_id: zoneModel;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.kabinet = json.kabinet;
    this.shelf = json.shelf;
    this.idle_since = json.idle_since;
    this.img_name = json.img_name;
    this.date_updated = json.date_updated;
    this.zone_id = json.zone_id;
  }
}
