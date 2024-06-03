import { createContentLoader } from "vitepress";

// export default createContentLoader('posts/*.md', {
//     includeSrc: true, // 包含原始 markdown 源?
//     render: true,     // 包含渲染的整页 HTML?
//     excerpt: true,    // 包含摘录?
//     transform(rawData) {
//       // 根据需要对原始数据进行 map、sort 或 filter
//       // 最终的结果是将发送给客户端的内容
//       return rawData.sort((a, b) => {
//         return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
//       })
//     }
//   })
export default createContentLoader('posts/*.md', {
    excerpt: true,
    // includeSrc: true, // 包含原始 marksdown 源?
    // render: true,     // 包含渲染的整页 HTML?
    transform(raw) {
        return raw.map(({ url, frontmatter, excerpt }) => ({
            title: frontmatter.title,
            titleES: frontmatter.titleEs,
            titleCN: frontmatter.titleCN,
            outurl: frontmatter.outurl,
            author: frontmatter.author,
            topimg: frontmatter.topimg,
            url,
            excerpt,
            date: formatDate(frontmatter.date)
        }))
        .sort((a, b) => b.date.time - a.date.time)
    }
})

function formatDate(raw) {
    const date = new Date(raw)
    date.setUTCHours(12)
    return {
        time: +date,
        string: date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        })
    }
}