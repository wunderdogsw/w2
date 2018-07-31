import rss from 'rss-parser-browser'




export const getBlogPosts = async () => {
  let entries = await fetchRssEntries('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@WunderdogSW')
  if (!entries.length) entries = await fetchRssEntries('http://blog.wunder.dog/rss.xml')
  return fixEntries(entries)
}

export const getCultureBlogPosts = async () => {
  let entries = await fetchRssEntries('https://cors-anywhere.herokuapp.com/https://medium.com/feed/wunderdog-culture')
  if (!entries.length) entries = await fetchRssEntries('http://blog.wunder.dog/rss.xml')
  return fixEntries(entries)
}




export const fetchRssEntries = async url => {
  let feed = await fetch(url)
  feed = await feed.text()
  feed = await ( new Promise(resolve => {
    rss.parseString(feed, (_, res) => resolve(res))
  }))
  const entries = (feed && feed.feed && feed.feed.entries) || []
  return entries
}




export const fixEntries = (entries = []) => entries.map(entry => {
  const content = entry['content'] || entry['content:encoded']
  const image = content.match(/(https\:\/\/.*?\.(jpg|png|gif))/i)
  return {
    ...entry,
    content,
    image: image && image[0],
  }
})
