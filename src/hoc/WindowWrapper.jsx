import useWindowStore from "#store/Window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

const WindowWrapper = (Component, windowKey) => {
  const Wrapper = (props) => {
    const { focusWindow, window: windowConfigs } = useWindowStore();
    const { isOpen, zIndex } = windowConfigs[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const element = ref.current;
      if (!element || !isOpen) return;
      element.style.display = "block";
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);
    useGSAP(() => {
      const element = ref.current;
      if (!element) return;
      const [instance] = Draggable.create(element, {
        onPress: () => focusWindow(windowKey),
      });
      return () => {
        instance.kill();
      };
    }, []);
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
        <Component {...props} />
      </section>
    );
  };
  Wrapper.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapper;
};

export default WindowWrapper;
