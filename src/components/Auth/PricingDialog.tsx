import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function PricingDialog() {
  return (
    <Card className="bg-primary-foreground rounded-lg h-64 scale-70 md:scale-100 w-72 flex flex-col place-items-center  px-64 justify-center py-24 relative">
      <div className="absolute top-4 font-mona font-semibold text-lg left-6">
        Sign in
      </div>
      <div className="absolute top-12 opacity-80 left-0 font-mona text-lg text-left scale-90">
        Sign in to your account to access the full details.
      </div>
      <Link to="/signin" className="absolute bottom-14">
        <Button className="w-64 px-56 rounded-sm font-semibold h-16 font-mona text-lg hover:opacity-90 ">
          Sign in
        </Button>
      </Link>
    </Card>
  );
}
export default PricingDialog;
