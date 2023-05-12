import React from 'react'
import Image from 'next/image';
import Logosvg from './Svg/Logosvg';
import AppStoresvg from './Svg/AppStoresvg';
import GooglePlaysvg from './Svg/GooglePlaysvg';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-primary pt-[80px]">
      <div className="mx-auto max-w-[1340px] px-10 pt-16">
        <div className="relative bg-[url('https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618915e4ad356e301aa4705b_footicon.svg')] h-[500px] bg-no-repeat flex text-white">
          <div className="relative top-16 w-5/12 ml-40">
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
          <div className="w-7/12 pl- relative top-[58px]">
            <h5 className="pb-8 text-2xl font-bold leading-8 font-gt">
              Follow us on
            </h5>
            <div className="mb-[60px]">
              <a
                href="https://twitter.com/highriseapp"
                target="_blank"
                className="text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/highrise/"
                target="_blank"
                className="text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/pocketworlds"
                target="_blank"
                className="text-[#ea88ff] mr-[54px] text-[32px] font-black font-gtb"
              >
                LinkedIn
              </a>
            </div>
            <div className="w-6/12 flex">
              <div className="w-6/12">
                <h6 className="pb-6 text-2xl font-bold font-gt">Company</h6>
                <ul>
                  <li>
                    <Link
                      href="/about"
                      className="block font-gt text-base font-normal leading-6 mb-2"
                    >
                      About
                    </Link>
                    <Link
                      href="/careers"
                      className="block font-gt text-base font-normal leading-6"
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
                      className="block font-gt text-base font-normal leading-6 mb-2"
                    >
                      Highrise
                    </a>
                    <a
                      href="https://www.everskies.com/"
                      target="_blank"
                      className="block font-gt text-base font-normal leading-6"
                    >
                      Everskies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[rgba(255,197,197,0.16)] py-8 absolute bottom-0 w-full">
          <p className='text-sm font-gt text-[rgba(255,255,255,0.65)]'>Pocket Worlds. Copyright 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer