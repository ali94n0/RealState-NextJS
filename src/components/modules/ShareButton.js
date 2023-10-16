"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";
import styles from "@/module/ShareButton.module.css";
import toast from "react-hot-toast";

function ShareButton(props) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard
      text={url}
      onCopy={() => toast.success("لینک اگهی با موفقیت کپی شد")}
    >
      <div className={styles.container}>
        <LuShare2 />
        <button>اشتراک گذاری</button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
