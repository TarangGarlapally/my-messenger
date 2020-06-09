import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sendtext from "./Sendtext";
import Chatbox from "./Chatbox";
import Profile from "./Profile";
import About from "./About";

function App() {
 

  return (
    <div>
      <Header />
      <div class="col-md-4">
      <About />
      </div>
      <div class="col-md-5">
      <Chatbox />
      <Sendtext />
      </div>
      <div class="col-md-3">
      <Profile />
      </div>

      <Footer />
    </div>
  );
}

export default App;
