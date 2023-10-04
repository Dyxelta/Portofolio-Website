import React, {useState} from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const nameController = (event) => {
    setName(event.target.value)
  }
  const emailController = (event) => {
    setEmail(event.target.value)
  }
  const messageController = (event) => {
    setMessage(event.target.value)
  }

  return (
    <div name='contact' className='flex justify-center items-center w-full h-screen bg-bgblack p-4 font-roboto'>
        <motion.form method='POST' action="https://getform.io/f/c430a1f5-aefe-4899-a3e1-9f35ceb04e8c" className='flex flex-col max-w-[600px] w-full'
        initial='hidden'
        whileInView='visible'
        transition={{duration:1}}
        viewport={{once:true}}
        variants={{ hidden: {opacity:0, y:50},
                    visible: {opacity:1, y:0} }}
        >
            <div className='pb-8'>
                <h1 className='inline text-4xl font-bold border-b-4 border-primary text-offwhite'>Contact</h1>
                <p className='text-offwhite-dark py-4'>// Fill and send me the form below or shoot me an email //</p>
            </div>
            <input className='p-2 rounded' type="text" placeholder='Name' name="name" value={name} onChange={nameController}/>
            <input className='my-4 p-2 rounded' type="text" placeholder='Email' name="email" value={email} onChange={emailController}/>
            <textarea className='p-2 rounded' name="message" rows="10" placeholder='Message' value={message} onChange={messageController}></textarea>

            <button className='flex items-center text-offwhite border-primary border-2 px-4 py-3 my-8 mx-auto hover:bg-primary hover:text-bgblack duration-300 hover:scale-110 rounded ' disabled={!name || !email || !message} >Send</button>
        </motion.form>
    </div>
  )
}

export default Contact