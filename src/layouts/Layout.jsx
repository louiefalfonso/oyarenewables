"use client"

import { useEffect } from "react"
import { ToastContainer } from "react-toastify"
import ScrollToTop from "@/components/common/ScrollToTop"
import { animationCreate } from "@/utils/utils"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap")
}

const Wrapper = ({ children }) => {
  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {children}
      <ScrollToTop />
      <ToastContainer position="top-right" />
    </>
  )
}

export default Wrapper
