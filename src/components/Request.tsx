import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import RequestHeader from "./RequestHeader";

type Props = {
  headers: KeyValue[];
  setHeaders: React.Dispatch<React.SetStateAction<KeyValue[]>>;
};

const Request = ({ headers, setHeaders }: Props) => {
  const addHeaderHandler = () => {
    setHeaders((prevHeaders) => [
      ...prevHeaders,
      {
        id: uuidv4(),
        key: "",
        value: "",
      },
    ]);
  };

  const removeHeaderHandler = (id: string) => {
    setHeaders((headers) => headers.filter((header) => header.id !== id));
  };

  return (
    <Card className="h-full">
      <CardHeader className="p-4">
        <CardTitle>Request</CardTitle>
        <CardDescription>Set your request headers</CardDescription>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          {headers.map((header) => (
            <RequestHeader
              key={header.id}
              keyValue={header}
              onRemove={removeHeaderHandler}
            />
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-fit" onClick={addHeaderHandler}>
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Request;
