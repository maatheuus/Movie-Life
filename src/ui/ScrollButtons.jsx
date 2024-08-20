import { IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "lucide-react";

function ScrollButtons({ handlePrevious, handleNext }) {
  return (
    <>
      <IconButton
        onClick={handlePrevious}
        aria-label="back"
        size="large"
        color="inherit"
        className="z-40"
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        aria-label="forward"
        size="large"
        color="inherit"
        className="z-40"
      >
        <ChevronRight />
      </IconButton>
    </>
  );
}

export default ScrollButtons;
