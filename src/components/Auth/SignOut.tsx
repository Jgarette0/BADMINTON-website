import { SignOutButton, SignedIn } from "@clerk/clerk-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropdownMenuShortcut } from "../ui/dropdown-menu";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <SignedIn>
      <SignOutButton signOutCallback={handleSignOut}>
        <DropdownMenuItem className="flex flex-row px-2 place-items-center cursor-pointer border-none outline-none hover:bg-secondary">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign Out</span>
          <DropdownMenuShortcut>⇧Z</DropdownMenuShortcut>
        </DropdownMenuItem>
      </SignOutButton>
    </SignedIn>
  );
}
export default SignOut;
