import { Card } from "./Card";
import data from "../../data.json";
import { useEffect, useRef } from "react";

export function Sliderr() {
  const box = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const prevContentHandler = () => {
    if (box.current) {
      box.current.scrollLeft -= box.current.clientWidth;
    }
  };

  const nextContentHandler = () => {
    if (box.current) {
      box.current.scrollLeft += box.current.clientWidth;
    }
  };

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (box.current) {
        isDragging.current = true;
        startX.current = e.pageX - box.current.offsetLeft;
        scrollLeft.current = box.current.scrollLeft;
        box.current.style.cursor = 'grabbing';
      }
    };

    const handleMouseMove = (e) => {
      if (isDragging.current && box.current) {
        e.preventDefault();
        const x = e.pageX - box.current.offsetLeft;
        const walk = (x - startX.current) * 1.5; // Adjust multiplier for sensitivity
        box.current.scrollLeft = scrollLeft.current - walk;
      }
    };

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        if (box.current) {
          box.current.style.cursor = 'grab'; // Reset cursor style
        }
      }
    };

    const handleMouseLeave = () => {
      if (isDragging.current) {
        isDragging.current = false;
        if (box.current) {
          box.current.style.cursor = 'grab'; // Reset cursor style
        }
      }
    };

    const element = box.current;
    if (element) {
      element.addEventListener('mousedown', handleMouseDown);
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseup', handleMouseUp);
      element.addEventListener('mouseleave', handleMouseLeave);
      currentBox.addEventListener('touchstart', handleDragStart);
    currentBox.addEventListener('touchmove', handleDragging);
    currentBox.addEventListener('touchend', handleDragStop);

      return () => {
        element.removeEventListener('mousedown', handleMouseDown);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseup', handleMouseUp);
        element.removeEventListener('mouseleave', handleMouseLeave);
        currentBox.removeEventListener('touchstart', handleDragStart);
      currentBox.removeEventListener('touchmove', handleDragging);
      currentBox.removeEventListener('touchend', handleDragStop);
      };
    }
  }, []);

  return (
    <div className="card-container flex flex-row mx-1 items-center justify-center">
      <button
        type="button"
        onClick={prevContentHandler}
        className="border-2 rounded-full aspect-square h-[25px] flex items-center justify-center text-lg"
      >
        &lt;
      </button>
      <div
        ref={box}
        className="slider items-center flex-row flex overflow-x-hidden scroll-smooth cursor-grab"
      >
        {data.map((dataObj, index) => (
          <Card key={index} {...dataObj} />
        ))}
      </div>
      <button
        type="button"
        onClick={nextContentHandler}
        className="border-2 rounded-full aspect-square h-[25px] flex items-center justify-center text-lg"
      >
        &gt;
      </button>
    </div>
  );
}
