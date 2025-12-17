import { RiNewsLine } from "react-icons/ri";
import YouTube from "react-youtube";
import { useRef } from "react";

export function News() {
  const videoIds = [
    "i2_O9xfxPbk",
    "fBZJdbw9SnQ",
    "k5jWi6eR_6s",
    "Wzf07xXjlCk",
    "8GNQ3rh2jUE",
    "vTPIKPn4xA4"
  ];

  const playersRef = useRef({});

  // 2. Thêm dấu = vào đây
  const handleOnPlay = (currentId) => {
    Object.keys(playersRef.current).forEach((id) => {
      // 3. Kiểm tra tồn tại và khác ID hiện tại
      if (id !== currentId && playersRef.current[id] && typeof playersRef.current[id].pauseVideo === 'function') {
        playersRef.current[id].pauseVideo();
      }
    });
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <>
      <div className="lg:mt-15 flex-1 flex flex-col bg-linear-to-r from-blue-900 p-4 rounded-xl border border-slate-700">
        <div className="flex justify-between text-white items-center w-full mb-10">
          <p className="text-xl font-bold">Tin tức</p>
          <RiNewsLine className="size-7" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 place-items-center">
          {videoIds.map((id) => (
            <div key={id} className="w-full aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              <YouTube
                loading="lazy"
                videoId={id}
                opts={opts}
                className="w-full h-full"
                onReady={(event) => {
                  playersRef.current[id] = event.target;
                }}
                onPlay={() => handleOnPlay(id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}