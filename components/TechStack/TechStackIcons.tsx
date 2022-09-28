import Image from "next/image";
import React from "react";

type TechStackIconsProps = {
  src: string;
  name: string;
  bgClass: string;
};

const TechStackIcons: React.FC<TechStackIconsProps> = ({ src, name,bgClass }) => {
  return (
    <div className={`${bgClass} p-[8px] rounded-lg`}>
      <figure className="w-[24px] h-[24px]">
        <Image width={24} height={24} alt={name} src={src} />
      </figure>
    </div>
  );
};

export default TechStackIcons;
