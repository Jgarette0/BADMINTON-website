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
      />
      <br />
      <a
        href={`http://m.me/137783286078380?text=${encodeURIComponent(
          confirmation
        )}`}
      ></a>
    </>
  );
}
export default MessengerChat;
