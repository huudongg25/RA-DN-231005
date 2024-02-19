import React, { useEffect } from "react";
import useSocket from "../hooks/useSocket";

const BlockUserComponent: React.FC = () => {
  const socket = useSocket();

  useEffect(() => {
    socket.on("logout", function (userId: any) {
      console.log(userId);
    });
  }, [socket]);

  const handleBlockUser = (userId: string) => {
    socket.emit("blockUser", { userId: "Hello" });
    console.log(socket.id);
  };

  return (
    <div>
      <button onClick={() => handleBlockUser("myId")}>Block User</button>
    </div>
  );
};

export default BlockUserComponent;
