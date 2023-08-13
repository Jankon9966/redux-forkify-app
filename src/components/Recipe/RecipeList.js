import React from "react";

const RecipeList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.publisher}</p>
    </div>
  );
};

export default RecipeList;
