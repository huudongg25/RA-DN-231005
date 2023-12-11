import React, { useState } from "react";

const LearnState = () => {
  const [count, setCount] = useState<any>([1, 2, 3]);
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    password:""
  });

  //   const updateCount = () => {
  //     setCount((prev: number[]) => [...prev, 4, 5]);
  //   };
    console.log(formData);

  const handleChangeValue = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={formData.username}
        name="username"
        onChange={handleChangeValue}
      />

      <input
        type="text"
        value={formData.address}
        name="address"
        onChange={handleChangeValue}
      />

      <input
        type="password"
        value={formData.password}
        name="password"
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default LearnState;
