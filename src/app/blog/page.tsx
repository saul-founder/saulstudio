import Link from "next/link";

const posts = [
  {
    id: 1,
    slug: "post-one",
    title: "[Post 1 title]",
    description: "[Post 1 description placeholder.]",
    date: "Apr 14, 2026",
    datetime: "2026-04-14",
    category: "[Category]",
    author: { name: "[Author name]", role: "[Role]" },
  },
  {
    id: 2,
    slug: "post-two",
    title: "[Post 2 title]",
    description: "[Post 2 description placeholder.]",
    date: "Apr 12, 2026",
    datetime: "2026-04-12",
    category: "[Category]",
    author: { name: "[Author name]", role: "[Role]" },
  },
  {
    id: 3,
    slug: "post-three",
    title: "[Post 3 title]",
    description: "[Post 3 description placeholder.]",
    date: "Apr 10, 2026",
    datetime: "2026-04-10",
    category: "[Category]",
    author: { name: "[Author name]", role: "[Role]" },
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            [Placeholder blog intro line.]
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-video w-full rounded-2xl bg-gray-100 sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800" />
              </div>
              <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <span className="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 dark:bg-gray-800/60 dark:text-gray-300">
                    {post.category}
                  </span>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <div className="size-10 rounded-full bg-gray-100 dark:bg-gray-800" />
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900 dark:text-white">{post.author.name}</p>
                    <p className="text-gray-600 dark:text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
