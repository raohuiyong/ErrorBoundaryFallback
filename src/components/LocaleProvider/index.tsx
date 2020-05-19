import React, { useState, useCallback, useEffect } from "react";
import { ConfigProvider } from "@alifd/next";

(function () {
  const throttle = function (type: string, name: string, obj: Window = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle("resize", "optimizedResize");
})();
interface Props {
  children: React.ReactElement;
}
function getDevice(width: number) {
  const isPhone =
    typeof navigator !== "undefined" &&
    navigator &&
    navigator.userAgent.match(/phone/gi);

  if (width < 680 || isPhone) {
    return "phone";
  } else if (width < 1280 && width > 680) {
    return "tablet";
  } else {
    return "desktop";
  }
}
function LocaleProvider(props: Props) {
  const [device, setDevice] = useState<"phone" | "tablet" | "desktop">(
    getDevice(NaN)
  );
  const { children } = props;

  const onResize = useCallback((e: any) => {
    console.log("object");
    const type = getDevice(e && e.target && e.target.innerWidth);
    setDevice(type);
  }, []);
  useEffect(() => {
    window.addEventListener("optimizedResize", onResize);
    return () => {
      window.removeEventListener("optimizedResize", onResize);
    };
  }, []);
  return (
    <ConfigProvider device={device}>
      {React.Children.only(children)}
    </ConfigProvider>
  );
}

export default LocaleProvider;
