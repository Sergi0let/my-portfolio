import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const getMarkDownData = (folder: string) => {
  const absFolder = path.join(process.cwd(), folder)
  const files = fs.readdirSync(absFolder)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(absFolder, file)
    const content = fs.readFileSync(filePath, 'utf8')
    const data = matter(content)
    return {
      ...data.data,
      slug: file.replace('.md', ''),
      content: data.content,
    }
  })

  return postsData
}

export default getMarkDownData
