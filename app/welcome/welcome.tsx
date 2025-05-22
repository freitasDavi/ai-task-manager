import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";

export function Welcome() {
  return (
    <main className="p-12">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to AI Task Manager</CardTitle>
          <CardDescription>
            Your intelligent task management assistant powered by AI
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Here you can add your main content.</p>
        </CardContent>
        <CardFooter>
          <Button>Get started</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
