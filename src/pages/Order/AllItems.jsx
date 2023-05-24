import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard";
import { useParams } from "react-router-dom";

const AllItems = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const categoryIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(categoryIndex);
  // getting data from custom hook
  const [menu] = useMenu();
  // filtering data
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div className="container py-5">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel>
          <div className="container">
            <div className="row g-4 py-4">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row g-4 py-4">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row g-4 py-4">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row g-4 py-4">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container">
            <div className="row g-4 py-4">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllItems;
