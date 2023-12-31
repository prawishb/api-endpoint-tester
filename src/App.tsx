import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Request from "./components/Request";
import Response from "./components/Response";
import Sidebar from "./components/Sidebar";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useThemeContext } from "./context/theme-context";

const App = () => {
  const { theme } = useThemeContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const [apiEndpointUrl, setApiEndpointURL] = useState<string>("");
  const [headers, setHeaders] = useState<KeyValue[]>([
    {
      id: uuidv4(),
      key: "Content-Type",
      value: "application/json",
    },
    {
      id: uuidv4(),
      key: "",
      value: "",
    },
  ]);

  return (
    <div className={theme}>
      <div className="bg-background antialiased h-screen overflow-hidden flex">
        <Button
          variant="outline"
          className="hidden sm:inline-block text-accent-foreground px-2 absolute top-4 left-4 z-10"
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
        <main className="max-w-6xl mx-auto h-full w-full overflow-y-auto flex flex-col items-center py-4 gap-8">
          {/* Input */}
          <div className="w-full px-4 flex gap-4">
            {/* TODO: add shadcn select (style not working) */}
            <div className="w-44 h-10 border border-border rounded-md"></div>
            <Input
              className="text-foreground"
              type="text"
              placeholder="https://www.example.com"
              value={apiEndpointUrl}
              onChange={(event) => setApiEndpointURL(event.target.value)}
            />
            <Button>Send</Button>
          </div>
          <div className="w-full px-4 grid grid-cols-1  gap-4 flex-1">
            <Request headers={headers} setHeaders={setHeaders} />
            <Response />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
