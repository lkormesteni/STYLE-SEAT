import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<StyledLogo>
			<img src="./assets/logo/STYLESEAT-logo-white.png" alt="STYLESEAT" />

			<figcaption>
				{/* <span>STYLE</span>
				<span id="text-primary">SEAT</span> */}
			</figcaption>
		</StyledLogo>
	);
}

const StyledLogo = styled.figure`
	display: flex;

	img {
		width: 290px;
	}

	figcaption {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		span {
			text-transform: uppercase;
			letter-spacing: 2px;
			color: ${({ theme }) => theme.colors.main};
			line-height: 1;
			font-size: 1.5rem;
			font-family: ${({ theme }) => theme.fonts.fm.asap};
			font-weight: ${({ theme }) => theme.fonts.fw.bd};
		}
	}
`;
