"use client";

import React, { useState } from "react";
// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LanguageToggle() {
  const [isSwedish, setIsSwedish] = useState<boolean>(true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSwedish(!isSwedish)}
            className="text-xl"
          >
            {isSwedish ? "🇸🇪" : "🇬🇧"}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {isSwedish ? "Byt till Engelska" : "Switch to Swedish"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}