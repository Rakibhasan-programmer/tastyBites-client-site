import React from "react";
import useCart from "../../hooks/useCart";
import { Button, Table } from "react-bootstrap";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // handle delete
  const handleDelete = (id) => {
    console.log(id);
    swal({
      title: "Are you sure",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <h3>Total Order: {cart?.length}</h3>
      <Table striped bordered hover size="sm" className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <img style={{ height: "2rem" }} src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Button onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyCart;
