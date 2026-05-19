import { Caterer } from "../interfaces/interface";

interface Props {
  caterer: Caterer;
  handleClickOnCard:(id:string)=>void
}

function CatererCard({ caterer,handleClickOnCard }: Props) {
  return (
    <div onClick={()=>{
      handleClickOnCard(caterer.id)
    }} className="cursor-pointer w-full md:max-w-[348px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <img className="h-48 w-full object-cover" src={caterer.image} />
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{caterer.name}</h2>

          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {caterer.rating}
          </span>
        </div>

        <p className="text-gray-500 mb-2">📍 {caterer.location}</p>

        <p className="text-lg font-semibold text-orange-500 mb-3">
          ₹{caterer.pricePerPlate} / plate
        </p>

        <div className="flex flex-wrap gap-2">
          {caterer.cuisines.map((cuisine, index) => (
            <span
              key={index}
              className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
            >
              {cuisine}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CatererCard;
