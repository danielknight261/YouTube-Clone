import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { useRef, useState } from "react";

type CategoryHeadersProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200;

export function CategoryHeaders({
  categories,
  selectedCategory,
  onSelect,
}: CategoryHeadersProps) {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-x-hidden relative">
      {/* Category Pills */}
      <div
      ref={containerRef}
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Pill Navigation Arrows Left */}
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent w-24 h-full">
          <Button
            className="h-full aspect-square w-auto p-1.5"
            variant="ghost"
            size="icon"
            onClick={() => {
              setTranslate(translate => {
                const newTranslate = translate - TRANSLATE_AMOUNT
                if (newTranslate <= 0) return 0
                return newTranslate
              })
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {/* Pill Navigation Arrows Right */}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-24 h-full flex justify-end">
          <Button
            className="h-full aspect-square w-auto p-1.5"
            variant="ghost"
            size="icon"
            onClick={() => {
                if (containerRef.current == null) return
                const newTranslate = translate - TRANSLATE_AMOUNT
                const edge = containerRef.current.scrollWidth
                if (newTranslate <= 0) return 0
                return newTranslate
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
