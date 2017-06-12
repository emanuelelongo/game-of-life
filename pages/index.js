import React from 'react'
import _ from 'lodash'
import { connect } from '../store'
import Grid from '../components/grid'
import Cell from '../components/cell'
import { nextGeneration, setSize, switchCell } from '../actions'

class GameOfLife extends React.Component{


	render() {
		return (
			<Grid>
				{
					_.map(this.props.grid, ((r, i) => {
						return [
							_.map(r, (c, j) => <Cell switchCell={() => this.props.switchCell(i, j)} alive={c.alive} />), 
							<br />
						]
					}))
				}
				<br />
				<div>
					Size&nbsp;
					<input ref={(input) => this.minInput=input} type="number" min="8" max="256" defaultValue="20" onChange={() => this.props.setSize(this.minInput.value, this.maxInput.value)}/>
					&nbsp;X&nbsp;
					<input ref={(input) => this.maxInput=input} type="number" min="8" max="256" defaultValue="20" onChange={() => this.props.setSize(this.minInput.value, this.maxInput.value)}/>
					<button onClick={() => this.props.nextGeneration()}>Next</button>
				</div>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		grid: state.grid
	}
}

export default connect(mapStateToProps, {nextGeneration, setSize, switchCell})(GameOfLife)