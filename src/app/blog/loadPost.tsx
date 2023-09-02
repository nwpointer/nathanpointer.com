const fs = require('fs');
import matter from 'gray-matter';
import extractExcerpt from "@/lib/extract-excerpt";

const root = "src/app/blog/(posts)";

export async function getPosts(){
  return (await Promise.all(fs.readdirSync(`${root}`).map(loadPost)))
  // filters out non posts
  .filter((post:any) => !!post)
  // sorts post by data.publishedDate
  .sort((a, b) => {
    if (a.data.publishedDate < b.data.publishedDate) return -1;
    else if (b.data.publishedDate < a.data.publishedDate) return -1;
    return 0;
  })
}

// necessary to generate excerpts, generally you'd just dynamically import the post
export async function loadPost(f: string) {
  try {
    const source = fs.readFileSync(`${root}/${f}/page.mdx`);
    const { data, content } = matter(source);
    const excerpt = await extractExcerpt(content);
    return { data, content, slug: f, excerpt };
  } catch{
    return undefined
  }
}
