import { IconButton } from "@mui/material";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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
        <IoIosArrowDropleftCircle />
      </IconButton>
      <IconButton
        onClick={handleNext}
        aria-label="forward"
        size="large"
        color="inherit"
        className="z-40"
      >
        <IoIosArrowDroprightCircle />
      </IconButton>
    </>
  );
}

export default ScrollButtons;
