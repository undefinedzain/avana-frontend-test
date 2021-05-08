import React from 'react'
import { connect } from 'react-redux'
import { getMenusState } from './appRedux/selectors'
import './styles/App/App.css'
import Sidebar from './components/Sidebar/index'
import ToggleMenu from './components/Menu/ToggleMenu'
import toggleMenus from './appRedux/actions'

class App extends React.Component {

  toggleMenu = (e, payload, action) => {
    let menu = this.props.menus
    if (typeof(payload.grandChildMenuIndex) !== 'undefined') {
      menu[payload.menuIndex].childs[payload.childMenuIndex].childs[payload.grandChildMenuIndex][action] = e.target.checked
    } else if (typeof(payload.childMenuIndex) !== 'undefined') {
      menu[payload.menuIndex].childs[payload.childMenuIndex][action] = e.target.checked
    } else {
      menu[payload.menuIndex][action] = e.target.checked
    }

    this.setState({ menu })
    toggleMenus(menu)
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <Sidebar menus={this.props.menus} />
          <section className='main-content'>
            <h2 className='text-primary'>Avana Frontend Test</h2>
            <p className='text-primary'>Toggle to Show/Hide or Enable/Disable menu</p>
            {
              this.props.menus.map((menu, menuIndex) => {
                return (
                  <ToggleMenu
                    key={menuIndex}
                    menu={menu}
                    menuIndex={menuIndex}
                    toggleMenu={this.toggleMenu}
                  />
                )
              })
            }
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const menus = getMenusState(state)
  return { menus: menus }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenus: () => dispatch({ type: 'TOGGLE_MENU' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
