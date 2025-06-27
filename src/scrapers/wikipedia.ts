import { IScraper, IScrapedContent } from '../types/scraper';
import { fetchHtml } from '../utils/fetchHtml';
import * as cheerio from 'cheerio';

export class WikipediaScraper implements IScraper {
    canHandle(url: string): boolean {
        return url.includes('wikipedia.org/wiki/');
    }

    async scrape(url: string): Promise<IScrapedContent> {
        const html = await fetchHtml(url);
        const $ = cheerio.load(html);
        const title = $('h1').first().text().trim();
        const content = $('#mw-content-text p')
            .slice(0, 3)
            .text()
            .replace(/\[\d+\]/g, '');

        return {
            title,
            content,
            source: url
        };
    }
}
