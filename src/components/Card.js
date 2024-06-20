import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler() {
    //logic
    if (likedCourses.includes(course.id)) {
      //pehle se like kia hua pda tha
      setLikedCourses((prev) =>
        prev.filter((cid) => {
          return cid !== course.id;
        })
      );
      toast.warning("Like Removed");
    } else {
      //pehle se like nahi hai ye course
      //insert krna h ye course liked courses me
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        //non-empty pehle se
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-lg overflow-hidden">
      <div className="relative">
        <img src={course.image.url}></img>

        <div>
          <div className="flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] absolute right-2 bottom-1">
            <button onClick={clickHandler}>
              {
                likedCourses.includes(course.id) ? 
                (<FcLike fontSize="1.75rem" />) : 
                (<FcLikePlaceholder fontSize="1.75rem" /> )
              }
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
        {
          course.description.length > 100 ?
           `${(course.description.substr(0,100))}...` : 
           (course.description)
        }   
        </p>
      </div>
    </div>
  );
};

export default Card;
