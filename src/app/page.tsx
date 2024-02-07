import { Box, Button, Slider, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex ">
        <h1 className="text-3xl font-bold underline">Home</h1>

        <div>
          <Button variant="text" color="success">
            Text
          </Button>
          <Button variant="contained" color="success">
            Contained
          </Button>
          <Button variant="outlined" color="success">
            Outlined
          </Button>
        </div>
        <div>
          <Button variant="text" className="bg-slate-600">
            Text
          </Button>
          <Button variant="contained" className="bg-slate-600">
            Contained
          </Button>
          <Button variant="outlined" className="bg-slate-600">
            Outlined
          </Button>
          <div className="w-50 bg-red-400">test</div>
        </div>
      </main>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
      </div>
      <Box
        sx={{
          background: { xs: "red", sm: "yellow", md: "green", lg: "blue" },
          padding: 2,
        }}
      >
        <Button variant="contained">Learn Material</Button>
      </Box>
    </>
  );
}
