import ChatInterface from "~/components/chat-interface";
import { TaskContent } from "./task-content";

export function TasksChatbot() {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      <ChatInterface />
      <TaskContent />
    </div>
  );
}
