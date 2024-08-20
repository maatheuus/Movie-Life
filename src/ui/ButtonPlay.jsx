import { Link } from "react-router-dom";
import { Button, Fab, Tooltip } from "@mui/material";
import { CirclePlay, Bookmark } from "lucide-react";

import SpinnerMini from "../ui/SpinnerMini";

export function ButtonPlay({ to, renderPlay, className }) {
  if (to) {
    return (
      <Link to={to} className={className}>
        <Button
          variant="outlined"
          startIcon={<CirclePlay />}
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
      startIcon={<CirclePlay />}
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

export function ButtonFavorite({
  isLoading,
  isFavorite,
  renderFavorite,
  className,
}) {
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
          isLoading ? (
            <SpinnerMini className="text-white" />
          ) : (
            <Bookmark size={26} fill="#fff" />
          )
        ) : isLoading ? (
          <SpinnerMini className="text-white" />
        ) : (
          <Bookmark size={26} />
        )}
      </Fab>
    </Tooltip>
  );
}
