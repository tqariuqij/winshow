import React from 'react'

const ProductSection = () => {
  return (
    <div className="bg-gray-300 p-5">
      <div className="container">
        <div className="">
          <div className="px-15 relative box-border grid grid-cols-3">
            <div className="col-span-1 w-full">
              <h2 className="text-5xl font-bold">Our Products</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-4 grid-rows-2 gap-4">
          <div className="row-span-2">
            <div className="">
              <figure className="h-full">
                <img
                  style={{ height: '100vh' }}
                  className="object-cover bg-no-repeat h-full"
                  src="https://res.cloudinary.com/johnte/image/upload/v1654675155/compSupplies_asgx1b.jpg"
                  alt="comp supplies"
                />
              </figure>
              <h3 className="black">Computer Accessories</h3>
            </div>
          </div>
          <div className="col-span-2">
            <div className="">
              <figure>
                <img
                  src="https://res.cloudinary.com/johnte/image/upload/v1654675225/officeSupp_hrfgby.jpg"
                  alt="office supplies"
                />
              </figure>
              <h3>Office Supplies</h3>
            </div>
          </div>
          <div className="row-span-1">
            <div className="">
              <figure>
                <img
                  src="https://res.cloudinary.com/johnte/image/upload/v1654675221/constructionSupplies_eiqbi2.jpg"
                  alt="construction materials"
                />
              </figure>
              <h3>Construction Material</h3>
            </div>
          </div>
          <div className="col-span-1">
            <div className="">
              <figure>
                <img
                  src="https://res.cloudinary.com/johnte/image/upload/v1654675250/labEquips_mhkwah.jpg"
                  alt="lab equips"
                />
              </figure>
              <h3>Lab Equipments</h3>
            </div>
          </div>
          <div className="col-span-2">
            <div className="product_box">
              <figure>
                <img
                  src="https://res.cloudinary.com/johnte/image/upload/v1654675185/chemSupplies_whf0mz.jpg"
                  alt="chem supplies"
                />
              </figure>
              <h3>Chemical Supplies</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
