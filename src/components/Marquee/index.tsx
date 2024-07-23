import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "https://www.chiratae.com/wp-content/uploads/2023/05/Chiratae-logo-placeholder.png",
  },
  {
    img: "https://cdn.dribbble.com/users/873027/screenshots/3996894/dribbble_001_2x.png",
  },
  {
    img: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-8344,resizemode-75,msid-99059418/markets/stocks/news/zerodha-may-make-rs-2500-crore-profit-in-fy23-report.jpg",
  },
  {
    img: "https://i0.wp.com/neurowyzr.com/wp-content/uploads/2024/02/peak-xv-logo-no-bcg.png?resize=500%2C500&ssl=1",
  },
  {
    img: "https://logowik.com/content/uploads/images/swiggy2340.jpg",
  },
  {
    img: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-8344,resizemode-75,msid-99059418/markets/stocks/news/zerodha-may-make-rs-2500-crore-profit-in-fy23-report.jpg",
  },
  {
    img: "https://apiexcellent.com/images/digital/product/deccanherald-digital10225.webp",
  },
  {
    img: "https://logowik.com/content/uploads/images/meesho5755.jpg",
  },
  {
    img: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-12/15/full/1671105361-1397.jpg?im=FeatureCrop,size=(826,465)",
  },
  {
    img: "https://mma.prnewswire.com/media/1596971/3one4_Capital_Logo.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Skipped existing imports and code for brevity

const ReviewCard = ({
    img,
  }: {
    img: string;
  }) => {
    return (
      <div className="flex items-center">
        <img src={img} alt="" width={150} height={100}></img>
      </div>
    );
  };
  
  export function MarqueeDemo() {
    return (
      <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-white md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-white"></div>
      </div>
    );
  }