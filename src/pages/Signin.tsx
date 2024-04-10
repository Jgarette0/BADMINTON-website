import { Card } from "@/components/ui/card";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <div className="flex flex-col place-items-center justify-center w-screen border h-screen absolute p-8">
    <Card className=" h-fit px-4 py-4 flex flex-col place-items-center justify-end scale-125">
      <SignIn path="/signin" routing="path" signUpUrl="/signup" />
    </Card>
  </div>
);

export default SignInPage;
