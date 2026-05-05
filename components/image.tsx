"use client";
import { useState } from "react";

interface ImageProps {
  alt?: string;
  src: string | "";
  title?: string | "";
  className?: string;
  dataId?: string | number;
  dataAuthorId?: string | number;
  dataCategory?: string;
  dataSize?: string | number;
  dataDatetime?: string | number;
}

export function CustomImage({
  alt,
  src,
  title,
  className,
  dataId,
  dataAuthorId,
  dataCategory,
  dataSize,
  dataDatetime,
}: ImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const fallbackSrc = "/placeholder.svg";

  return (
    <>
      {isLoading && !hasError && (
        <div className="image-loading w-full h-full flex items-center justify-center absolute inset-0 bg-muted">
          Loading...
        </div>
      )}
      <img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        title={title || alt}
        className={className}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        data-id={dataId}
        data-author_id={dataAuthorId}
        data-category={dataCategory}
        data-size={dataSize}
        data-datetime={dataDatetime}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </>
  );
}
