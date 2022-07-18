import { USERS } from "../../constants";
import { UserList } from "../../components/user-list";

export const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>

      <UserList users={USERS} />
    </div>
  );
};
