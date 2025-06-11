"use client"
import { useState } from "react";
import { photoData } from "../data/photoData";
import { Modal } from "../components/Modal";

export default function page () {

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (id: number) => {
    const photo = photoData.find((item) => item.id === id)
    if (photo){
      setModalImage(photo.image);
      setShowModal(true);
    }  
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  return (
    <div className="bg-black min-h-screen w-full">
      <p className="text-center text-3xl font-bold text-white">Fotos intergaláticas</p>
      <div className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoData.map((item) =>
          <img 
            key={item.id} 
            src={item.image} 
            onClick={() => openModal(item.id)}
            className="cursor-pointer"
          />)}
      </div>
{showModal &&
      <Modal onClose={closeModal} image={modalImage} />
    }
    </div>
  )
}
