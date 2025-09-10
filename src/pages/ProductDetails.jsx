import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import productimg from "../assets/pr10.png"
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
 const {id}= useParams()
  let [singleData,setSingleData] = useState({})

  let getSingleData = ()=>{
    axios.get(`https://dummyjson.com/products/${id}`).then ((response)=>{
       setSingleData(response.data)

    })
  }
  useEffect (()=>{
    getSingleData()
  },[])
  console.log(singleData);
  
  return (
    <div>
       
       <Container>
        <div className="pt-[152px] pb-[339px]">
           <div className="flex flex-wrap justify-between gap-5">
            <img className='w-[45%]' src={productimg} alt="" />
            <img className='w-[45%]' src={productimg} alt="" />
             <img className='w-[45%]' src={productimg} alt="" />
            <img className='w-[45%]' src={productimg} alt="" />
           </div>
           <div className="mt-[49px]">
            <h4  className='font-dm text-[39px] font-bold text-primary'>Product</h4>
           </div>
         <div className="flex space-x-[25px] items-center mt-[15px] mb-[21px]">
            <div className='flex text-[#ffd881] items-center gap-x-1'>
            < FaStar/>
            < FaStar/>
            < FaStar/>
             < FaStar/>
              < FaStar/>
           </div>
           <div className="">
            <p className='text-[14px] text-secondary'>1 Review</p>
           </div>
         </div>
         <div className="flex space-x-[22px] items-center">
          <p className='text-secondary'><del>88.00</del></p>
          <p className='font-bold text-[20px]'>$44.00</p>
         </div>
         <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>
         <div className='flex space-x-[53px] items-center mt-[30px]'>
          <p className='font-bold text-primary'>Color:</p>
          <div className='flex space-x-[15px] items-center'>
            <div className="h-[20px] w-[20px] rounded-full bg-[#CDCDCD]"></div>
            <div className="h-[28px] w-[28px] rounded-full bg-[#FF8686]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#E6F7D4]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#F1F1F1]"></div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#979797]"></div>
          </div>
          
         </div>
           <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>Size:</p>
          <div>

            <select className='border-2 border-[#F0F0F0] px-[21px] py-1 text-secondary'>
              <option value="">S</option>

            </select>
          </div>
          
         </div>
           <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>QUANTITY:</p>
          <div className='flex items-center border-2 border-[#F0F0F0] px-[21px] py-1 space-x-[35px] text-secondary'>
                 <p>-</p>
                 <p>1</p>
                 <p>+</p>
          </div>
          
         </div>
          <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>

             <div className='flex space-x-[53px] items-center my-[30px]'>
          <p className='font-bold text-primary'>STATUS:</p>
          <p className='text-sec'>IN STOCK</p>
          </div>

      
          <div className=" space-x-[20px]">
            <button className='py-4 px-[40px] border-2 border-primary font-bold text-primary hover:bg-primary hover:text-white cursor-pointer transititon duration-200 ease-in-out'>Add to Wish List </button>
              <button className='py-4 px-[40px] border-2 border-primary font-bold text-primary  hover:bg-primary hover:text-white cursor-pointer transititon duration-200 ease-in-out'>Add to Cart </button>
          </div>
           <hr className='w-[780px] text-[#D8D8D8] mt-[24px]'/>

           <div className='mt-[30px]'>
            <h3 className='font-bold text-[20px] text-primary'>Reviews</h3>
            <div className='mt-[10px]'>
              <p className='my-2'>Johon Forid</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, consequatur 
                dicta culpa sint vel mollitia sequi explicabo vero delectus illum excepturi
                 tempore alias adipisci recusandae officiis optio eos quae ut?</p>
            </div>
           </div>
        </div>
       </Container>
      
      </div>
  )
}

export default ProductDetails