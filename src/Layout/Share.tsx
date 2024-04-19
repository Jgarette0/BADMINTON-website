import { ChevronsUpDown, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

export function ShareLink() {
  const [dateTime, setDateTime] = useState("");
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    const now = new Date();
    const formattedDateTime = `${now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })} 
   ${now.toLocaleDateString([], {
     weekday: "long",
     month: "long",
     day: "numeric",
     year: "numeric",
   })}`;
    setDateTime(formattedDateTime);
    toast("Link has been copied", {
      description: `${dateTime}`,
    });
    const linkInput = document.getElementById("link") as HTMLInputElement;
    linkInput.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 0);
    console.log(copied);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group/item  tracking-wide text-md md:text-lg hover:opacity-60 text-secondary-foreground font-semibold opacity-80 flex flex-row gap-1 relative pr-7 cursor-pointer">
          Share
          <ChevronsUpDown className="group-hover/item:rotate-180 text-base w-4 h-4 rotate-90 transition-transform duration-300 ease-in-out absolute right-2 bottom-1" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue="https://badminton.jiliangarette.xyz"
              readOnly
            />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={handleClick}
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShareLink;
