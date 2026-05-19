import { useEffect, useState } from "react";
import { Caterer } from "../interfaces/interface";
import { useParams } from "react-router-dom";

function CatererDetailsPage() {
  const [caterer, setCaterer] = useState<Caterer>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchCaterers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}caterers/${id}`,
      );

      const data = await response.json();

      setCaterer(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCaterers();
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 md:w-14 md:h-14 border-[3px] md:border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>

            <p className="text-base md:text-xl font-medium text-gray-600 text-center">
              Loading Caterer...
            </p>
          </div>
        </div>
      ) : caterer ? (
        <div className="bg-[#f5f5ff] min-h-screen p-3 md:p-8">
          <div className="bg-white rounded-[20px] md:rounded-[30px] p-4 md:p-10 flex flex-col-reverse lg:flex-row gap-10 shadow-sm">
            <div className="flex-1 w-full">
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                <h1 className="text-3xl md:text-6xl font-bold text-[#111c84] leading-tight">
                  {caterer.name}
                </h1>

                <span className="bg-[#111c84] text-white px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                  Est. 1997
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-3xl">📍</span>

                <p className="text-lg md:text-2xl text-gray-700">
                  {caterer.location}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {caterer?.cuisines?.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#eef0ff] text-[#111c84] px-4 py-2 rounded-full text-sm md:text-lg font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-lg md:text-2xl font-semibold">
                Services:
                <span className="font-normal ml-2 md:ml-3">
                  Veg | Non-Veg | Jain
                </span>
              </p>

              <div className="bg-[#fff3d6] border-l-4 border-yellow-400 mt-8 p-4 rounded-md">
                <p className="text-base md:text-xl text-[#9b6a00]">
                  ⚠️ This Caterer does not have a Kitchen
                </p>
              </div>

              {/* Contact */}
              <p className="mt-8 text-lg md:text-2xl font-semibold">
                Contact:
                <span className="text-[#111c84] ml-2 md:ml-3 font-normal">
                  9321291563
                </span>
              </p>

              <div className="mt-8 bg-[#fff8ef] inline-flex items-center gap-3 px-5 py-4 rounded-2xl flex-wrap">
                <p className="text-lg md:text-2xl">Rating</p>

                <p className="text-2xl md:text-3xl text-orange-400">★★★★☆</p>

                <p className="text-2xl md:text-3xl text-orange-400 font-semibold">
                  {caterer.rating}
                </p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <img
                src={caterer.image}
                alt={caterer.name}
                className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
}

export default CatererDetailsPage;
