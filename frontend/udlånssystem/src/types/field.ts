export interface Field {
  label: string;
  binding: string | number;
  type?: "text" | "number" | "select";
  required?: boolean;
  options?: { UUID: number; name: string }[] | string;
}
