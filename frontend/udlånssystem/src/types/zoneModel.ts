import type { buildingModel } from "./buildingModel";

export class zoneModel {
  //fields
  UUID: number;
  name: string;
  floor_lavel: number;

  //object
  building_id: buildingModel;

  constructor(json: any) {
    this.UUID = json.UUID;
    this.name = json.name;
    this.floor_lavel = json.floor_lavel;
    this.building_id = json.building_id;
  }
}
