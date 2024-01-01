import { useState } from "react";
import { Button } from "./ui/button";
import { Bot } from "lucide-react";
import AiChatbox from "./AiChatbox";

const AIChatButton = () => {
  const [chatButtonOpen, setChatButtonOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setChatButtonOpen(true)}>
        <Bot size={20} className="mr-2" />
        AI Chat
      </Button>
      <AiChatbox
        open={chatButtonOpen}
        onClose={() => setChatButtonOpen(false)}
      />
    </>
  );
};

export default AIChatButton;
