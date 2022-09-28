import * as S from "./style";

export default function HomePage() {
	return (
		<>
			<S.HeadlineContainer>
				<S.HeadlineH1>Hi, i'm Sondre!</S.HeadlineH1>
				<div style={{ display: "flex" }}>
					<S.HeadlineH3>-</S.HeadlineH3>
					<S.HeadlineH3>
						Frontend developer student
						<br />
						from Norway
					</S.HeadlineH3>
				</div>
				<S.HeadlineH2>
					Curious and interested in <br />
					learning new things <span style={{ fontSize: "32px" }}>&#x270A;</span>
				</S.HeadlineH2>
			</S.HeadlineContainer>
			<S.HeadlineSection>
				<S.HeadlineH1>About me</S.HeadlineH1>
				<S.GridDiv>
					<S.FlexDiv>
						<S.HeadlineH2 style={{ gridArea: "experiences" }}>Experiences</S.HeadlineH2>
						<S.HeadlineP>
							hoihoihoihoi hoihoi hoihoihoi hoihoihoihoi hoihoihoihoi hoihoi
							hoihoihoihoihoihoi
						</S.HeadlineP>
					</S.FlexDiv>
					<S.FlexDiv>
						<S.HeadlineH2 style={{ gridArea: "interests" }}>Interests</S.HeadlineH2>
						<S.HeadlineP>
							hoihoihoihoi hoihoi hoihoihoi hoihoihoihoi hoihoihoihoi hoihoi
							hoihoihoihoihoihoi
						</S.HeadlineP>
					</S.FlexDiv>
					<S.FlexDiv style={{ gridArea: "hobbies" }}>
						<S.HeadlineH2>Hobbies</S.HeadlineH2>
						<S.HeadlineP>
							hoihoihoihoi hoihoi hoihoihoi hoihoihoihoi hoihoihoihoi hoihoi
							hoihoihoihoihoihoi
						</S.HeadlineP>
					</S.FlexDiv>
				</S.GridDiv>
			</S.HeadlineSection>
		</>
	);
}
