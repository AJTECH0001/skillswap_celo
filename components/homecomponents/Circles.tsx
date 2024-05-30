import Image from "next/image";
import Link from "next/link";
import React from "react";
import CircleImg1 from "../../assets/ciclesimg1.svg"

const Circles = () => {
  return (
    <div className="pt-11">
      <div className="flex justify-between">
        <p className="text-sm text-[#888888] font-semibold">Popular Cicles</p>
        <Link href="/cicles" className="text-sm text-[#6A93FF]">
          View all
        </Link>
      </div>

      <div className="bg-[#F8F8F8] rounded-[8px] pb-2 mt-4 w-1/2 flex flex-col">
        <Image src={CircleImg1} alt="skillimage_" className="rounded-t-[8px]" />

        <div className="px-2 mt-3">
          <h2 className="text-sm font-semibold">Web Developers</h2>
          <p className="text-xs text-[#888888] font-medium mt-1"></p>
        </div>
      </div>
    </div>
  );
};

export default Circles;
