import React, { useEffect, useState } from "react";
import Header from "@section/Header";
import Button from "@components/Button";

import * as S from "./banner.styled";

export default function Banner() {
	const [image, setImage] = useState(`banner1`);
	const imagesList = ["banner1", "banner2", "banner3", "banner4", "banner5"];

	return (
		<S.BannerContainer bgImage={image}>
			<Header />

			<section className="content-text">
				<h1>
				Elevate your <span id="text-primary">self-esteem</span> with a new{" "}
					<span id="text-primary">visual!</span>
				</h1>

				<p>
				Cuts that transform, style that impresses. Welcome to our
				Thin Cut barbershop!
				</p>

				<Button title="Make an appointment" />
			</section>

			<S.Points>
				{imagesList.map((bg, index) => (
					<S.Point
						onClick={() => setImage(bg)}
						key={index}
						active={bg === image}
					/>
				))}
			</S.Points>
		</S.BannerContainer>
	);
}
