import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import  logo from '../img/kjsieit-logo.svg';
import AuthServices from "../services/AuthService";

const Register = () => {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  let timeID = useRef(null);

  useEffect(()=>{
    return() => {
      clearTimeout(timeID);
    }
  }, []);

  const register = () => {
    if(!username || !password){
      setMessage("Enter username and password");
      return;
    }
    AuthServices.register({username, password}).then(data=> {
      
    })
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",

      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#D9D9D9",
          flexDirection: "column",
          padding: "2rem",
          borderRadius: "10px",
          alignItems: "center",
          marginTop:'150px',
          marginBottom:'150px'
        }}
      >
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}><img alt="logo" src={logo} style={{width:'50%',height:'10%',borderRadius:10,marginBottom:"1.5rem"}} /></div>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Welcome to Alumni Connect
        </div>
        <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start' }}>
          Personal Details
        </div>
        <Input placeholder="Name"/>
        <Input placeholder="Year of Admission"/>
        <Input placeholder="Year of Passing"/>
        <Input placeholder="Contact Number 1"/>
        <Input placeholder="Contact Number 2"/>
        <Input placeholder="Email ID"/>
        <Input placeholder="Skills and Expertise"/>
        <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
          Further Education (Optional)
        </div>
        <Input placeholder="Degree Persued"/>
        <Input placeholder="Field"/>
        <Input placeholder="University"/>
        <Input placeholder="Year of Admission"/>
        <Input placeholder="Year of Passing"/>
        <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>
          Work Details
        </div>
        <Input placeholder="Organization Name"/>
        <Input placeholder="Organization Address"/>
        <Input placeholder="Organization Website"/>
        <Input placeholder="Designation"/>
        <Input placeholder="Company Contact"/>
        <Input placeholder="Past Experience"/>
        <div style={{display:'flex', marginTop:'2rem'}}> 
            <button
                style={{
                    minWidth: "200px",
                    border: "none",
                    backgroundColor: "var(--primary)",
                    padding: "0.5rem",
                    color: "var(--white)",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    marginRight:'1rem'
                }}
                onClick={register}
                >
                Submit
            </button>
            <button
                style={{
                    minWidth: "200px",
                    border: "none",
                    backgroundColor: "var(--primary)",
                    padding: "0.5rem",
                    color: "var(--white)",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    marginLeft:'1rem'
                }}
                >
                Reset
            </button>
        </div>
        <Link to="/">Login Instead</Link>
      </div>
    </div>
  );
};

export default Register;
