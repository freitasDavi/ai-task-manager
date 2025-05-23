import { turso } from "~/turso";
import type { Route } from "./+types/tasks";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";

interface User {
  id: number;
  email: string;
  password_hash: string;
  name: string;
  created_at: string;
  updated_at: string;
  last_login_at: string | null;
  is_active: number;
}

interface LoaderData {
  users: User[];
}

export async function loader() {
  const response = await turso.execute("SELECT * FROM USERS");

  return {
    users: response.rows,
  };
}

export default function ({ loaderData }: { loaderData: LoaderData }) {
  const { users } = loaderData;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Login</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.is_active ? "default" : "destructive"}>
                  {user.is_active ? "Active" : "Inactive"}
                </Badge>
              </TableCell>
              <TableCell>
                {user.last_login_at
                  ? new Date(user.last_login_at).toLocaleString()
                  : "Never"}
              </TableCell>
              <TableCell>
                {new Date(user.created_at).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
