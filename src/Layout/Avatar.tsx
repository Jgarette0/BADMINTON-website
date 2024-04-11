import { SignedIn, UserButton } from "@clerk/clerk-react";

function HomeAvatar() {
  return (
    <>
      <div className="fixed scale-125 md:hidden bottom-4 z-99 right-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
export default HomeAvatar;
