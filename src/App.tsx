import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCaretDown, FaChevronDown, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './App.css'
import './i18n';

import blobBg from './assets/blob-haikei.svg';
import profileImg from './assets/profile.png';
import lineDivier from './assets/line.svg';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className={`bg-top bg-cover bg-no-repeat min-h-screen`} style={{ backgroundImage: `url(${blobBg})` }}>
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
                  {t('home')}
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  {t('about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  {t('projects')}
                </a>
              </li>
              <li>
                <a href="#" className="text-md font-bold text-[#344e41] hover:text-[#5b8c64] transition-all">
                  {t('support')}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 inline-flex justify-end items-center">
            <div className="ml-auto">
              <button onClick={() => {
                i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')
              }} className="text-md p-0 bg-transparent font-black mr-8 focus:outline-none">
                {i18n.language === 'en' ? 'ID' : 'EN'}
              </button>
              <button className="px-6 py-3 bg-[#344e41] text-white rounded-full font-bold text-sm hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaPhoneAlt className="inline-block mr-3 text-xs" />
                {t('contact me')}
              </button>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="flex justify-center items-center mx-auto max-w-[1280px] py-20">
          <div className="flex-1 max-w-3xl text-center">
            <div className="relative inline-block bg-white shadow-lg rounded-t-[30px] rounded-bl-[30px] mb-5 px-6 py-4">
              <span className="font-bold">{t('intro', { name: 'Junnaedi' })}</span>
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
                {t('heading')}
              </span>
            </h1>
            <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
              {t('heading desc')}
            </p>
            <div className="mt-6 space-x-3">
              <button className="px-6 py-3 bg-[#344e41] text-white rounded-full font-bold text-md hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaChevronDown className="inline-block mr-3 text-sm" />
                {t('see projects')}
              </button>
              <button className="px-6 py-3 bg-[#344e41] text-white rounded-full font-bold text-md hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaEnvelope className="inline-block mr-3 text-sm" />
                {t('contact me')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center py-24 mx-auto max-w-[1000px]">
        <div className="w-7/12">
          <p className="text-lg leading-loose font-semibold">
            Berkenalan lebih dekat
          </p>
          <h1 className="text-5xl font-[Itim] leading-tight font-black bg-clip-text text-transparent bg-gradient-to-tl from-[#3a5a40] to-[#6ca376]">
            {t('heading about')}
          </h1>
          <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat est sapien, in suscipit nibh condimentum sed. Mauris sed laoreet enim. Nam sed ante ut nulla ultricies consectetur vel a elit.
          </p>
          <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat est sapien, in suscipit nibh condimentum sed. Mauris sed laoreet enim. Nam sed ante ut nulla ultricies consectetur vel a elit.
          </p>
        </div>
        <div className="w-5/12 pl-10">
          <img src={profileImg} alt="profile" className="w-full" />
        </div>
      </section>
      <section className="flex justify-center items-center pb-32 mx-auto max-w-[1000px]">
        <div className="flex-1">
          <p className="text-lg leading-loose font-semibold">
            Alat untuk Development
          </p>
          <h3 className="text-5xl font-[Itim] leading-tight font-black bg-clip-text text-transparent bg-gradient-to-tl from-[#3a5a40] to-[#6ca376]">
              Teknologi yang saya gunakan untuk mengerjakan sebuah project yang valuable
          </h3>
        </div>
        <div className="flex flex-col items-center flex-1">
          <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam pretium pharetra. Ut placerat bibendum orci, a commodo est molestie vitae. Nam eleifend fermentum sem, ac efficitur eros sagittis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam pretium pharetra. Ut placerat bibendum orci, a commodo est molestie vitae.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
