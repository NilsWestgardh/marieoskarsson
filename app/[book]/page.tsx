import React from "react";
// Utils
import Image from "next/image";
import clsx from "clsx";
// Data
import { books } from "@/app/lib/data/data";
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
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
// Icons
import { MdOpenInNew } from "react-icons/md";

export default async function Book({ 
  params 
}: { 
  params: { book: string } 
}) {
  const book = books.find((book) => book.slug === params.book);
  if (!book) return null;
  
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
          {book.image ? (
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
                src={book.image}
                alt={book.title}
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
          "
        >
          <CardHeader
            className="
              flex
              flex-col
              justify-start
              items-start
              w-full
              gap-2
            "
          >
            <CardTitle
              className={clsx(
                "text-5xl font-bold",
                {
                  "text-4xl": book.title.length > 15,
                  "text-3xl": book.title.length > 20,
                  "text-2xl": book.title.length > 25,
                  "text-xl": book.title.length > 30,
                }
              )}
            >
              {book.title}
            </CardTitle>
            <div
              id={`${book.title}-info-container`}
              className="
                flex
                flex-wrap
                flex-row
                justify-start
                items-center
                gap-2
                md:text-lg
              "
            >
              <div className="flex flex-wrap gap-2">
                <small>✍️ {book.authors.join(", ")}</small>
                {book.illustrators && (
                  <small>
                    🎨 {book.illustrators.join(", ")}
                  </small>
                )}
                {book.publisher && (
                  <>
                    <small className="text-muted-foreground">{" "}•{" "}</small>
                    <small>
                      {book.publisher}
                    </small>
                  </>
                )}
              </div>

              {book.year && (
                <>
                  <small className="text-muted-foreground">{" "}•{" "}</small>
                  <small>
                    {book.year}
                  </small>
                </>
              )}
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
            <CardDescription
              className="
                flex
                flex-col
                flex-wrap
                gap-2
                mt-2
              "
            >
              {Array.isArray(book.description) ? (
                book.description.map((
                  paragraph: string, 
                  index: number
                ) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{book.description}</p>
              )}
            </CardDescription>
          </CardContent>
          <CardFooter
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              w-full
              gap-4
              mt-8
            "
          >
            {book.bookstores && (
              <div
                className="
                  flex 
                  justify-start
                  items-center
                  flex-wrap
                  gap-1
                "
              >
                {book.bookstores.map(({ 
                  name, 
                  logo,
                  url 
                }: { 
                  name: string, 
                  logo: string,
                  url: string 
                }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:text-muted-foreground gap-2"
                    >
                       {/* TODO: Add store icon as svg */}
                      {name}
                      <MdOpenInNew className="hidden md:inline-block" />
                    </Button>
                  </a>
                ))}
              </div>
            )}
            <div
              className="
                flex
                flex-col
                justify-end
                items-start
              "
            >
              <small className="text-muted-foreground">
                Del{" "}
                <span className="text-black font-semibold">
                  {book.series.number}
                </span>
                {" "}i serien{" "}
                <span className="text-black font-semibold">
                  {book.series.name}
                </span>
              </small>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}