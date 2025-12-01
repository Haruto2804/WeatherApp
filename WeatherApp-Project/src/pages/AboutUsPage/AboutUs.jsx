import { GoAlert, GoGoal } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
export function AboutUs() {
  return (
    <div className=" relative bg-black w-screen min-h-screen flex flex-col gap-5">
      <div className=" relative bg-black/70">
        <div className="bg-[url('../public/image/weather/cloud.jpeg')] h-200 bg-cover"></div>
        <div className="bg-black/70 absolute top-0 left-0 right-0 bottom-0"></div>
        <div className="flex flex-col gap-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] text-center items-center">
          <p className="text-4xl text-white font-bold">Dự báo chính xác. Trải nghiệm vượt trội.</p>
          <p className="text-gray-400 text-lg font-medium">
            Khám phá câu chuyện, đội ngũ và công nghệ
            tiên tiến đằng sau ứng dụng thời tiết mà bạn tin tưởng.
          </p>
          <button className="bg-blue-500 font-bold text-sm w-1/2 text-white p-4 cursor-pointer hover:-translate-y-3 ease-in-out duration-500 rounded-sm">Trải nghiệm Haruto Weather</button>
        </div>
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
        <div>
          <div className="text-3xl text-white font-bold mb-5 ">Sứ mệnh và tầm nhìn</div>
          <p className="text-gray-400">
            Chúng tôi tin rằng việc tiếp cận thông tin thời tiết chính xác
            và kịp thời là quyền của mọi người. Haruto Weather được xây dựng
            để mang lại sự an tâm và giúp bạn lên kế hoạch cho mỗi ngày một cách
            hiệu quả nhất.</p>
        </div>

        <div className="flex flex-col gap-4 rounded-sm border-gray-700 border p-4  ">
          <GoGoal className="size-8 text-blue-500"></GoGoal>
          <p className="font-bold text-2xl text-white">Sứ mệnh của chúng tôi</p>
          <p className="text-gray-400">
            Cung cấp những dự báo thời tiết chính xác, dễ hiểu và đáng tin cậy nhất cho người
            dùng trên toàn thế giới, giúp mọi người đưa ra quyết định tốt hơn.</p>
        </div>
        <div className="flex flex-col gap-4 rounded-sm border-gray-700 border p-4  ">
          <FaRegEye className="size-8 text-blue-500"></FaRegEye>
          <p className="font-bold text-2xl text-white">Sứ mệnh của chúng tôi</p>
          <p className="text-gray-400">
            Cung cấp những dự báo thời tiết chính xác, dễ hiểu và đáng tin cậy nhất cho người
            dùng trên toàn thế giới, giúp mọi người đưa ra quyết định tốt hơn.</p>
        </div>
      </div>
      <div className="
      flex
      flex-col
      mx-auto
      max-w-6xl
      p-4
      items-center">
        <div>
          <p className="text-3xl font-bold text-white mb-5">Câu chuyện của chúng tôi</p>
          <div className="text-gray-400">
            Từ một ý tưởng nhỏ bé đến một ứng dụng phục vụ hàng triệu người,
            hành trình của Haruto Weather là câu chuyện về đam mê,
            sự đổi mới và cam kết không ngừng.</div>
        </div>

      </div>
    </div>
  )
}