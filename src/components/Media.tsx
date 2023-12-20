import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
    const mediaList = [
    {
      title: "代码",
      linkText: "Github",
      link: "https://github.com/vectorisvector/inscription",
    },
  ];
  return (
    <div className=" py-4">
      <div className=" text-center">
        打赏地址☕️: 0x4f2371B8BBC8201a6A41bd8D463613Bc65537dec
      </div>
    </div>
  );
}
