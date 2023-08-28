import { Button } from "./ui/button";

type Props = {
  open: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ open, set }: Props) => {
  const sidebarHandler = () => {
    set(!open);
  };

  return (
    <aside
      className="z-50 flex-shrink-0 overflow-x-hidden bg-background border-r transition-all duration-300"
      style={
        open
          ? { width: "260px", visibility: "visible" }
          : { width: "0px", visibility: "hidden" }
      }
    >
      <div className="h-full w-[260px]">
        <div className="flex h-full min-h-0 w-full flex-col p-4">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold">Collections</h1>
            <Button
              variant="outline"
              className="px-2 text-accent-foreground"
              onClick={sidebarHandler}
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
          </div>

          <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto">
            <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
              <div>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
