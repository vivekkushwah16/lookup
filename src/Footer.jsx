import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
    const Footer = () => {
        return (
        <>
         <footer className="w-100 p-3 mb-2 bg-secondary text-white d-block ">
            <div className="container text-left">
            <br/>
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-6 text-left">
                        <h4 className="text-dark">Example</h4>
                        <p className="text-dark fs-5">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis provident
                        rerum ipsa vero sapiente dolore, qui voluptatibus.</p>
                        <hr/>

                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a exact to="/services" 
                            className="card-link text-dark">
                            <h4>Services</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a href="#home" className="card-link text-dark fs-5">Machine learning</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">
                        Data Analytics</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">
                        Software Development</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">
                        App Development</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto fs-5">
                        <li className="d-block">
                        <a exact to="/About" className="card-link text-dark">
                        <h4>About</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark">Who are we ?</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark">Why us ?</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark">
                        Wordpress Development</a>
                        </li>
                       
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <ul className="list-unstyled mx-auto">
                        <li className="d-block">
                        <a exact to="/AboutSection" className="card-link text-dark">
                        <h4>Terms</h4>
                        </a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5" >
                        Terms and condition</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">Privacy Policy</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">
                        Team</a>
                        </li>
                        <li className="d-block">
                        <a exact to="/" className="card-link text-dark fs-5">
                        Contact us</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-6">
                        <h4 className="text-dark">Subscribtion </h4>
                        <p className="text-dark fs-5">Get news letters and updates</p>
                        <form className="input-group-append">
                        <input type="email" className="input-group-text
                        bg-white text-left text-dark rounded-0 w-75"
                        placeholder="Enter Email"/>
                        <button type="button" class="btn btn-dark">Submit</button>
                        </form>
                        <p className="text-dark d-inline-block  ">Follow us : </p>
                        <a exact to="/" className="my-3 mx-1 d-inline-block fs-2 text-dark">
                        <FaFacebook/>
                        </a>
                        <a exact to="/" className="my-3 mx-1 d-inline-block fs-2 text-dark">
                       <AiOutlineLinkedin/>
                        </a>
                        <a exact to="/" className="my-3 mx-1 d-inline-block fs-2 text-dark">
                       <AiFillTwitterCircle/>
                        </a>
                    </div>
                </div>
                 <br/>
            <div className="text-center">
                    <p className="text-dark d-inline-block mx-2">

                    Copyright @Exapmle 2021-2030</p>
                   
            </div>
        </div>
    </footer>
                </>);
    };
export default Footer;    