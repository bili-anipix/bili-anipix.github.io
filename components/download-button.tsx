"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  src: string;
  filename?: string;
}

export function DownloadButton({ src, filename }: DownloadButtonProps) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename || src.split("/").pop() || "image.webp";
    link.referrerPolicy = "no-referrer";
    link.click();
  };

  return (
    <Button variant="outline" onClick={handleDownload}>
      <Download className="h-4 w-4 mr-2" />
      Download
    </Button>
  );
}
