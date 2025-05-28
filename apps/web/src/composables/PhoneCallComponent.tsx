import React, { useRef, useState } from "react";

export default function PhoneCallComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-white shadow-lg rounded-lg cursor-move"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: 400,
        height: 400,
        zIndex: 1000,
        transition: dragging ? "none" : "box-shadow 0.2s",
        boxShadow: dragging
          ? "0 8px 24px rgba(0,0,0,0.2)"
          : "0 4px 12px rgba(0,0,0,0.1)",
      }}
      onMouseDown={handleMouseDown}
    >
      <h1 className="text-2xl font-bold">Phone Call Component</h1>
      <p className="mt-4 text-gray-600">
        This is a placeholder for the phone call component.
      </p>
    </div>
  );
}
