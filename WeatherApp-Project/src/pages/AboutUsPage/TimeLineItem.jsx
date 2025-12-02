export function TimeLineItem({ icon, title, date, color, isLast })  {
  const markerBg = `bg-${color}-500`;
  // Đường kẻ mỏng và màu tối (bg-gray-700)
  const lineBg = isLast ? 'bg-transparent' : 'bg-gray-700';
  const markerRing = `ring-${color}-500`;

  return (
    <div className="flex relative">
      {/* 1. Đường kẻ dọc (Vertical Line) */}
      <div
        className={`w-0.5 ${lineBg} absolute left-4 top-10 bottom-0`}
        aria-hidden="true"
      ></div>

      {/* 2. Marker/Icon */}
      <div className="flex-shrink-0 z-10">
        <div
          // Marker nổi bật với vòng tròn và đổ bóng
          className={`w-9 h-9 rounded-full ${markerBg} flex items-center justify-center text-white text-xl 
                    ring-4 ring-gray-900 ${markerRing} shadow-lg`}
        >
          {icon}
        </div>
      </div>

      {/* 3. Nội dung (Content) */}
      <div className="flex flex-col ml-6 pb-12 pt-0.5">
        <p className="text-xl font-bold text-white mb-1">{title}</p>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
};