import {
  BookText,
  Code,
  Contact,
  CreditCard,
  Github,
  Handshake,
  LifeBuoy,
  Mail,
  MapPin,
  MessageSquare,
  Moon,
  PlusCircle,
  Settings,
  Sun,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ui/theme-provider";
import SignOut from "../components/Auth/SignOut";
import SignIns from "../components/Auth/SignIn";

export function ToolList() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none border-none fixed right-4 bottom-4 md:right-8 md:bottom-8 opacity-80 rounded-full overflow-hidden z-50">
        <Button
          variant="secondary"
          className="rounded-sm bg-secondary w-8 h-8 overflow-hidden flex flex-col place-items-center justify-center"
        >
          <Settings className=" transition-all duration-300 ease-in-out scale-90 hover:scale-110 text-center px-none" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-sm">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light Theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark Theme
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <a href="https://dev.pinamungajan.com" target="_blank">
            <DropdownMenuItem>
              <Code className="mr-2 h-4 w-4" />
              <span>Developer</span>
              <DropdownMenuShortcut>⇧X</DropdownMenuShortcut>
            </DropdownMenuItem>
          </a>
          <Link to="/billing">
            <DropdownMenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut>⇧B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <DropdownMenuShortcut>⇧S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link to="/support">
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
              <DropdownMenuShortcut>⇧U</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link to="/team">
            <DropdownMenuItem disabled>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Contact className="mr-2 h-4 w-4" />
              <span>Contact</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <Link to="/email">
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/messege">
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <Link to="/contact">
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <Link to="/">
            <DropdownMenuItem>
              <MapPin className="mr-2 h-4 w-4" />
              <span>Location</span>
              <DropdownMenuShortcut>⇧L</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <Link to="/">
          <DropdownMenuItem disabled>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
            <DropdownMenuShortcut>⇧X</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <Link to="/terms">
          <DropdownMenuItem>
            <Handshake className="mr-2 h-4 w-4" />
            <span>terms</span>
            <DropdownMenuShortcut>⇧T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <Link to="/docs">
          <DropdownMenuItem>
            <BookText className="mr-2 h-4 w-4" />
            <span>docs</span>
            <DropdownMenuShortcut>⇧D</DropdownMenuShortcut>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <SignIns />
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default ToolList;
