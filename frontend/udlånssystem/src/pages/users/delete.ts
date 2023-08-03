import axios from "axios";
export async function DeleteUser(id: number) {
  console.log("🚀 ~ file: delete.ts:3 ~ DeleteUser ~ id:", id);
  const { data } = await axios.delete("delete_user.php?UUID=" + id);
  console.log("🚀 ~ file: delete.ts:6 ~ DeleteUser ~ data:", data);
  if (data > 0) {
    return true;
  }
  return false;
}
