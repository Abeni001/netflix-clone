import React, { useEffect, useState } from 'react'

function NavBar() {
    const [ isScrolling,setIscrolling ] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setIscrolling(()=>window.scrollY>150)
        })
        return()=>{
          window.removeEventListener('scroll',()=>{})
        }
    },[])
  return (
    <div className={` ${isScrolling ? 'bg-black':'bg-transparent'} transition flex justify-between items-center w-full px-4 fixed top-0 mx-auto h-24`}>
        <img className='w-40 object-contain p-4' src='https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=200' alt='nextflix logo'/>
        <img className='h-16 object-contain p-4' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Avatar logo'/>
    </div>
  )
}

export default NavBar