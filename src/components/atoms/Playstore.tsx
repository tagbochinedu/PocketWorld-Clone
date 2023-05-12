import React from "react";
import high from "../../../public/highrise.svg";
import ever from "../../../public/everskies.png";
import Image from "next/image";

const Playstore = () => {
  return (
    <div>
      {" "}
      <div className='bg-[#E2E7FF] h-[560px] rounded-[40px] bg-[url("https://assets.website-files.com/616d6bd0f145779c3a8a92eb/618cbac8f1d39772a50d18cb_highrise.svg")] bg-cover px-[60px] py-[30px] flex justify-center flex-col  relative z-20'>
        <div className="">
          <Image src={high} alt="high rise" className="w-[233px] mb-9" />
          <p className="font-normal leading-7 text-lg w-[490px] font-gt">
            The leading creative sandbox platform. Meet new friends, play host
            to experiences, make trades, and try your hand at fashion and
            interior design in this playful metaverse.
          </p>
        </div>

        <div className="flex my-12">
          <a
            href="https://highrise.sng.link/Cxfcy/lm1ev?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;_smtype=3&amp;pscn=store_button_ios&amp;pcn=landing"
            target="_blank"
            className="mr-6"
          >
            <img
              src="https://assets.website-files.com/616d6bd0f145779c3a8a92eb/616e8b7121e0a422326a3aa4_app-store.svg"
              alt="App Store"
            />
          </a>
          <a
            href="https://highrise.sng.link/Bxfcy/hgm7?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;pcn=landing&amp;pscn=store_button_android"
            target="_blank"
            className=""
          >
            <img
              src="https://assets.website-files.com/616d6bd0f145779c3a8a92eb/616e8b7183346a68a2aa90fa_google-play.svg"
              alt="Google Play"
            />
          </a>
        </div>
        <a
          href="https://about.joinhighrise.com"
          target="_blank"
          className="underline font-gt text-base font-normal text-[rgb(11 17 52 / 56%)]"
        >
          Learn more
        </a>
      </div>
      <div className='text-[#f1f8ff] bg-secondary h-[560px] rounded-[40px] bg-[url("https://assets.website-files.com/616d6bd0f145779c3a8a92eb/616e95ffb75313b8200b4038_everskiesbg.png")] bg-cover px-[60px] py-[30px] mt-20 flex justify-center flex-col relative z-20'>
        <div className="">
          <Image src={ever} alt="high rise" className="w-[327px] mb-9" />
          <p className="font-normal leading-7 text-lg w-[480px] font-gt">
            The leading pixel doll community. Join interest-based clubs, make
            trades, and connect with like-minded people in this inclusive
            web-based community.
          </p>
        </div>

        <div className="flex my-12">
          <a
            href="https://highrise.sng.link/Cxfcy/lm1ev?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;_smtype=3&amp;pscn=store_button_ios&amp;pcn=landing"
            target="_blank"
            className="text-lg font-bold border border-white p-3 text-center bg-[rgb(255,255,255,0.16)] rounded w-[190px] hover:bg-white hover:text-primary transition-all ease-in-out duration-[600ms] mr-6"
          >
            Register Today
          </a>
          <a
            href="https://highrise.sng.link/Bxfcy/hgm7?_dl=https%3A%2F%2Fjoinhighrise.com%2Fplay&amp;pcn=landing&amp;pscn=store_button_android"
            target="_blank"
            className="text-lg font-bold border border-white p-3 text-center bg-[rgb(255,255,255,0.16)] rounded w-[190px] hover:bg-white hover:text-primary transition-all ease-in-out duration-[600ms]"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Playstore;
