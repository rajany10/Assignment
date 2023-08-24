import * as React from "react";
import {useNavigate} from 'react-router-dom';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function BasicTextFields() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    console.log(event.target.value);
    setPhone(event.target.value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  const handleClick = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('number', phone);
    localStorage.setItem('email', email);
    if (name && phone && email) {
        navigate('/page');
    } else {
        navigate('/')
        alert("Please fill all the information.")
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 7, width: "25ch", display: "grid" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-basic"
        label="Name"
        variant="outlined"
        helperText="Please enter your name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        required
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        helperText="Please enter your phone number"
        value={phone}
        onChange={handlePhoneChange}
      />
      <TextField
        required
        id="outlined-basic"
        label="Email"
        variant="outlined"
        helperText="Please enter your email"
        value={email}
        onChange={handleEmailChange}
      />
      <Button variant="contained" size="large" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}
