import React from 'react';
import { AiOutlineArrowRight} from "react-icons/ai";
const Algebra=() => {
  return (
    <>
    <section id="algebra" className=" pt-3">
     <div className="container mt-lg-4  my-5 border border-gray bg-dark">
                <div className="my-5 mt-5" >
                  <div className="row my-3 ">
                      <div className="col-10  mx-auto   ">
                            <div className=" row my-5 border  border-gray bg-light my-auto">
                                 <h1 className="intro my-3"><span className="text-dark mx-2">step 2 :</span> Learn Linear Algebra
                                 </h1>
                                <p id="roadmap"><ul id="list2">
                                  <li>
                                  You should learn Linear Algebra if
                                 you wish to master Machine Learning and become a pro!
                                  </li>
                                  <li>
                                  This is essential because if you want to 
                                    tune your models with maximum flexibility, you need to
                                    know how they work, and knowing linear algebra is a must for that!
                                    When you start, you should focus on Step 1, 
                                    and while you are following step 1, you can begin
                                    learning Linear Algebra parallelly. 
                                  </li>
                                  <li>
                                  This is what I call the parallel conquering technique.
                                    You start two similar things parallelly, focusing on
                                     the first and keeping relatively less priority on
                                    the other tasks.
                                  </li>
                                  <li>
                                  This can help you keep the enthusiasm 
                                    and the motivation up.
                                   
                                  </li>
                                </ul>
                                    One of the resources I found very helpful for 
                                    revisiting linear algebra concepts was 
                                    this. <a href="http://www.maths.qmul.ac.uk/~pjc/notes/linalg.pdf">pdf notes</a>
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

export default Algebra;
