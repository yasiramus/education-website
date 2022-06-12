// home about Component

import Title from "../../components/title/Title";

// course card dummy data 
import { coursesCard } from "../../dummyData";

import OnlineCourses from "../courses/OnlineCourses";

const HomeAbout = () => {

  return (

    <>
      
      <section className="homeAbout">

        <div className="container">
          
          <Title subTitle="Our Courses" title="explore our latest courses online" />
          
          <div className="coursesCard">

            <div className="grid2">

              {coursesCard.slice(0, 3).map((val) => {
                
                return (

                  <div className="items" key={val.id}>

                    <div className="content" id="flex">

                      <div className="left">

                        <div className="img">

                          <img src={val.cover} alt={val.cover} />

                        </div>

                      </div>

                      <div className="text">

                        <h1>{val.coursesName}</h1>

                        <div className="rate">

                          <i className="fa fa-star"></i>

                          <i className="fa fa-star"></i>

                          <i className="fa fa-star"></i>

                          <i className="fa fa-star"></i>

                          <i className="fa fa-star"></i>

                          {/* this being hardcoded */}
                          <span>(5.0)</span>

                        </div>

                        <div className="details">

                          {/* this because i am fetching from the nested data from the course teacher key  */}
                          {val.courTeacher.map((detail, index) => (

                            <div key={index}>

                              <div className="box">

                                {/* image container for nested array of objects  */}
                                <div className="dimg">

                                  <img
                                    src={detail.dcover}
                                    alt={detail.dcover}
                                  />

                                </div>

                                {/* tutor name section */}
                                <div className="para">

                                  <h4>{detail.name}</h4>

                                </div>

                              </div>

                              <span>{detail.totalTime}</span>

                            </div>

                          ))}

                        </div>

                      </div>

                    </div>

                    <div className="price">

                      <h3>
                        {val.priceAll} / {val.pricePer}
                      </h3>

                    </div>

                    <button className="outline-btn">ENROLL NOW</button>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>

      {/* online course component being used here  */}
      <OnlineCourses />
      
    </>

  );
  
};

export default HomeAbout;
