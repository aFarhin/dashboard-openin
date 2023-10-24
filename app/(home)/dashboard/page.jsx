"use client"

import LineChartContainer from "@/app/components/LineChartContainer"
import ScheduleCard from "@/app/components/ScheduleCard"
import StatsCard from "@/app/components/StatsCard"
import TopProductsCard from "@/app/components/TopProductsCard"

export default function Dashboard() {
  return (
    <section className=" w-full h-min ">
      <StatsCard />
      <LineChartContainer />
      <div className=" grid gap-y-10 lg:gap-y-0  lg:grid-cols-2 my-10 gap-x-10">
        <TopProductsCard />
        <ScheduleCard /> 
      </div>
     
    </section>
  )
}