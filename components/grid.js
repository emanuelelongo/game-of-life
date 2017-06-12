export default (props) => {
	const style = {
		"textAlign": "center"
	}

	return (
		<div style={style}>
			{props.children}
		</div>
	)
}