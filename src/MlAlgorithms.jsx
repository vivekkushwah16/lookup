import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import { AiFillCaretRight} from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
const MlAlgorithms=() => {
  return (
    <>
    <section id="mlalgorithms" className=" pt-3" >
     <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 4 :</span>  
                                 Learn Core ML Algorithms
                                 </h1>
                                <p id="roadmap">
                                    <h3>
                                    <AiFillCaretRight className="text-primary MX-1"/>
                                    Once you have some idea of using sklearn after learning python, you should start looking into
                                    how these machine learning algorithms work.
                                    While using sklearn, a ML Algorithm is a black box written by the sklearn devleopers.
                                    In order to get an idea of how these Machine learning algorithms work from within, look into:
                                    </h3>
                                    <ul id="list4">
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    Gradient Descent
                                    </li>
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    Supervised vs Unsupervised learning
                                    </li>
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    slope
                                    </li>
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    Reinforcement Learning
                                    </li>
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    Basic Linear Regression
                                    </li>
                                    <li> <AiFillCaretRight className="text-dark MX-1"/>
                                    Working of all such similar models
                                    </li>
                                    <li><AiFillCaretRight className="text-dark MX-1"/>
                                    Clustering
                                    </li>
                                    </ul>
                                    <p>
                                    An amazing resource to learn about all this is a 
                                    book called “Hands-on ML with Scikit learn and
                                    tensorflow.”
                                    </p>
                                    <h3>
                                        <strong><BiChevronRight className="text-primary MX-1"/>
                                        How to read a book
                                        </strong>
                                    </h3>
                                    <ul id="list4"> 
                                        <li><AiFillCaretRight className="text-dark MX-1"/>
                                        Schedule your reading time
                                        </li>
                                        <li><AiFillCaretRight className="text-dark MX-1"/>
                                        Try to turn the pages and look for exercise-questions
                                        </li>
                                        <li><AiFillCaretRight className="text-dark MX-1"/>
                                        Now try to find the answers to those questions while reading
                                        </li>
                                        <li><AiFillCaretRight className="text-dark MX-1"/>
                                        These are the points author of the book wants you to               
                                        </li>
                                    </ul>
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

export default MlAlgorithms;
