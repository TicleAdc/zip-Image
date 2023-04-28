// 划分地址的正则表达式

const reg = "(?<province>[^省]+省|.+自治区)(?<city>[^自治州]+自治州|[^市]+市|[^盟]+盟|[^地区]+地区|.+区划)(?<county>市|[^区]+区|)?(?<town>[^区]+区|.+镇|.+乡)?(?<village>.*)"
const addr = '广西壮族自治区南宁市东盟区东盟开发区华侨投资区中心区社区'
// const addr = '马山县林圩镇大塘村'
console.log(addr.match(reg));