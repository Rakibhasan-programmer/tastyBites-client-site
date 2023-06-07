import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const img_hosting_token = "40d978a01cf2746f99f6f7855fe4dc8c";
const AddItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data, e) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        console.log(imageResponse);
        if (imageResponse?.success) {
          const imageUrl = imageResponse?.data?.display_url;
          const newItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: imageUrl,
          };
          console.log(newItem);
        }
      });

    // reseting
    e.target.reset();
  };
  return (
    <div className="py-3">
      <SectionTitle heading={"ADD AN ITEM"} subHeading={"What's new"} />
      {/* forms */}
      <Form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
        <Form.Group className="mb-3" controlId="RecipeName">
          <Form.Label>Recipe Name*</Form.Label>
          <Form.Control
            style={{ padding: "0.5rem" }}
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">Recipe Name field is required</span>
          )}
        </Form.Group>
        <div className="d-flex">
          <div className="w-50 me-3">
            <Form.Label>Category*</Form.Label>
            <Form.Select
              style={{ padding: "0.5rem" }}
              aria-label="Default select example"
              {...register("category", { required: true })}
            >
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Dessert</option>
            </Form.Select>
            {errors.category && (
              <span className="text-danger">Recipe Name field is required</span>
            )}
          </div>
          <div className="w-50">
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price*</Form.Label>
              <Form.Control
                style={{ padding: "0.5rem" }}
                type="number"
                placeholder="price"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <span className="text-danger">Price field is required</span>
              )}
            </Form.Group>
          </div>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Recipe*</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("recipe", { required: true })}
          />
          {errors.recipe && (
            <span className="text-danger">Recipe field is required</span>
          )}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image*</Form.Label>
          <Form.Control
            type="file"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-danger">Image field is required</span>
          )}
        </Form.Group>
        <Button
          className="w-100 fw-bold text-white"
          variant="primary"
          type="submit"
          style={{ padding: "0.5rem 0rem" }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddItem;
