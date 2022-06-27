import React, { Component } from "react";
import Questions from "../../components/Questions/Questions";
import "./Landing.scss";

class Landing extends Component {
  render() {
    return (
      <main>
        <section className="hero">
          <h1 className="hero__h1">Welcome to Canada</h1>
          <h2 className="hero__h2">Welcome to BMO</h2>
          <p className="hero__text">
            If you're new to Canada we can help you feel right at home.{" "}
          </p>
          <p className="hero__text">
            We offer banking services that can make starting your new life
            easier.
          </p>
        </section>
        <Questions route={this.props} />
      </main>
    );
  }
}

export default Landing;
