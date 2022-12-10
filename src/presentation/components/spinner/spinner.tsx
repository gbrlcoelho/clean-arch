import React from "react";
import { Props } from "./spinner-props";
import Styles from "./spinner-styles.scss";

const Spinner: React.FC<Props> = (props: Props) => {
	return (
		<div {...props} className={[Styles.spinner, props.className].join(" ")}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};

export default Spinner;
