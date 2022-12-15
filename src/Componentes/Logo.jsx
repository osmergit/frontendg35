import * as React from "react"

export const Logo  = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={932.367}
    height={122}
    preserveAspectRatio="xMidYMid"
    style={{
      background: "0 0",
    }}
    viewBox="-216.184 14 932.367 122"
    {...props}
  >
    <defs>
      <linearGradient
        id="b"
        x1={0}
        x2={1}
        y1={0.5}
        y2={0.5}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="red" />
        <stop offset={0.17} stopColor="#f90" />
        <stop offset={0.34} stopColor="#ff4" />
        <stop offset={0.51} stopColor="#9f0" />
        <stop offset={0.68} stopColor="#9f0" />
        <stop offset={0.85} stopColor="red" />
        <stop offset={1} stopColor="red" />
      </linearGradient>
      <filter id="a" width="300%" height="300%" x="-100%" y="-100%">
        <feMorphology
          in="SourceGraphic"
          operator="dilate"
          radius="1,2"
          result="dilate"
        />
        <feColorMatrix
          in="dilate"
          result="color"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
        />
        <feOffset dy={2} result="offset" />
        <feGaussianBlur stdDeviation={3} />
        <feOffset dy={3} />
        <feColorMatrix
          result="blur"
          values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="offset" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#a)">
      <path
        fill="url(#b)"
        d="M28.42-9.86q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51Q7.74-.32 5.63-.32q-2.11 0-2.94.1Q1.86-.13.51 0l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2H30.4q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83L15.55-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08Zm8.7-29.82q1.86-3.84 7.01-3.84 5.15 0 7.55 2.98 2.4 2.97 2.4 9.82v22.85l15.55-34.31h7.62L57.34 0H42.37l-1.92-30.72q-.19-3.39-1.12-5.7-.93-2.3-2.21-3.26Zm64.9 29.82q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51-6.92-1.09-9.03-1.09-2.11 0-2.94.1-.83.09-2.18.22l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2H104q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83L89.15-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08ZM115.71 0h-7.04l7.68-42.24h13.76l9.99 29.06 5.31-29.06 7.1.06L144.7 0h-14.65l-9.22-27.97L115.71 0Zm43.52-31.17q-2.17-1.66-2.17-5.21 0-3.56 2.33-5.41 2.34-1.86 6.37-1.86 2.56 0 8.64.9l4.35.64q2.18.25 4.45.25t3.81-.96q2.3 2.05 2.3 5 0 2.94-2.62 5.05-2.69 2.24-6.15 2.24-1.66 0-4.35-.45-3.13 9.86-3.13 16.71 0 6.85 3.45 10.43-1.6 2.88-3.97 4-2.36 1.12-5.92 1.12-3.55 0-5.76-1.95-2.2-1.95-2.2-5.99 0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.86-.19-3.78-.19-3.97 0-4.61 1.47Zm28.99 15.55q0-12.09 6.28-19.71 6.65-8.25 18.24-8.25 8.38 0 12.6 4.06 4.23 4.06 4.23 12.64 0 13.06-6.66 20.67-6.59 7.49-17.66 7.49-8.64 0-12.83-4.32-4.2-4.32-4.2-12.58Zm16.84-13.24q-2.88 11.52-2.88 20.6 0 2.18.73 3.59.74 1.41 2.69 1.41t3.17-.93q1.21-.93 2.17-3.04 1.54-3.46 2.98-10.79 1.44-7.32 1.57-10.36.13-3.04.13-5.35 0-2.3-.71-3.77-.7-1.48-2.59-1.48t-3.17 1.16q-2.37 2.17-4.09 8.96Zm52.6-.71q.96-1.92.96-3.71t-.19-2.78q-.19-1-.64-1.76-.96-1.67-2.88-1.67-2.37 0-4.29 1.73-2.04 1.79-2.04 4.61 0 1.79 1.24 3.17 1.25 1.37 3.17 2.65 1.92 1.28 4.1 2.56 2.17 1.28 4.09 2.82 4.42 3.52 4.42 8.25 0 3.2-1.7 5.92-1.69 2.72-4.51 4.71-6.14 4.35-14.27 4.35-6.59 0-9.98-2.14-3.4-2.15-3.4-5.41 0-5.83 4.55-7.3 1.28-.45 3.23-.45t4.19.84q-1.02 2.62-1.02 4.99 0 5.12 3.65 5.12 2.36 0 4.32-1.73 1.95-1.73 1.95-3.68 0-1.95-1.25-3.36t-3.1-2.53q-1.86-1.12-4-2.21-2.15-1.08-4-2.62-4.36-3.52-4.36-9.15 0-3.65 1.8-6.5 1.79-2.85 4.67-4.77 5.76-3.9 12.83-3.9t10.5 2.11q3.42 2.11 3.42 5.7 0 3.13-2.43 5.12-2.11 1.66-4.67 1.66t-4.36-.64Zm67.52 3.01Q325.18.7 295.62.7q-4.74 0-12.55-1.15l7.17-37.82q.51-2.56.83-4.03 9.73-.71 14.05-.71t8.29.9q3.97.89 6.59 2.88 5.18 3.9 5.18 12.67ZM312-28.93q0-9.53-6.85-9.53h-.64q-.32 0-.64.06l-6.59 34.37q.26.13.51.13h.51q2.37 0 4.84-1.48 2.46-1.47 4.38-4.48Q312-16.83 312-28.93Zm43.78 19.07q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51-6.92-1.09-9.03-1.09-2.11 0-2.94.1-.83.09-2.18.22l7.87-42.24h27.59q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2h11.39q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.79 0-4.51-.64-1.73-.64-1.92-.83l-2.31 12.09q1.54.2 4.42.2 4.93 0 8.45-3.08Zm32.12-32.83q15.68 0 15.68 11.07 0 6.08-3.9 9.73-3.84 3.65-10.56 3.65-3.14 0-5.57-1.79-1.15-.77-1.92-1.79 4.67 0 7.14-2.85 2.46-2.85 2.46-8.42t-5.5-5.57h-1.54q-.38 0-.7.07L376.13 0h-13.89l7.87-41.92q6.85-.64 10.82-.7 3.97-.07 6.97-.07Zm16.96 27.07q0-12.09 6.28-19.71 6.65-8.25 18.24-8.25 8.38 0 12.6 4.06 4.23 4.06 4.23 12.64 0 13.06-6.66 20.67-6.59 7.49-17.66 7.49-8.64 0-12.83-4.32-4.2-4.32-4.2-12.58Zm16.84-13.24q-2.88 11.52-2.88 20.6 0 2.18.73 3.59.74 1.41 2.69 1.41t3.17-.93q1.21-.93 2.17-3.04 1.54-3.46 2.98-10.79 1.44-7.32 1.57-10.36.13-3.04.13-5.35 0-2.3-.71-3.77-.7-1.48-2.59-1.48t-3.17 1.16q-2.37 2.17-4.09 8.96ZM462.46 0h-13.69l7.81-42.05q6.33-.7 15.58-.7t13.54 2.69q4.28 2.68 4.28 8.09t-2.78 8.8q-2.78 3.39-7.58 4.48 1.08 5.31 3.58 9.6 2.3 4.03 4.99 5.31-.96 2.69-2.91 3.88-1.95 1.18-4.74 1.18-2.78 0-4.96-1.63-2.17-1.63-3.9-4.64-3.65-6.53-4.03-16.83h.45q4.73-.13 7.1-2.6 2.37-2.46 2.37-7.64 0-6.47-5.44-6.72h-1.41q-.58 0-.9.06L462.46 0Zm35.59-31.17q-2.18-1.66-2.18-5.21 0-3.56 2.34-5.41 2.33-1.86 6.37-1.86 2.56 0 8.64.9l4.35.64q2.17.25 4.45.25 2.27 0 3.8-.96 2.31 2.05 2.31 5 0 2.94-2.63 5.05-2.68 2.24-6.14 2.24-1.66 0-4.35-.45-3.14 9.86-3.14 16.71 0 6.85 3.46 10.43-1.6 2.88-3.97 4t-5.92 1.12q-3.55 0-5.76-1.95t-2.21-5.99q0-4.67 2.56-12.35 2.56-7.61 6.4-13.44-1.85-.19-3.77-.19-3.97 0-4.61 1.47ZM539.33 0h-13.95l8.12-42.24h14.08L539.33 0Zm11.26-39.68q1.86-3.84 7.01-3.84 5.15 0 7.55 2.98 2.4 2.97 2.4 9.82v22.85l15.55-34.31h7.62L570.82 0h-14.98l-1.92-30.72q-.19-3.39-1.12-5.7-.93-2.3-2.21-3.26Zm38.08 24.06q0-12.09 6.27-19.71 6.66-8.25 18.24-8.25 8.39 0 12.61 4.06 4.23 4.06 4.23 12.64 0 13.06-6.66 20.67-6.59 7.49-17.66 7.49-8.64 0-12.84-4.32-4.19-4.32-4.19-12.58Zm16.83-13.24q-2.88 11.52-2.88 20.6 0 2.18.74 3.59.74 1.41 2.69 1.41t3.17-.93q1.21-.93 2.17-3.04 1.54-3.46 2.98-10.79 1.44-7.32 1.57-10.36.12-3.04.12-5.35 0-2.3-.7-3.77-.7-1.48-2.59-1.48t-3.17 1.16q-2.37 2.17-4.1 8.96Zm52.61-.71q.96-1.92.96-3.71t-.19-2.78q-.19-1-.64-1.76-.96-1.67-2.88-1.67-2.37 0-4.29 1.73-2.05 1.79-2.05 4.61 0 1.79 1.25 3.17 1.25 1.37 3.17 2.65 1.92 1.28 4.1 2.56 2.17 1.28 4.09 2.82 4.42 3.52 4.42 8.25 0 3.2-1.7 5.92-1.69 2.72-4.51 4.71-6.14 4.35-14.27 4.35-6.59 0-9.99-2.14-3.39-2.15-3.39-5.41 0-5.83 4.55-7.3 1.28-.45 3.23-.45t4.19.84q-1.02 2.62-1.02 4.99 0 5.12 3.64 5.12 2.37 0 4.32-1.73 1.96-1.73 1.96-3.68 0-1.95-1.25-3.36t-3.11-2.53q-1.85-1.12-4-2.21-2.14-1.08-4-2.62-4.35-3.52-4.35-9.15 0-3.65 1.79-6.5 1.8-2.85 4.68-4.77 5.76-3.9 12.83-3.9t10.49 2.11q3.43 2.11 3.43 5.7 0 3.13-2.43 5.12-2.12 1.66-4.68 1.66-2.56 0-4.35-.64Z"
        transform="translate(-84.512 97.465)"
      />
    </g>
  </svg>
)

export default Logo
