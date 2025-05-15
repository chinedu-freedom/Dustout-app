import React from 'react'
import exceptionalExpertise from '../assets/Icons/exceptionalExpertise.svg'

const ChooseUs2 = ({ image = exceptionalExpertise, title = 'Default title', className }) => {
  return (
    <div className={`w-56 h-52 flex flex-col justify-center items-center gap-2 p-4 rounded-2xl bg-[#538fdf] text-center ${className}`}>
      <img src={image} alt={title} className="w-20 h-20" />
      <h2 className="text-xl font-bold text-white break-words text-center">{title}</h2>
    </div>
  )
}

export default ChooseUs2
