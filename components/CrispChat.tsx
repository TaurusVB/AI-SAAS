"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("86738b23-25fc-452f-8aa3-6bc6de4cebaf");
  }, []);

  return null;
};

export default CrispChat;
