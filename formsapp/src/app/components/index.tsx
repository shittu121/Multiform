import React from 'react'
import Form1 from './Forms/Form1'
import Form2 from './Forms/Form2'
import Form3 from './Forms/Form3'
import Form4 from './Forms/Form4'
import Sidebar from './Sidebar/index'

const index = () => {
  return (
    <div>

        <div className="card flex rounded-lg lg:flex xxs:hidden md:flex sm:hidden m-auto bg-white my-18 mt-10  lg:w-[700px] md:w-full h-[30rem]">
            <div className="sidebar w-52 m-3">
                <Sidebar />
            </div>

            <div className="forms mt-10">
                <Form1 />
                <Form2 />
                <Form3 />
                <Form4 />
            </div>
          
        </div>
    </div>
  )
}

export default index
