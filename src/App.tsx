import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import blobBg from './assets/blob-haikei.svg';

function App() {
  return (
    <div className={`bg-center bg-cover bg-no-repeat min-h-screen`} style={{ backgroundImage: `url(${blobBg})` }}>
      <header className="">
        <div className="flex justify-between items-center mx-auto max-w-[1280px]">
          <div className="flex-1 p-5">
            <h1 className="text-3xl font-black">
              <span className="bg-clip-text font-['Itim'] text-transparent bg-gradient-to-r from-[#3a5a40] to-[#5b8c64]">
                Junnaedi
              </span>
            </h1>
            <p className="mt-[1px] text-[10px] font-semibold opacity-70 text-[#344e41]">
              Software Engineer, Indonesia
            </p>
          </div>
          <div className="flex-grow max-w-xl">
            <ul className="flex justify-center items-center space-x-14">
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 inline-flex justify-end items-center">
            <div className="ml-auto">
              <button className="px-6 py-3 bg-[#344e41] text-white rounded-pill font-bold text-sm hover:bg-[#3a5a40] transition-all">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="flex justify-center items-center mx-auto max-w-[1280px] min-h-[70vh]">
          <div className="flex-1 max-w-3xl text-center">
            <div className="relative inline-block bg-white rounded-t-[30px] rounded-bl-[30px] mb-5 px-6 py-4">
              <span className="font-bold">Hello, My name is Junnaedi</span>
              {/** make waving animation */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key="wave"
                  initial={{ transform: 'rotate(-20deg)' }}
                  animate={{ transform: 'rotate(0deg)' }}
                  exit={{ transform: 'rotate(20deg)' }}
                  transition={{ duration: .2, repeat: 5, repeatType: 'reverse', ease: 'easeInOut' }}
                  className="absolute -top-7 -left-7 text-5xl transform rotate-[50deg]">
                    👋
                  </motion.div>
              </AnimatePresence>
            </div>
            <h1 className="text-5xl leading-tight font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3a5a40] to-[#6ca376]">
                Full Stack Developer based in Surabaya, Indonesia
              </span>
            </h1>
            <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
              I would be happy to help you building your next successful product. I have experience working with modern technologies and tools to build scalable and maintainable applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
