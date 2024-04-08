"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[23rem]  rounded-md flex flex-col antialiased bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    image:
      "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/434654431_122117133656245988_131643976356238286_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFDEaJG6t9_FbQM1evyHurL2ZMAOmMbr37ZkwA6YxuvfusH3R3wIsLo42SUavVYaOBywmMPwHiZuG-cfOYStXwh&_nc_ohc=D5JbMSnrjEYAb64G8pu&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&oh=00_AfAXYaTZ04O3XM_8r1iwwIOGwwRrb9etppqGG6rMpF9e4Q&oe=661951D8",
  },
  {
    image:
      "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/433001166_122110950068245988_869043873275769040_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHRZ9e_gNswIzHQHQ8fAW_COOtISIlQFrg460hIiVAWuG7r8EsNLIi7ehS__0QAfVxLQKlNAWZVTV-SXtw20N-L&_nc_ohc=vnFRLwZO2QoAb6HWexm&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&oh=00_AfBMmumEXUvwNqw3U_MXfwGypE1xc8ngl3Q9BWRDG-eTrw&oe=66195FF8",
  },
  {
    image:
      "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/432834872_122110948958245988_3161055109523777194_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHpfoda48v2HrMs7X2CarasD2DTtGFf3EkPYNO0YV_cSc8VrtW8HmCTpj4eTY54r-kZ9bhyXFWytnh-iZDJMJhe&_nc_ohc=wJW12Px6r6YAb6YIJn1&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=00_AfCkhyGXsY4caz1XI-DSvlePfex0YaffdisXR4CFccWXDQ&oe=66196CCD",
  },
  {
    image:
      "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/432775103_122110948784245988_6168047200527016174_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGzOtkhj7t5fc5F4N1AKZdm-7qHe9EETUz7uod70QRNTPOea2VW6tLoRbY3jDrwXvm4nTX6bNxvrfC3K0qM15Ud&_nc_ohc=HlglybsTDBoAb6bxqIS&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AfBK9cWb9rdQeR1DGOafx913jAxgeSELV0yCKbbl3eBaSA&oe=66194A00",
  },
  {
    image:
      "https://scontent-mnl1-2.xx.fbcdn.net/v/t39.30808-6/432774532_122110948976245988_8123673504643042625_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfTXXfYogwgjDkfqWkMfel6tRbq_P1qsTq1Fur8_WqxNrl069UY9jK0Fm-mjr0vjtIPwt4r_hx65gk0toHe8XU&_nc_ohc=nh1OvnPTEzwAb6jwPwE&_nc_zt=23&_nc_ht=scontent-mnl1-2.xx&oh=00_AfAYpElcvzHkeMHb0uQUnUwB17d-Fucpda5hKxiUWxPvrQ&oe=661955F5",
  },
];

export default InfiniteMovingCardsDemo;
