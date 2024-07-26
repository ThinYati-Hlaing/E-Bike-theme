import React from 'react'
import { useGetQuery } from '../store/service/ApiService'
import ProductCat from './ProductCat';
import Contact from './Contact';

const Product = () => {
  const{ data} = useGetQuery();
  return (
    <div id="project" className=" w-screen pt-20 px-16 my-4">
      <div className=' py-5 justify-center items-center'>
      <h1 className=" lg:text-3xl text-2xl  py-10 text-center mx-auto rounded-md  text-slate-900 font-semibold tracking-wider">
          Best E-Bikes for your enjoyable rides
        </h1>

        <div className=' grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2'>
          {data?.data.map((bike) => (
            <ProductCat key={bike.id} bike={bike}/>
          ))}
        </div>

      </div>
      <Contact/>
    </div>
  )
}

export default Product