function CatererCardSkeleton() {
  return (
    <div className="w-full md:max-w-[348px] bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image */}
      <div className="h-48 w-full bg-gray-300" />

      <div className="p-5">
        
        {/* Title + Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="h-7 w-40 bg-gray-300 rounded-md" />

          <div className="h-8 w-16 bg-gray-300 rounded-full" />
        </div>

        {/* Location */}
        <div className="h-5 w-32 bg-gray-300 rounded-md mb-4" />

        {/* Price */}
        <div className="h-6 w-28 bg-gray-300 rounded-md mb-5" />

        {/* Cuisines */}
        <div className="flex gap-2 flex-wrap">
          <div className="h-8 w-20 bg-gray-300 rounded-full" />
          <div className="h-8 w-24 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default CatererCardSkeleton;