import * as React from "react"

const Brand = ({ small, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={small ? "140px" : "166px"}
    height={small ? "34px" : "49px"}
    viewBox="0 0 149 44"
    className={className}
  >
    <defs>
      <filter
        id="alpha"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feColorMatrix
          type="matrix"
          in="SourceGraphic"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
      </filter>
      <image
        id="image7"
        width={149}
        height={44}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAsCAYAAABsZ/ryAAAABmJLR0QA/wD/AP+gvaeTAAAAtElEQVR4nO3SMQ3CUAAA0bZIYCOsCMEHNrCBCcRhgTJQTFzyk/Keghtunv7ctj5u0+H+HN2xH8fPMjqB/TEVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFTlTkTMVOVORMxU5U5EzFbl5dMBo2/t1mZbzdXTHfpy+PzB9Cdvzk6/GAAAAAElFTkSuQmCC"
      />
      <mask id="mask0">
        <g filter="url(#alpha)">
          <use xlinkHref="#image7" />
        </g>
      </mask>
      <clipPath id="clip1">
        <rect x={0} y={0} width={149} height={44} />
      </clipPath>
      <g id="surface61" clipPath="url(#clip1)">
        <path
          style={{
            stroke: "none",
            fillRule: "evenodd",
            fill: "#fff",
            fillOpacity: 1,
          }}
          d="M 143.21875 21.6875 C 143.234375 19.832031 142.539062 18.042969 141.28125 16.683594 C 140.6875 16.046875 139.972656 15.535156 139.179688 15.179688 C 138.375 14.820312 137.503906 14.636719 136.621094 14.640625 C 135.714844 14.640625 134.859375 14.820312 134.0625 15.179688 C 133.269531 15.535156 132.554688 16.046875 131.960938 16.683594 C 130.699219 18.042969 130.007812 19.832031 130.023438 21.6875 C 130.007812 23.542969 130.699219 25.332031 131.960938 26.691406 C 132.554688 27.328125 133.269531 27.839844 134.0625 28.195312 C 134.867188 28.554688 135.738281 28.738281 136.621094 28.734375 C 137.527344 28.734375 138.378906 28.554688 139.179688 28.195312 C 139.972656 27.839844 140.6875 27.328125 141.28125 26.691406 C 142.539062 25.332031 143.234375 23.542969 143.21875 21.6875 Z M 148.976562 21.6875 C 148.976562 23.421875 148.65625 25.03125 148.015625 26.511719 C 147.402344 27.957031 146.503906 29.261719 145.378906 30.355469 C 144.257812 31.4375 142.945312 32.292969 141.441406 32.917969 C 139.933594 33.546875 138.328125 33.859375 136.621094 33.859375 C 134.914062 33.859375 133.316406 33.546875 131.820312 32.917969 C 130.363281 32.3125 129.035156 31.4375 127.902344 30.335938 C 126.777344 29.234375 125.882812 27.921875 125.265625 26.472656 C 124.625 24.992188 124.304688 23.394531 124.304688 21.6875 C 124.304688 20.003906 124.628906 18.425781 125.285156 16.941406 C 125.917969 15.492188 126.820312 14.171875 127.941406 13.058594 C 129.070312 11.945312 130.398438 11.0625 131.863281 10.457031 C 133.367188 9.828125 134.988281 9.507812 136.621094 9.515625 C 138.328125 9.515625 139.933594 9.828125 141.441406 10.457031 C 142.945312 11.082031 144.257812 11.9375 145.378906 13.019531 C 146.5 14.101562 147.378906 15.386719 148.015625 16.882812 C 148.65625 18.378906 148.976562 19.980469 148.976562 21.6875 Z M 122.304688 33.140625 C 121.808594 33.367188 121.292969 33.542969 120.765625 33.660156 C 120.191406 33.792969 119.597656 33.859375 118.984375 33.859375 C 118.152344 33.863281 117.324219 33.746094 116.527344 33.519531 C 115.765625 33.308594 115.0625 32.929688 114.464844 32.417969 C 113.878906 31.910156 113.414062 31.25 113.066406 30.4375 C 112.71875 29.621094 112.546875 28.640625 112.546875 27.492188 L 112.546875 0.0273438 L 118.425781 0.0273438 L 118.425781 26.492188 C 118.425781 27.453125 118.617188 28.113281 119.003906 28.472656 C 119.390625 28.835938 119.851562 29.015625 120.386719 29.015625 C 121.050781 29.015625 121.691406 28.816406 122.304688 28.414062 Z M 109.949219 10.074219 L 99.550781 37.582031 C 98.777344 39.636719 97.765625 41.121094 96.511719 42.027344 C 95.257812 42.933594 93.765625 43.386719 92.03125 43.386719 C 91.765625 43.386719 91.472656 43.367188 91.152344 43.328125 C 90.839844 43.289062 90.535156 43.230469 90.230469 43.148438 L 88.3125 37.785156 C 88.761719 37.996094 89.230469 38.164062 89.714844 38.285156 C 90.191406 38.402344 90.644531 38.464844 91.070312 38.464844 C 91.980469 38.464844 92.804688 38.257812 93.550781 37.84375 C 94.296875 37.429688 94.871094 36.664062 95.269531 35.542969 L 96.070312 33.21875 L 87.152344 10.074219 L 93.433594 10.074219 L 98.75 24.972656 L 103.75 10.074219 Z M 85.753906 6.59375 L 70.71875 6.59375 L 70.71875 14.039062 L 85.554688 14.039062 L 85.554688 19.085938 L 70.714844 19.085938 L 70.714844 33.257812 L 64.640625 33.257812 L 64.640625 1.269531 L 85.753906 1.269531 Z M 85.753906 6.59375 "
        />
      </g>
    </defs>
    <g id="surface1">
      <path
        style={{
          stroke: "none",
          fillRule: "evenodd",
          fill: "#fff",
          fillOpacity: 1,
        }}
        d="M 0 12.6875 L 0 12.796875 L 25.085938 24.589844 L 50.265625 12.757812 L 50.265625 12.730469 L 25.085938 0.898438 Z M 9.046875 12.742188 L 25.085938 5.203125 L 41.132812 12.742188 L 25.085938 20.28125 L 9.042969 12.742188 Z M 25.085938 29.167969 L 0 17.554688 L 0 21.851562 L 25.085938 33.492188 L 50.265625 21.808594 L 50.265625 17.515625 Z M 25.085938 37.882812 L 0 26.265625 L 0 30.558594 L 25.085938 42.203125 L 50.265625 30.523438 L 50.265625 26.226562 Z M 25.085938 37.882812 "
      />
      <use xlinkHref="#surface61" mask="url(#mask0)" />
    </g>
  </svg>
)

export default Brand

{
  /* <svg
width={166}
height={49}
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
>
<defs>
  <path id="a" d="M.014.03h93.96v48.29H.015z" />
</defs>
<g fill="none" fillRule="evenodd">
  <path
    d="M0 14.13v.123l27.95 13.13L56 14.209v-.033L27.95 1 0 14.13zm10.077.062L27.95 5.795l17.877 8.397-17.877 8.396-17.874-8.396zM27.95 32.483L0 19.55v4.784l27.95 12.964L56 24.289v-4.784L27.95 32.483zm0 9.703L0 29.25v4.783L27.95 47 56 33.99v-4.784l-28.05 12.98z"
    fill={color ? color : "#BDBAFA"}
  />
  <g transform="translate(72)">
    <mask id="b" fill="#fff">
      <use xlinkHref="#a" />
    </mask>
    <path
      d="M87.56 24.152a8.1 8.1 0 00-2.161-5.573 7.259 7.259 0 00-2.34-1.673 6.864 6.864 0 00-2.85-.601c-1.01 0-1.961.2-2.852.601a7.257 7.257 0 00-2.34 1.673 8.102 8.102 0 00-2.16 5.574 8.102 8.102 0 002.16 5.573 7.257 7.257 0 002.34 1.672 6.864 6.864 0 002.851.602c1.01 0 1.96-.2 2.852-.602a7.259 7.259 0 002.339-1.672 8.1 8.1 0 002.16-5.574zm6.415 0c0 1.932-.357 3.723-1.07 5.373a13.098 13.098 0 01-2.94 4.28c-1.247 1.205-2.71 2.156-4.388 2.854-1.678.699-3.468 1.048-5.369 1.048-1.9 0-3.683-.349-5.346-1.048a13.863 13.863 0 01-4.366-2.876 13.351 13.351 0 01-2.94-4.302c-.713-1.65-1.07-3.426-1.07-5.329 0-1.873.364-3.634 1.092-5.284a13.92 13.92 0 012.962-4.325 13.671 13.671 0 014.367-2.898 13.552 13.552 0 015.301-1.048c1.901 0 3.69.35 5.369 1.048 1.678.698 3.14 1.65 4.388 2.854 1.248 1.204 2.228 2.638 2.94 4.302.713 1.665 1.07 3.449 1.07 5.351zM64.258 36.905a8.6 8.6 0 01-1.715.58c-.638.148-1.3.222-1.982.222a9.84 9.84 0 01-2.74-.379 6.003 6.003 0 01-2.295-1.226c-.653-.565-1.173-1.3-1.56-2.207-.385-.907-.578-2-.578-3.277V.029h6.549v29.474c0 1.07.215 1.806.646 2.207.43.401.943.602 1.537.602.742 0 1.455-.223 2.138-.669v5.262zM50.492 11.22L38.908 41.854c-.861 2.289-1.99 3.939-3.386 4.95-1.396 1.01-3.06 1.515-4.99 1.515-.297 0-.623-.022-.98-.066a7.352 7.352 0 01-1.025-.201l-2.138-5.975a8.486 8.486 0 001.56.557 6.232 6.232 0 001.514.201c1.01 0 1.93-.23 2.762-.691.832-.46 1.47-1.315 1.916-2.564l.891-2.586-9.935-25.773h6.995l5.925 16.588 5.57-16.588h6.905zM23.538 7.342H6.786v8.294h16.529v5.618H6.785v15.784H.015V1.412h23.524v5.93z"
      fill={color ? color : "#000"}
      mask="url(#b)"
    />
  </g>
</g>
</svg> */
}