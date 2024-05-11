export interface Field {
  type: "text" | "number" | "select";
  binding: string | number;
  label: string;
  required?: boolean;
  options?: { UUID: number; name: string }[] | string;
}
