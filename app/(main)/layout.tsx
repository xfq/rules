import type React from "react";
import { homepageMetadata } from "../metadata";
import { Metadata } from "next";

export const metadata: Metadata = homepageMetadata;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 