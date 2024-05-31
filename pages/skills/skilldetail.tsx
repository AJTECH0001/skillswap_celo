"use client"
import NavBar from "@/components/NavBar";
import Info from "@/components/skilldetailcomponent/Info";
import Modal from "@/components/skilldetailcomponent/Modal";
import Portfolio from "@/components/skilldetailcomponent/Portfolio";
import Request from "@/components/skilldetailcomponent/Request";
import Reviews from "@/components/skilldetailcomponent/Reviews";
import Similar from "@/components/skilldetailcomponent/Similar";
import { useState } from "react";

const skilldetail = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="max-w-md mx-auto ">
      <div className="fixed bottom-0 w-full z-10">
        <NavBar />
      </div>
      <div className="px-3 mb-28">
        <Info />
        <Portfolio />
        <Reviews />
        <Request setShowModal={setShowModal} />
        <Similar />
        <Modal isVisible={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default skilldetail;
