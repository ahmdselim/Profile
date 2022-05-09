import React from "react";
import Typical from "react-typical";
// import Emoji from "a11y-react-emoji";

const Home = () => {
  return (
    <section className="home">
      <div className="darkAll">
        <h3>Welcome</h3>
        <h2>
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "I`m a developer 👩‍💻",
              2000,
              "I`m a designer 💻",
              2000,
              `I Do Freelancing  💻`,
              2000,
            ]}
          />
        </h2>
        <p className="paragraph">based in Cairo, Egypt</p>
        <a
          className="hireMe"
          style={{ color: "#FFF", textDecoration: "none" }}
          href="mailto:ahmdhassaneg@gmail.com"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Home;
