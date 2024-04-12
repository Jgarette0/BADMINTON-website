import { useState } from "react";

function MessengerChat() {
  const [userInput, setUserInput] = useState("");
  const confirmation = `This is your confirmation message:\n${userInput}`;

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="border border-gray-300 p-2 rounded-md mr-2"
        placeholder="Enter your message"
      />
      <br />
      <a
        className="bg-secondary text-primary hover:opacity-80 transition-all duration-300 ease-in-out font-mona font-semibold cursor-pointer py-4 px-8 rounded0sm"
        href={`http://m.me/137783286078380?text=${encodeURIComponent(
          confirmation
        )}`}
      >
        Confirm
      </a>
    </>
  );
}
export default MessengerChat;
