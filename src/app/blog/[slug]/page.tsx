export default async function BlogSingle({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  return <h1>{slug}</h1>
}
