import { TaskCards } from "~/components/task-cards";

const exampleTaskData = {
  title: "Secure Login Form with Authentication",
  description:
    "Implement a modern login form with field validation, session-based authentication, and real-time error feedback.",
  estimated_time: "2 days",
  steps: [
    "Create a form component using React",
    "Add field validation using a suitable library",
    "Connect backend for user authentication",
    "Persist sessions using SQLite",
    "Test full login and logout flow",
  ],
  suggested_tests: [
    "it('should render login form correctly')",
    "it('should validate input fields')",
    "it('should authenticate valid credentials')",
    "it('should prevent access with invalid credentials')",
  ],
  acceptance_criteria: [
    "Login form displays properly with required fields",
    "Invalid input is correctly flagged",
    "Valid users can log in and maintain a session",
    "Users are redirected upon login and logout",
  ],
  implementation_suggestion:
    "Use React Hook Form for input validation, Prisma ORM for managing user data, and configure protected routes using React Router 7.",
};

export function TaskContent() {
  return (
    <div className="container mx-auto p-4">
      <TaskCards taskData={exampleTaskData} />
    </div>
  );
}
