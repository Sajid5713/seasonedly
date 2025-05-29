import {Inter} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  return (
    <div className='app overflow-hidden'>
      <main className="bg-[#101828]">
        <div className="container relative mx-auto flex-1 flex flex-col max-w-7xl lg:flex-row items-center justify-between px-8 py-20 sm:py-40">
          {/* Left Column (Text Content) */}
          <div className="w-full lg:w-1/2 xl:w-1/2 z-10 lg:mr-8">
            <a href="#" className="flex items-center">
              <span className="mr-8 text-[#bc666b] text-sm px-3 py-1 border hover:border-white hover:text-white transition delay-150 duration-200 ease-linear  rounded-full">
                What's new
              </span>
              <span className="text-gray-300 text-sm">Just shipped v1.0</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
            <h1 className="text-4xl mt-10 sm:text-5xl xl:text-6xl text-white font-semibold">
              Deploy to the cloud with confidence
            </h1>
            <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            <div className="flex gap-5">
              <button className="text-sm/6 bg-white cursor-pointer py-2.5 rounded-full px-10 font-semibold text-gray-600 mt-10 hover:bg-[#101828] hover:text-gray-100 transition delay-150 duration-200 ease-linear">
                Contact Now
              </button>
              <button className="text-sm/6 font-semibold text-white cursor-pointer mt-10 hover:text-gray-300">
                Learn More <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column (Large Half-Visible Image) */}
          <div className="relative w-3xl mt-16 right-[-250px] lg:absolute lg:right-[-400px] lg:top-1/2 lg:-translate-y-1/2 lg:w-[900px] z-0 pointer-events-none">
            <img
              src="/banner-image.png"
              alt="Banner Image"
              className="w-full h-auto object-contain rounded-xl overflow-hidden"
            />
          </div>
        </div>
        <section className="services">
            <div className="mx-auto container">
                <div className="">
                  <h2 className="text-white text-center font-semibold">The world’s most innovative companies use our app</h2>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
