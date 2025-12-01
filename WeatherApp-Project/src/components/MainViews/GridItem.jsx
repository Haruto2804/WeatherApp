// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export function GridItem({ icon, title, detail, description }) {


  return (
    <>  
      <motion.div
        whileHover ={{y:-50,
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 30,
            mass:5
          }
        }}
        className="
            bg-gray-900/80 // ĐÃ THÊM ĐỘ TRONG SUỐT 80% (opacity)
            text-white 
            p-6 
            flex flex-col 
            rounded-2xl 
            items-start 
            justify-between 
            h-full 
            border border-gray-800/50 
            shadow-2xl 
            relative overflow-hidden
          "
      >
        {/* Lớp phủ Gradient Tinh tế ở góc */}
        <div className="
            absolute top-0 right-0 w-1/3 h-1/3 
            bg-linear-to-br from-blue-600/20 to-transparent 
            rounded-full 
            translate-x-1/2 -translate-y-1/2 
            pointer-events-none 
            blur-xl
          " />

        {/* Nội dung (Relative z-index để nằm trên gradient) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">

          {/* Phần trên: Icon và Tiêu đề */}
          <div className="flex mb-4 items-center gap-3">
            {/* Icon màu Aqua nổi bật */}
            <div className="text-cyan-400 text-3xl">{icon}</div>
            {/* Tiêu đề mờ */}
            <p className="font-semibold text-gray-500 uppercase tracking-widest text-xs">{title}</p>
          </div>

          {/* Phần dưới: Chi tiết và Mô tả */}
          <div className="mt-auto">
            {/* Chi tiết: Rất lớn, font-light */}
            <p className="font-light text-white text-5xl mb-1 leading-tight">{detail}</p>
            {/* Mô tả: Font thường, màu xám nhạt */}
            <p className="font-normal text-gray-400 text-sm mt-2">{description}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}