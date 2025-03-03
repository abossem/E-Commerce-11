import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState(null);

  async function userData() {
    try {
      const options = {
        url: "https://e-commerce-11-api.vercel.app/api/api/user",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      if (data.status == "success") {
        setUserInfo(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function logOut() {
    try {
      const options = {
        url: "https://e-commerce-11-api.vercel.app/api/api/logout",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let { data } = await axios.request(options);
      if (data.status == "success") {
        setToken(null);
        localStorage.removeItem("token");
        toast.success("You have logged out successfully!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  }

  useEffect(() => {
    userData();
    console.log(token);
  }, [token]);

  return (
    <UserContext.Provider
      value={{ token, setToken, userInfo, setUserInfo, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
}
export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
