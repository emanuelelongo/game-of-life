import { combineReducers } from 'redux'
import gridReducer from './grid-reducer'

const rootReducer = combineReducers({
	grid: gridReducer
})

export default rootReducer
