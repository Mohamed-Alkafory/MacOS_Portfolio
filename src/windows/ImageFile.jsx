import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const ImageFile = ({ data }) => {
  if (!data) return null;
  const { name, imageUrl } = data;
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 bg-white max-h-[80vh] overflow-auto custom-scrollbar">
        {imageUrl ? (
          <div className="w-full">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto max-h-[70vh] object-contain  rounded"
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");
export default ImageFileWindow;
