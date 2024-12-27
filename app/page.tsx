import { SearchIcon } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

import BlogPost from "@/app/components/BlogPost";
import Pagination from "@/app/components/Pagination";
import blogs from "@/data/blogs.json";



const BlogPage = () => {
  return (
    <div>
      <section className="wrapper py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="col-span-1 lg:col-span-9 p-2">
            {blogs.map((blog) => {
              return (
                <BlogPost blog={blog} key={blog.id}/>
              );
            })}
          </div>
          <div className="lg:col-span-3 p-2">
            <aside>
              <form action="">
                <div className="relative">
                  <SearchIcon className="absolute right-3 top-3" />
                  <input
                    type="text"
                    className="border border-[#9F9F9F] rounded-lg py-3 w-full px-3"
                    autoComplete="off"
                  />
                </div>
              </form>

              <div className="mt-11 ms-8">
                <h3 className="font-medium text-2xl mb-8">Categories</h3>
                <ul className="text-base text-[#9F9F9F] flex space-y-7 flex-col">
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between text-black transition-colors hover:text-primary"
                    >
                      <span>Getting Started</span>
                      <span>2</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between text-black transition-colors hover:text-primary"
                    >
                      <span>Advanced Features</span>
                      <span>12</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between text-black transition-colors hover:text-primary"
                    >
                      <span>SEO and Performance</span>
                      <span>4</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between text-black transition-colors hover:text-primary"
                    >
                      <span>Projects and Use Cases</span>
                      <span>14</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between text-black transition-colors hover:text-primary"
                    >
                      <span>Tips and Tools</span>
                      <span>1</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-11 ms-8">
                <h3 className="font-medium text-2xl mb-8">Recent Posts</h3>
                <ul className="text-base  flex space-y-7 flex-col">
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between group"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/blog/thumb.png"
                          width={80}
                          height={80}
                          alt="Blog"
                          className="rounded"
                        />
                        <div>
                          <h4 className="text-sm group-hover:text-primary transition-colors">
                            Getting Started with Next.js
                          </h4>
                          <span className="text-xs text-[#9F9F9F]">
                            26 Dec 2024
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between group"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/blog/thumb.png"
                          width={80}
                          height={80}
                          alt="Blog"
                          className="rounded"
                        />
                        <div>
                          <h4 className="text-sm group-hover:text-primary transition-colors">
                            Boosting SEO with Next.js
                          </h4>
                          <span className="text-xs text-[#9F9F9F]">
                            25 Dec 2024
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-between group"
                    >
                      <div className="flex gap-2 items-center">
                        <Image
                          src="/images/blog/thumb.png"
                          width={80}
                          height={80}
                          alt="Blog"
                          className="rounded"
                        />
                        <div>
                          <h4 className="text-sm group-hover:text-primary transition-colors">
                            Building a Blog with Next.js
                          </h4>
                          <span className="text-xs text-[#9F9F9F]">
                            24 Dec 2024
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <Pagination />
      </section>
    </div>
  );
};

export default BlogPage;
