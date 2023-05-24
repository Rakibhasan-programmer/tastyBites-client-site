import React from "react";
import { Button, Card } from "react-bootstrap";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="col-md-4 text-center">
      <Card className="shadow border-0">
        <Card.Img variant="top" src={image} className="img-fluid" />
        <Card.Body className="pb-4">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="fw-light pt-2">{recipe.slice(0, 80)}..</Card.Text>
          {/* <Card.Text>${price}</Card.Text> */}
          <Button variant="dark">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
