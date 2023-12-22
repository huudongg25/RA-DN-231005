import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state: any) => state.user);

  const [state, setState] = useState<any>(null);
    console.log(data);
  useEffect(() => {
    const handleGetUser = async () => {
     try {
        const userService = new UserService();
        const response = await userService.getInformation(data.data?.user?.id);
        setState(response.data);
     } catch (error) {
        alert(error)
     }
    };

    handleGetUser();
  }, []);

  return (
    <div>
      <h1>Name : {state?.email}</h1>
      <h1>Address : {state?.address}</h1>
    </div>
  );
};

export default Profile;
