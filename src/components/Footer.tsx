function Footer() {
  return (
    <footer className="bg-[#060b1f] text-white mt-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-3">
              <img
                src="https://www.caterersnearme.in/_next/static/media/logo.e1963c97.png"
                alt="logo"
                className="w-14 h-14"
              />

              <h2 className="md:text-3xl text-2xl font-bold">
                CATERERSNEARME
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-9 mt-8">
              Find the best caterers for weddings,
              birthdays, corporate events, and all
              special occasions with ease and comfort.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-5 text-gray-300 text-lg">
              <p className="cursor-pointer hover:text-white transition">
                Services
              </p>

              <p className="cursor-pointer hover:text-white transition">
                About
              </p>
            </div>
          </div>

       
          <div>
            <h3 className="text-2xl font-semibold mb-8">
              About Platform
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              Our platform helps users discover and
              compare caterers based on cuisine,
              pricing, ratings, and location for
              hassle-free event planning.
            </p>
          </div>
        </div>

   
        <div className="border-t border-gray-700 mt-14 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2026 CaterersNearMe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;