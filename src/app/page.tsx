'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [randNum, setRandNum] = useState(0)
  const ref = useRef(null);

  const generateRandNum = () => {
    setRandNum(Math.random())

    // ref.current?
    // setTimeout(() => {
    // }, 1000);
  }

  useEffect(() => {
    generateRandNum();

    return () => { }
  }, [])

  return (
    <div className="w-full h-screen">
      {randNum > 0.5
        ? <Link href={'/users'} ref={ref}>helloo {randNum}</Link>
        : <Link href={'/product'} ref={ref}>holaaaaa {randNum}</Link>
      }
    </div>
  );
}
