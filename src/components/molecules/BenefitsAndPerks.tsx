import React from "react";
import SectionWrapper from "../atoms/Reusable/SectionWrapper";
import grad from "../../../public/grad.svg";
import team from "../../../public/team.svg";
import football from "../../../public/football.svg";
import candy from "../../../public/candy.svg";
import baby from "../../../public/baby.svg";
import party from "../../../public/party.svg";
import H2 from "../atoms/Reusable/H2";
import Star from "../atoms/Reusable/Star";
import Image from "next/image";

const BenefitsAndPerks = () => {
  return (
    <SectionWrapper sectionClass="py-[140px] text-primary bg-[#ffc5c5]">
      <H2 spanText="Benefits & Perks" otherText="Reach for the Stars" />
      <div className="flex flex-wrap gap-y-20 font-gt pt-16">
        <div className="w-4/12">
          <div className="relative">
            <Image src={grad} alt="" className="max-w-[260px] h-auto mx-auto" />
            <Star text="1000" className="top-40 right-10" />
          </div>
          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-bold leading-8 mb-2">
              Training & Education Budget
            </h6>
            <p className="text-base font-normal leading-6 ">
              Keep building your skillset with an annual reimbursement of up to
              $1,000 for programs, certifications, and learning materials.
            </p>
          </div>
        </div>
        <div className="w-4/12 relative top-16">
          <div className="relative">
            <Image src={team} alt="" className="max-w-[260px] h-auto mx-auto" />
            <Star text="25" className="top-40 right-10" />
          </div>
          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-semibold leading-8 mb-2">
              Team Building Budget
            </h6>
            <p className="text-base font-normal leading-6">
              Get to know your teammates with a monthly event and activity
              stipend of $25 per person.
            </p>
          </div>
        </div>
        <div className="w-4/12 relative -top-12">
          <div className="relative">
            <Image
              src={football}
              alt=""
              className="max-w-[260px] h-auto mx-auto"
            />
            <Star text="50" className="top-32 right-12" />
          </div>
          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-semibold leading-8 mb-2">
              Fitness Allowance
            </h6>
            <p className="text-base font-normal leading-6">
              Stay active with a $50 monthly reimbursement for your gym
              membership, yoga studio membership, or whatever gets you moving.
            </p>
          </div>
        </div>
        <div className="w-4/12">
          <div className="relative">
            <Image
              src={candy}
              alt=""
              className="max-w-[260px] h-auto mx-auto"
            />
          </div>

          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-semibold leading-8 mb-2">
              Coworking Space Stipend
            </h6>
            <p className="text-base font-normal leading-6">
              Choose a coworking space in your city that works for you and we’ll
              foot the bill.
            </p>
          </div>
        </div>
        <div className="w-4/12 relative top-24">
          <div className="relative">
            <Image
              src={baby}
              alt=""
              className="max-w-[260px] h-auto mx-auto mb-10"
            />
            <Star text="100" className="top-24 right-16" />
          </div>
          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-semibold leading-8 mb-2">
              Family Leave
            </h6>
            <p className="text-base font-normal leading-6">
              Receive up to 2 months 100% paid time off during your first year
              of parenthood (after 6 months of employment).
            </p>
          </div>
        </div>
        <div className="w-4/12">
          <div className="relative">
            <Image
              src={party}
              alt=""
              className="max-w-[260px] h-auto mx-auto"
            />
          </div>
          <div className="max-w-[220px] lg:max-w-xs mx-auto">
            <h6 className="text-xl font-semibold leading-8 mb-2">
              Annual Retreat
            </h6>
            <p className="text-base font-normal leading-6 ">
              Join all fulltime employees on a unique jettsetting adventure
              every 9-12 months to brainstorm and meet face-to-face.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BenefitsAndPerks;
