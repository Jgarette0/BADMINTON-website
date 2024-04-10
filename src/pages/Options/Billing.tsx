import { UserProfile } from "@clerk/clerk-react";

function BillingPage() {
  return <UserProfile path="/billing" routing="path" />;
}
export default BillingPage;
