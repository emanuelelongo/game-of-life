const adjMatrix = [
	[-1, -1], [-1, 0], [-1, 1],
	[ 0, -1],          [ 0, 1],
	[ 1, -1], [ 1, 0], [ 1, 1],
];

export default function (grid) {
	const m = Object.keys(grid).length
	const n = Object.keys(grid[0]).length

	const countAliveAdj = (i,j) => {
		return adjMatrix.filter(a => {
			const ii = i+a[0]
			const jj = j+a[1]
			if(ii < 0 || jj < 0 || ii >= m || jj >= n)
				return false

			return grid[ii][jj].alive
		}).length
	}

	const newGen = {};
	const setAlive = (i, j, alive) => {
		newGen[i] = newGen[i] || {}
		newGen[i][j] = { ...grid[i][j], alive}
	}

	for(let i=0; i<m; i++) {
		for(let j=0; j<n; j++) {
			const aliveAdj = countAliveAdj(i, j)
			if(grid[i][j].alive && (aliveAdj <= 1 || aliveAdj >= 4)) {
				setAlive(i, j, false)
			}
			else if(!grid[i][j].alive && aliveAdj === 3){
				setAlive(i, j, true)
			}
		}
	}
	return newGen
}
