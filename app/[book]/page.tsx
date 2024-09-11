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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
// Icons
import { MdOpenInNew } from "react-icons/md";

export default async function Book({ 
  params 
}: { 
  params: { project: string } 
}) {
  // Fetch books
  // If no books, return 404
  const placeholderBook = {
    title: "Book",
    image: "/images/book.jpg",
    description: "Book",
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
        gap-4
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          w-full
        "
      >

      </div>
      <Image
        src={placeholderBook.image}
        alt={placeholderBook.title}
        width={500}
        height={500}
        className="
          w-full
          h-auto
          rounded-lg
        "
      />
      <Card>
        <CardHeader>
          <CardTitle>{placeholderBook.title}</CardTitle>
          <CardDescription>{placeholderBook.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>Book</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}