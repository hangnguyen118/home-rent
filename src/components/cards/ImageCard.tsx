import React from 'react';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export type Props = {
  id: number,
  title: string,
  description?: string,
  price: number,
  bedroom: number,
  badroom: number,
  image: string
}

const ImageCard: React.FC<Props> = ({ title, price, badroom, bedroom, image }) => {
  return (
    <div className='bg-white hover:shadow-xl mr-12 w-64 rounded-md'>

      <Image src={image} width={400} height={400} alt='IMAGE_PRODUCT' className="w-full h-4/5 object-cover rounded-t-md"></Image>
      <div className='p-4'>
        <p className='text-gray my-2'><FontAwesomeIcon icon={faLocationDot} /> New York</p>
        <h3 className='font-bold text-2xl'>Mordem Aparment Nice View</h3>
        <div className='flex justify-between text-lg text-primary'>
          <p>$2500</p>
          <div>
            <button className='ml-4 border border-primaryContainer hover:bg-primaryContainer px-3 py-2'><FontAwesomeIcon icon={faHeart} /></button>
            <button className='ml-4 border border-primaryContainer hover:bg-primaryContainer px-3 py-2'><FontAwesomeIcon icon={faCartPlus} /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageCard;