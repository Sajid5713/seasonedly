import {Inter} from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function Home() {
  return (
    <div className="app overflow-hidden">
      <main className="bg-[#101828]">
        <div className="relative">
          <svg
            viewBox="0 0 2500 1080"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0 z-[calc(10*-1)"
          >
            <defs>
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0 H300 M300 0 V300"
                  stroke="oklab(1 0 0 / 0.2)"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
              <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="20%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
              <linearGradient
                id="fade-bottom"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="60%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="white" />
                <rect width="100%" height="100%" fill="url(#fade-left)" />
                <rect width="100%" height="100%" fill="url(#fade-bottom)" />
              </mask>{" "}
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
              mask="url(#fade-mask)"
            />
          </svg>
          <div className="container relative mx-auto flex-1 flex flex-col max-w-7xl lg:flex-row items-center justify-between px-8 py-20 sm:py-40">
            {/* Left Column (Text Content) */}
            <div className="w-full lg:w-1/2 xl:w-1/2 z-1 lg:mr-8">
              <a href="#" className="flex items-center">
                <span className="mr-8 text-gray-400 text-sm px-3 py-1 border hover:border-white hover:text-white transition delay-150 duration-200 ease-linear  rounded-full">
                  What's new
                </span>
                <span className="text-gray-300 text-sm">Just shipped v1.0</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
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
                <button className="text-sm/6 bg-white cursor-pointer py-2.5 rounded-lg  px-10 font-semibold text-gray-600 mt-10 hover:bg-[#101828] hover:text-gray-100 transition delay-150 duration-200 ease-linear">
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
        </div>
        {/* Companies Section */}
        <section className="py-[110px]">
          <div className="mx-auto container">
            <div className="text-center">
              <h2 className="text-white text-lg font-semibold">
                The world’s most innovative companies use our app
              </h2>
            </div>
            <div className="flex flex-col gap-16 items-center justify-center mt-16 sm:flex-row">
              <img src="/statamic-logo-white.svg" alt="/" />
              <img src="/savvycal-logo-white.svg" alt="/" />
              <img src="/tuple-logo-white.svg" alt="/" />
              <img src="/reform-logo-white.svg" alt="/" />
              <img src="/transistor-logo-white.svg" alt="/" />
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-[110px]">
          <div className="mx-auto container">
            <div className="text-center mx-auto max-w-2xl">
              <h2 className="font-semibold bg-[#b93826] inline-block px-5 py-1 rounded-b-3xl rounded-l-3xl text-gray-300">
                Deploy faster
              </h2>
              <p className="text-white text-5xl mt-3 font-bold">
                Everything you need to deploy your app
              </p>
              <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-16 mt-16 sm:flex-row">
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  Web Development
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  App Development
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  Graphic Design
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  Digital Marketing
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  SEO Optimization
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
              <div className="w-full shadow-2xl shadow-gray-700 hover:shadow-none transition delay-100 duration-300 p-10 rounded-lg">
                <svg
                  className="size-12 bg-[#b93826] rounded-lg p-2.5 text-gray-100 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6ZM7.5 6h.008v.008H7.5V6Zm2.25 0h.008v.008H9.75V6Z"
                  />
                </svg>
                <h3 className="text-gray-200 mt-6 text-xl font-semibold">
                  UI/UX
                </h3>
                <p className="text-gray-400 my-3.5 text-lg">
                  Non quo aperiam repellendus quas est est. Eos aut dolore aut
                  ut sit nesciunt. Ex tempora quia. Sit nobis consequatur
                  dolores incidunt.
                </p>
                <a href="#" className="text-[#b93826] font-semibold mt-8 block">
                  Learn More
                  <span aria-hidden="true" className="ml-1.5">
                    →
                  </span>
                </a>
              </div>
            </div>
            <button className="text-sm/6 bg-[#b93826] mx-auto block cursor-pointer py-2.5 rounded-lg px-10 font-semibold text-gray-100 mt-10 hover:bg-[#101828] hover:text-gray-100 transition delay-150 duration-200 ease-linear">
              View More
            </button>
          </div>
        </section>
        {/* Banner Section */}
        <section className="py-[110px]">
          <div className="mx-auto container">
            <div className="text-center mx-auto max-w-2xl">
              <h2 className="font-semibold bg-[#b93826] inline-block px-5 py-1 rounded-b-3xl rounded-l-3xl text-gray-300">
                Everything you need
              </h2>
              <p className="text-white text-5xl mt-3 font-bold">
                No server? No problem.
              </p>
              <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
            <div className="mt-10 rounded-lg overflow-hidden">
              <img className="w-full h-full" src="/banner-image.png" alt="" />
            </div>
          </div>
        </section>
        {/* Track Record */}
        <section className="py-[110px]">
          <div className="mx-auto container">
            <div className="text-center text-left max-w-2xl">
              <h2 className="font-semibold bg-[#b93826] inline-block px-5 py-1 rounded-b-3xl rounded-l-3xl text-gray-300">
                Our track record
              </h2>
              <p className="text-white text-5xl mt-3 font-bold">
                Trusted by thousands of creators worldwide
              </p>
              <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8 py-10">
              <div className="border border-l-gray-700 pl-6">
                <h3 className="text-gray-100 text-4xl font-semibold mb-2.5">
                  8000+
                </h3>
                <p className="text-gray-400">Developers on the platform</p>
              </div>
              <div className="border border-l-gray-700 pl-6">
                <h3 className="text-gray-100 text-4xl font-semibold mb-2.5">
                  900m+
                </h3>
                <p className="text-gray-400">Daily requests</p>
              </div>
              <div className="border border-l-gray-700 pl-6">
                <h3 className="text-gray-100 text-4xl font-semibold mb-2.5">
                  99.9%
                </h3>
                <p className="text-gray-400">Uptime gurantee</p>
              </div>
              <div className="border border-l-gray-700 pl-6">
                <h3 className="text-gray-100 text-4xl font-semibold mb-2.5">
                  12m
                </h3>
                <p className="text-gray-400">Project deployed</p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="py-[110px]">
          <div className="mx-auto container">
            <div className="text-center mx-auto max-w-2xl">
              <h2 className='font-semibold bg-[#b93826] inline-block px-5 py-1 rounded-b-3xl rounded-l-3xl text-gray-300'>Testimonials</h2>
              <p className="text-white text-5xl mt-3 font-bold">
                We have worked with thousands of amazing people
              </p>
              <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.
              </p>
            </div>
            <div className='grid grid-cols-4 grid-flow-col gap-10 mt-20'>
                <figure className='shadow-lg border-1 border-gray-800 rounded-lg shadow-gray-700 col-start-2 col-span-2'>
                  <blockquote className='p-12 '>
                    <p className='text-gray-400 text-2xl'>“Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.</p>
                  </blockquote>
                  <figcaption className='flex flex-nowrap gap-4 py-4 px-6 border-t border-gray-700'>
                    <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                    <div className='flex flex-col flex-auto'>
                      <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                      <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                    </div>

                    <img src='/reform-logo-white.svg' alt='compnayLogo'/>
                  </figcaption>
                </figure>
                <div className='contents'>
                  <div className='row-span-2'>
                    <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>
                    <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className='col-start-4 row-span-2'>
                   <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>
                     <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>                  
                </div>
                <div className='col-start-2 row-span-1'>
                   <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>
                </div>
                <div className='col-start-3 row-span-1'>
                   <figure className='shadow-lg rounded-lg border-1 mb-8 border-gray-800 shadow-gray-700 row-end-1 col-start-2 col-span-2'>
                      <blockquote className='p-6'>
                        <p className='text-gray-400 text-lg'>“Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.</p>
                      </blockquote>
                      <figcaption className='flex flex-nowrap gap-8 py-4 px-6'>
                        <img className='size-10' src='/twitter.png' alt='testimonailIcon'/>
                        <div className='flex flex-col'>
                          <p className='text-gray-400 font-semibold mb-2.5'>Adam Steller</p>
                          <p className='text-gray-400 text-sm/2'>@adamsteller</p>
                        </div>
                      </figcaption>
                    </figure>
                </div>
                
            </div>          
          </div>
        </section>
  
        {/* Section */}
        <section className="pt-[110px] pb-[220px] relative ">
          <svg
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full absolute inset-0 z-[calc(10*-1)"
          >
            <defs>
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width="300"
                height="300"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 0 H300 M300 0 V300"
                  stroke="oklab(1 0 0 / 0.2)"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>

              <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="20%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>

              <linearGradient
                id="fade-bottom"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="60%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <mask id="fade-mask">
                <rect width="100%" height="100%" fill="white" />
                <rect width="100%" height="100%" fill="url(#fade-left)" />
                <rect width="100%" height="100%" fill="url(#fade-bottom)" />
              </mask>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
              mask="url(#fade-mask)"
            />
          </svg>
          <div className="mx-auto container z-0 relative">
            <div className="text-center mx-auto max-w-2xl">
              <p className="text-white text-5xl mt-3 font-bold">
                Boost your productivity. Start using our app today.
              </p>
              <p className="mt-8 text-[20px] text-[#99a1af] font-medium">
                Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
                anim id veniam aliqua proident excepteur commodo do ea.
              </p>
              <div className="flex gap-5 justify-center">
                <button className="text-sm/6 bg-white cursor-pointer py-2 rounded-lg  px-6 font-semibold text-gray-600 mt-10 hover:bg-[#101828] hover:text-gray-100 transition delay-150 duration-200 ease-linear">
                  Contact Now
                </button>
                <button className="text-sm/6 font-semibold text-white cursor-pointer mt-10 hover:text-gray-300">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
