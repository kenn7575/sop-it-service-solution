export default function toggleEditMode(personel, user, editMode) {
  //check if user has the right authorization level to edit this user
  if (
    personel.role_id.authorization_level_id <=
    user.role_id.authorization_level_id
  ) {
    alert(
      `Du skal have højre rettighedder for at redigere denne bruger. Du har level ${personel.role_id.authorization_level_id} rettighedder og brugeren har level ${user.role_id.authorization_level_id}.`
    );
    return;
  }
  if (editMode) {
    return false;
  } else {
    return true;
  }
}
