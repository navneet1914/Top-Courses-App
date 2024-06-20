import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState([]); //courses is a state variable
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);//starting me category ko all se initialise krna h esilie filterData[0].title kia h

  // api fetch krne k lie ye funcn bna rhe h

  async function fetchData() {
    setLoading(true); //jb data fetch ho rha h setLoading ko true set kr do
    try {
      const result = await fetch(apiUrl);
      const output = await result.json();

      // save data into a variable
      setCourses(output.data); //courses variable me poora url jo json format me value dia h uska content h
    } catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false); //jb data fetch ho jaae setLoading ko false kr do set
  }

  // ek baar hi render krwana h pehle render pe bs api call kr k
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-bgDark2 min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses}
             category={category}  /> //category eslie pass ki h taaki jis chiz ki category h usi se related cards hume dikhana h. Category k andar humne already data k title ko store krwa dia and data ka jo title hoga wahi uska category hoga...
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
