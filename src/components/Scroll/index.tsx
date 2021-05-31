import { useEffect } from "react";

interface ScrollProps {
  setActive: any
}

export default function Scroll({setActive}: ScrollProps) {
  const onScroll = () => {
    if(window.scrollY >= 120) {
      return setActive(true)
    } else {
      return setActive(false)
    }
  }

  useEffect(() => {
    if(typeof window !== "undefined") {
      window.addEventListener('scroll', onScroll)
    }
  })
  return () => window.removeEventListener('scroll', onScroll)
}