import React from 'react'
import '../../styles/Toggler/GrandChildMenu.css'

const ToggleGrandChildMenu = (props) => {
  const { menu , menuIndex, childMenuIndex, grandChildMenuIndex, toggleMenu } = props
  let payload = {
    menuIndex: menuIndex,
    childMenuIndex: childMenuIndex,
    grandChildMenuIndex: grandChildMenuIndex
  }

  return (
    <div className='grand-child-menu-list text-primary'>
      <div className='grand-child-menu-list-toggle-container'>
        <p className='grand-child-menu-name'>{menu.id}</p>
        <div className='menu-toggler-container'>
          <p>Show / Hide</p>
          <label className="switch">
            <input type="checkbox" checked={menu.isShowed} onChange={(e) => { toggleMenu(e, payload, 'isShowed')} } />
            <span className="slider round"></span>
          </label>
        </div>
        <div className='menu-toggler-container'>
          <p>Allow / Disallow</p>
          <label className="switch">
            <input type="checkbox" checked={menu.isAllowed} onChange={(e) => { toggleMenu(e, payload, 'isAllowed')} } />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default ToggleGrandChildMenu
