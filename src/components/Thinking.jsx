import { MdComputer } from "react-icons/md";

const Thinking = () => {
  return (
    <div className="flex items-end mt-4">
      <div className="avatar">
        <div className="w-8 border rounded-full">
          <img
            src="https://www.agicent.com/assets/images/site_logo/favicon/android-chrome-192x192.png"
            alt="this is agicent image"
          />
        </div>
      </div>
      <div className="chat chat-start ">
        <div className="chat-bubble animate-pulse">thinking...</div>
      </div>
    </div>
  );
};

export default Thinking;
