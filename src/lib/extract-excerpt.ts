import { unified } from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeExtractExcerpt from 'rehype-extract-excerpt'

export default function extractExcerpt(content:string){return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExtractExcerpt)
    .use(rehypeStringify)
    .process(content)
    .then(v => v.data.excerpt)
}