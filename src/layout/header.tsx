import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="">
        <div className="flex justify-between items-center mx-auto max-w-[1280px]">
          <div className="flex-1 p-5">
            <h1 className="text-2xl md:text-3xl font-black">
              <span className="bg-clip-text font-['Itim'] text-transparent bg-gradient-to-r from-[#3a5a40] to-[#5b8c64]">
                Junnaedi
              </span>
            </h1>
            <p className="mt-[1px] text-[10px] font-semibold opacity-70 text-[#344e41]">
              Software Engineer, Indonesia
            </p>
          </div>
          <div className="hidden md:block flex-grow max-w-xl">
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
          <div className="flex-1 inline-flex justify-end items-center p-5 md:p-0">
            <div className="ml-auto">
              <button onClick={() => {
                i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')
              }} className="hidden md:inline-block text-sm md:text-md p-0 bg-transparent font-black mr-3 md:mr-8 focus:outline-none">
                {i18n.language === 'en' ? 'ID' : 'EN'}
              </button>
              <button className="px-4 md:px-6 py-3 md:py-3 bg-[#344e41] text-white rounded-full font-bold text-xs md:text-sm hover:shadow-lg hover:bg-[#3a5a40] focus:outline-none transition-all">
                <FaPhoneAlt className="inline-block mr-3 text-xs" />
                {t('contact me')}
              </button>
            </div>
          </div>
        </div>
      </header>
    );
}