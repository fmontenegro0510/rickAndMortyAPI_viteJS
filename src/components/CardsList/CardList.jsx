import React from 'react'
import Card from '../Card/Card'

const CardList = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default CardList