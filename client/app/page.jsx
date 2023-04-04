'use client';
import PoolCard from "@/components/PoolCard";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 gap-y-12 px-5 ">
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
        <PoolCard/>
      </div>
    </>
  )
}
