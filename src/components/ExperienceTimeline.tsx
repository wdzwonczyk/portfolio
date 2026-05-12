import { Timeline, type TimelineEntry } from "@/components/ui/timeline";

export interface ExperienceRow {
	date: string;
	companyName: string;
	companyLogoSrc: string;
	jobTitle: string;
	tasks: string[];
}

export interface ExperienceTimelineProps {
	experience: ExperienceRow[];
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
	const data: TimelineEntry[] = experience.map((exp) => ({
		title: exp.jobTitle,
		dotContent: (
			<img
				src={exp.companyLogoSrc}
				alt={`${exp.companyName} logo`}
				className="h-7 w-7 object-contain"
				loading="lazy"
				decoding="async"
			/>
		),
		content: (
			<div className="rounded-2xl border border-neutral-100 bg-white p-4 shadow-md sm:p-5 dark:border-neutral-800 dark:bg-neutral-950">
				<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
					<h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
						{exp.companyName}
					</h4>
				</div>
				<p className="text-sm text-neutral-500 dark:text-neutral-400">{exp.date}</p>
				<ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700 sm:text-[15px] dark:text-neutral-300">
					{exp.tasks.map((task, i) => (
						<li key={i}>{task}</li>
					))}
				</ul>
			</div>
		),
	}));

	return <Timeline data={data} />;
}
