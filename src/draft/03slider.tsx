// import React, { useState } from "react";

// const PricingSlider: React.FC = () => {
//   const [sliderValue, setSliderValue] = useState(1);

//   const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseInt(event.target.value);
//     setSliderValue(value);
//     // You can add logic here to update the price incrementally
//   };

//   return (
//     <div className="flex items-center justify-between">
//       <div class="iv-relative iv-overflow-hidden iv-bg-grey-0 iv-p-[38px] iv-w-[330px] sm:iv-w-full">
//         <div>
//           <div class="iv-pb-[12px] sm:iv-pb-[0px] iv-flex iv-justify-between">
//             <span class="iv-text-black-85 iv-text-heading-s sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
//               Plus
//             </span>
//             <div class="sm:iv-block iv-hidden">
//               <div class="iv-inline-block iv-text-[46px] iv-leading-[50px] sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
//                 $20
//               </div>
//               <div class="iv-inline-block xl:iv-pl-6 lg:iv-pl-4 iv-pl-7 iv-text-black-50 iv-text-body-3xl iv-font-semibold">
//                 /mo*
//               </div>
//             </div>
//           </div>
//           <div
//             class="lg:iv-pr-5 iv-text-grey-50 iv-text-body-3xl iv-font-medium sm:iv-text-body-xl"
//             title="For creators starting their journey"
//           >
//             For creators starting their journey
//           </div>
//           <div class="iv-py-15 sm:iv-hidden">
//             <div class="iv-inline-block iv-text-[46px] iv-leading-[50px] sm:iv-text-[30px] iv-leading-[36px] iv-font-extrabold">
//               $20
//             </div>
//             <div class="iv-inline-block xl:iv-pl-6 lg:iv-pl-4 iv-pl-7 iv-text-black-50 iv-text-body-3xl iv-font-semibold">
//               /mo*
//             </div>
//           </div>
//           <div class="iv-py-20 sm:iv-pb-[0px]">
//             <div class="iv-text-center iv-text-body-xs iv-h-[16px] sm:iv-block iv-hidden">
//               <div class="iv-font-medium iv-text-black-50">
//                 *Billed $240 yearly
//               </div>
//             </div>
//             <div>
//               <div class="iv-flex iv-items-center iv-rounded-[80px] iv-h-[38px] iv-py-3 iv-pr-3 iv-pl-25 iv-bg-black-7 iv-relative">
//                 <div class="iv-absolute iv-top-[3px] iv-bottom-[3px] iv-left-[3px] iv-w-[50px] iv-bg-[#242424] iv-rounded-[80px]"></div>
//                 <div style="position: relative;" class="user-seats">
//                   <div
//                     class="iv-bg-[#242424] iv-h-full iv-rounded-[80px]"
//                     style="position: absolute; left: 0px; right: 181px;"
//                   ></div>
//                   <div
//                     class="track track-1"
//                     style="position: absolute; left: 0px; right: 0px;"
//                   ></div>
//                   <div
//                     class="seat-thumb seat-thumb-0 "
//                     style="position: absolute; touch-action: none; z-index: 1; left: 0px;"
//                     tabindex="0"
//                     role="slider"
//                     aria-orientation="horizontal"
//                     aria-valuenow="1"
//                     aria-valuemin="1"
//                     aria-valuemax="10"
//                     aria-disabled="false"
//                   >
//                     1x
//                   </div>
//                 </div>
//               </div>
//               <div class="iv-text-body-s iv-text-black-50 iv-text-center">
//                 More than 10 users?{" "}
//                 <span class="iv-text-blue iv-cursor-pointer">Contact us</span>
//               </div>
//             </div>
//           </div>
//           <button class="iv-button iv-transition iv-duration-150 iv-ease-in iv-inline-flex iv-justify-center iv-items-center iv-cursor-pointer iv-rounded-full iv-px-15 iv-h-52 iv-w-full xl:iv-text-body-3xl lg:iv-text-body-3xl sm:iv-hidden iv-font-semibold iv-bg-blue iv-text-grey-0">
//             Get Plus
//           </button>
//           <div class="iv-text-body-m iv-mt-5 iv-h-[20px] sm:iv-hidden">
//             <div class="iv-font-medium iv-text-black-50">
//               *Billed $240 yearly
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingSlider;
