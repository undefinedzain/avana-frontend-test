import { TOGGLE_MENU } from '../actionTypes'
import INIT_STATE from '../../dummy-menu.json'

export default function(state = INIT_STATE, action) {
  switch (action.type) {
    case TOGGLE_MENU: {
      console.log(action)
      return state
    }
    default:
      return state
  }
}