import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">ClinicWire</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 bg-image mt-3 text-center">
          <div class="text-center main-buttons">
            <Link to="/login">
              <button class="btn" id="loginBtn">
                Login
              </button>
            </Link>
            <br />
            <br />
            <Link to="/signup">
              <button class="btn" id="signUpBtn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 about mt-3">
          <h2 className="text-center">About Us</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde id,
            ipsa eum explicabo numquam rerum molestiae a incidunt laborum
            provident minima quod consequuntur fuga tenetur vel aut tempora
            facilis mollitia. Ad iure exercitationem suscipit provident adipisci
            fugiat nihil voluptas, nobis temporibus laboriosam ullam cupiditate
            quo, dolorum magni tempore hic quaerat consectetur commodi modi
            iusto eos unde. Error repellat magni veniam sapiente nam iure
            dolores id accusamus necessitatibus magnam dolorem sint, corrupti
            dignissimos nisi quas saepe cupiditate voluptatibus hic modi
            reprehenderit explicabo recusandae tempore, dicta aliquam! Maxime
            repellat nihil aliquam excepturi modi provident veniam fuga quam
            consequuntur temporibus pariatur rem cumque dolorum quos, molestias
            officiis nesciunt minima placeat unde voluptate! Quas quis placeat
            totam consequatur, facere nobis consequuntur? Quaerat rem, ea beatae
            vero praesentium sed, fugit similique dolorum in nobis ullam!
            Corrupti fuga cumque corporis? Est earum similique eaque ut nam
            obcaecati! Qui, vero officia. Veniam officia unde tempora doloremque
            earum?
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
