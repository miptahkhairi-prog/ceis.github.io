import prisma from '@/lib/prisma'

interface Props { params: { slug: string } }

export default async function NewsArticlePage({ params }: Props){
  const { slug } = params
  const article = await prisma.news.findUnique({ where: { slug } })
  if(!article) return <div className="p-6">Article not found</div>

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <p className="text-sm text-slate-500 mt-2">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Unpublished'}</p>
        <div className="mt-6 bg-white p-6 rounded-md shadow-sm">{article.content}</div>
      </div>
    </section>
  )
}
