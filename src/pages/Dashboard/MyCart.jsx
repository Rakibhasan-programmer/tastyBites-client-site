import React from "react";
import useCart from "../../hooks/useCart";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  // total sum
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  // handle delete
  const handleDelete = (id) => {
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
              // alert
              swal({
                title: "Good job!",
                text: "Items deleted successfully",
                icon: "success",
                button: "Ok",
              });
            }
          });
      }
    });
  };
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card bg-dark text-white mb-4">
            <div className="card-body">
              <h4>Total Order</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <p>{cart?.length}</p>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="card bg-dark text-white mb-4">
            <div className="card-body">
              <h4>Total Amount</h4>
            </div>
            <div className="card-footer d-flex align-items-center justify-content-between">
              <p>{total}</p>
              <div className="small text-white">
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* payment */}
      <div className="mb-2 d-flex justify-content-end">
        <Link to={"/dashboard/payment"}>
          <Button className="px-4" variant="dark">
            Pay
          </Button>
        </Link>
      </div>
      <Table striped bordered responsive hover size="lg" className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img style={{ height: "2rem" }} src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyCart;
