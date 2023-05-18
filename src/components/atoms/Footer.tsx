import React from 'react'
import Logosvg from './Svg/Logosvg';
import AppStoresvg from './Svg/AppStoresvg';
import GooglePlaysvg from './Svg/GooglePlaysvg';
import Link from 'next/link';


const Footer = () => {


  return (
    <footer className="relative lg:fixed lg:top-0 left-0 right-0 bottom-0 z-[-1] bg-primary lg:pt-[80px]">
      <div className="mx-auto max-w-[1340px] px-2 lg:px-10 pt-16 relative">
        <div className="relative bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618915e4ad356e301aa4705b_footicon.svg')] h-[500px] bg-no-repeat flex justify-between  text-white">
          <div className="relative top-[52px] lg:top-16 w-5/12 ml-28 lg:ml-40 mr-10 lg:mr-0">
            <Logosvg className="" />

            <div className="flex mt-8 mb-20">
              <a
                href="https://highrise.sng.link/Cxfcy/lm1ev?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;_smtype=3&amp;pscn=store_button_ios&amp;pcn=landing"
                target="_blank"
                className="mr-3"
              >
                <AppStoresvg />
              </a>
              <a
                href="https://highrise.sng.link/Bxfcy/hgm7?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;pcn=landing&amp;pscn=store_button_android"
                target="_blank"
                className=""
              >
                <GooglePlaysvg />
              </a>
            </div>
            <div className="border-[rgba(255,197,197,0.16)] border w-72 rounded px-6 pt-4 pb-6">
              <h6 className="pb-5 text-lg font-bold font-gt">Support</h6>
              <a
                href="maiilto:contact@pocketworlds.com"
                target="_blank"
                className="text-base font-normal font-gt mb-3 hover:text-[#ea88ff] transition-all ease-in-out duration-500 block leading-6"
              >
                contact@pocketworlds.com
              </a>

              <a
                href="https://highrise.helpshift.com/hc/en/"
                target="_blank"
                className="text-base font-normal font-gt hover:text-[#ea88ff] transition-all ease-in-out duration-500 block leading-6"
              >
                Highrise Helpdesk
              </a>
            </div>
          </div>
          <div className="w-7/12 pl- relative top-10 lg:top-[58px]">
            <h5 className="pb-8 text-2xl font-bold leading-8 font-gt">
              Follow us on
            </h5>
            <div className="mb-[60px]">
              <a
                href="https://twitter.com/highriseapp"
                target="_blank"
                className={`text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb transition-all ease-in-out duration-500 hover:text-white`}
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/highrise/"
                target="_blank"
                className={`text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb transition-all ease-in-out duration-500 hover:text-white`}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/pocketworlds"
                target="_blank"
                className={`block lg:inline pt-5 lg:pt-0 text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb transition-all ease-in-out duration-500 hover:text-white`}
              >
                LinkedIn
              </a>
            </div>
            <div className="w-8/12 lg:w-6/12 flex justify-between">
              <div className="w-5/12">
                <h6 className="pb-6 text-2xl font-bold font-gt">Company</h6>
                <ul>
                  <li>
                    <Link
                      href="/about"
                      className={`block font-gt text-base font-normal leading-6 mb-2 transition-all ease-in-out duration-500 hover:text-[#ea88ff]`}
                    >
                      About
                    </Link>
                    <Link
                      href="/careers"
                      className={`block font-gt text-base font-normal leading-6 mb-2 transition-all ease-in-out duration-500 hover:text-[#ea88ff]`}
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 ml-10">
                <h6 className="pb-6 text-2xl font-bold font-gt">Worlds</h6>
                <ul>
                  <li>
                    <a
                      href="https://about.joinhighrise.com/"
                      target="_blank"
                      className={`block font-gt text-base font-normal leading-6 mb-2 transition-all ease-in-out duration-500 hover:text-[#ea88ff]`}
                    >
                      Highrise
                    </a>
                    <a
                      href="https://www.everskies.com/"
                      target="_blank"
                      className={`block font-gt text-base font-normal leading-6 mb-2 transition-all ease-in-out duration-500 hover:text-[#ea88ff]`}
                    >
                      Everskies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[rgba(255,197,197,0.16)] py-8 w-full">
          <p className="text-sm font-gt text-[rgba(255,255,255,0.65)]">
            Pocket Worlds. Copyright 2023
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer