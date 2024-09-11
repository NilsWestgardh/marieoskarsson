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

export default function Book() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Book</CardTitle>
        <CardDescription>Book</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>Book</CardDescription>
      </CardContent>
    </Card>
  );
}