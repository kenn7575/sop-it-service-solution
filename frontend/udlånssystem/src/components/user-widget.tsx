import { useContext } from "react";

import { logout } from "@services/login";

import { CurrentUserContext } from "@/App";

export default function UserWidget() {
  const { currentUser: user, setCurrentUser } = useContext(CurrentUserContext);

  if (!user) return null;

  return (
    <div className="flex h-20 w-full items-center justify-between rounded-2xl border-[1px] border-solid border-foreground bg-base-200 px-4 py-[0.8rem]">
      <div className="flex gap-4">
        <div className="flex flex-col justify-evenly">
          <h3 className="text-[1.1rem] font-medium text-foreground">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-[0.9rem] text-foreground2">{user.username}</p>
        </div>
      </div>

      <div className="flex h-full content-start">
        <i
          id="logout"
          onClick={() => logout(setCurrentUser)}
          className="fa-solid fa-arrow-right-from-bracket cursor-pointer"
        />
      </div>
    </div>
  );
}
