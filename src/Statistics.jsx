import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
function Statistics() {
  return (
    <>
     <section id="statistics" className=" pt-3" >
         <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 3 :</span>  Learn Statistics
                                 </h1>
                                <p id="roadmap">Having a basic understanding of probability 
                                and statistics is important when it comes to
                                mastering Machine Learning.
                                Here is one of the best resources for that:
                                <a href="https://www.mathsbox.org.uk/twi/astats.pdf">
                                   <strong> Statistics Revision Notes By Mathbox</strong>
                                </a> 
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

export default Statistics;
