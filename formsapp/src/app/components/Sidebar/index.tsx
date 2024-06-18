import React from 'react'
import Form1 from '../Forms/Form1'
import Form2 from '../Forms/Form2'
import Form3 from '../Forms/Form3'
import Form4 from '../Forms/Form4'

const index = () => {
  return (
    <div>
        <div className="firstSidebarContent mx-5 flex">
          <span id="stepIndicator1" className="circledefault border mt-6 text-[12px] pt-1">1</span>
          <div className="text-white mx-3 mt-5 text-[12px]">
            <span className="block font-normal text-gray-400 -mb-1">STEP 1</span>
            <span className="font-medium">YOUR INFO</span>
          </div>
        </div>
        <div className="secondSidebarContent mx-5 flex">
          <span id="stepIndicator2" className="circledefault border mt-6 text-[12px] pt-1">2</span>
          <div className="text-white mx-3 mt-5 text-[12px]">
            <span className="block font-normal text-gray-400 -mb-1">STEP 2</span>
            <span className="font-medium">SELECT PLAN</span>
          </div>
        </div>
        <div className="thirdSidebarContent mx-5 flex">
          <span id="stepIndicator3" className="circledefault border mt-6 text-[12px] pt-1">3</span>
          <div className="text-white mx-3 mt-5 text-[12px]">
            <span className="block font-normal text-gray-400 -mb-1">STEP 3</span>
            <span className="font-medium">ADD-ONS</span>
          </div>
        </div>
        <div className="fourthSidebarContent mx-5 flex">
          <span id="stepIndicator4" className="circledefault border mt-6 text-[12px] pt-1">4</span>
          <div className="text-white mx-3 mt-5 text-[12px]">
            <span className="block font-normal text-gray-400 -mb-1">STEP 4</span>
            <span className="font-medium">SUMMARY</span>
          </div>
        </div>
    </div>
  )
}

export default index
