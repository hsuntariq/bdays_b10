import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
import { RingLoader } from "react-spinners";

const FrontPage = () => {
  const api = "https://api.github.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    setLoading(true);
    const response = await fetch(api);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <RingLoader color="#36d7b7" />;
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {users?.map((item, index) => {
            return <SingleUser key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FrontPage;
