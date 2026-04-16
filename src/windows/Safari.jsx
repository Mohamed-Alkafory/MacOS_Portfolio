import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import {
  PanelLeft,
  ShieldHalf,
  ChevronLeft,
  ChevronRight,
  Search,
  Share,
  Plus,
  Copy,
  MoveRight,
} from "lucide-react";
// import { blogPosts } from "#constants";
const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className=" flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1 "
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center p-20 space-y-4">
        <div className="bg-gray-100 p-6 rounded-full dark:bg-zinc-800">
          <ShieldHalf className="size-12 text-gray-300 " />
        </div>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-zinc-100">
            No Articles Yet
          </h2>
          <p className="text-sm text-gray-500 max-w-xs dark:text-zinc-500 mt-1">
            I'm currently drafting some deep dives into React, GSAP, and modern
            web design. Stay tuned!
          </p>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
