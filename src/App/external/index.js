import rss from 'rss-parser-browser'



export const getMediumPosts = async () => {
  let feed = await fetch('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@WunderdogSW')
  // let feed = await fetch('https://cors-anywhere.herokuapp.com/https://medium.com/feed/@reaktornow')
  feed = await feed.text()
  feed = await ( new Promise(resolve => {
    rss.parseString(feed, (_, res) => resolve(res))
  }))
  const entries = (feed && feed.feed && feed.feed.entries) || []
  return entries.map(entry => {
    const image =
      entry['content:encoded'].match(/(https\:\/\/.*?\.(jpg|png|gif))/i)
    return {
      ...entry,
      image: image && image[0],
    }
  })
}
