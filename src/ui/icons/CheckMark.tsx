import * as React from 'react'
import { SVGProps, memo } from 'react'
const SvgCheckMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    height={8}
    viewBox="0 0 10 8"
    width={10}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 1L4 7L1 4"
      stroke="#222431"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
)
const Memo = memo(SvgCheckMark)
export default Memo
