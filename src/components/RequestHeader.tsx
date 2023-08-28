import { Input } from "./ui/input";

type Props = {
  keyValue: KeyValue;
};

const RequestHeader = ({ keyValue }: Props) => {
  return (
    <form className="flex gap-2 w-full">
      <Input placeholder="Key" value={keyValue.key} />
      <Input placeholder="Value" value={keyValue.value} />
    </form>
  );
};

export default RequestHeader;
