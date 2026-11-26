import { getCollection } from 'astro:content';

export const SITE = {
    name: 'Muratcan Şentürk',
    title: 'Muratcan Şentürk — Software Engineer',
    description: 'I build software and write about everything.',
};

export const getPosts = async () =>
    (await getCollection('posts', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const formatDate = (date: Date) =>
    date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export const readingTime = (text = '') => Math.max(1, Math.round(text.split(/\s+/).length / 220));
