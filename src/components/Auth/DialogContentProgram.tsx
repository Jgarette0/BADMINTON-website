import { SignInButton } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

function DialogContentsProgram() {
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>
          Sign in to your account to access the full details.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <SignInButton afterSignInUrl="/program">
          <Button
            type="submit"
            size="sm"
            className="px-3 rounded-sm w-full m-4 py-8 font-mona text-lg font-semibold"
          >
            Sign In
          </Button>
        </SignInButton>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
export default DialogContentsProgram;
