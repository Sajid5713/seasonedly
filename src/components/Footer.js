
export default function Footer(){
    
    return (
      <footer className="bg-[#fcfcfc]">
        <div className="mx-auto container flex flex-wrap flex-col sm:flex-row max-w-7xl justify-between px-5 py-16 sm:p-16 lg:px-16">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-8">
            <a href="#" className="">
              <img className="w-40 mb-4" src="/seasonedly-logo.png" alt="" />
            </a>
            <p className="text-gray-600 pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 sm:pl-16 lg:w-1/4 mb-8">
            <h2 className="font-bold mb-2.5">Links</h2>
            <ul className="flex flex-col flex-wrap sm:flex-row lg:flex-col">
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm/5 text-gray-900 hover:scale-105 delay-75 duration-200 transition ease-linear">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm/5 text-gray-900 hover:scale-105 delay-75 duration-200 transition ease-linear">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm/5 text-gray-900 hover:scale-105 delay-75 duration-200 transition ease-linear">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="block rounded-lg px-3 py-2 text-sm/5 text-gray-900 hover:scale-105 delay-75 duration-200 transition ease-linear">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded-lg px-3 py-2 text-sm/5 text-gray-900 hover:scale-105 delay-75 duration-200 transition ease-linear">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-8">
            <h2 className="font-bold mb-2.5">Contact Us</h2>
            <p className="text-gray-600 pb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <div className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm/6" bis_skin_checked="1">
                <div className="flex size-6 flex-none items-center justify-center rounded-lg" bis_skin_checked="1">
                    <svg className="size-6 text-gray-600 group-hover:text-[#69131b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
                    </svg>
                </div>
                <div className="flex-auto" bis_skin_checked="1">
                    <a href="#" className="block font-semibold text-gray-900">
                        +923335084406
                    </a>
                </div>
            </div>
             <div className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm/6" bis_skin_checked="1">
                <div className="flex size-6 flex-none items-center justify-center rounded-lg" bis_skin_checked="1">
                    <svg className="size-6 text-gray-600 group-hover:text-[#69131b]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div className="flex-auto" bis_skin_checked="1">
                    <a href="#" className="block font-semibold text-gray-900">
                        seasonedly@gmail.com                      
                    </a>
                </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mb-8 sm:pl-16">
          <h2 className="font-bold mb-2.5">Social media</h2>
            <ul className="flex gap-2.5 cursor-pointer ">
              <li className="group p-2.5 rounded-2xl bg-gray-50 shadow-md hover:bg-[#69131b]">
                <img className="w-2.5 transition duration-300 group-hover:brightness-[15]" src="/facebook.png" alt="facebook" />
              </li>
              <li className="group p-2.5 rounded-2xl bg-gray-50 shadow-md hover:bg-[#69131b]">
                 <img className="w-2.5 transition duration-300 group-hover:brightness-[15]" src="/instagram.png" alt="instagram" />
              </li>
              <li className="group p-2.5 rounded-2xl bg-gray-50 shadow-md hover:bg-[#69131b]">
                 <img className="w-2.5 transition duration-300 group-hover:brightness-[15]" src="/twitter.png" alt="twitter" />
              </li>
              <li className="group p-2.5 rounded-2xl bg-gray-50 shadow-md hover:bg-[#69131b]">
                 <img className="w-2.5 transition duration-300 group-hover:brightness-[15]" src="/linkedin.png" alt="linkedin" />
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center p-5 border-t-1 border-t-[#CBD5E0]">
            <p>© 2025 Copyright by Seasonedly.com. All rights reserved.</p>
        </div>
      </footer>
    );
}