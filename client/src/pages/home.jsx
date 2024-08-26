import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import React from "react";



const home = () => {
  return (
    <div className=" text-foreground min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-6xl font-bold  mb-4">
          Welcome to Your <span className="text-indigo-500">Productivity</span>{" "}
          <br /> <span className="text-orange-500"> Companion ! </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Boost Your Efficiency with Our Simple Pomodoro Tool
        </p>
      </header>

      <footer className="text-center">
        <h2 className="text-4xl font-semibold text-orange-500 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-10">
          Dive into a more productive workday with our Pomodoro tool. Click
          below to start managing your tasks and time more effectively today.
        </p>
        <a
          href="/pomodoro"
          className="inline-block px-6 py-3 mb-8 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg  hover:bg-indigo-500 hover:primary-foreground transition-all duration-300"
        >
          Get Started
        </a>
      </footer>

      <section className=" p-6 rounded-lg shadow-lg max-w-5xl mx-auto mb-12">
        <h2 className="text-5xl font-semibold mb-8">
          Looking to supercharge{" "}
          <span className="text-indigo-500"> your productivity ?</span>
        </h2>
        <p className="text-lg mb-10 text-center">
          Our Pomodoro website offers a streamlined solution to manage your
          tasks and time effectively. Designed to help you stay focused and
          organized, our single-page application combines two powerful features:
        </p>

        <div className="space-y-6">
          <div className="bg-card-foreground p-4 rounded-lg shadow-md">
            <h3 className="text-2xl text-orange-500 font-medium mb-2">
              1. Task Management
            </h3>
            <p className="text-base text-muted-foreground">
              Easily keep track of your to-dos and stay on top of your
              responsibilities. Our intuitive to-do list allows you to add,
              edit, and complete tasks with ease.
            </p>
          </div>

          <div className="bg-card-foreground p-4 rounded-lg shadow-md">
            <h3 className="text-2xl text-orange-500 font-medium mb-2">
              2. Pomodoro Timer
            </h3>
            <p className="text-base text-muted-foreground">
              Experience the benefits of the Pomodoro Technique—a proven method
              that enhances focus and productivity. Set your work intervals,
              take regular breaks, and watch your efficiency soar.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-6">
          Why Choose the Pomodoro Technique?
        </h2>

        <Accordion
          className=" min-w-80 mb-10 list-disc list-inside text-lg text-orange-700 "
          type="single"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Maintain Focus :</AccordionTrigger>
            <AccordionContent>
              Maintain Focus: Break your work into intervals to stay
              concentrated and avoid distractions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Boost Productivity:</AccordionTrigger>
            <AccordionContent>
              Boost Productivity: Work smarter by managing your time and tasks
              more effectively.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Prevent Burnout:</AccordionTrigger>
            <AccordionContent>
              Prevent Burnout: Regular breaks help you stay refreshed and
              motivated.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <a
          href="/pomodoro"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:bg-indigo-500 hover:primary-foreground transition-all duration-300"
        >
          Explore Features
        </a>
      </section>
    </div>
  );
};

export default home;
