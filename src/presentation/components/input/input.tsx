import React from "react";
import { Props } from "./input-props";
import Styles from "./input-styles.scss";

const Input: React.FC<Props> = (props: Props) => {
	return (
		<div className={Styles.inputWrap}>
			<input {...props} />
			<span className={Styles.status}>🔴</span>
		</div>
	);
};

export default Input;
