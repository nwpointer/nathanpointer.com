import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const root = process.cwd()
const folder = "src/posts"

export async function getFiles() {
  return fs.readdirSync(path.join(root, folder), 'utf-8')
}

export async function getPostBySlug(slug: string) {
  const source = fs.readFileSync(path.join(root, folder, `${slug}.mdx`), 'utf8')

  const { data, content } = matter(source)

  return {
    frontMatter: data,
    markdownBody: content,
  }
}

export async function getAllPosts() {
  const files = fs.readdirSync(path.join(root, folder))

  // @ts-ignore
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join(root, folder, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        frontMatter: data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}