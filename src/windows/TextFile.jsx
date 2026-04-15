import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const TextFile = ({ data }) => {
  if (!data) return null;
  const { image, name, description, subtitle } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="flex-1 text-center font-bold text-gray-600">{name}</h2>
      </div>

      <div className="p-3 bg-white flex flex-col">
        {image ? (
          <div className="w-full mb-2">
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover max-h-[500px] rounded-xl shadow-sm border border-gray-100"
            />
          </div>
        ) : null}

        <div className="space-y-2">
          {subtitle ? (
            <h3 className="text-base font-bold text-gray-900 leading-tight">
              {subtitle}
            </h3>
          ) : null}

          {Array.isArray(description) && description.length > 0 ? (
            <div className="space-y-2 text-sm leading-relaxed text-gray-600 font-georama">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");
export default TextFileWindow;
