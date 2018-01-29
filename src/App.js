import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { InputForm } from "./Components/InputForm";
import { JobDetails } from "./Components/JobDetails";
import { Preview } from "./Components/Preview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobDetails jobData={this.state.data} />
          <InputForm />
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
