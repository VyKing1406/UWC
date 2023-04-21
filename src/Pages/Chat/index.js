import React, { useEffect, useState, useRef } from "react";
import { Grid, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import VideocamIcon from "@mui/icons-material/Videocam";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styles from "./style.module.css";
import MessageUser from "./MessageUser";
// eslint-disable-next-line
import { MyMessage, Message } from "./Mess";
import axios from "axios";

const ChatPage = () => {
  const chatBody = useRef(null);
  const messEndRef = useRef(null);
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line
  const [avt, setAvt] = useState(
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/341.jpg"
  );
  const [name, setName] = useState("Mark Zilien");
  const [isOnline, setIsOnline] = useState(false);
  const fakeMessages = [
    { message: "Hello, I have a problem.", me: false },
    { message: "Hi, How can I help you?", me: true },
    { message: "Could you swap my partner?", me: false },
    { message: "Is there a particular reason you would like to switch partners?", me: true },
    {
      message:
        "Yes, she is very lazy and sometimes she is also late.",
      me: false,
    },
    { message: "Okay, I will consider your problem. I will inform you soon.", me: true },
    { message: "Thanks, It will help me", me: false },
    { message: "You welcome.", me: true },
  ];
  // eslint-disable-next-line
  const [messages, setMessages] = useState(fakeMessages);
  // eslint-disable-next-line
  const [message, setMessage] = useState("");

  const renderMessage = messages.map((mess, index) => {
    if (mess.me) {
      return (
        <MyMessage
          key={index}
          data={{ message: mess.message }}
          ref={messEndRef}
        />
      );
    } else {
      return (
        <Message key={index} data={{ avatar: avt, message: mess.message }} />
      );
    }
  });

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13 || e.code === "Enter") {
      handleSend();
    }
  };
  const handleSelectUser = (e, userId) => {
    axios
      .get(`https://642c20a9208dfe254728bb0b.mockapi.io/staff/staff/${userId}`)
      .then((data) => {
        setAvt(data.data.avatar);
        setName(data.data.name);
        setIsOnline(!data.data.onDuty);
      });
  };

  useEffect(() => {
    axios
      .get("https://642c20a9208dfe254728bb0b.mockapi.io/staff/staff")
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  const handleSend = () => {
    if (message.trim().length > 0) {
      setMessages((presState) => [
        ...presState,
        { message: message.trim(), me: true },
      ]);
      setMessage("");
    }
  };

  return (
    <div style={{ marginRight: "20px" }}>
      <Grid container className={styles.wrapper}>
        <Grid item xs={3} className={styles.userBox}>
          <div className={styles.searchBox}>
            <SearchIcon
              sx={{
                color: "#000",
                opacity: "0.7",
                marginLeft: "6px",
                fontSize: "24px",
                top: "0",
                bottom: "0",
                marginRight: "4px",
                "&:hover": {
                  cursor: "pointer",
                  opacity: "1",
                },
              }}
            />
            <input className={styles.searchInput} />
          </div>
          <div className={styles.listUsers}>
            {users.map((user) => (
              <MessageUser
                key={user.id}
                data={user}
                onSelect={(e, b) => handleSelectUser(e, b)}
              />
            ))}
          </div>
        </Grid>
        <Grid item xs={9} className={styles.chatBox}>
          <div className={styles.chatTop}>
            <div className={styles.chatHeader}>
              <div className={styles.headerUser}>
                <Avatar
                  sx={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid #cccccc",
                    cursor: "pointer",
                  }}
                  src={avt}
                ></Avatar>
                <div className={styles.userInfo}>
                  <h4 style={{ color: "#121212" }}>{name}</h4>
                  <p style={{ fontSize: "14px", color: "#a1a1a1" }}>
                    {isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
              <div className={styles.headerTools}>
                <VideocamIcon
                  sx={{
                    fontSize: "28px",
                    marginRight: "24px",
                    color: "#212c6d",
                    "&:hover": { cursor: "pointer" },
                  }}
                ></VideocamIcon>
                <DensityMediumIcon
                  sx={{
                    fontSize: "28px",
                    marginRight: "24px",
                    color: "#212c6d",
                    "&:hover": { cursor: "pointer" },
                  }}
                ></DensityMediumIcon>
              </div>
            </div>
          </div>
          <div className={styles.chatBody} ref={chatBody}>
            {renderMessage}
          </div>
          <div className={styles.chatBot}>
            <ChatBubbleOutlineIcon
              sx={{
                fontSize: "32px",
                marginLeft: "12px",
                color: "#6ca2ff",
                "&:hover": { cursor: "pointer" },
              }}
            />
            <input
              className={styles.chatInput}
              type="text"
              value={message}
              onKeyDown={handleEnter}
              onChange={handleInput}
              style={{
                flex: "1",
                margin: "0 16px",
                outline: "none",
                backgroundColor: "#fff",
                fontSize: "16px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #cccccc",
              }}
            />
            <SendIcon
              sx={{
                fontSize: "32px",
                marginRight: "12px",
                color: "#6ca2ff",
                "&:hover": { cursor: "pointer" },
              }}
              onClick={handleSend}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChatPage;