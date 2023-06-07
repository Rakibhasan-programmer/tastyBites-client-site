import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import swal from "sweetalert";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  // delete item
  const handleDelete = (item) => {
    swal({
      title: "Are you sure",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            // alert
            swal({
              title: "Deleted",
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
    <div className="py-3">
      <SectionTitle heading={"MANAGE ALL ITEMS"} subHeading={"Hurry Up"} />
      <Table striped bordered responsive hover size="lg">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Update</th>
            <th>Dalete</th>
          </tr>
        </thead>
        <tbody>
          {menu?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img
                  style={{ height: "2rem" }}
                  src={item.image}
                  alt="item image"
                />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>
                <Button variant="primary">
                  <FaTrash />
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item)}>
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

export default ManageItem;
