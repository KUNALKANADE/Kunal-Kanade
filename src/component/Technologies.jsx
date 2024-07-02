import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">SKILLS</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-purple-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-yellow-400" />
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaHtml5 className="text-7xl text-red-400" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-green-400" />
        </div>
        
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaCss3Alt className="text-7xl text-blue-400" />
        </div>

      </div>
    </div>
  );
};

export default Technologies;
