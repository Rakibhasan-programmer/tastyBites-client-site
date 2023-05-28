import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // handle cart
  const handleCart = (item) => {
    // console.log(item);
    if (user) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            swal({
              title: "Good job!",
              text: "Order added to the cart Successfully",
              icon: "success",
              button: "ok",
            });
          }
        });
    } else {
      swal({
        title: "Please Login to order the food",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("/login", { state: { from: location } }, { replace: true });
        }
      });
    }
  };
  return (
    <div className="col-md-4 text-center">
      <Card className="shadow border-0">
        <Card.Img variant="top" src={image} className="img-fluid" />
        <Card.Body className="pb-4">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="fw-light pt-2">
            {recipe.slice(0, 80)}..
          </Card.Text>
          <Card.Text>${price}</Card.Text>
          <Button variant="dark" onClick={() => handleCart(item)}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
