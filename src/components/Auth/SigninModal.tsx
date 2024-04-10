import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogContents from "./DialogContent";

export function SignInModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="font-mona text-md py-8 px-8 font-semibold md:py-8 hover:bg-primary hover:text-secondary md:px-12 md:text-lg "
          variant="secondary"
        >
          Explore
        </Button>
      </DialogTrigger>
      <DialogContents />
    </Dialog>
  );
}
export default SignInModal;
