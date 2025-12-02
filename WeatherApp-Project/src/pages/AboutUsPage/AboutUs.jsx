import { MyStories } from "./MyStories";
import { CTA } from "./CTA";
import { GoAlert, GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { IoEarthSharp } from "react-icons/io5";
import { RiRobot3Line } from "react-icons/ri";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router";
export function AboutUs() {
  return (
    <div className="font-Google_San text-gray-400 relative text-lg bg-slate-900 w-screen min-h-screen flex flex-col">
      <div className=" relative bg-black/70">
        <div className="bg-[url('../public/image/weather/cloud.jpeg')] h-200 bg-cover"></div>
        <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center items-center">
          <p className="text-4xl text-white font-bold lg:text-6xl">Dự báo chính xác. Trải nghiệm vượt trội.</p>
          <p className=" text-lg font-medium lg:text-2xl">
            Khám phá câu chuyện, đội ngũ và công nghệ
            tiên tiến đằng sau ứng dụng thời tiết mà bạn tin tưởng.
          </p>
          <Link to = "/current" className="bg-blue-500 font-bold text-sm w-1/2 text-white p-4 cursor-pointer hover:-translate-y-3 ease-in-out duration-500 rounded-sm lg:w-1/5 lg:h-[70px] flex items-center justify-center">Trải nghiệm Haruto Weather</Link>
        </div>
      </div>
      <div className="bg-black/40 py-10">
        <div className="  max-w-6xl mx-auto text-center p-4A">
          <div className="  ">
            <div className="text-3xl text-white font-bold mb-5 ">Sứ mệnh và tầm nhìn</div>
            <p className="">
              Chúng tôi tin rằng việc tiếp cận thông tin thời tiết chính xác
              và kịp thời là quyền của mọi người. Haruto Weather được xây dựng
              để mang lại sự an tâm và giúp bạn lên kế hoạch cho mỗi ngày một cách
              hiệu quả nhất.</p>
          </div>
          <div className="flex 
      relative
      flex-col gap-5 p-4 
      mx-auto 
      max-w-6xl px-4 
      sm:px-6 lg:px-8
      lg:flex-row
      items-center

      ">

            <div className="flex flex-col gap-4 rounded-sm border-gray-700 border p-4  ">
              <GoGoal className="size-8 text-blue-500"></GoGoal>
              <p className="font-bold text-2xl text-white">Sứ mệnh của chúng tôi</p>
              <p className="">
                Cung cấp những dự báo thời tiết chính xác, dễ hiểu và đáng tin cậy nhất cho người
                dùng trên toàn thế giới, giúp mọi người đưa ra quyết định tốt hơn.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-sm border-gray-700 border p-4  ">
              <FaRegEye className="size-8 text-blue-500"></FaRegEye>
              <p className="font-bold text-2xl text-white">Sứ mệnh của chúng tôi</p>
              <p className="">
                Cung cấp những dự báo thời tiết chính xác, dễ hiểu và đáng tin cậy nhất cho người
                dùng trên toàn thế giới, giúp mọi người đưa ra quyết định tốt hơn.</p>
            </div>
          </div>
        </div>
      </div>


      <MyStories></MyStories>
      <div className="about-me bg-black/40 py-20 px-4">
        <div className="flex-col flex mx-auto max-w-6xl gap-20 justify-center">
          <div className = "flex flex-col items-center">
            <p className="text-4xl text-white font-bold text-center mb-15">About me</p>
            <p className="w-5/6">
              Tôi là một nhà phát triển website tiềm năng,
              tôi tin rằng công nghệ phải phục vụ người dùng.
              Tôi luôn tìm cách sử dụng kỹ năng lập trình để
              giải quyết các vấn đề thực tế và tạo ra các tính
              năng mang lại giá trị rõ ràng, giúp cải thiện hành
              trình của người dùng trên website.</p>
          </div>
          <div className="flex-col flex items-center   ">
            <div className=" rounded-full border-6 border-yellow-400 size-50 mt-5">
              <img src="../../public/image/haruto.png" alt=""
                className="w-full h-full object-cover rounded-full"
              />

            </div>
          </div>
        </div>
      </div>


      <div className="techology px-4 py-25 flex flex-col gap-10">
        <div className="mx-auto max-w-6xl p-4 gap-5">
          <p className="text-4xl font-bold text-center text-white mb-5">Công nghệ đằng sau Haruto Weather</p>
          <p className="text-gray-400">
            Sự chính xác của chúng tôi đến từ sự kết hợp của
            các nguồn dữ liệu hàng đầu thế giới và các thuật
            toán học máy độc quyền.
          </p>
        </div>
        <div className="flex flex-col mx-auto max-w-6xl p-4 gap-5 lg:flex-row">

          <div className="flex flex-col gap-2 items-center">
            <div className="bg-blue-500/30 size-15 rounded-full flex items-center justify-center mb-5">
              <IoEarthSharp className="size-7 text-blue-500" />

            </div>
            <p className="text-xl font-bold text-center text-white">Nguồn dữ liệu toàn cầu</p>
            <p className="text-center ">
              Tích hợp dữ liệu từ các vệ tinh, trạm quan trắc mặt đất
              và radar thời tiết trên toàn thế giới.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-blue-500/30 size-15 rounded-full flex items-center justify-center mb-5">
              <RiRobot3Line className="size-7 text-blue-500" />

            </div>
            <p className="text-xl font-bold text-center text-white">Dự báo bằng AI</p>
            <p className="text-center ">
              Sử dụng mô hình học máy tiên tiến để phân tích
              các mẫu phức tạp và tăng cường độ chính xác.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-blue-500/30 size-15 rounded-full flex items-center justify-center mb-5">
              <MdOutlineAccessTime className="size-7 text-blue-500" />

            </div>
            <p className="text-xl font-bold text-center text-white">Cập nhật thời gian thực</p>
            <p className="text-center ">
              Hệ thống của chúng tôi xử lý hàng terabyte dữ liệu mỗi
              giờ để cung cấp thông tin mới nhất.</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-black/40">
        <div className="mx-auto max-w-6xl p-4">
          <CTA
            title="Sẵn sàng cho mọi khoảnh khắc ?"
            description="Tải xuống Haruto Weather ngay hôm nay và trải nghiệm ứng dụng dự báo thời tiết thông minh, chính xác và đẹp mắt nhất."
            ctaTextButton="Trải nghiệm ngay"

          />
        </div>
      </div>


    </div>
  )
}