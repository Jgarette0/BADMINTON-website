import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DialogContentsProgram from "./DialogContentProgram";

export function SignInModalProgram() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="font-mona transition-colors duration-400 ease-in-out text-sm py-4 px-8 font-semibold md:py-8 border hover:border-primary md:px-12 md:text-lg "
          variant="secondary"
        >
          Explore
        </Button>
      </DialogTrigger>
      <DialogContentsProgram />
    </Dialog>
  );
}
export default SignInModalProgram;
