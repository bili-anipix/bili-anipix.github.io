"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  
  const backUrl = from ? decodeURIComponent(from) : "/";
  const isFromSearch = backUrl.startsWith("/search");

  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href={backUrl} className="flex items-center gap-2">
        <ArrowLeft className="h-4 w-4" />
        {isFromSearch ? "Back to Search" : "Back to Gallery"}
      </Link>
    </Button>
  );
}
