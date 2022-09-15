import * as S from "./homePage/styledComponents";

export default function HomePage() {
	return (
		<>
			<S.HeadlineContainer>
				<S.HeadlineH1>Hi, i'm Sondre!</S.HeadlineH1>
				<S.HeadlineH3>
					- Frontend developer student
					<br />
					<span style={{ marginLeft: "22px" }}>from Norway</span>
				</S.HeadlineH3>
				<S.HeadlineH2>
					Curious and interested in <br />
					learning new things <span style={{ fontSize: "32px" }}>&#x270A;</span>
				</S.HeadlineH2>
			</S.HeadlineContainer>
		</>
	);
}
