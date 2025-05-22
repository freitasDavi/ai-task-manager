import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  ClipboardList,
  Clock,
  ListChecks,
  TestTube,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface TaskData {
  title: string;
  description: string;
  estimated_time: string;
  steps: string[];
  suggested_tests: string[];
  acceptance_criteria: string[];
  implementation_suggestion: string;
}

interface TaskCardsProps {
  taskData: TaskData;
}

export function TaskCards({ taskData }: TaskCardsProps) {
  return (
    <section>
      <ScrollArea className="h-[calc(100vh-150px)] pb-4">
        <div className="grid gap-4 grid-cols-1">
          {/* Title and Description Card */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                {taskData.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{taskData.description}</p>
            </CardContent>
          </Card>

          {/* Estimated Time Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Estimated Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{taskData.estimated_time}</p>
            </CardContent>
          </Card>

          {/* Steps Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ListChecks className="h-5 w-5" />
                Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {taskData.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Suggested Tests Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube className="h-5 w-5" />
                Suggested Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {taskData.suggested_tests.map((test, index) => (
                  <li key={index} className="font-mono text-sm">
                    {test}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Acceptance Criteria Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 space-y-2">
                {taskData.acceptance_criteria.map((criteria, index) => (
                  <li key={index}>{criteria}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Implementation Suggestion Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Implementation Suggestion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {taskData.implementation_suggestion}
              </p>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
      <div className="flex justify-end">
        <Button>Salvar Task</Button>
      </div>
    </section>
  );
}
