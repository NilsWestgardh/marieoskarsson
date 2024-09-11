import React from "react";
// Utils
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
// Icons
import { MdOpenInNew } from "react-icons/md";

const bookStores: { [key: string]: { name: string; url: string } } = {
  adblibris: {
    name: "Adlibris",
    url: "https://www.adlibris.com",
  },
  bokus: {
    name: "Bokus",
    url: "https://www.bokus.com",
  },
  akademibokhandeln: {
    name: "Akademibokhandeln",
    url: "https://www.akademibokhandeln.se",
  },
}

export default async function Book({ 
  params 
}: { 
  params: { project: string } 
}) {
  // Fetch books
  // If no books, return 404
  const placeholderBook = {
    title: "Lägg av!",
    image: "/images/lagg-av.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien. Sed ut purus eget sapien. Sed ut purus eget sapien.",
    author: "Marie Oskarsson",
    publisher: "Publisher",
    year: "2024",
  }
  
  return (
    <div
      id="book-container"
      className="
        flex
        flex-col
        justify-start
        items-start
        w-full
        max-w-7xl
        gap-4
        px-auto
        xl:px-0
        lg:px-12
        md:px-8
        px-4
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          w-full
          gap-4
        "
      >
        <AspectRatio
          className="
            flex
            justify-center
            items-center
          "
          ratio={1 / 1}
        >
          {placeholderBook.image ? (
            <div
              id="book-image-container"
              className="
                w-full
                h-full
                relative
                rounded-xl
                lg:rounded-2xl
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
              "
            >
              <Image
                src={placeholderBook.image}
                alt={placeholderBook.title}
                fill
                className="
                  object-contain
                  lg:p-8
                  md:p-6
                  p-4
                "
              />
            </div>
          ) : (
            <Skeleton
              className="
                w-full
                h-full
                rounded-xl
                lg:rounded-2xl
              "
            />
          )}
        </AspectRatio>
        <Card
          className="
            flex
            flex-col
            justify-start
            items-start
            w-full
            h-full
            pb-12
          "
        >
          <CardHeader className="flex flex-col gap-2">
            <CardTitle className="text-4xl font-bold">
              {placeholderBook.title}
            </CardTitle>
            <div className="flex flex-row gap-1">
              <small>{placeholderBook.author}</small>
              <small>{placeholderBook.publisher}</small>
              <small>{placeholderBook.year}</small>
            </div>
          </CardHeader>
          <CardContent
            className="
              flex 
              flex-col
              justify-between
              items-start
              w-full
              h-full
            "
          >
            <CardDescription className="mt-2">
              {placeholderBook.description}
            </CardDescription>
            
            {bookStores && (
              <div className="flex justify-start items-center flex-wrap gap-1">
                <small className="text-muted-foreground mr-2">Buy {placeholderBook.title} at:{" "}</small>
                {Object.keys(bookStores).map((store: string) => (
                  <a
                    key={store}
                    href={bookStores[store].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Badge variant="outline" className="hover:text-muted-foreground">
                      {bookStores[store].name}
                    </Badge>
                  </a>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}