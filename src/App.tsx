import { useState } from "react";

import Request from "./components/Request";
import Response from "./components/Response";
import Sidebar from "./components/Sidebar";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="bg-background antialiased min-h-screen flex">
      <Button
        variant="outline"
        className="px-2 absolute top-4 left-4 z-10"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>

      <Sidebar open={isSidebarOpen} set={setIsSidebarOpen} />

      <main className="max-w-6xl mx-auto h-screen w-full flex flex-col items-center py-4 gap-4">
        {/* Input */}
        <div className="w-full px-4 flex gap-2">
          <div className="w-48 border rounded-md">
            {/* TODO: add shadcn select */}
          </div>

          <Input placeholder="https://www.example.com" />

          <Button>Send</Button>
        </div>

        <div className="w-full px-4 grid grid-cols-2 gap-4 flex-1">
          <Request />
          <Response />
        </div>
      </main>
    </div>
  );
};

export default App;
