import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

const WindowWrapper = (Component, windowKey) => {
  const Wrapper = (props) => {
    const { focusWindow, window: windowConfigs } = useWindowStore();
    const { isOpen, zIndex, data } = windowConfigs[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;
      
      // Ensure element is visible before Draggable init
      element.style.display = "block";
      
      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });

      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power3.out" },
      );

      return () => {
        if (instance) instance.kill();
      };
    }, [isOpen]);

    useLayoutEffect(() => {
      const element = ref.current;
      if (!element) return;
      element.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        ref={ref}
        style={{ zIndex }}
        id={windowKey}
        className="absolute"
        onMouseDown={() => focusWindow(windowKey)}
      >
        <Component {...props} data={data} isOpen={isOpen} />
      </section>
    );
  };
  Wrapper.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapper;
};

export default WindowWrapper;
