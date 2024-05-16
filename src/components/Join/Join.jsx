import React, { useRef } from 'react'
import './Join.css'
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9d8lnsm', 'template_m9bwg3s', form.current, {
        publicKey: 'R1wt5zF8Z1esx47u1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    
  return (
   <div className="Join" id='join-us'>
    <div className="left-j">
        <hr />
        <div><span className='stroke-text'>Ready to</span><span>Level up</span></div>
        <div><span>your body</span><span className='stroke-text'>with us?</span></div>
    </div>
    <div className="right-j">
        {/* <form className="email-container" ref={form} onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter your Email Address here...'/>
            <button type='submit' className="btn btn-j">Join now</button>
        </form> */}
        <form ref={form} className=' email-container' onSubmit={sendEmail}>
            <input type="email" name='user_email' placeholder='Enter Your Email Address'/>
            <button className='btn btn-j'>Join Now</button>
        </form>
    </div>
   </div>
  )
}

export default Join