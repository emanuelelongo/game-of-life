import _ from 'lodash'
import computeGeneration from './computeGeneration'
import { 
	NEXT_GENERATION,
	SET_SIZE,
	SWITCH_CELL
} from '../actions'

const arrayToObject = (a) => a.reduce((a,c,i)=> {a[i]=c; return a;}, {})
const buildGrid = (n, m) => arrayToObject(Array(n).fill(
	arrayToObject(Array(m).fill({alive: false}))
))

const INITIAL_STATE = buildGrid(20, 20);

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case NEXT_GENERATION:
			const nextGen = computeGeneration(state)
			const newState = { ...state }
			_.forOwn(nextGen, (r,i) => {
				newState[i] = {...state[i]}
				_.forOwn(r, (c,j) => {
					newState[i][j] = {...state[i][j], alive: c.alive}
				});
			})

			return newState;

		case SET_SIZE:
			const {rows, cols} = action.payload;
			return buildGrid(parseInt(rows), parseInt(cols));

		case SWITCH_CELL:
			const {x, y} = action.payload;
			return {
				...state, 
				[x]: {
					...state[x], 
					[y]: { ...state[x][y], alive: !state[x][y].alive}
				}
			};

		default:
			return state
	}
}
