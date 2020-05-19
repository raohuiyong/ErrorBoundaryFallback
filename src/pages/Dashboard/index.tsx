import React, { useEffect, useState } from "react";
import { useRequest } from "ice";
import axios from "axios";

const Dashboard = () => {
  const { data, loading = true, request } = useRequest({
    url: "/api/projects",
    method: "GET",
  });
  const [source] = useState(axios.CancelToken.source());

  const a = {};
  a.forEach();


  useEffect(() => {
    request({ data: { name: "raohuiyong" }, cancelToken: source.token });
    return () => {
      source.cancel("组件卸载,取消请求");
    };
  }, []);
  return (
    <>
      <h2>Dashboard Page...</h2>
    </>
  );
};

export default Dashboard;
