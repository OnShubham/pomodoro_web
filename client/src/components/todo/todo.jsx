import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTask([
        ...task,
        {
          text: newTask,
          completed: false,
        },
      ]);
    }
  };

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1"
      />
      <Button className="w-56 " onClick={addTask}>add</Button>
    </div>
  );
}

export default ToDoList;
