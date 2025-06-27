import { IScrapedContent, IScraper } from "../types/scraper";

export class ScraperEngine {
    private scrapers: IScraper[] = [];

    constructor(initial: IScraper[] = []) {
        this.scrapers = initial;
    }

    register(scraper: IScraper) {
        this.scrapers.push(scraper);
    }

    async scrape(url:string): Promise<IScrapedContent> {
        const scraper = this.scrapers.find(s => s.canHandle(url));
        if (!scraper) throw new Error(`No scaper found for ${url}`);
        return await scraper.scrape(url);
    }
}