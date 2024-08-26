import React, { useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

function DeleteIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-red-500 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function ToDoItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-700">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => onToggle(task.id)}
        />
        <span
          className={`text-lg ${
            task.completed ? "line-through text-gray-500" : "text-white"
          }`}
        >
          {task.text}
        </span>
      </div>
      <DeleteIcon onClick={() => onDelete(task.id)} />
    </div>
  );
}

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="flex gap-3 mb-4">
        <Input
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 text-white bg-gray-800 border-gray-700 placeholder-gray-400"
        />
        <Button onClick={addTask} className={buttonVariants({ size: "lg" })}>
          Add
        </Button>
      </div>
      <div className="divide-y divide-gray-700">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">No tasks available</p>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
