import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

export const artworkSchema = z.object({
	title: z.string().min(1, 'El título de la obra es obligatorio'),
	slug: z.string().min(1, 'El slug de la obra es obligatorio'),
	year: z.number().int().positive(),
	series: z.string(),
	kind: z.enum(['obra-maestra', 'serie', 'estudio', 'encargo']),
	technique: z.string(),
	support: z.string(),
	dimensions: z.string(),
	availability: z.string(),
	description: z.string().optional(),
	curatorialStatement: z.string().optional(),
	image: z.string().optional(),
	order: z.number().optional(),
});

export const artworks = defineCollection({
	schema: artworkSchema,
	loader: glob({ pattern: '**/*.md', base: './src/content/artworks' }),
});

export const collections = { artworks };
