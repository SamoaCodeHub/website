<script>
	import { SectionName } from '$lib/utils';
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
			title: 'Launched SSO Facebook Group',
			time: 'August 2021',
			description:
				'Created SSO Facebook group as a central hub for information sharing within our community',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Created SSO Discord Channel',
			time: 'September 2021',
			description:
				'Started a Discord Channel facilitating streamlined communication and collaboration for SSO members',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Completed SITA Membership Database Project',
			time: 'August 2023',
			description: 'Successfully wrapped up the SITA membership database project',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		},
		{
			title: 'Launched SSO Website',
			time: 'March 2024',
			description:
				'Unveiled the official SSO Website, streamlining user access and enhacing information sharing within',
			url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
		}
	];
</script>

<div id={SectionName.ABOUT} class="container bg-transparent py-12 mx-auto w-full">
	<h1 class="text-4xl font-bold text-center">Samoa Stack Overflow - Our Journey in Code</h1>
	<Timeline position="alternate" style={'padding: 50px 0;'}>
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

					<p>{option.description}</p>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<style>
	h3 {
		letter-spacing: 1.5px;
		margin: 0;
		font-size: 18px;
	}
	p {
		letter-spacing: 1.5px;
		margin: 0;
		color: #d3d3d3;
		font-size: 14px;
	}
</style>