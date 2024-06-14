import React from "react";

const SingleUser = ({ login, avatar_url }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card text-capitalize text-center my-2">
          <img width={"100%"} height={"100%"} src={avatar_url} alt="" />
          <h5>{login}</h5>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
