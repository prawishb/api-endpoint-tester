import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";

type Props = {};

const Response = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4">
        <CardTitle>Response</CardTitle>
        <CardDescription>
          Status: <span className="text-green-500 font-medium">200 OK</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 flex-1">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center">
            Loading...
          </div>
        ) : (
          <div className="bg-stone-200 dark:bg-stone-800 w-full h-full rounded-md"></div>
        )}
      </CardContent>

      <CardFooter className="p-4"></CardFooter>
    </Card>
  );
};

export default Response;
