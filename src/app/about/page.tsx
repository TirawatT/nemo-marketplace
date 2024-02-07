import Image from "next/image";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div>
      <h1>about</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button variant="contained">Hello world</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
