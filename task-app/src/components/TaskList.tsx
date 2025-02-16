import React, { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

interface TaskType {
  id: number;
  task: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/tasks").then((response) => {
      setTasks(response.data.tasks);
    });
  }, []);

  const toggleTaskCompletion = (id: number) => {
    axios.put(`http://127.0.0.1:5000/tasks/${id}`, {
      completed: true,
    }).then(() => {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: true } : task
      ));
    });
  };
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task.task}
          completed={task.completed}
          onToggle={() => toggleTaskCompletion(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
