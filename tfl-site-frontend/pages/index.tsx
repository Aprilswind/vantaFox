import Header from "../components/Header";
import { motion } from "framer-motion";
import {FaDiscord} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa'
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-page-wrapper">
     <Header/>
     <div className="flex flex-col mt-[130px]">
      <div className="flex flex-wrap items-center ">
       <motion.div
       initial={{ opacity: 0, translateY: -10 }}
       whileInView={{ opacity: 1, translateY: 0 }}
       transition={{delay: 0.2}}
        className="justify-center h-[70vh] w-full flex items-center md:mx-auto md:flex-row flex-col">
   <div className="flex md:flex-row flex-col justify-center">
          <motion.img 
         initial={{ opacity: 0, translateY: -10 }}
         whileInView={{ opacity: 1, translateY: 0 }}
         transition={{delay: 0.2}}
         src="/vantafox.png" className="w-[200px] md:mt-0 md:mx-0 mx-auto mt-48 h-fit md:mr-5" />
<div className="flex flex-col">
       <h1 className="text-7xl text-vanta md:text-start text-center">VantaFox</h1>
       <h1 className="text-4xl dark:text-white md:text-start text-center">The best freelancing site</h1>
       <Link href="https://discord.gg/vantafox" className="md:mx-0 mx-auto mt-4 px-4 py-2 bg-vanta text-white w-fit rounded-lg flex text-2xl items-center"> <FaDiscord className="text-2xl mr-2 "/>Discord</Link>
       </div>
       </div>
       <iframe width="1280" height="720" src="https://www.youtube.com/embed/1EMVOeEzqpc?autoplay=1&mute=1" title="The centre of freelance, opportunities, networking & progress" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  className="rounded-2xl shadow-black shadow-2xl md:w-[600px] md:h-[350px] w-[400px] h-[350px] md:mx-4 py-2"></iframe>
       </motion.div>
       </div>
       
       <motion.div 
    initial={{ opacity: 0, translateX: -100 }}
    whileInView={{ opacity: 1, translateX: 0 }}
    transition={{delay: 0.2}}
    className='about__container flex flex-col items-center w-full mt-72 md:mt-20 '>
     <h1 className="text-5xl text-white">About Us</h1>
     
     <h2 className=" text-white text-lg font-poppins md:max-w-[1000px] bg-[#232324]/50 backdrop-blur-xl about__section rounded-lg px-6 py-4 text-center mt-6 ">⭐ VantaFox is the centre of freelance, networking, opportunities, progress & more...<br/><br/>

Looking to get a job done quickly? Or maybe hire someone for a long-term gig? Our freelancers is just what you need! With payments secured by ESCROW, negotiable rates, and experts in every field!<br/><br/>

If you’re someone who has a hobby or two, feel free to join us, and you can turn your passion into money! With our special beginner’s guide and our courses (with industry insights), you can step into the freelance world for free. It doesn’t hurt to make a few bucks in your spare time, does it?<br/><br/>

As a VantaFox user, you will also have access to different supportive categories, including self improvement. Featuring experts in various self improvement topics & occasional interactive lectures! At VantaFox, you can become the best version of yourself, which will always equip you with success in freelance. We believe in innovation; hence, our members are free to let us know of any suggestions/improvements they think we should consider.<br/><br/>

Did we mention that we also host fun games, events, and giveaways every now and then?<br/><br/>

Enter our server today and see how simple and exciting the world of freelance actually is!
Happy Freelancing!</h2>
<div className="gradient"></div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col items-center w-full mt-72 md:mt-20'>
     <h1 className="text-4xl text-white text-center">FAQ</h1>
    </motion.div>

    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>

  

     <h1 className="text-2xl my-3 text-white text-start">1. How To Get Started On <span className="text-vanta">VantaFox</span> ?</h1>
     <h1 className="text-xl my-3 text-white text-start">Join The Discord And View The Read Me Channel To Get Started.</h1>
    

    </motion.div>
    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>


     <h1 className="text-2xl my-3 text-white text-start">2. Where Can I Find <span className="text-vanta">Jobs </span>?</h1>
     <h1 className="text-xl my-3 text-white text-start">Look every few hours in the various jobs channel and also look-out for many of announcements regarding hiring oppurtunities, introduce yourself with your past work in the various channels this helps attract clients to you aswell, and being generally active in the server helps you find jobs much faster too !</h1>
    
    </motion.div>
    </div>

    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>


     <h1 className="text-2xl my-3 text-white text-start">3. Where Can I <span className="text-vanta">Hire</span> People ?</h1>
     <h1 className="text-xl my-3 text-white text-start">Join the discord and post your ads in the various job channels like paid-jobs, unpaid-work etc. we always recommend that you use the middleman system while hiring people for paid positions as it negates all possibility of scams. Even better you can open a ticket to submit a job directly to our team which will help you find the perfect candidate for you jobs near instantly with no risk of being scammed.</h1>
    
    </motion.div>

    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>


     <h1 className="text-2xl my-3 text-white text-start">4. What should I do after I <span className="text-vanta">Join</span> ?</h1>
     <h1 className="text-xl my-3 text-white text-start">First of all you should view the read me channel to get started. After that we recommend that you introduce yourself in the channel. If you are a freelancer looking to get hired you may include things like your portfolio, resume, past works, etc. Whereas, if you are a client you can open a ticket to talk directly to the team if you want to submit a job and can also post in the various job channels.</h1>
    
    </motion.div>
    </div>

    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
    <motion.div
      initial={{ opacity: 0, translateX: -50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>


     <h1 className="text-2xl my-3 text-white text-start">5. Does <span className="text-vanta">VantaFox</span> Take Any <span className="text-vanta">Fee</span> ?</h1>
     <h1 className="text-xl my-3 text-white text-start">We usually don&#39t take any fees for smaller/medium buget jobs.We do sometimes take some fees for jobs with a larger budget(around 2-3% at max)</h1>
    
    </motion.div>

    <motion.div
      initial={{ opacity: 0, translateX: 50 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{delay: 0.2}}
      className='flex flex-col rounded-md max-w-[600px] border-vanta border-4 border-double mx-auto px-8 bg-white/5 mt-36 md:mt-10'>


     <h1 className="text-2xl my-3 text-white text-start">6. What Can I Do At <span className="text-vanta">VantaFox</span> ?</h1>
     <h1 className="text-xl my-3 text-white text-start">Here at VantaFox, you can collaborate & network with successful individuals in every field of freelance, you can progress and become more employable and get access to daily job listings.</h1>
    
    </motion.div>
    
    </div>

    

    <motion.div 
    initial={{ opacity: 0, translateY: 50 }}
    whileInView={{ opacity: 1, translateY: 0 }}
    transition={{delay: 0.2}}
    className='flex flex-col items-center w-full mt-72 md:mt-20'>
     <h1 className="text-4xl text-white text-center">Check Out Our Socials!</h1>
     <div className="flex flex-row items-center justify-center">
        <div className="px-3 flex items-center justify-center"><Link href="https://discord.gg/vantafox" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaDiscord className="mr-2 flex items-center" /></Link></div>
        <div className="px-3 flex items-center justify-center"><Link href="https://youtube.com/@vanta-fox" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaYoutube className="mr-2 flex items-center" /></Link></div>
        <div className="px-3 flex items-center justify-center"><Link href="https://twitter.com/tfloriginal" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaTwitter className="mr-2 flex items-center" /></Link></div>
        <div className="px-3 flex items-center justify-center"><Link href="https://www.instagram.com/officialvantafox/" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaInstagram className="mr-2 flex items-center" /></Link></div>
        <div className="px-3 flex items-center justify-center"><Link href="https://www.linkedin.com/company/vantafox/" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaLinkedin className="mr-2 flex items-center" /></Link></div>
        <div className="px-3 flex items-center justify-center"><Link href="https://www.tiktok.com/@thevantafox" className="px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 py-2 mt-4 text-2xl bg-vanta text-white font-poppins rounded-lg flex items-center content-center"><FaTiktok className="mr-2 flex items-center" /></Link></div>
      </div>
      <div className="flex px-10 py-2"></div>
      <div className="px-4 py-2 text-white text-2xl">
    <h1 className="text-3xl"></h1>
      </div>
    </motion.div>

     </div>
     <Footer/>
    </div>
  )
}
