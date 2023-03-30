type Subtask = {
    subtask_name: string;
    subtask_isCompleted: boolean;
}

interface Task {
    id: string;
    name: string;
    description: string;
    subtasks: Subtask[];
    board_name: string;
    status: "todo" | "doing" | "done";
}