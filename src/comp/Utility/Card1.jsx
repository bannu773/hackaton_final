import React from "react";
import "./card.css";

const Card1 = ({ Images, text, content, prize }) => {
  return (
    <div className=" sub_card1 overflow-hidden pt-9 ">
      <div className="sub1 relative flex flex-col pl-6 pr-6 z-30 ">
        {/* <div className='pt-4 pl-5 '> */}
        <div className="">
          <img className="corner" src={Images} alt="gaming" width={"70"} />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[7.39px] z-[0] pt-2">
          <div className="relative tracking-[-1px] inline-block [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)] text-purple-500 text-xl max-w-[304px]">
            {text}
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 text-lg text-flow-com-hackathon-1903x885-default-black">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[131.38999938964844px] pl-0 gap-[15.61px]">
              {/* <div className="rounded bg-flow-com-hackathon-1903x885-default-spring-green flex flex-row items-start justify-start pt-2.5 px-2 pb-2">
                                <div className="relative leading-[18px] [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)]">
                                    {prize}
                                </div>
                            </div> */}
              <div className="">
                <div className="relative leading-[18px] [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)]">
                  {/* Prize */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start justify-start py-0 pr-[3px] pl-0">
            <div className="relative leading-[25.6px] [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)] text-white">
              <p className="m-0 text-justify pt-3">{content}</p>
            </div>
          </div>
        </div>
        {/* <div>
                    <div className="relative leading-[22.4px] [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)]">
                        presented by
                    </div>
                </div> */}
        {/* <div className="  flex flex-col items-start justify-start pt-4 px-0 pb-0 gap-[7.39px] text-sm text-flow-com-hackathon-1903x885-default-dove-gray">
                    <div className="relative leading-[22.4px] [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)]">
                        presented by
                    </div>
                    <img
                        className="relative w-20 h-12 overflow-hidden shrink-0 object-cover max-w-[140px]"
                        alt=""
                        src="/6477612c7b45fceaade84942-amazonwebservicespng1@2x.png"
                    />
                </div> */}
        {/* <div className="absolute top-[0px] right-[39.2px] flex flex-row items-start justify-start gap-[3.1px] text-center text-flow-com-hackathon-1903x885-default-nero-30">
                    <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="relative tracking-[-0.32px] leading-[19.2px] inline-block [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)] max-h-[19.200000762939453px]">
                            [
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start text-flow-com-hackathon-1903x885-default-aero-blue">
                        <div className="relative tracking-[-0.32px] leading-[19.2px] inline-block [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)] max-h-[19.200000762939453px]">
                            01
                        </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="relative tracking-[-0.32px] leading-[19.2px] inline-block [text-shadow:0px_0px_1px_rgba(0,_0,_0,_0.01)] max-h-[19.200000762939453px]">
                            ]
                        </div>
                    </div>
                </div> */}
        <div className="absolute right-6 top-5">
          <div>
            <p className="text-flow-com-hackathon-1903x885-default-nero-30">
              {" "}
              [ <span>1</span> ]
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row items-start justify-start ">
        <div className="flex-1 relative bg-violet-600 h-10 blur-2xl" />
        <div className="relative w-0 h-.5" />
      </div>
      <div className="w-full flex flex-row items-start justify-start z-10">
        <div className="flex-1 relative bg-flow-com-hackathon-1903x885-default-purple h-2.5" />
        <div className="relative w-0 h-2.5" />
      </div>
    </div>
  );
};

export default Card1;
