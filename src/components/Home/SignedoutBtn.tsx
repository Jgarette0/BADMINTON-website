import { SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function SignedoutBtn() {
  return (
    <SignedOut>
      <Link to="/signin">
        <Button className=" rounded-full px-8 py-6 md:py-8 md:px-8 text-md md:text-xl tracking-tighter font-semibold font-mona transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-80">
          Get started
        </Button>
      </Link>
    </SignedOut>
  );
}
export default SignedoutBtn;
