import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import  logo from '../img/kjsieit-logo.svg';
import AuthServices from "../services/AuthService";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import Select from "react-select";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};
export const skillOptions = [
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "ccomp", label: "Cloud Computing" },
  { value: "wdev", label: "Web Development" },
  { value: "adev", label: "App Development" },
  { value: "fdev", label: "Full Stack Development" },
];

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

  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
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
          width:"50%",
          marginTop:'150px',
          marginBottom:'150px'
        }}
      >
        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}><img alt="logo" src={logo} style={{width:'50%',height:'10%',borderRadius:10,marginBottom:"1.5rem"}} /></div>
        <div style={{ fontSize: "2rem", marginBottom: "1.5rem" ,justifySelf:"center",alignSelf:"center"}}>
          Welcome to Alumni Connect
        </div>
        <div style={{ marginBottom: "0.2rem", fontSize:'1.5rem', color:'#A02929', alignSelf:'flex-start' }}>
          Personal Details
        </div>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Full Name
        </div>
        <Input placeholder="Name"/>

        <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Year of Admission</div>
                <select name="yoa" id="yoa" style={{
                    
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Year</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                </select>
            </form>
            <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Year of Passing</div>
                <select name="yop" id="yop" style={{
                    
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Year</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                </select>
            </form>

        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Contact Number
        </div>
        <Input placeholder="Contact Number 1"/>

        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Alternate Contact Number
        </div>
        <Input placeholder="Contact Number 2"/>

        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Email ID
        </div>
        <Input placeholder="Please Enter Personal Email ID"/>

        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Skills and Expertise
        </div>
        <Select
          options={skillOptions}
          placeholder="Select skill"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Password
        </div>
        <Input placeholder="Enter Password"/>

        <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
          Further Education (Optional)
        </div>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Degree Persued
        </div>
        <Input placeholder="Degree Persued"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Field
        </div>
        <Input placeholder="Field"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            University
        </div>
        <Input placeholder="University"/>
        <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Year of Admission</div>
                <select name="yoa" id="yoa" style={{
                    
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Year</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                </select>
            </form>
            <form action="#">
                <div style={{ marginBottom: "1.0rem", fontSize:'1.2rem', color:'var(--primary)', alignSelf:'flex-start', marginTop:"1.5rem" }}>Year of Passing</div>
                <select name="yop" id="yop" style={{
                    
                    borderRadius:5,
                    width:"17rem",
                    height:"2.0rem",
                    color:"gray"
                }}>
                    <option value="select">Select Year</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                </select>
            </form>
        <div style={{ marginBottom: "1.5rem", fontSize:'1.5rem', color:'#A02929', alignSelf:'flex-start', marginTop:"1.5rem" }}>
          Work Details
        </div>
        
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Organization Name
        </div>
        <Input placeholder="Organization Name"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Organization Address
        </div>
        <Input placeholder="Organization Address"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Organization Website
        </div>
        <Input placeholder="Organization Website"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Designation
        </div>
        <Input placeholder="Designation"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Company Contact
        </div>
        <Input placeholder="Company Contact"/>
        <div style={{ 
          marginBottom: "1.0rem", 
          fontSize:'1.2rem', 
          color:'var(--primary)', 
          alignSelf:'flex-start', 
          marginTop:"1.5rem" }}>
            Past Experience
        </div>
        <Input placeholder="Past Experience"/>
        <div style={{display:'flex', marginTop:'2rem',justifyContent:"center",alignSelf:"center"}}> 
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
