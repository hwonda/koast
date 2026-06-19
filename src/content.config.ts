import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('한국해양기상기술'),
    category: z.enum(['기술 이야기', '해양·기상 인사이트', '프로젝트/사례', '제품/솔루션', '회사 소식']),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.enum(['정규직', '계약직', '인턴', '프리랜서']),
    experience: z.string(),
    publishedAt: z.coerce.date(),
    closingDate: z.coerce.date().optional(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = { blog, jobs };
