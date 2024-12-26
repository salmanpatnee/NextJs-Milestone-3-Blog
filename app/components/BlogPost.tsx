import Image from "next/image";
import Link from "next/link";
import { Calendar, TagIcon, User } from "lucide-react";

type Blog = {
  id: string | number;
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  introduction: string;
  content: string[];
  image_url: string;
  published_data: string;
  author: string;
  conclusion: string;
};

interface Props {
  blog: Blog;
}

const BlogPost = ({ blog }: Props) => {
  return (
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
            <User size={15} className="inline-block fill-[#9F9F9F]" /> {blog.author}
          </li>
          <li>
            <Calendar size={15} className="inline-block stroke-[#9F9F9F]" />{" "}
            {blog.published_data} {/* Fixed this to display the correct date */}
          </li>
          <li>
            <TagIcon size={15} className="inline-block stroke-[#9F9F9F]" />{" "}
            Tutorials
          </li>
        </ul>
      </div>
      <h2 className="font-medium text-3xl mb-3">{blog.title}</h2>
      <p className="text-base text-[#9F9F9F] mb-7">{blog.introduction}</p>
      <Link
        href={`/blogs/${blog.slug}`}
        className="text-base border-b pb-3 border-black hover:text-primary transition-all"
      >
        Read more
      </Link>
    </article>
  );
};

export default BlogPost;
