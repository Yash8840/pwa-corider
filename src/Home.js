import React, { useCallback, useEffect, useRef, useState } from "react";
import BatteryAlertIcon from "@mui/icons-material/BatteryAlert";
import WifiIcon from "@mui/icons-material/Wifi";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WestIcon from "@mui/icons-material/West";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { fetchChats } from "./api/fetchChats";
import ChatItem from "./components/ChatItem";

const Home = () => {
  const [chats, setChats] = useState();
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  console.log(isLoading);

  const fetchChatHandler = useCallback(async () => {
    setIsLoading(true);
    const result = await fetchChats(page);

    if (chats) {
      setChats((prev) => {
        return prev.concat(result.data.chats);
      });
    } else {
      setChats(result.data.chats);
    }
    setIsLoading(false);
    console.log(result.data.chats);
  }, [page]);

  useEffect(() => {
    fetchChatHandler();
  }, [fetchChatHandler]);

  const changePageHandler = () => {
    setPage((prev) => {
      return prev + 1;
    });
    console.log(page);
  };

  // (THIS IS INFINITE SCROLLING IMPLEMENTATION)
  // Due to the IntersectionObserver API , as soon as the div containing the spinner/loader gets into visual Viewport, we apply "PAGINATION" and fetch the api again with a different page Number
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible+`");
          changePageHandler();
        }
      },
      { threshold: 1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  console.log(ref);
  console.log(page);

  return (
    <div className="container">
      <div className="top-section">
        <span className="time">9:23</span>
        <span className="icons">
          <SignalCellularAltIcon />
          <WifiIcon />
          <BatteryAlertIcon />
        </span>
      </div>

      <div className="header-section">
        <div className="trip bold">
          <span>
            <WestIcon />
            Trip 1
          </span>
          <span>
            <NoteAltOutlinedIcon />
          </span>
        </div>
        <div className="igi-airport">
          <div className="left">
            <AccountCircleOutlinedIcon />
            <span style={{ color: "#606060" }}>
              From <span className="bold">IGI Airport , T3 </span>To{" "}
              <span className="bold">Sector 28</span>
            </span>
          </div>
          <div className="right">
            <MoreVertOutlinedIcon />
          </div>
        </div>
      </div>
      <hr />

      <div className="chat-section">
        <div className="date-time">
          <div>
            <hr />
          </div>
          <span style={{ color: "#606060" }}>20 May, 2023</span>
          <div>
            <hr />
          </div>
        </div>
        {/* Chat starts here */}
        <div className="chats">
          {chats &&
            chats.map((item) => {
              return <ChatItem item={item} key={item.id} />;
            })}
        </div>

        <div ref={ref} className="loading">
          Loading...
        </div>
      </div>

      <div className="input-section">
        <input type="text" placeholder="Reply to @Rohit Yadav" />

        <div>
          <AttachFileIcon />
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default Home;
