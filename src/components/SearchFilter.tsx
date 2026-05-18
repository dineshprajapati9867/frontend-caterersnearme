import { IoChevronDown } from "react-icons/io5";
interface Props {
  value: string;
  isPriceFilter?: boolean;
  onChange:(val:string)=>void
}

function SearchFilter({
    value,
  onChange,
  isPriceFilter,
}: Props) {
  return (
    <>
      {!isPriceFilter && (
        <input
          type="text"
          placeholder="Search caterer..."
          value={value}
          onChange={(v:React.ChangeEvent<HTMLInputElement>)=>{
            const value=v.target.value
            onChange(value)
          }}
          className="h-14 w-full md:w-[300px] rounded-xl bg-white pl-2.5 pr-6 text-lg outline-none"
          
        />
      )}

      {isPriceFilter && (
        <div className="relative w-full md:w-[300px]">
          <select
            value={value}
            onChange={(v:React.ChangeEvent<HTMLSelectElement>)=>{
            const value=v.target.value
            onChange(value)
          }}
            className="h-14 w-full  rounded-xl bg-white pl-2.5 pr-12 text-lg outline-none appearance-none"
           
          >
            <option value="all">All Prices</option>
            <option value="low">Below ₹400</option>
            <option value="medium">₹400 - ₹500</option>
            <option value="high">Above ₹500</option>
          </select>
          <IoChevronDown className="absolute right-4 top-1/2 w-5 h-5 -translate-y-1/2 text-gray-600 pointer-events-none" />
        </div>
      )}
    </>
  );
}

export default SearchFilter;
