import { useState } from "react";
import { TextField, Typography, Button, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
//   const [open, setOpen] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // try {
    //   const response = await fetch(
    //     userDetail,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(userDetails),
    //     }
    //   );

    //   const data = await response.json();
    //   setUserDetails({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     phone: "",
    //     password: "",
    //     confirmPassword: "",
    //   });

    //   setOpen(true);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <Box className="main-box">
        <Typography className="typography-text" gutterBottom variant="h5">
          Sign Up Here...
        </Typography>

        <Grid>
          <TextField
            className="grid-textfield"
            type="text"
            variant="filled"
            required
            label="Firstname"
            name="firstname"
            value={userDetails.firstname}
            onChange={handleInputChange}
          />
          <TextField
            className="grid-textfield"
            type="text"
            variant="filled"
            required
            label="Lastname"
            name="lastname"
            value={userDetails.lastname}
            onChange={handleInputChange}
          />
          <TextField
            className="grid-textfield"
            type="text"
            variant="filled"
            required
            label="Email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
          <TextField
            className="grid-textfield"
            type="text"
            variant="filled"
            required
            label="Phone"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
          />

          <TextField
            className="grid-textfield"
            type="text"
            label="Password"
            variant="filled"
            required
            name="password"
            value={userDetails.password}
            onChange={handleInputChange}
          />
          <TextField
            className="grid-textfield"
            type="text"
            variant="filled"
            required
            label="Confirm password"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleInputChange}
          />

          <Button
            type="submit"
            variant="contained"
            className="grid-textfield-btn"
            sx={{ background: "#3b5d50" }}
            onClick={(e: any) => handleFormSubmit(e)}
            disabled={
              !userDetails.firstname ||
              !userDetails.lastname ||
              !userDetails.email ||
              !userDetails.password ||
              !userDetails.phone
            }
          >
            Sign up
          </Button>
          <Typography
            className="text-already-have-aacount"
            gutterBottom
            variant="subtitle1"
          >
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Register;
