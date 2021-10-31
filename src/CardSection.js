import React from "react";
import Card from "./Card";
import Img from "./Img";

const CardSection = () =>(
    <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <div className="col-4">
          <div className="card" style={{width: "18rem"}}>
            <img
              src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="card-img-top"
              alt="..."/>
            <Card title="Hola" buttonText="CustomButton"/>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{width: "18rem"}}>
            <Img logo="src"/>
            <Card title="Cricket" buttonText="HeyMyButton"/>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{width: "18rem"}}>
            <img
              src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."/>
            <Card title="Football" buttonText="MyNewButton"/>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default CardSection;