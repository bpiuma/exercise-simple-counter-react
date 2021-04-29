import React from "react";
import PropTypes from "prop-types";

import { Icon, InlineIcon } from "@iconify/react";
import clockIcon from "@iconify-icons/il/clock";

//create your first component
export function Home(props) {
	return (
		<div className="container d-flex justify-content-center align-items-center">
			<div className="digito col-2 bg-dark m-3 pt-4 d-flex justify-content-center align-items-center">
				<Icon icon={clockIcon} color="white" />
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig6}
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig5}
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig4}
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig3}
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig2}
			</div>
			<div className="digito col-1 bg-dark m-3 d-flex justify-content-center align-items-center">
				{props.dig1}
			</div>
		</div>
	);
}

Home.propTypes = {
	dig1: PropTypes.number,
	dig2: PropTypes.number,
	dig3: PropTypes.number,
	dig4: PropTypes.number,
	dig5: PropTypes.number,
	dig6: PropTypes.number
};
