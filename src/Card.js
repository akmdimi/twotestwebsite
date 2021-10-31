import React from "react";

const Card = ({ title="BasketBall",buttonText ="MyButton"}) => (
    <div class="card-body">
    <h5 class="card-title"> {title} </h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-success"> {buttonText} </a>
    </div>
)
export default Card;