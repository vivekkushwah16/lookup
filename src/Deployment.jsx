import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
const Devployment=() =>{
  return (
    <>
    <section id="deployment" className=" pt-3" >
         <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 6 :</span>
                                   Learn Deployment
                                 </h1>
                                <p id="roadmap">
                                To host your machine learning models with a 
                                powerful backend, you will need to learn
                                frameworks like Django and Flask.
                                Docker and Kubernetes can be of great 
                                help if you want to ship and deploy your
                                 models quickly!
                                Streamlit is worthy of looking into if 
                                you wish to build custom web apps for machine
                                 learning anddata scienc
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

export default Devployment;
