export interface IScrapedContent {
    title: string;
    content: string;
    source: string;
}

export interface IScraper {
    canHandle(url: string): boolean;
    scrape(url: string): Promise<IScrapedContent>;
}