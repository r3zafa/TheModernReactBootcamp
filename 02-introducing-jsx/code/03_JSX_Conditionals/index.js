function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
    render() {

		// logic
        const num = getNum();
        let msg;
        if (num === 7) {
            msg = 
				<div>
					<h2> CONGRATS YOU WIN! </h2> 
					<img src = "https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
                </div>
        } else {
            msg = 
			<div>
                <h2> You Lose! </h2> 
				<iframe src="https://giphy.com/embed/eJ4j2VnYOZU8qJU3Py" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </div>
        }



		// return to render
        return ( 
			<div>
            <h1> Your number is: { num } </h1> 
			{ msg } 
			</div>
        );
    }
}

ReactDOM.render( < NumPicker /> , document.getElementById('root'));