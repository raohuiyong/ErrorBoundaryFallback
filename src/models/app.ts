const locales = {
  state: {
    routerList: [], // 权限路由数据
  },
  reducers: {
    setRouterList(prevState, payload) {
      for (const item of payload) {
        item.component && console.log('保存routes',Object.getOwnPropertyDescriptors(item.component));
      }
      return {
        ...prevState,
        routerList: payload,
      };
    },
  },
};

export default locales;
