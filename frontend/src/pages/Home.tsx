import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  const suggestions = [
    "Blood Donation Drive",
    "River Cleanup",
    "Vaccination Clinic",
    "Food Distribution",
  ];

  const handleBoxClick = () => {
    console.log("Navigating to another page...");
  };

  return (
    <div className="h-screen w-screen bg-background grid place-items-center">
      <div className="space-y-8 text-center">
        <h1 className="text-5xl font-bold text-primary leading-tight">
          Welcome!
          <br />
          How do you want to help
          <br />
          your community today?
        </h1>

        <div
          onClick={handleBoxClick}
          className="relative flex items-center justify-end w-full max-w-2xl mx-auto p-4 text-2xl border-4 rounded-xl cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary hover:shadow-lg transition-all"
        >
          <ArrowRight size={32} className="text-primary" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => console.log(`You clicked on ${suggestion}`)}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full text-lg hover:bg-secondary/80 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;