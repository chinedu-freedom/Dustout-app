import React from 'react'
import exceptionalExpertise from '../assets/Icons/exceptionalExpertise.svg'
const ChooseUs2 = ({ image = exceptionalExpertise, title = 'Default title'}) => {
  return (
<div className="w-55 h-50 flex flex-col justify-center items-center gap-2 p-4 rounded-2xl bg-[#171AD4] text-center">
  <img src={image} alt={title} className="w-20 h-20" />
  <h2 className="w-42 text-xl font-bold text-white break-words">{title}</h2>
</div>


  )
}

export default ChooseUs2