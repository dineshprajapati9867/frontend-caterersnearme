import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate()
  return (
      <div className="md:p-4 w-full pt-4 pr-4 pb-4 pl-1 md:ml-2 " onClick={()=>{
        navigate('/')
      }}>
        <div className="flex items-center cursor-pointer gap-1.5">
          <img
            src="https://www.caterersnearme.in/_next/static/media/logo.e1963c97.png"
            alt="logo"
            width={40}
            height={40}
          />
          <p className="text-xl">CATERERSNEARME</p>
        </div>
      </div>
  );
}

export default Navbar;
