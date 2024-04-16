import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";

function LocationHome() {
  const [userInput, setUserInput] = useState("");
  const confirmation = `This is your confirmation message:\n${userInput}`;
  return (
    <Card className="relative md:w-full rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-secondary-foreground">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6231.732363034202!2d123.58666148425318!3d10.282078395995605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a96f9b97ad5239%3A0x587a7e7b0c947ed7!2sPinamungahan%20Badminton%20Court!5e0!3m2!1sen!2sph!4v1711533457772!5m2!1sen!2sph"
          className="map"
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-secondary rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
          <h2 className=" text-lg mb-1 font-medium title-font">Message us</h2>
          <p className="leading-relaxed mb-5 opacity-85">
            AB Badminton Messenger
          </p>

          <textarea
            className="bg-secondary border border-ring rounded-sm focus:outline-none h-32 focus:border-yellow-500 text-base px-4 py-2 mb-4 resize-none"
            placeholder="Message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <a
            href={`http://m.me/61557379647439?text=${encodeURIComponent(
              confirmation
            )}`}
          >
            <Button className="text-lg  py-4 px-6 font-mona semi-bold text-md">
              Submit
            </Button>
          </a>
          <p className="text-xs opacity-80 mt-3">
            Please allow us some time to carefully review your message. We will
            get back to you shortly.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default LocationHome;
