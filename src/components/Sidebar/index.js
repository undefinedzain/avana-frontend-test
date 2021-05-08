import React from "react"
import '../../styles/Sidebar/Sidebar.css'

import SidebarLogo from './SidebarLogo'
import AvatarProfile from './AvatarProfile'
import SidebarContent from './SidebarContent'

const Sidebar = (props) => {
  const { menus } = props
  return (
    <aside className='sidebar'>
      <SidebarLogo />
      <AvatarProfile />
      <SidebarContent menus={menus} />
    </aside>
  )
}
  
export default Sidebar
