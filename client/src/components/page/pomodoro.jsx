import PomodoroClock from "../pomodoro/pomodor";
import ToDoList from "../todo/todo";

export default function Pomodoro() {
  return (
    <main className="grid grid-flow-row min-h-full place-items-center  px-6 py-24 sm:py-32 sm:grid sm:grid-flow-col lg:px-8">
      {" "}
      {/* <div>welcome</div> */}
      <ToDoList />
      <br />
      <PomodoroClock />
    </main>
  );
}
