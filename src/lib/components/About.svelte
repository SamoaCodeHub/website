<script>
	import { Section } from '$lib/utils';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';
	const options = [
		{
			title: 'Launched SCH Facebook Group',
			time: 'August 2021',
			description:
				'Created SCH Facebook group as a central hub for information sharing within our community.',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Created SCH Discord Channel',
			time: 'September 2021',
			description:
				'Started a Discord Channel facilitating streamlined communication and collaboration for SCH members.',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Completed SITA Membership Database Project',
			time: 'August 2023',
			description: 'Successfully wrapped up the SITA membership database project.',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Launched SCH Website',
			time: 'May 2024',
			description:
				'Unveiled the official SCH Website, streamlining user access and enhancing information sharing within.',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		}
	];
</script>

<div id={Section.About} class="container w-full py-12 mx-auto bg-transparent">
	<h1 class="text-4xl font-bold text-center">Samoa Code Hub - Our Journey in Code</h1>
	<Timeline
		position="alternate"
		style={'padding: 50px 0; max-width: 1024px; width: 100%; margin: 0 auto'}
	>
		{#each options as option}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<p>{option.time}</p>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot style={'background-color: #7CD5E2;'} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent style={'padding-bottom: 50px;'}>
					<h3>
						<a href={option.url} title="Go to Homepage" class="hover:underline">
							{option.title}
						</a>
					</h3>

					<p class="text-[#5d5c5c] dark:text-[#cecece]">{option.description}</p>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<style>
	/* .container{
		background: #13344C
	} */
	h3 {
		letter-spacing: 1.5px;
		margin-bottom: 8px;
		font-size: 18px;
		font-weight: 600;
	}

	p {
		letter-spacing: 1.5px;
		font-size: 14px;
	}
</style>
