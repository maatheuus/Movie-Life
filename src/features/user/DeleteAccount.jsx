import { useState } from "react";
import AlertDeleteAccount from "./AlertDeleteAccount";
import { Button, DialogActions } from "@mui/material";

function DeleteAccount() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseAlert = () => setIsOpen(false);

  const handleOpenAlert = () => setIsOpen(true);

  return (
    <div className="bg-stone-200 px-8 py-4 rounded-b-lg rounded-br-lg md:rounded-lg">
      <div>
        <h2 className="text-stone-900 text-2xl font-semibold my-2">
          Delete account
        </h2>
        <p className="text-neutral-500 font-semibold">
          You can delete your account here, this action is NOT reversible.
        </p>
      </div>

      <div className="mt-4 w-full flex justify-end">
        <Button
          color="error"
          variant="contained"
          onClick={handleOpenAlert}
          aria-hidden={false}
          className="w-full max-w-40 items-end !font-bold"
        >
          Delete
        </Button>
        <AlertDeleteAccount isOpen={isOpen}>
          <DialogActions>
            <Button
              onClick={handleCloseAlert}
              variant="contained"
              className="!bg-stone-950 !text-stone-100 !font-bold"
            >
              Cancel
            </Button>
            <Button
              onClick={handleCloseAlert}
              variant="contained"
              className="!bg-red-400 text-stone-300 font-bold hover:!bg-red-600 transition-all duration-200"
            >
              Delete
            </Button>
          </DialogActions>
        </AlertDeleteAccount>
      </div>
    </div>
  );
}

export default DeleteAccount;
