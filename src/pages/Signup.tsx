import { Button } from "@/components/ui/button";
import { SignUp } from "@clerk/clerk-react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BorderClerk from "@/Layout/BorderClerk";

const SignUpPage = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLink(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="flex flex-col place-items-center justify-center w-screen h-screen absolute p-8">
      <div className=" h-fit flex flex-col place-items-center justify-end absolute mt-8 lg:mt-20 ">
        <SignUp />
        {showLink && (
          <div className="w-8 h-8 absolute md:top-12 md:right-16 top-4 z-20 right-4 mx-auto my-auto flex flex-col place-items-center justify-center transition-colors duration-300 ease-in-out md:hover:bg-secondary rounded-sm">
            <Link to="/">
              <Button className="bg-transparent hover:bg-transparent">
                <X size="24" color="gold" className="" />
              </Button>
            </Link>
          </div>
        )}
        <BorderClerk />
      </div>
    </div>
  );
};

export default SignUpPage;
