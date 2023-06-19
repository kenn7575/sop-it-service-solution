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
}
