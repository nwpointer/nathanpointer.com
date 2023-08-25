const fs = require('fs');
import matter from 'gray-matter';
import extractExcerpt from "@/lib/extract-excerpt";

// import extractExcerpt from '@lib/extract-excerpt'
export async function loadPost(f: string) {
  const root = "src/app/blog/[post]/posts";
  const source = fs.readFileSync(`${root}/${f}`);
  const { data, content } = matter(source);
  const excerpt = await extractExcerpt(content);
  return { data, content, slug: f.split(".")[0], excerpt };
}
