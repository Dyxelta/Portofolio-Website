import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex justify-center items-center w-full h-screen bg-bgblack p-4 font-roboto'>
        <form method='POST' action="https://getform.io/f/c430a1f5-aefe-4899-a3e1-9f35ceb04e8c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <h1 className='inline text-4xl font-bold border-b-4 border-primary text-offwhite'>Contact</h1>
                <p className='text-offwhite-dark py-4'>// Fill and send me the form below or shoot me an email //</p>
            </div>
            <input className='p-2 rounded' type="text" placeholder='Name' name="name" id="" />
            <input className='my-4 p-2 rounded' type="text" placeholder='Email' name="email" id="" />
            <textarea className='p-2 rounded' name="message" rows="10" placeholder='Message'></textarea>
            <button className='flex items-center text-offwhite border-primary border-2 px-4 py-3 my-8 mx-auto hover:bg-primary hover:text-bgblack duration-300 hover:scale-110 rounded'>Send</button>
        </form>
    </div>
  )
}

export default Contact