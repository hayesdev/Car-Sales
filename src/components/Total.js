import React from "react";

const Total = props => {
  // used a .reduce array method to at to the car's initial value - every time the onClick runs on the addItem button the value updates props.car.price
  return (
    <div className="content">
      <h4>
        {`Total Amount: $${props.car.features.reduce((acc, value) => {
          console.log(acc, value);
          return acc + value.price;
        }, props.car.price)}`}
      </h4>
    </div>
  );
};

export default Total;
