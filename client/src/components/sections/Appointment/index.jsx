import React from "react";
import Section from "@styled/Section";
import * as S from "./appointment.styled";

export default function Appointment() {
	return (
		<Section>
			<S.BoxBook>
				<S.InfoBook>
					<span>Online booking</span>
					<h2>Make an appointment via the website and receive a 20% discount!</h2>
					<p>This promotion is valid until the 1st of January 2024</p>
				</S.InfoBook>
			</S.BoxBook>
		</Section>
	);
}
