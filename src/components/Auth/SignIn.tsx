import { SignInButton, SignedOut } from "@clerk/clerk-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { LogIn } from "lucide-react";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";

function SignIns() {
  return (
    <SignedOut>
      <SignInButton>
        <DropdownMenuItem className="flex flex-row px-2 place-items-center cursor-pointer border-none outline-none hover:bg-secondary">
          <LogIn className="mr-2 h-4 w-4" />
          <span>Sign in</span>
          <DropdownMenuShortcut>⇧Z</DropdownMenuShortcut>
        </DropdownMenuItem>
      </SignInButton>
    </SignedOut>
  );
}
export default SignIns;
