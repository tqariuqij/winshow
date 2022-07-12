import React from 'react'

const ChoiceSection = () => {
  return (
    <div className="bg-black text-white ">
      <div className="container mb-5">
        <div className="w-full mx-auto p-5">
          <div className="grid grid-cols-2">
            <div className="">
              <h2 className="text-5xl font-bold mb-5 py-5">Why Choose Us? </h2>
              <p className="text-base font-semibold mb-5">
                there isn't anything embarrassing hidden in the middle of text.
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="w-full mx-auto p-5 flex flex-col md:grid grid-cols-6">
          <div className="col-span-4">
            <div className=" pb-5 container">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <div className="flex">
                    <i className="mr-2 fa fa-free-code-camp text-yellow-600 text-6xl"></i>
                    <div className="choose_text">
                      <h3 className="text-lg font-semibold">
                        Excellent Service
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <i className="mr-2 fa fa-paint-brush text-yellow-600 text-6xl"></i>

                    <div className="choose_text">
                      <h3 className="text-lg font-semibold">Clean Working</h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <i className="mr-2 fa fa-handshake-o text-yellow-600 text-6xl"></i>

                    <div className="choose_text">
                      <h3 className="text-lg font-semibold">
                        Quality And Reliability
                      </h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex">
                    <i className="mr-2 fa fa-thumbs-up text-yellow-600 text-6xl"></i>

                    <div className="choose_text">
                      <h3 className="text-lg font-semibold">Expert Farmer</h3>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="choose_img">
              <figure>
                <img
                  src="https://res.cloudinary.com/johnte/image/upload/v1598261633/samples/food/pot-mussels.jpg"
                  alt="foof"
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="container pb-5">
          <div className="row">
            <div className="m-5 p-2 rounded bg-yellow-600 max-w-fit">
              <a className="read_more" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChoiceSection
