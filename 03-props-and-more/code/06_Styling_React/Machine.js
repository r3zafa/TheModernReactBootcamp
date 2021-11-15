class Machine extends React.Component {
	render() {
		const { s1, s2, s3 } = this.props;
		const winner = s1 === s2 && s2 === s3;
		const colors = { fontSize: '40px', backgroundColor: '#E0DEDE',  padding: '10px' };

		return (
			<div className="Machine">
				<p style={colors}>
					{s1} {s2} {s3}
				</p>
				<p className={winner ? 'win' : 'lose'}>{winner ? 'Winner!' : 'Loser!'}</p>
			</div>
		);
	}
}
