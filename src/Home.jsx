import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"


const Home = () => {
        return (
        <> 
        <section id="home" className="pt-3">
            <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                 <h1 className="title">Complete Roadmap to master ML -
                  From Zero to Pro</h1>
                  <hr className="line mx-auto"/>
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                        <div className="row border my-5 border-gray bg-light">
                          <h1 className="intro my-3">Introduction of ML</h1>
                          <div className="col-md-6 pt-lg-0
                                                order-1
                                                d-block 
                                                order-lg-1 d-flex 
                                                justify-content-center 
                                                flex-column">
                              <p id="intro-p">Machine learning (ML) is the study of computer algorithms 
                              that improve automatically through experience and by the use of data. 
                              It is seen as a part of 
                              artificial intelligence. Machine learning algorithms build a 
                              model based on sample data, known as "training data", in order 
                              to make predictions or decisions without being explicitly programmed 
                              to do so.</p>
                          </div>
                          <div className="col-md-6 
                                                order-2 
                                                order-lg-2 
                                                 my-auto">  
                                    <img src="https://www.edjio.com/images/course-logo/machine-learning.png"
                                    className="img-fluid" 
                                    alt="image" />
                            </div>
                         
                        </div>
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3">Roadmap of ML</h1>
                                <p id="roadmap"> I am talk about the complete machine learning roadmap for beginners. This post is
                                going to be a bit different.
                                I won’t be telling you about the usual stuff and courses but will be walking you through the
                                realistic events that will happen while you are on your ML journey.
                                I will discuss a personal secret technique, which I call the <strong>Parallel 
                                Conquering Technique.</strong>  One of the reasons beginners get confused when it comes to learning machine learning is that
                                they don’t know what to learn from where and how? There are just too many options for
                                courses, books, and ML algorithms.
                                I am going to share a set of steps that you should take to master Machine learning.</p>
                            </div>   
                      </div>
                  </div>
                </div>
            </div>
        </section>
        </>
        );
    };
export default Home;    