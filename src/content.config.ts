import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const exploreFigmaLink = z.object({
	url: z.string(),
	type: z.string(),
});

const publishDateSchema = z.preprocess((val) => {
	if (val instanceof Date) return val;
	if (typeof val === 'string' || typeof val === 'number') return new Date(val);
	return val;
}, z.date());

/**
 * Work case studies under `src/content/work`.
 * Schema is permissive so underscore drafts and older shapes still validate;
 * published pages rely on the richer fields in the non-`_` entries.
 */
const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: z
		.object({
			title: z.string(),
			titleLong: z.string().optional(),
			publishDate: publishDateSchema,
			draft: z.boolean().optional(),

			img: z.string().optional(),
			img_alt: z.string().optional(),
			imgLogo: z.string().optional(),
			imgLogoAlt: z.string().optional(),

			projectOverviewList: z.array(z.string()).default([]),
			projectOverviewImg: z.string().optional(),
			projectOverviewImgAlt: z.string().optional(),

			metaTitle: z.string().optional(),
			metaDescription: z.string().optional(),
			productType: z.string().optional(),
			tagName: z.string().optional(),

			roles: z.array(z.string()).default([]),
			tools: z.array(z.string()).default([]),
			devices: z.array(z.string()).default([]),

			linkSource: z.string().optional(),
			exploreText: z.string().optional(),
			exploreFigmaLinks: z.array(exploreFigmaLink).optional(),
			exploreProductLink: z.string().optional(),
			/** Legacy single URL used on some draft entries */
			exploreLink: z.string().optional(),
			githubRepoLink: z.string().optional(),

			lead: z.string().optional(),
			leadParagraphs: z.array(z.string()).optional(),
			ctaHref: z.string().optional(),
			ctaLabel: z.string().optional(),
		})
		.passthrough(),
});

export const collections = { work };
