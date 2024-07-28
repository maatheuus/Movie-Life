import { Button, Fab, Tooltip } from "@mui/material";
import { FaPlayCircle, FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ButtonPlay({ to, renderPlay, className }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        <Button
          variant="outlined"
          startIcon={<FaPlayCircle />}
          sx={{
            background: "#2332a4f6",
            color: "white",
            ":hover": {
              background: "#2332a4f6",
              color: "white",
            },
          }}
        >
          Play now
        </Button>
      </Link>
    );
  }
  return (
    <Button
      variant="outlined"
      onClick={renderPlay}
      className={className}
      startIcon={<FaPlayCircle />}
      sx={{
        background: "#2332a4f6",
        color: "white",
        ":hover": {
          background: "#2332a4f6",
          color: "white",
        },
      }}
    >
      Play now
    </Button>
  );
}

export function ButtonFavorite({ isFavorite, renderFavorite, className }) {
  return (
    <Tooltip title="Watchlist">
      <Fab
        size="small"
        className={className}
        sx={{
          background: "#2332a4f6",
          color: "white",
          ":hover": {
            background: "#2332a4f6",
            color: "white",
          },
        }}
        onClick={renderFavorite}
      >
        {isFavorite ? (
          <FaBookmark className="w-4 h-5" />
        ) : (
          <FaRegBookmark className="w-4 h-5" />
        )}
      </Fab>
    </Tooltip>
  );
}
