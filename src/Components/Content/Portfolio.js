import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import editorial from "./images/editorial.jpg";
import Quiz from "./images/Quiz.png";
import inventoryApp from "./images/inventoryApp.png";
import cartComponent from "./images/cartComponent.webp";
import yanfaa from "./images/yanfaa.webp";
import royalCup from "./images/royalCup.jpg";
import "react-tabs/style/react-tabs.css";

const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const data = [
    {
      url: "https://github.com/ahmdselim/Editorial",
      name: "Editorial",
      category: "component",
      image: editorial,
    },
    {
      url: "https://ahmdselim.github.io/QuizApp",
      name: "Quiz App",
      category: "component",
      image: Quiz,
    },
    {
      url: "https://github.com/ahmdselim/inventory-app",
      name: "Inventory App",
      category: "component",
      image: inventoryApp,
    },
    {
      url: "https://ecommercecart-fd1de.web.app",
      name: "Ecommerce Cart",
      category: "component",
      image: cartComponent,
    },
    {
      url: "https://github.com/ahmdselim/yanfaa-site",
      name: "Yanfaa Site",
      category: "site",
      image: yanfaa,
    },
    {
      url: "https://royalcup-f301f.web.app/",
      name: "Royal Cup Coffee",
      category: "site",
      image: royalCup,
    },
  ];
  return (
    <section id="Portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <h2>My Work</h2>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Components</Tab>
          <Tab>sites</Tab>
        </TabList>
        <TabPanel>
          <div className="sites">
            {Object.keys(data).map((sites, i) => (
              <div key={i}>
                <a href={data[sites].url}>
                  <img src={data[sites].image} />
                </a>
                <a href={data[sites].url}>
                  <p>{data[sites].name}</p>
                </a>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="sites">
            {Object.keys(data).map((sites, i) =>
              data[sites].category === "component" ? (
                <div key={i}>
                  <a href={data[sites].url}>
                    <img src={data[sites].image} />
                  </a>
                  <a href={data[sites].url}>
                    <p>{data[sites].name}</p>
                  </a>
                </div>
              ) : null
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="sites">
            {Object.keys(data).map((sites, i) =>
              data[sites].category === "site" ? (
                <div key={i}>
                  <a href={data[sites].url}>
                    <img src={data[sites].image} alt={data[sites].name} />
                  </a>
                  <a href={data[sites].url}>
                    <p>{data[sites].name}</p>
                  </a>
                </div>
              ) : null
            )}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default Portfolio;
