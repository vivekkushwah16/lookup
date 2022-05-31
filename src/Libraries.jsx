import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
import { AiFillCaretRight} from "react-icons/ai";
const Libraries=() =>{
  return (
    <>
     <section id="libraries" className=" pt-3" >
         <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 5 :</span>
                                 Learn Python Libraries
                                 </h1>
                                <p id="roadmap">
                                    <ul id="list4" className="text-primary">
                                        <li> <AiFillCaretRight className="text-dark MX-1"/>
                                        Learn Numpy
                                        </li>
                                        <li> <AiFillCaretRight className="text-dark MX-1"/>
                                        Learn Pandas
                                        </li>
                                        <li> <AiFillCaretRight className="text-dark MX-1"/>
                                        All this will be helpful to debug the python/sklearn code
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

export default Libraries;
