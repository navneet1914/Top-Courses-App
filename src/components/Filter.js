import React from 'react';

function Filter(props) {
  const { filterData, category, setCategory } = props;

  function filterHandler(title) {
    setCategory(title);
  }




  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4'>
    {/* //  saare k saare filtered data ko map kr do and har ek filtered data k lie mai ek button chahta hu jisme uss filteredData ka jo content h usme se title store ho jaaae */}
    {/* //  data multiple pada hua h harr data k lie ek particular component ko render krwana chahta hu. For that we use map funcn */}
      {filterData.map((data) => (
        <button
          key={data.id}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white
            bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
          onClick={() => filterHandler(data.title)} //  yha data.title pass kia h taaki upar function me data k title k basis pe alag alag category bna sake. The category is set using setCategory
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;



