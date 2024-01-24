import ChatBox from "../components/ChatBox";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const url = import.meta.env.VITE_BASE_API_URL;

export default function Chat() {
  const location = useLocation();
  const targetUserName = location.pathname.split("/")[2];
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${url}/api/user/getuser/${targetUserName}`
        );
        if (response.data.length === 1) {
          setUserData(response.data[0]);
        } else {
          setUserData({ username: "Kullanıcı Bulunamadı" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData(null);
      }
    };

    if (targetUserName) {
      fetchUserData();
    }
  }, [targetUserName]);
  return (
    <div className="flex  justify-between w-full ">
      <ChatBox targetUser={userData} />
    </div>
  );
}
