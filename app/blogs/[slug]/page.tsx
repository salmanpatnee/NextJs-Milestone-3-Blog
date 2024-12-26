import React from "react";
import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowBigLeft, ArrowLeft, Calendar, TagIcon, User } from "lucide-react";

interface Props {
  params: { slug: string };
}

const BlogDetailPage = ({ params: { slug } }: Props) => {
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <section className="wrapper py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
          <div className="col-span-1 lg:col-span-12 p-2">
           
            <article className="mb-14">
              <Image
                src={blog.image_url}
                alt={blog.title}
                width={817}
                height={500}
                className="rounded mb-4"
              />
              <div className="mb-5">
                <ul className="flex items-center gap-8 text-base text-[#9F9F9F]">
                  <li>
                    <User size={15} className="inline-block fill-[#9F9F9F]" />{" "}
                    {blog.author}
                  </li>
                  <li>
                    <Calendar
                      size={15}
                      className="inline-block stroke-[#9F9F9F]"
                    />{" "}
                    {blog.published_data}{" "}
                    {/* Fixed this to display the correct date */}
                  </li>
                  <li>
                    <TagIcon
                      size={15}
                      className="inline-block stroke-[#9F9F9F]"
                    />{" "}
                    Tutorials
                  </li>
                </ul>
              </div>
              <h1 className="font-medium text-3xl mb-3">{blog.title}</h1>

              <p className="text-base mb-4 leading-10">
                {blog.introduction}
              </p>

              {blog.content.map((line, index) => <p className="text-base  mb-7" key={index}>
                {line}
              </p>)}

            </article>
               <div className="mb-5">
                <Link
                  href={`/`}
                  className="text-base pb-3 border-black hover:text-primary transition-all mb-5"
                > <ArrowLeft className="inline-block me-2"/>
                  Back to Home
                </Link>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
