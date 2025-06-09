import { photoData } from "./data/photoData";

export default function page () {
  return (
    <div className="w-screen h-screen bg-black text-white font-bold text-3xl flex items-center flex-col">
      <p className="pt-8 pb-8">Fotos intergaláticas</p>
      <div className="grid grid-cols-3 gap-4">
        {photoData.map((item) =>
          <img key={item.id} src={item.image}/>)}
      </div>
    </div>
  )
}
