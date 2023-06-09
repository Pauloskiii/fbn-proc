import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import Notification from '../components/Notification'

const Notifications = () => {
  const currentPage = "Notification(s)"

  const storedElements = localStorage.getItem('logindata')

  const role = JSON.parse(storedElements).role


  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={role === "ADMIN" ? "4" : "3"} />
            </div>
            <div className="main-div ml-80 w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <Notification />
            </div>
        </div>
    </div>
  )
}

export default Notifications