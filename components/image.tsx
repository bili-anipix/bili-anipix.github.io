"use client";
// import { useEffect, useRef } from "react";

interface ImageProps {
  alt?: string;
  src: string | "";
  title?: string | "";
  className?: string;
  sizes?: string;
}

export function CustomImage({ alt, src, title, className, sizes }: ImageProps) {
  // const ref = useRef(null);
  // useEffect(() => {
  //   const imgContainer: any = ref.current;
  //   let alink: any = imgContainer.querySelector("a");
  //   let img: any = imgContainer.querySelector("img");
  //   if (!alink) {
  //     alink = document.createElement("a");
  //   }
  //   if (!img) {
  //     img = new Image();
  //   }

  //   alink.href =
  //     "https://i0.hdslb.com/bfs/new_dyn/245cfc65f32d6b057ce9980378f330ef516035062.jpg";
  //   alink.target = "_blank";
  //   alink.rel = "noopener noreferrer nofollow";
  //   img.src =
  //     "https://i0.hdslb.com/bfs/new_dyn/245cfc65f32d6b057ce9980378f330ef516035062.jpg";
  //   // img.onerror = (e: any) => {
  //   //   img.src = "/placeholder.svg";
  //   //   console.log("Image not found", e);
  //   // };
  //   img.alt = alt;
  //   img.title = title || alt;
  //   img.loading = "lazy";
  //   img.decoding = "async";
  //   img.className = className;
  //   img.style = sizes;
  //   img.dataset.nimg = "fill";
  //   alink.appendChild(img);
  //   imgContainer.appendChild(alink);
  // }, [src]);

  return (
    <div >
      <img src={`/api/bili-img?url=${src}`} alt={alt} className={className} />
    </div>
  );
}
