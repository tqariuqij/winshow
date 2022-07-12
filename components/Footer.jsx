import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="bg-black text-white">
        <div className="container pt-20">
          <div className="px-4 mx-auto w-full">
            <div className="px-15 relative box-border grid grid-cols-3">
              <div className="col-span-1 w-full">
                <h2 className="text-5xl font-bold">Contact Us</h2>
              </div>
            </div>
            <div className="">
              <form id="request" className="py-12">
                <div className="">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="relative  px-15">
                      <input
                        className="rounded-sm max-w-full px-4 mb-5 h-11"
                        placeholder="Full Name"
                        type="type"
                        name="Full Name"
                      />
                    </div>
                    <div className="relative w-full px-15">
                      <input
                        className="rounded-sm max-w-full px-4 mb-5 h-11"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="relative w-full px-15">
                      <input
                        className="rounded-sm max-w-full px-4 mb-5 h-11"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-6">
                    <textarea
                      className="md:col-span-4 rounded-sm px-4 mb-5 h-14"
                      placeholder="your inquiry"
                      type="type"
                      Message="Name"
                      defaultValue="your inquiry"
                    ></textarea>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>

            <div className="m-9">
              <div className="grid grid-cols-2 p-3">
                <ul className="grid grid-cols-4 text-xl col-span-1">
                  <li>
                    <a href="/">
                      <i
                        className="fa fa-facebook text-3xl"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i
                        className="fa fa-linkedin-square"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-wrap lg:flex-row px-4">
              <div className="pr-5 lg:border-r-2">
                <ul className="pt-3 text-left">
                  <li className="my-5 text-xl font-medium">
                    <a href="/">
                      <i
                        className="fa fa-map-marker pr-3"
                        aria-hidden="true"
                      ></i>
                    </a>{' '}
                    Locations
                  </li>
                  <li className="my-5 text-xl font-medium">
                    <a href="#">
                      <i
                        className="fa fa-volume-control-phone pr-3"
                        aria-hidden="true"
                      ></i>
                    </a>{' '}
                    +71 9087654321
                  </li>
                  <li className="my-5 text-xl font-medium">
                    <a href="#">
                      <i className="fa fa-envelope pr-3" aria-hidden="true"></i>
                    </a>
                    demo@gmail.com
                  </li>
                </ul>
              </div>
              <div className="px-5 lg:px-10 lg:border-r-2">
                <h3 className="text-left pb-4 font-semibold text-2xl">
                  Useful Link
                </h3>
                <ul className="list-disc font-normal text-base">
                  <li className="list-item mb-5">
                    <a href="/">Home </a>
                  </li>
                  <li className="list-item mb-5">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="list-item mb-5">
                    <a href="/products">Products </a>
                  </li>
                  <li className="list-item mb-5">
                    <a href="/">Store </a>{' '}
                  </li>
                  <li className="list-item mb-5">
                    <a href="/">Contacts </a>
                  </li>
                </ul>
              </div>

              <div className="px-5 ">
                <form className="flex flex-col">
                  <h3 className="text-left pb-4 font-semibold text-2xl">
                    Newsletter
                  </h3>
                  <input
                    className="rounded-sm max-w-full px-4 mb-5 h-11"
                    placeholder="Enter your email"
                    type="text"
                    name="Enter your email"
                  />
                  <button className="sub_btn">subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 px-5 text-center bg-yellow-600">
          <div className="container">
            <div className="row">
              <div className="">
                <p>
                  Copyright 2033 All Right Reserved By{' '}
                  <a href="https://html.design/"> Winshow General Supplies</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
