import React from 'react'
import Card from '../Card/Card'

const CardList = ( {data} ) => {
  console.log('CardList:' + data)
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
           {data.map((item) => (
            <Card key={item.id} character={item} />
           ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CardList