import Images from "../../Images";
import { CiLocationOn } from "react-icons/ci";
import Flex from "../../Flex";


const OfferPack = ({offerCap,placeName,offerPhoto,regPrice,offerPrice}) => {
  return (
    <>
      <div className="w-[316px] cursor-pointer">
        <Images src={offerPhoto}/>
        <p className="font-logo1 font-medium text-[18px] mt-[20px]">{offerCap}</p>
        <Flex className={"mt-[10px] mb-[8px]"}>
            <p><CiLocationOn className="text-[20px] text-[#50A1FF]" /></p>
            <p className="font-extralight text-[12px] font-logo1">{placeName}</p>
        </Flex>
        <Flex className={"gap-x-[10px]"}>
            <p className="font-extralight text-[12px] font-logo1">{`$ ${regPrice}`}</p>
            <p className="font-logo1 font-bold text-[18px] text-[#50A1FF]">{`$ ${offerPrice}`}</p>
        </Flex>
        <button className="w-full py-[15px] px-[100px] bg-[#50A1FF] text-white font-logo1 text-[20px] font-bold rounded-[6px] cursor-pointer mt-[10px]">Book Now</button>
      </div>
    </>
  );
};

export default OfferPack;
