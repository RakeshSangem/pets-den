import React from "react";

export default function SpinnerIcon(props) {
  return (
    <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}>
      <g>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.14}
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.29}
          transform="rotate(30 12 12)"
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.43}
          transform="rotate(60 12 12)"
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.57}
          transform="rotate(90 12 12)"
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.71}
          transform="rotate(120 12 12)"
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          opacity={0.86}
          transform="rotate(150 12 12)"
        ></rect>
        <rect
          width={2}
          height={5}
          x={11}
          y={1}
          fill="white"
          transform="rotate(180 12 12)"
        ></rect>
        <animateTransform
          attributeName="transform"
          calcMode="discrete"
          dur="0.75s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
        ></animateTransform>
      </g>
    </svg>
  );
}
