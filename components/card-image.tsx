"use client";
import { cn } from "@/lib/utils";

interface CardImageParameters {
  title: string,
  image: string,
  description: string,
}



export default function CardImage({ title, image, description }: CardImageParameters) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          'bg-[url(' + image + ')] bg-cover'
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <h1 className="font-bold text-xl text-black md:text-2xl relative z-10">
            {title}
          </h1>
        </div>
        <div className="text content">

          <p className="text-sm text-black relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
