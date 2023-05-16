import React from 'react'
import SideNav from '../components/SideNav'
import Header from '../components/Header'
import ChangePassword from '../components/ChangePassword'

const Settings = () => {
  const currentPage = "Settings"

  return (
    <div>
        <div className="flex">
            <div className="">
                <SideNav itemNum={"3"} />
            </div>
            <div className="main-div w-full py-6 px-8">
                <Header currentPage={currentPage} />
                <ChangePassword />
            </div>
        </div>
    </div>
  )
}

export default Settings