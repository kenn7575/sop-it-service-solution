import type { buildingModel } from "./buildingModel";

export class zoneModel {
  //fields
  UUID: number;
  name: string;
  floor_lavel: number;

  //object
  building_id: buildingModel;
}
