export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-sm/6 font-semibold text-indigo-600 dark:text-indigo-400">
            [Category placeholder]
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            [Article title for: {slug}]
          </h1>
          <div className="mt-6 flex items-center gap-x-4 text-sm/6">
            <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800" />
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">[Author name]</p>
              <p className="text-gray-600 dark:text-gray-400">
                <time dateTime="2026-04-14">Apr 14, 2026</time>
              </p>
            </div>
          </div>
        </header>
        <article className="prose prose-lg prose-indigo mx-auto dark:prose-invert">
          <p>[Article body placeholder. Full prose content will be rendered here once real content is provided.]</p>
          <h2>Section heading</h2>
          <p>[Section content placeholder.]</p>
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>
          <h2>Another section</h2>
          <p>[More content here.]</p>
        </article>
      </div>
    </div>
  );
}
