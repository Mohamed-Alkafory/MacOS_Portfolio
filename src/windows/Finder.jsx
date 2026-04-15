import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Search } from "lucide-react";
import useLocationStore from "#store/location";
import { locations } from "#constants";
import clsx from "clsx";
import useWindowStore from "#store/window";
import { useEffect } from "react";

const Finder = ({ isOpen }) => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation, resetActiveLocation } = useLocationStore();

  // Sync with fresh constants whenever window opens
  useEffect(() => {
    if (isOpen) resetActiveLocation();
  }, [isOpen]);
  const RenderList = (name, item) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {item.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active",
            )}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  const OpenItem = (item) => {
    if (!item) return;
    
    // Handle folders
    if (item.kind === "folder") return setActiveLocation(item);
    
    // Handle specific file types
    switch (item.fileType) {
      case "pdf":
        openWindow("resume", item);
        break;
      case "txt":
        openWindow("txtfile", item);
        break;
      case "img":
        openWindow("imgfile", item);
        break;
      case "fig":
      case "url":
        if (item.href) window.open(item.href, "_blank");
        break;
      default:
        console.warn("Unknown file type:", item.fileType);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {RenderList("Favorites", Object.values(locations))}
          {RenderList("Work", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children?.map((item) => (
            <li
              key={item.id}
              onClick={() => OpenItem(item)}
              className={clsx(item.position, "group")}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const FinderWindow = WindowWrapper(Finder, "finder");
export default FinderWindow;
