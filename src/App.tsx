import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaEnvelope } from 'react-icons/fa';
import './App.css'
import './i18n';

import blobBg from './assets/blob-haikei.svg';
import profileImg from './assets/profile.png';
import Header from './layout/header';

function App() {
  const { t } = useTranslation();

  return (
    <div className={`bg-top bg-cover bg-no-repeat min-h-screen`} style={{ backgroundImage: `url(${blobBg})` }}>
      <Header />
      <section className='px-5 md:px-0'>
        <div className="flex justify-center items-center mx-auto max-w-[1280px] py-16 md:py-20">
          <div className="flex-1 max-w-3xl text-center">
            <div className="relative inline-block bg-white shadow-lg rounded-t-[30px] rounded-bl-[30px] mb-5 px-4 py-2 md:px-6 md:py-4">
              <span className="text-xs md:text-[1rem] font-bold">{t('intro', { name: 'Junnaedi' })}</span>
              <AnimatePresence mode='wait'>
                <motion.div
                  key="wave"
                  initial={{ transform: 'rotate(-20deg)' }}
                  animate={{ transform: 'rotate(0deg)' }}
                  exit={{ transform: 'rotate(20deg)' }}
                  transition={{ duration: .2, repeat: 5, repeatType: 'reverse', ease: 'easeInOut' }}
                  className="absolute -top-4 -left-2 md:-top-7 md:-left-7 text-2xl md:text-5xl transform rotate-[50deg]">
                    👋
                  </motion.div>
              </AnimatePresence>
            </div>
            <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-tight font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3a5a40] to-[#6ca376]" aria-label={t('heading')!} role="heading">
                {t('heading')}
              </span>
            </h1>
            <p className="mt-2 md:mt-5 text-xs md:text-sm leading-loose md:leading-loose font-semibold text-gray-800">
              {t('heading desc')}
            </p>
            <div className="mt-6 space-x-3">
              <button className="px-4 md:px-6 py-3 bg-[#344e41] text-white rounded-full font-bold text-xs md:text-[1rem] hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaChevronDown className="inline-block mr-3 text-sm" />
                {t('see projects')}
              </button>
              <button className="px-4 md:px-6 py-3 bg-[#344e41] text-white rounded-full font-bold text-xs md:text-[1rem] hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaEnvelope className="inline-block mr-3 text-sm" />
                {t('contact me')}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center py-24 mx-auto max-w-[1000px]">
        <div className="w-full md:w-7/12">
          <p className="text-lg leading-loose font-semibold">
            {t('subheading about')}
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
        <div className="relative md:w-5/12 pl-10">
          <motion.div
            initial={{ opacity: 0, scale: .5, x: 50, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: .5 }}
            className="hidden md:block absolute top-0 -left-[10%] bg-white shadow-lg rounded-t-[30px] rounded-bl-[30px] mb-5 px-6 py-4">
            <span className="font-bold">Frontend Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: .5, x: 50, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: .5, delay: .2 }}
            className="hidden md:block absolute -bottom-10 -left-[20%] bg-white shadow-lg rounded-b-[30px] rounded-tl-[30px] mb-5 px-6 py-4">
            <span className="font-bold">Backend Developer</span>
          </motion.div>
          <img src={profileImg} alt="profile" className="w-full" />
          <motion.div
            initial={{ opacity: 0, scale: .5, x: -50, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: .5, delay: .4 }}
            className="hidden md:block absolute -bottom-0 -right-[30%] bg-white shadow-lg rounded-b-[30px] rounded-tr-[30px] mb-5 px-6 py-4">
            <span className="font-bold">Mobile Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: .5, x: -50, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: .5, delay: .6 }}
            className="hidden md:block absolute top-24 -right-[17%] bg-white shadow-lg rounded-t-[30px] rounded-br-[30px] mb-5 px-6 py-4">
            <span className="font-bold">Dev Ops</span>
          </motion.div>
        </div>
      </section>
      <section className="flex flex-wrap md:flex-nowrap justify-center items-center pb-32 mx-auto max-w-[1000px]">
        <div className="w-full md:w-1/2">
          <p className="text-lg leading-loose font-semibold">
            {t('subheading skill')}
          </p>
          <h3 className="text-5xl font-[Itim] leading-tight font-black bg-clip-text text-transparent bg-gradient-to-tl from-[#3a5a40] to-[#6ca376]">
              {t('heading skill')}
          </h3>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <p className="mt-5 text-sm leading-loose font-semibold text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam pretium pharetra. Ut placerat bibendum orci, a commodo est molestie vitae. Nam eleifend fermentum sem, ac efficitur eros sagittis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
          <div className='mt-5 w-full grid grid-cols-3 gap-6'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Logo.min.svg/2560px-Logo.min.svg.png" alt="logo" className="my-auto grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/2560px-Jenkins_logo_with_title.svg.png" alt="logo" className="my-auto grayscale opacity-60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" alt="logo" className="my-auto grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" className="ml-auto my-auto grayscale max-w-[50px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="logo" className="my-auto grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/2346px-Android_logo_2019_%28stacked%29.svg.png" alt="logo" className="my-auto grayscale max-w-[60px]" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IPhone_Logo_2016.svg/1200px-IPhone_Logo_2016.svg.png" alt="logo" className="ml-auto my-auto grayscale opacity-40 max-w-[75%]" />
            <img src="https://s.w.org/style/images/about/WordPress-logotype-wordmark.png" alt="logo" className="mr-auto mt-auto grayscale opacity-80" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png" alt="logo" className="m-auto grayscale opacity-40 max-w-[50%]" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
