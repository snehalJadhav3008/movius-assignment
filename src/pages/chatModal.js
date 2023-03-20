/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
import "./home.css";
import { chatBotContext } from "./../contextApi/chatBotContext";

const ChatModal = () => {
  const [open, setOpen] = useState(false);
  const steps = useContext(chatBotContext);
  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <div className="chatBot">
      <Modal
        closeIcon
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        id="chat-modal"
        trigger={
          <Button
            id="message-icon"
            icon={!open ? "chat" : "close"}
            onClick={handleOnClick}
          />
        }
      >
        <ChatBot
          steps={steps}
          headerTitle="How can I help you?"
          style={{ borderRadius: "0"}}
        />
      </Modal>
    </div>
  );
};
export default ChatModal;
