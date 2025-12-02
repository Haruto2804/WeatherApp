import { FaRegLightbulb } from "react-icons/fa";
import { TimeLineItem } from "./TimeLineItem";
const timeLineData = [
  {
    icon: '💡', // Icon: Lightbulb
    title: 'Ý tưởng ra đời',
    date: 'Quý 4, 2025',
    color: 'blue'
  },
  {
    icon: '💻', // Icon: Code/Laptop
    title: 'Phát triển phiên bản Alpha',
    date: 'Quý 4, 2025',
    color: 'indigo'
  },
  {
    icon: '🚀', // Icon: Rocket
    title: 'Chính thức ra mắt',
    date: 'Quý 2, 2026',
    color: 'green'
  },
  {
    icon: '👥', // Icon: Users
    title: 'Đạt 1 triệu người dùng',
    date: 'Quý 2, 2027',
    color: 'red'
  },
];
export function MyStories() {
  return (
    <div className="
      flex
      flex-col
      mx-auto
      max-w-6xl
      px-4
      items-center
      lg:flex-row
      py-20
       ">
      <div className="flex flex-col">
        <p className="text-3xl font-bold text-white mb-5">Câu chuyện của chúng tôi</p>
        <div className="text-gray-400 mb-10">
          Từ một ý tưởng nhỏ bé đến một ứng dụng phục vụ hàng triệu người,
          hành trình của Haruto Weather là câu chuyện về đam mê,
          sự đổi mới và cam kết không ngừng.
        </div>
        <div>
          {timeLineData.map((item, index) => (
            <TimeLineItem
              key={index}
              icon={item.icon}
              title={item.title}
              date={item.date}
              color={item.color}
              // Xác định mốc cuối cùng để ẩn đường kẻ
              isLast={index === timeLineData.length - 1}
            />
          ))}
        </div>
      </div>
      <video controls width= "700" className = "self-center lg:ml-10 rounded-xl">
        <source src="../public/videos/weather-marketing.mp4"></source>
      </video>
    </div>
  )
}