import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/${req.name}`)
    .then((res) => res.json())
    .then((json) => json.slice(0, 10))

  res.send({
    posts
  })
}

export default handler
