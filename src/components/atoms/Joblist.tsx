import React from "react";
import { jobs } from "@/lib/data";

const Joblist = () => {
  return (
    <div className="w-full lg:w-7/12 pt-36 font-gtb text-white text-[48px] relative z-[10]">
      <div className="px-7 lg:max-w-2xl">
        <h5 className="relative z-20 mb-5">Today’s hottest 🔥 jobs</h5>

        <div className="">
          {jobs.map((job) => (
            <div key={job.id} className="group relative z-20 py-5 ">
              <div className="md:flex justify-between">
                <div className="md:py-5">
                  <h5 className="text-lg font-bold font-gt leading-8">
                    {job.title}
                  </h5>
                  <p className="text-base font-normal leading-6 opacity-[0.8] font-gt mt-2">
                    {job.location}
                  </p>
                </div>
                <div>
                  <a href={job.link} target="_blank" className="">
                    <button className="w-full md:w-36 rounded-full bg-primary py-3 text-base font-bold font-gt group-hover:shadow-joblist relative top-[0px] left-[0px] group-hover:shadow-joblist group-hover:top-[5px] group-hover:left-[5px] group-hover:text-secondary transition-all ease-linear duration-[250ms]">
                      Apply
                    </button>{" "}
                  </a>
                </div>
              </div>
              <div className='mt-5 lg:mt-0 h-[0.5px] relative bg-[rgb(255,255,255,0.3)] border-0  before:content-[""] before:w-[0%] before:z-20 before:absolute before:h-[0.5px] before:opacity-100 before:bg-white before:border-0 before:opacity-100 group-hover:before:w-[100%]  before:transition-all before:ease-in-out before:duration-[1500ms]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joblist;
