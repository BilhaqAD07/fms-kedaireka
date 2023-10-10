'use client'
import React from "react";
import SideBarRight from "./Home/SideBarRight/page";

const Home = () => {
    return (
        <BaseLayout>
            <Container className="">
            <div className="flex justify-end">
      <SideBarRight />
        </div>
            </Container>
        </BaseLayout>
  )
}

export default Home
