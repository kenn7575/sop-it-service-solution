function validateUser(user1, user2) {
  if (!user2) {
    //user
    if (!user1.username) return false;
    if (!user1.password) return false;
    if (!user1.name) return false;
    if (!user1.mail) return false;
    if (user1.is_ad_user === undefined || user1.is_ad_user === null)
      return false;
    if (!user1.date_created) return false;
    if (!user1.date_updated) return false;
    if (!user1.img_name) return false;

    //education
    if (!user1.education_id) {
      return false;
    } else {
      if (!user1.education_id.name) return false;
      if (!user1.education_id.UUID) return false;
    }

    //role
    if (!user1.role_id) {
      return false;
    } else {
      if (!user1.role_id.name) return false;
      if (!user1.role_id.UUID) return false;
      if (!user1.role_id.authorization_level_id) {
        return false;
      } else {
        if (!user1.role_id.authorization_level_id.name) return false;
        if (!user1.role_id.authorization_level_id.UUID) return false;
        if (!user1.role_id.authorization_level_id.level) return false;
      }
    }
  } else {
    //compare the two users
    if (user1.UUID !== user2.UUID) return false;
    if (user1.username !== user2.username) return false;
    if (user1.password !== user2.password) return false;
    if (user1.name !== user2.name) return false;
    if (user1.mail !== user2.mail) return false;
    if (user1.is_ad_user !== user2.is_ad_user) return false;
    if (user1.date_created !== user2.date_created) return false;
    if (user1.date_updated !== user2.date_updated) return false;
    if (user1.img_name !== user2.img_name) return false;

    //education
    if (!user1.education_id || !user2.education_id) {
      return false;
    } else {
      if (user1.education_id.UUID !== user2.education_id.UUID) return false;
    }

    //role
    if (!user1.role_id || !user2.role_id) {
      return false;
    } else {
      if (user1.role_id.UUID !== user2.role_id.UUID) return false;
      if (user1.role_id.name !== user2.role_id.name) return false;
      if (
        !user1.role_id.authorization_level_id ||
        !user2.role_id.authorization_level_id
      ) {
        return false;
      } else {
        if (
          user1.role_id.authorization_level_id.UUID !==
          user2.role_id.authorization_level_id.UUID
        )
          return false;
        if (
          user1.role_id.authorization_level_id.name !==
          user2.role_id.authorization_level_id.name
        )
          return false;
        if (
          user1.role_id.authorization_level_id.level !==
          user2.role_id.authorization_level_id.level
        )
          return false;
      }
    }

    //address
    if (!user1.address_id || !user2.address_id) {
      return false;
    } else {
      if (user1.address_id.UUID !== user2.address_id.UUID) return false;
      if (user1.address_id.city !== user2.address_id.city) return false;
      if (user1.address_id.postal_code !== user2.address_id.postal_code)
        return false;
      if (user1.address_id.address_line_1 !== user2.address_id.address_line_1)
        return false;
      if (user1.address_id.address_line_2 !== user2.address_id.address_line_2)
        return false;
      if (user1.address_id.date_created !== user2.address_id.date_created)
        return false;
      if (user1.address_id.date_updated !== user2.address_id.date_updated)
        return false;
    }
  }
}
