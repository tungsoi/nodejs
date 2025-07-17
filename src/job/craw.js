const axios = require('axios');
const cheerio = require('cheerio');

async function crawlTitles() {
    const url = 'https://www.chemistwarehouse.com.au/';
    const response = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Referer': 'https://google.com'
        }
    });

    const $ = cheerio.load(response.data);
    console.log($);
    // const $ = cheerio.load(response.data);
    //
    // $('h3:contains("A-D")').each((_, h3) => {
    //     const $h3 = $(h3);
    //     console.log($h3);
    //     const links = $h3.next('ul').find('a');
    //
    //     links.each((_, a) => {
    //         const title = $(a).text().trim();
    //         const href = $(a).attr('href');
    //         console.log(`🔗 ${title} => ${href}`);
    //     });
    // });
}

crawlTitles().catch(console.error);
