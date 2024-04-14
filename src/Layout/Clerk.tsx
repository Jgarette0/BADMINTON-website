import { ClerkLoaded, ClerkLoading, ClerkProvider } from "@clerk/clerk-react";
import LoadingSpinner from "./LoadingSpinner";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkElements = {
  elements: {
    formButtonPrimary:
      "bg-primary text-md font-semibold py-5 transition-all duration-300 ease-in-out rounded-sm text-secondary hover:opacity-80 hover:bg-primary hover:text-secondary",
    formFieldInput:
      "flex h-10 w-full border border-input bg-background px-3 py-5 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-primary mt-2",
    formFieldLabel:
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-primary",
    headerTitle: "text-primary",
    headerSubtitle: "text-primary opacity-80",
    dividerText: "text-primary",
    dividerLine: "bg-primary",
    socialButtonsBlockButton:
      "bg-secondary text-md font-mona py-4 transition-all duration-300 ease-in-out rounded-sm border-none text-primary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary font-semibold hover:scale-105",
    socialButtonsBlockButtonArrow: "text-primary",
    footerActionText: "text-primary",
    footerActionLink:
      "text-gold hover:text-gold hover:scale-105 transition all duration-300 ease-in-out",
    socialButtonsIconButton:
      "bg-gray-50 text-md font-mona py-4 transition-all duration-300 ease-in-out rounded-sm border-none text-primary transition-all duration-300 ease-in-out hover:bg-secondary hover:text-primary font-semibold hover:scale-105",
  },
};

const ClerkAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={clerkElements}>
      <ClerkLoading>
        <LoadingSpinner />
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  );
};

export default ClerkAuth;
