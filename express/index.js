const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const app = express()

let hotNews = []
let localNews = []

app.get('/', async(req, res, next) => {
    res.send(hotNews)
})

superagent.get('http://news.baidu.com/').end((req,res) => {
    if (!res) {
        console.log('热点新闻抓取失败');
    } else {
        hotNews = getHotNews(res)
    }
})

let getHotNews = (res) => {
    let hotNews = []

    let $ = cheerio.load(res.text)

    $('div#pane-news ul li a').each((idx, ele) => {
        let news = {
            title: $(ele).text(),
            href: $(ele).attr('href')
        }
        hotNews.push(news)
    })
    return hotNews
}

let server = app.listen(3000, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log('your app is running at http://%s:%s', host, port);
})
