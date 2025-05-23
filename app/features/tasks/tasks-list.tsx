import { useLoaderData } from "react-router";
import type { loader } from "~/routes/tasks";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";

type TaskStatus = "todo" | "in_progress" | "review" | "done";

function getStatusBadge(status: TaskStatus) {
  const variants = {
    todo: "secondary",
    in_progress: "default",
    review: "outline",
    done: "destructive",
  } as const;

  const labels = {
    todo: "To Do",
    in_progress: "In Progress",
    review: "In Review",
    done: "Done",
  } as const;

  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}

export function TasksList() {
  const { tasks } = useLoaderData<typeof loader>();

  return (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Estimated Time</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.title}</TableCell>
              <TableCell className="max-w-[400px] truncate">
                {task.description}
              </TableCell>
              <TableCell>{task.estimated_time}</TableCell>
              <TableCell>
                {new Date(task.created_at).toLocaleDateString()}
              </TableCell>
              <TableCell>{getStatusBadge("in_progress")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
