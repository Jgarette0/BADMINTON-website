import { UserProfile } from "@clerk/clerk-react";

function PaymentPage() {
  return <UserProfile path="/billing" routing="path" />;
}
export default PaymentPage;
