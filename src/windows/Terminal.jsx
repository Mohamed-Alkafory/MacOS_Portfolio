import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls";
const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold">@Alkafory % </span>
          show tech stack
        </p>
        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>
        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center gap-2">
              <Check className="check" size={20} />
              <h3>{category}</h3>
              <p className="flex gap-2">
                {items.map((item, i) => (
                  <span key={i}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
        <div className="footnote">
          <p>
            <Check size={20} className="text-green-500" />5 of 5 stack loaded
            successfully (100%)
          </p>
          <p className="text-black dark:text-white">
            <Flag size={15} fill="black" className="dark:fill-white" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};
const TerminalWrapper = WindowWrapper(Terminal, "terminal");
export default TerminalWrapper;
