import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input"; // Assuming Input is defined similarly

const PomodoroClock = () => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [customTime, setCustomTime] = useState(25 * 60);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            handleModeChange();
            return prevTime;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, mode]);

  const handleModeChange = () => {
    if (mode === "pomodoro") setMode("short-break");
    else if (mode === "short-break") setMode("long-break");
    else if (mode === "long-break") setMode("pomodoro");
    resetTimer();
  };

  const resetTimer = () => {
    if (mode === "pomodoro") setTime(25 * 60);
    else if (mode === "short-break") setTime(5 * 60);
    else if (mode === "long-break") setTime(15 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleTimeUpdate = () => {
    setTime(customTime);
    setDialogOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-4xl font-bold mb-10">
        {mode.replace("-", " ").toUpperCase()}
      </div>
      <div className="text-9xl font-mono mb-10">{formatTime(time)}</div>
      <div className="flex space-x-5">
        <Button
          onClick={() => setIsRunning(!isRunning)}
          className={`px-8 py-2 rounded ${
            isRunning ? "bg-red-700" : "bg-green-700"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </Button>
        <Button
          onClick={() => {
            setIsRunning(false);
            resetTimer();
          }}
          className="px-8 py-2 bg-blue-800 rounded text-white"
        >
          Reset
        </Button>
        <Button
          onClick={() => setDialogOpen(true)}
          className="px-6 py-2 bg-yellow-800 rounded text-white"
        >
          Set Time
        </Button>
      </div>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent className="bg-gray-950 border border-orange-800">
          <DialogHeader>Set Time</DialogHeader>
          <DialogTitle>Time</DialogTitle>
          <Input
            type="number"
            value={customTime / 60}
            onChange={(e) => setCustomTime(e.target.value * 60)}
            className="mb-4"
            placeholder="Minutes"
          />

          <DialogFooter>
            <Button
              onClick={handleTimeUpdate}
              className="bg-blue-800 text-white px-4 py-2 rounded"
            >
              Update
            </Button>
            <DialogClose>
              <Button
                onClick={() => setDialogOpen(false)}
                className="bg-gray-700 text-white px-4 py-2 rounded"
              >
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PomodoroClock;
