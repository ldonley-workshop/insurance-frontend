import React from "react";

const posts = [
  {
    title: "How to stay healthy in the COVID world",
    href: "#",
    description:
      "In quam a velit scelerisque arcu nisi hac nullam integer aenean fusce a volutpat sodales ultrices mi platea maecenas posuere lorem dignissim augue sed a tristique.",
    date: "Sep 16, 2021",
    datetime: "2021-09-16",
  },
  {
    title: "How to get started with meditation",
    href: "#",
    description:
      "Sagittis ad non sagittis natoque habitant ornare auctor pretium parturient placerat libero aenean parturient per vestibulum condimentum consequat dis dignissim parturient lectus a vestibulum fames ut inceptos.",
    date: "Sep 07, 2021",
    datetime: "2021-09-07",
  },
  {
    title: "What does a healthy diet in 2021 look like?",
    href: "#",
    description:
      "Enim phasellus sed at nam ac vestibulum hac aptent urna augue platea ad nascetur parturient id gravida suspendisse ac mi justo per a facilisi hac condimentum vestibulum proin pretium.",
    date: "Sep 01, 2021",
    datetime: "2021-09-01",
  },
  {
    title: "Easy yet effective ways to start getting exercise",
    href: "#",
    description:
      "Scelerisque sit a a quam a arcu aliquet parturient a aenean a a non et taciti nulla felis parturient a enim.",
    date: "Aug 28, 2021",
    datetime: "2021-08-28",
  },
];

const BlogSection = () => {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-3xl mx-auto divide-y-2 divide-gray-200 lg:max-w-6xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Resources
          </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-1 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">
              Check out our posts to learn more about health of body and mind.
            </p>
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={post.href}
                  className="text-base font-semibold text-blue-600 hover:text-blue-500"
                >
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
