import React, { useEffect, useState } from "react";
import loginImg from "../../assets/others/authentication2.png";
import { Button, Form } from "react-bootstrap";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // checking captcha values
  const handleValidateCaptcha = (e) => {
    const captcha_value = e.target.value;
    if (validateCaptcha(captcha_value)) {
      setDisable(false);
    }
  };

  return (
    <>
      <div className="container-fluid bg-login d-flex justify-content-center align-items-center">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <img src={loginImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
              <h3 className="text-center fs-2 pb-3">Login</h3>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    style={{ padding: "0.7rem" }}
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email field is required</span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    style={{ padding: "0.7rem" }}
                    type="password"
                    placeholder="Enter Password"
                    {...register("password", {
                      pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
                      required: true,
                    })}
                  />
                  {errors.password && (
                    <span className="text-danger">
                      Please input at least one uppercase letter and a special
                      characters.
                    </span>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                  <Form.Label>Captcha</Form.Label>
                  <Form.Control
                    onBlur={handleValidateCaptcha}
                    style={{ padding: "0.7rem" }}
                    type="text"
                    placeholder="Write the captcha"
                  />
                  <Form.Label className="pt-2">
                    <LoadCanvasTemplate />
                  </Form.Label>
                </Form.Group>
                <Button
                  className="w-100 fw-bold text-white"
                  variant="primary"
                  disabled={disable}
                  type="submit"
                  style={{ padding: "0.7rem 0rem" }}
                >
                  Submit
                </Button>
              </Form>
              <div className="text-center pt-3">
                <Link
                  to={"/register"}
                  className="d-text fw-semibold text-decoration-none"
                >
                  New here? Create a new account
                </Link>
                <p className="pt-2">or sign in with</p>
                <div>
                  <Link className="pe-3 fs-4">
                    <FaGoogle />
                  </Link>
                  <Link className="fs-4">
                    <FaGithub />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
