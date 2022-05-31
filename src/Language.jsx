import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import { AiTwotoneStar} from "react-icons/ai";

const Language =() => {
  return (
    <>
    <section id="language" className=" pt-3"> 
     <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 1 :</span>
                                 Pick a programming language & Get Started!</h1>
                                <p id="roadmap">The first step to start learning machine 
                                learning is to pick up a programming language. There
                                    are different programming languages in the market, 
                                    but the most suitable for machine learningare Python and R.
                                    I recommend Python.<br/><br/>
                                    <span className="text-secondary mx-1 fs-2 pt-1">
                                    <AiTwotoneStar className="text-dark" /> Why?</span><br/><br/>
                                    <ul className="text-primary" >
                                      <li>
                                      Because its popular, easy to
                                     learn and future-ready With Python,
                                      </li>
                                      <li>
                                      you can switch
                                     domains easily. Python offers popular frameworks like Django
                                      and Flask for backend development, Tkinter for GUI 
                                    development, Pygames for Game development, etc. 
                                      </li>
                                      <li>
                                      If you go with Python, you must learn sklearn for Machine 
                                    Learning. Sklearn is a modern machine learning 
                                    library written in Python.
                                      </li>
                                      <li>
                                      The best thing about sklearn is that most of the Machine 
                                    learning algorithms are written for you
                                    already.
                                      </li>
                                      <li>
                                    It has a lot of useful classes for 
                                    preprocessing your data for further analysis.
                                      </li>
                                    </ul><br/><AiTwotoneStar className="text-dark mx-2" />
                                    You should also look into the Tensorflow module, 
                                    which can help you build a neural network
                                      without many efforts!
                                    </p>
                            </div>   
                      </div>
                  </div>
                </div>
            </div>
    </section>       
    </>
  );
}

export default Language;
