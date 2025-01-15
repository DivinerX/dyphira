import React, { useState, useEffect, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

export const Hex: React.FC<{ setPoint: (point: Point | null) => void }> = ({ setPoint }) => {
  const [mousePos, setMousePos] = useState<Point | null>(null);
  const [isInside, setIsInside] = useState(false);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  // Calculate hex points based on container size
  const calculateHexPoints = useCallback(() => {
    const center = { x: dimensions.width / 2, y: dimensions.height / 2 };
    const size = Math.min(dimensions.width, dimensions.height) * 0.45; // 45% of the smaller dimension

    const points: Point[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      points.push({
        x: center.x + size * Math.cos(angle),
        y: center.y + size * Math.sin(angle),
      });
    }
    return points;
  }, [dimensions]);

  // Check if point is inside hex
  const isPointInHex = useCallback(
    (point: Point) => {
      const hexPoints = calculateHexPoints();
      let inside = false;

      for (let i = 0, j = hexPoints.length - 1; i < hexPoints.length; j = i++) {
        const xi = hexPoints[i].x;
        const yi = hexPoints[i].y;
        const xj = hexPoints[j].x;
        const yj = hexPoints[j].y;

        const intersect =
          yi > point.y !== yj > point.y &&
          point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi;

        if (intersect) inside = !inside;
      }

      return inside;
    },
    [calculateHexPoints]
  );

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const svg = document.querySelector('svg');
      if (svg) {
        const rect = svg.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Mouse move handler with correct coordinate scaling
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const svg = e.currentTarget as SVGSVGElement;
      const rect = svg.getBoundingClientRect();

      // Calculate the scaled coordinates
      const point = {
        x: dimensions.width * ((e.clientX - rect.left) / rect.width),
        y: dimensions.height * ((e.clientY - rect.top) / rect.height),
      };

      setMousePos(point);
      setIsInside(isPointInHex(point));
      setPoint(point);
    },
    [dimensions, isPointInHex]
  );

  useEffect(() => {
    const svg = document.querySelector('svg');
    if (svg) {
      svg.addEventListener('mousemove', handleMouseMove);
      return () => svg.removeEventListener('mousemove', handleMouseMove);
    }
  }, [handleMouseMove]);

  const hexPoints = calculateHexPoints();
  const pointsString = hexPoints.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <svg className="w-full h-full z-20" viewBox={`0 0 ${dimensions.width} ${dimensions.height}`} preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Glowing circle filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hex with transparent background */}
      <polygon
        points={pointsString}
        fill="transparent"
        stroke="#C8FFF440"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Dash lines */}
      {isInside && mousePos && hexPoints.map((point, index) => (
        <line
          key={index}
          x1={point.x}
          y1={point.y}
          x2={mousePos.x}
          y2={mousePos.y}
          stroke="#C8FFF440"
          strokeWidth="0.5"
          strokeDasharray="3,3"
          opacity="0.6"
        />
      ))}

      {/* Corner circles */}
      {hexPoints.map((point, index) => (
        <g key={index}>
          {/* Outer ring */}
          <circle
            cx={point.x}
            cy={point.y}
            r="6"
            fill="none"
            stroke="#4a5568"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Inner dot */}
          <circle
            cx={point.x}
            cy={point.y}
            r="2"
            fill="#C8FFF4"
            filter="url(#glow)"
          />
        </g>
      ))}

      {/* Cursor circle */}
      {isInside && mousePos && (
        <g>
          {/* Outerest ring */}
          <circle
            cx={mousePos.x}
            cy={mousePos.y}
            r="20"
            fill="none"
            stroke="#C8FFF440"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Outer ring */}
          <circle
            cx={mousePos.x}
            cy={mousePos.y}
            r="8"
            fill="none"
            stroke="#C8FFD3"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* Inner dot */}
          <circle
            cx={mousePos.x}
            cy={mousePos.y}
            r="3"
            fill="#C8FFF4"
          />
        </g>
      )}
    </svg>
  );
};