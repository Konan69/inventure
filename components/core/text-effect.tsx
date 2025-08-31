"use client";

export * from "@/components/ui/text-effect";

import { TextEffect } from "@/components/ui/text-effect";

export function TextEffectPerChar() {
  return (
    <TextEffect per="char" preset="fade">
      Animate your ideas with motion-primitives
    </TextEffect>
  );
}
