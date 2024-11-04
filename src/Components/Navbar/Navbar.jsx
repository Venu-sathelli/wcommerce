import React from 'react'
import { useContext } from 'react'
import Mycontext from '../../Context/data/mycontext'
// import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'

const Navbar = () => {

  const Context = useContext(Mycontext)
  const {mode, toggleMode} = Context
  return (
    <div>
       <h1 class="text-3xl font-bold underline">
    Hello, Tailwind CSS!
  </h1>
    </div>
  )
}

export default Navbar
