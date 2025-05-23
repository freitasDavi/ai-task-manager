import { TasksList } from "~/features/tasks/tasks-list";
import { turso } from "~/turso";

export async function loader() {
  // turso.execute(
  //   "INSERT INTO users (email, name, password_hash) VALUES ('davi@gmail.com', 'Davi', '123456')"
  // );

  return {};
}

export default function () {
  return <TasksList />;
}
