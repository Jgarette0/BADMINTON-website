import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

function ContactLinks() {
  return (
    <>
      <div className="w-screen h-full p-4 md:p-12 rounded-[4rem] overflow-hidden">
        <div className="flex flex-col place-items-center gap-4 md:gap-8 w-full">
          <a
            className="w-full"
            href="https://web.facebook.com/profile.php?id=61557379647439"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="w-full rounded-[4rem] h-80 hover:bg-secondary cursor-pointer flex flex-row md:p-8  p-4 gap-8 group">
              <div className=" flex flex-row gap-8">
                <img src="img/fb.png" className="object-cover " alt="" />
                <div className="font-bold tracking-tight text-11xl hidden md:flex flex-col place-items-center justify-center text-center leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  FACEBOOK
                </div>
              </div>
              <div className=" hidden md:flex flex-col place-items-center justify-center text-center leading-none pt-4 h-full w-64">
                <ChevronRight
                  size={120}
                  className="-translate-x-40 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500 ease-in-out text-[#3764b9]"
                />
              </div>
            </Card>
          </a>
          <a className="w-full" href="mailto:androxgaming17@gmail.com">
            <Card className="w-full rounded-[4rem] h-80 hover:bg-secondary cursor-pointer flex flex-row md:p-8  p-4 gap-8 group justify-between">
              <div className=" flex flex-row gap-8">
                <img src="img/gmail.png" className="object-cover " alt="" />
                <div className="font-bold tracking-tight text-11xl hidden md:flex flex-col place-items-center justify-center text-center leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  GMAIL
                </div>
              </div>
              <div className=" hidden md:flex flex-col place-items-center justify-center text-center leading-none pt-4 h-full w-64">
                <ChevronRight
                  size={120}
                  className="-translate-x-40 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500 ease-in-out text-[#f44336]"
                />
              </div>
            </Card>
          </a>
          <a className="w-full" href="http://m.me/61557379647439?text=Messege:">
            <Card className="w-full rounded-[4rem] h-80 hover:bg-secondary cursor-pointer flex flex-row md:p-8  p-4 gap-8 group justify-between">
              <div className=" flex flex-row gap-8">
                <img src="img/msngr.png" className="object-cover " alt="" />
                <div className="font-bold tracking-tight text-11xl hidden md:flex flex-col place-items-center justify-center text-center leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  MESSENGER
                </div>
              </div>
              <div className=" hidden md:flex flex-col place-items-center justify-center text-center leading-none pt-4 h-full w-64">
                <ChevronRight
                  size={120}
                  className="-translate-x-40 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500 ease-in-out text-[#0073d0]"
                />
              </div>
            </Card>
          </a>
          <a className="w-full" href="tel:09661808543">
            <Card className="w-full rounded-[4rem] h-80 hover:bg-secondary cursor-pointer flex flex-row md:p-8  p-4 gap-8 group justify-between">
              <div className=" flex flex-row gap-8">
                <img src="img/call.png" className="object-cover " alt="" />
                <div className="font-bold tracking-tight text-11xl hidden md:flex flex-col place-items-center justify-center text-center leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CALL US
                </div>
              </div>
              <div className=" hidden md:flex flex-col place-items-center justify-center text-center leading-none pt-4 h-full w-64">
                <ChevronRight
                  size={120}
                  className="-translate-x-40 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500 ease-in-out text-[#4cd3aa]"
                />
              </div>
            </Card>
          </a>
        </div>
      </div>
    </>
  );
}
export default ContactLinks;
