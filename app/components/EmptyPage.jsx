"use client"
import placeholderImage from "../../public/workingOn.png"
import Image from "next/image"

const EmptyPage = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <div className="">
        <Image
        //   src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smarttask.io%2Fblog%2Flessons-learned&psig=AOvVaw1mgFtWE92b0SQfh1wUfvis&ust=1698137210443000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC345vki4IDFQAAAAAdAAAAABAJ"
          alt="Empty State"
          src={placeholderImage}
          width="200"
          height="200"
        />
        <p className=" text-center mt-5 font-medium "> Still Working ..... </p>
      </div>
    </section>
  )
}

export default EmptyPage