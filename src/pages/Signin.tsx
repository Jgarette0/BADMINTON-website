
import { SignIn } from "@clerk/clerk-react";
import BorderClerk from "@/Layout/BorderClerk";

const SignInPage = () => {
  return (
    <div className="flex flex-col place-items-center justify-center w-screen  h-screen absolute p-12  md:flex-row scale-95">
      <div className=" h-fit flex flex-col place-items-center justify-end absolute mt-8 md:left-[10%]">
        <SignIn path="/signin" routing="path" signUpUrl="/signup" />
        <BorderClerk />
      </div>
      <div className=" w-full md:h-full md:w-full my-20 mt-30  lg:flex"></div>
      <div className="0 h-full w-full my-20 mt-30 lg:flex flex-col place-items-center justify-center">
        <div className=" md:flex h-screen w-full md:p-4 flex-col place-items-end justify-center">
          <img
            src="img/giphy.gif"
            className="object-cover md:h-full rounded-sm"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
