import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const artworks = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.number().int().min(1900).max(2100),
    series: z.string(),
    kind: z.enum(['obra-maestra', 'serie', 'estudio', 'encargo']),
    technique: z.string(),
    support: z.string(),
    dimensions: z.string(),
    availability: z.string(),
    description: z.string(),
    curatorialStatement: z.string(),
    image: z.string(),
    order: z.number().default(0),
  }),
  loader: glob({ pattern: '**/*.md', base: './src/content/artworks' }),
})

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    icon: z.string(), // ej: "draw"
    tag: z.string(), // "Edición Particular"
    title: z.string(), // "Retrato Personalizado por Encargo"
    characteristics: z.array(z.string()), // lista de checkmarks
    cta: z.object({
      text: z.string(),
      url: z.url(),
      icon: z.string().default('mdi:message'),
    }),
    order: z.number().default(0),
  }),
})

export const collections = { artworks, services }
