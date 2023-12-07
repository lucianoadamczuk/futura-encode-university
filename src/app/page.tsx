import { TextBox } from './components/common/TextBox';
import { content } from './content/home';

export default function Home() {
	return (
		<main>
			<TextBox
				title={content.intro.title}
				subtitle={content.intro.subtitle}
				text={content.intro.text}
			/>
		</main>
	);
}
