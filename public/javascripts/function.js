const axios = require('axios');
const cheerio = require('cheerio');


async function dom() {
  const resp = await axios.get(
    // 'https://yjiq150.github.io/coronaboard-crawling-sample/dom'
    'https://music.bugs.co.kr/musicpd/albumview/33123'
    // 'https://pala.io/square/ranking'
  );

  const $ = cheerio.load(resp.data);
  // console.log(resp.data);
  const elements = $('.trackList tr');
  console.log(elements);
  elements.each((idx, el) => {
    console.log($(el).text());
  });
}
dom();

const test = function() {
  
}

exports.test = test;