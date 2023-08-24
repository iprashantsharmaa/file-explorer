import React from 'react';

type Props = {
  className?: string;
};

function RightChevron({
  className,
}: Props) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12.5L10.5 8L6 3.5"
        stroke="#CED0D6"
        strokeLinecap="round"
      />
    </svg>

  );
}

export default RightChevron;
