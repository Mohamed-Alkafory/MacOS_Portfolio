// import dayjs from "dayjs";
// import { navLinks, navIcons } from "#constants";
// import useWindowStore from "#store/window";
// import useDarkModeStore from "#store/useDarkMode";

// function Navbar() {
//   const { openWindow } = useWindowStore();
//   const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode);

//   return (
//     <nav>
// <div>
//   <img src="/images/logo.svg" alt="logo" />
//   <p className="font-bold">Mohamed Alkafory -Portfolio</p>
//   <ul className="ml-7 space-x-5">
//     {navLinks.map(({ id, name, type }) => (
//       <li key={id}>
//         <p onClick={() => openWindow(type)} className="font-medium">
//           {name}
//         </p>
//       </li>
//     ))}
//   </ul>
// </div>

//       <div>
//         <ul>
//           {navIcons.map(({ id, img }) => (
//             <li key={id}>
//               <img
//                 src={img}
//                 className="icon-hover"
//                 alt={`icon-${id}`}
//                 onClick={id === 4 ? toggleDarkMode : undefined}
//                 style={id === 4 ? { cursor: "pointer" } : undefined}
//               />
//             </li>
//           ))}
//         </ul>
//         <time>{dayjs().format("MMM DD, h:mm A")}</time>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window";
import useDarkMode from "#store/useDarkMode";
import { useState } from "react";

function Navbar() {
  const { openWindow } = useWindowStore();
  const { isDark, toggle } = useDarkMode();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="dark:bg-black/20 dark:border-white/10 border-b border-transparent">
      <div>
        <img src="/images/logo.svg" alt="logo" className="dark:invert" />
        <p className="font-bold dark:text-white">Mohamed Alkafory -Portfolio</p>
        <ul className="ml-7 space-x-5">
          {navLinks.map(({ id, name, type }) => (
            <li key={id}>
              <p
                onClick={() => openWindow(type)}
                className="font-medium dark:text-white/80 dark:hover:text-white"
              >
                {name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id} className="relative">
              <img
                src={img}
                className="icon dark:invert"
                alt={`icon-${id}`}
                onClick={id === 4 ? () => setShowMenu((p) => !p) : undefined}
                style={{ cursor: id === 4 ? "pointer" : "default" }}
              />
              {id === 4 && showMenu && (
                <div className="absolute top-9 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-zinc-800/95 backdrop-blur-md rounded-xl shadow-2xl p-1.5 w-48 z-[999999] flex flex-col gap-1 border border-black/5 dark:border-white/10">
                  <header className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Appearance
                  </header>
                  <button
                    onClick={() => {
                      if (isDark) toggle();
                      setShowMenu(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      !isDark
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <span>Light Mode</span>
                    {!isDark && <span className="text-xs">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      if (!isDark) toggle();
                      setShowMenu(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      isDark
                        ? "bg-blue-500 text-white shadow-sm"
                        : "text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    <span>Dark Mode</span>
                    {isDark && <span className="text-xs">✓</span>}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <time className="dark:text-white">
          {dayjs().format("MMM DD, h:mm A")}
        </time>
      </div>
    </nav>
  );
}

export default Navbar;
