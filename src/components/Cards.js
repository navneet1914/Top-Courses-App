import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  

  const [likedCourses, setLikedCourses] = useState([]); //starting me koi v course liked nahi hai

  
  //ye jo function h getCourses wala vo saare courses ka data ek single array me daal k deta h sp that we can use map funcn over it
  // returns us a list of all courses received from the api response
  //see copy
  function getCourses() {
    if(category === "All"){
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  }

  else {
    // mai sirf specific category ka array pass krunga
    return courses[category]
 // indirectly courses k andar title pass hua h. Titles- Development, Business, Design, Lifestyle. Jo api tha uske andr present
 // data naam ka ek object tha uss data k andr present contents ko hmne sotre krwaya tha courses naam k variable me. usme present h Development, Business, Design, 
//  Lifestyle k andar k Cards. Un cards ko present krwa rhe hai using courses[category]. Ex- courses[Development] k andar 5 cards aaenge qki api ko jb json format me convert
// kia tb hume development object k andar 5 items dikhe the
  }
  }

  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {/* saare k saare data jo present h getCourses naam k function me usko map kra do and then saare k saare data k lie ek card create kr do */}
      {/* data multiple pada hua h harr data k lie ek particular component ko render krwana chahta hu. For that we use map funcn */}
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
