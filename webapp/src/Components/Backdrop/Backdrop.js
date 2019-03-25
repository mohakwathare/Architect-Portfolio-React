import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
	return (
		<React.Fragment>
			{props.show ? <div className="backdrop"></div> : null}
		</React.Fragment>
	)
}

export default Backdrop;