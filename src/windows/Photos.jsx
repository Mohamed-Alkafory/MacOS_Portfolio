import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import { Mail, Search, Share2, Heart, Plus } from "lucide-react";
import { gallery, photosLinks } from "#constants";
import useWindowStore from "#store/window";
import { useState } from "react";
import clsx from "clsx";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
      {/* HEADER */}
      <div
        id="window-header"
        className="flex-none border-b border-gray-100 !bg-gray-50/50 backdrop-blur-md 
        dark:border-zinc-700 dark:!bg-zinc-800/80"
      >
        <WindowControls target="photos" />

        <div className="flex-1 flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-6">
            <Plus className="icon size-4 text-gray-500 dark:text-zinc-400" />
          </div>

          <div className="flex items-center gap-4 text-gray-500 dark:text-zinc-400">
            <Share2 className="icon size-4" />
            <Heart className="icon size-4" />

            <div className="h-4 w-[1px] bg-gray-300 dark:bg-zinc-600 mx-1" />

            <div className="relative group">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-gray-400 dark:text-zinc-500" />

              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200/50 dark:bg-zinc-700 rounded-md py-1 pl-7 pr-2 text-xs 
                text-black dark:text-white 
                placeholder:text-gray-400 dark:placeholder:text-zinc-500
                focus:outline-none w-32 focus:w-48 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <div
          className="sidebar w-48 flex-none bg-gray-50/80 backdrop-blur-sm border-r border-gray-100 
        p-4 space-y-4 select-none
        dark:bg-zinc-800 dark:border-zinc-700"
        >
          <div className="space-y-1">
            <h2
              className="px-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 
            dark:text-zinc-500"
            >
              Photos
            </h2>

            <ul>
              {photosLinks.map(({ id, icon, title }) => (
                <li
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={clsx(
                    "flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-default transition-colors text-sm",
                    activeTab === id
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-200 text-gray-700 dark:hover:bg-zinc-700 dark:text-zinc-300",
                  )}
                >
                  <img
                    src={icon}
                    alt={title}
                    className={clsx(
                      "size-4",
                      activeTab === id && "brightness-0 invert",
                    )}
                  />
                  <span className="font-medium">{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6 bg-white dark:bg-zinc-900 overflow-hidden">
          <div className="mb-4 flex items-baseline justify-between">
            <h1 className="text-xl font-bold text-gray-900 dark:text-zinc-100 leading-none">
              {photosLinks.find((t) => t.id === activeTab)?.title || "Library"}
            </h1>

            {activeTab === 1 && (
              <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
                4 Photos
              </span>
            )}
          </div>

          {activeTab === 1 ? (
            <ul className="grid grid-cols-4 grid-rows-2 gap-3 h-[420px]">
              {gallery.map(({ id, img }, index) => (
                <li
                  key={id}
                  onClick={() =>
                    openWindow("imgfile", {
                      id,
                      name: `IMG_0${id}`,
                      icon: "/images/image.png",
                      kind: "file",
                      fileType: "img",
                      imageUrl: img,
                    })
                  }
                  className={clsx(
                    "group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-800 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500",
                    index === 0 && "col-span-2 row-span-2",
                    index === 1 && "col-span-2 row-span-1",
                    index === 2 && "col-span-1 row-span-1",
                    index === 3 && "col-span-1 row-span-1",
                  )}
                >
                  <img
                    src={img}
                    alt={`Gallery image ${id}`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Photo
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="h-[420px] flex flex-col items-center justify-center text-center gap-4">
              <div className="bg-gray-100 dark:bg-zinc-800 p-5 rounded-full">
                <img
                  src={photosLinks.find((t) => t.id === activeTab)?.icon}
                  alt=""
                  className="size-10 opacity-30"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-400 dark:text-zinc-400">
                  No {photosLinks.find((t) => t.id === activeTab)?.title} Yet
                </p>

                <p className="text-xs text-gray-300 dark:text-zinc-500 mt-1">
                  Photos will appear here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
