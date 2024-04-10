import { Card } from "@/components/ui/card";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <div className="flex flex-col place-items-center justify-center w-screen border h-screen absolute">
    <Card className=" h-fit px-4 py-4 flex flex-col place-items-center justify-center scale-125 mt-8">
      <SignUp />
    </Card>
  </div>
);

export default SignUpPage;
