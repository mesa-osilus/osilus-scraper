import { ScraperEngine, WikipediaScraper } from '../dist';

const engine = new ScraperEngine([new WikipediaScraper()]);

(async () => {
  const result = await engine.scrape('https://en.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk');
  console.log(result);
})();
