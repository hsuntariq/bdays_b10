import React from "react";

const SingleProduct = ({ title, price, rating, images, tags, stock }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div
          style={
            {
              // height: 450,
            }
          }
          className="card my-2 border-0 shadow-lg rounded-4"
        >
          <img
            width={"100%"}
            height={300}
            style={{ objectFit: "cover" }}
            src={images[0]}
            alt=""
          />
          <div className="details p-4">
            <h5>{title}</h5>
            <h6>${price}</h6>

            {Array.from({ length: Math.round(rating) }).map((_, index) => {
              return "⭐";
            })}
            <div className="d-flex gap-3 my-1">
              {tags?.map((item, index) => {
                return (
                  <h6 className="text-capitalize text-secondary">{item}</h6>
                );
              })}
            </div>

            <p className="text-secondary my-1">
              {stock < 10 ? (
                <span className="text-danger">
                  Low on Stock, only {stock} remaining
                </span>
              ) : (
                <>
                  <span className="text-info">{stock} available</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
