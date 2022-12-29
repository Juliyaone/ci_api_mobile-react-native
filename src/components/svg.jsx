import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function SvgComponent(props) {
	return (
		<Svg
			width={16}
			height={16}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M15.28 1.28A.75.75 0 0014.22.22L7.75 6.69 1.28.22A.75.75 0 00.22 1.28l6.47 6.47-6.47 6.47a.75.75 0 101.06 1.06l6.47-6.47 6.47 6.47a.75.75 0 101.06-1.06L8.81 7.75l6.47-6.47z"
				fill="url(#paint0_linear_156_3297)"
			/>
			<Defs>
				<LinearGradient
					id="paint0_linear_156_3297"
					x1={15.5}
					y1={7.89092}
					x2={-1.41322e-8}
					y2={7.89092}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#D32A1E" />
					<Stop offset={1} stopColor="#EB5E54" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export default SvgComponent;
