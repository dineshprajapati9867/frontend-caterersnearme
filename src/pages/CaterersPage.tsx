import { useEffect, useState } from "react";
import CatererCard from "../components/CatererCard";
import SearchFilter from "../components/SearchFilter";
import { Caterer } from "../interfaces/interface";
import CatererCardSkeleton from "../components/CatererCardSkeleton";
import { useNavigate } from "react-router-dom";
function CaterersPage() {
  const [caterersCard, setCaterersCard] = useState<Caterer[]>([]);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
 const navigate=useNavigate()
  const fetchCaterers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}caterers?search=${search}&price=${price}`,
      );

      const data = await response.json();

      setCaterersCard(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCaterers();
  }, [search, price]);

  return (
    <div>
       
      <div className="relative h-[55vh] w-full">
        <img
          src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ="
          alt="banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2.5 md:gap-10">
          <p className="text-white text-2xl  md:text-5xl font-bold text-center max-w-6xl leading-tight m-0">
            Select the Perfect Caterer for Your Event 🍽️
          </p>

          <div className="mt-5 flex items-center gap-3 flex-col md:flex-row w-[90%] md:w-full justify-center">
            <SearchFilter
              isPriceFilter={false}
              value={search}
              onChange={setSearch}
            />
            <SearchFilter
              isPriceFilter={true}
              value={price}
              onChange={setPrice}
            />
          </div>
        </div>
      </div>
      <div className="md:w-[75%] w-full m-auto">
        <div className="py-5 border-b border-gray-400 text-center ">
          <p className="text-xl">
            <span className="font-bold text-2xl">{caterersCard.length}</span>{" "}
            caterers available for you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10  justify-center px-4 md:px-0">
          {loading?Array.from({length:10}).map((_,index)=><CatererCardSkeleton key={index}/>):caterersCard.map((val) => {
            return <CatererCard handleClickOnCard={()=>{
              navigate(`caterers/${val.id}`)
            }} key={val.id} caterer={val} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CaterersPage;
