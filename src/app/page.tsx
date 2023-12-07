import Link from 'next/link';
import { Button } from './components/UI';
import { TextBox } from './components/common/TextBox';
import { content } from './content/home';
import { LayoutGrid } from './layouts';

export default function Home() {
	return (
		<main>
			<LayoutGrid>
				<TextBox
					title={content.intro.title}
					subtitle={content.intro.subtitle}
					text={content.intro.text}
				/>
			</LayoutGrid>

			<LayoutGrid>
				<TextBox
					title={content.directors.title}
					subtitle={content.directors.subtitle}
					text={content.directors.text}
				/>
			</LayoutGrid>
			<LayoutGrid threeColumns={true}>
				<div className=' md:col-span-2'>sdf</div>
				<div className=' flex flex-col gap-5 items-center justify-center '>
					<TextBox subtitle={content.directors.finalText} />
					<Button href='/'>About Them</Button>
				</div>
			</LayoutGrid>
		</main>
	);
}
