import "./Input.scss";

export default function Input(props) {
	return (
		<div className="input__wrapper">
			<input
				className={`input ${props?.className ? props?.className : ""}${
					props.error && "error-input"
				}`}
				{...props}
				autoComplete="off"
			/>
			<label data-placeholder={props.placeholder}></label>
		</div>
	);
}