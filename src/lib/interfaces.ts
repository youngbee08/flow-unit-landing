import React from "react";

export interface mainLayoutProps {
  children: React.ReactNode;
}

export interface navitemsProps {
  name: string;
  path: string;
  icon?: React.ReactNode;
}
