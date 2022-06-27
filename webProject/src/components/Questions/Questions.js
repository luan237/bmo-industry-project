import React from "react";
import "./Questions.scss";

const questionsList = [
  {
    question: "How long have you been in Canada?",
    answer1: "I am moving to Canada soon",
    answer2: "Less than 6 Months",
    answer3: "Over 6 Months",
  },
  {
    question: "What language do you speak",
    answer1: "Chinese",
    answer2: "Punjabi",
    answer3: "Other",
  },
];
let responseAns = [];
class Questions extends React.Component {
  state = {
    answered1: false,
    answered2: false,
    submitted: false,
    name: "",
    email: "",
    phone: "",
  };
  handleClick = (e) => {
    e.preventDefault();
    responseAns.push(e.target.textContent);
    console.log(e.target.textContent);
    if (this.state.answered1 === false) {
      this.setState({
        answered1: true,
      });
    } else if (this.state.answered1 === true) {
      this.setState({
        answered2: true,
      });
    } else if (this.state.answered2 === true) {
      this.setState({
        submitted: true,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.route.history.push("/contact");
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <section className="questions">
        <h2 className="questions__title">
          Connect with a BMO agent who speaks{" "}
          <span className="questions__title--language">your language</span>
        </h2>
        <div className="questions__form">
          {!this.state.answered2 && (
            <>
              <h3 className="questions__form--title">
                {this.state.answered1
                  ? questionsList[1].question
                  : questionsList[0].question}
              </h3>
              <div
                className="questions__form--answer"
                onClick={this.handleClick}
              >
                {this.state.answered1
                  ? questionsList[1].answer1
                  : questionsList[0].answer1}
              </div>
              <div
                className="questions__form--answer"
                onClick={this.handleClick}
              >
                {this.state.answered1
                  ? questionsList[1].answer2
                  : questionsList[0].answer2}
              </div>
              <div
                className="questions__form--answer"
                onClick={this.handleClick}
              >
                {this.state.answered1
                  ? questionsList[1].answer3
                  : questionsList[0].answer3}
              </div>
            </>
          )}
          {this.state.answered2 && (
            <>
              <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
                <input
                  onChange={this.handleChange}
                  id="name"
                  type="text"
                  placeholder="Enter name here"
                  name="name"
                  className="form__input"
                  value={this.state.name}
                />

                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="johnsmith@gmail.com"
                  name="email"
                  className="form__input"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
                <label htmlFor="phone" className="form__label">
                  Phone Number{" "}
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="(000)000-0000"
                  name="phone"
                  className="form__input"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />

                <button
                  type="submit"
                  name="submit"
                  className="form__submit"
                  disabled={
                    this.state.name.length === 0 ||
                    this.state.email.length === 0 ||
                    this.state.phone.length === 0
                      ? true
                      : false
                  }
                >
                  CONTINUE
                </button>
              </form>
            </>
          )}
        </div>
        <div className="questions__image"></div>
      </section>
    );
  }
}

export default Questions;
