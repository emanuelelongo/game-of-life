export const NEXT_GENERATION = 'NEXT_GENERATION'
export function nextGeneration() {
	return {
		type: NEXT_GENERATION
	}
}

export const SET_SIZE = 'SET_SIZE'
export function setSize(rows, cols) {
	return {
		type: SET_SIZE,
		payload: {rows, cols}
	}
}

export const SWITCH_CELL = 'SWITCH_CELL'
export function switchCell(x, y) {
	return {
		type: SWITCH_CELL,
		payload: {x, y}
	}
}
