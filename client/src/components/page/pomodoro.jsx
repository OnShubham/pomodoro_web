import PomodoroClock from "../pomodoro/pomodor";
import ToDoList from "../todo/todo";

export default function Pomodoro() {
  return (
    <main className=" place-items-center  px-6 py-24 sm:py-32  lg:px-8">
      {" "}
      <PomodoroClock />
      <br />
      <ToDoList />
    </main>
  );
}
