import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sortable = ({ items, onSort, idField }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onSort(isChecked);
  };


  //Random Color

  const hRange = [0, 360];
  const sRange = [0, 100];
  const lRange = [0, 100];

  const getHashOfString = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    hash = Math.abs(hash);
    return hash;
  };

  const normalizeHash = (hash, min, max) => {
    return Math.floor((hash % (max - min)) + min);
  };
  
  const generateHSL = (name) => {
    const hash = getHashOfString(name);
    const h = normalizeHash(hash, hRange[0], hRange[1]);
    const s = normalizeHash(hash, sRange[0], sRange[1]);
    const l = normalizeHash(hash, lRange[0], lRange[1]);
    return [h, s, l];
  };

  const HSLtoString = (hsl) => {
    return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
  };

  const randomHex = Math.floor(Math.random() * 16777215).toString(16);


//end Random Color



  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <p className="text-l mt-2 text-gray-500 mb-8 w-full">
        {" "}
        Ordenar alfabéticamente:{" "}
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </label>
      </p>
      <div className="flex flex-wrap -m-2">
        {items.map((location) => (
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full" key={location.id}>
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div
                className= {`bg-[#E0E7FF]` + ' w-10 h-10 rounded-full inline-flex items-center justify-center text-[#6366F1]  text-xl font-bold  mr-2' }>
                {location.name.charAt(0)}
              </div>
              <div className="flex-grow">
              <Link to={`/ubicaciones/${location.id}`}>
                  <h2 className="text-gray-900 title-font font-medium">
                    {location.name} 
 
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Sortable;
