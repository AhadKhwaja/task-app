import React from "react";

interface TaskProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
}

const Task: React.FC<TaskProps> = ({ task, completed, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task}
      </span>
    </div>
  );
};

export default Task;
