import React from "react";
import { createApp, APP_MODE, IAppConfig, logger } from "ice";
import LocaleProvider from "@/components/LocaleProvider";

const appConfig: IAppConfig = {
  app: {
    rootId: "ice-container",
    errorBoundary: true,
    ErrorBoundaryFallback: <h3>渲染错误</h3>,// 注释后会显示默认的错误边界
    onErrorBoundaryHander(error: Error) {
      // Do something with the error
      logger.error("错误日志", error);
    },
    addProvider: ({ children }) => <LocaleProvider>{children}</LocaleProvider>,
  },
  logger: {
    level: APP_MODE === "build" ? "error" : "debug",
  },
  router: {
    type: "browser",
    fallback: <div>加载中...</div>,
  },
  request: {
    timeout: 5000,
    baseURL: "/",
    interceptors: {
      request: {
        onConfig: (config) => {
          return config;
        },
      },
    },
  },
};

createApp(appConfig);
