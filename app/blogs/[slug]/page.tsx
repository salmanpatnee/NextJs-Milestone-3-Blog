import InputGroup from "@/app/components/Input";
import blogs from "@/data/blogs.json";
import { Calendar, TagIcon, User } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Comment from "./components/comment";

interface Props {
  params: { slug: string };
}

const BlogDetailPage = ({ params: { slug } }: Props) => {
  const blog = blogs.find((blog) => blog.slug === slug);

  const comment = {
    author_name: 'Jack', 
    published_date: '27 Dec, 2024', 
    comment: 'This is a comment.'
  }

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

              <p className="text-base mb-4 leading-10">{blog.introduction}</p>

              {blog.content.map((line, index) => (
                <p className="text-base  mb-7" key={index}>
                  {line}
                </p>
              ))}

              <p className="text-base  mb-7">{blog.conclusion}</p>
            </article>
            {/* <div className="mb-5">
              <Link
                href={`/`}
                className="text-base pb-3 border-black hover:text-primary transition-all mb-5"
              >
                {" "}
                <ArrowLeft className="inline-block me-2" />
                Back to Home
              </Link>
            </div> */}
            
            <p className="text-2xl uppercase font-semibold mb-5">{blog.comments.length || 0} comments on “{blog.title}</p>

              {blog.comments && blog.comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            
            
            <div>
              <h3 className="text-2xl uppercase font-semibold mb-5">
                Leave a Reply
              </h3>
              <p className="text-sm text-gray-500 font-normal mb-10">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <div>
                <InputGroup
                  label="Comment *"
                  placeholder="Write your thoughts"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <InputGroup label="Name *" placeholder="Salman A.Ghani" />
                </div>
                <div>
                  <InputGroup
                    label="Email *"
                    type="email"
                    placeholder="salmanpatni92@gmail.com"
                  />
                </div>
              </div>
              <div>
                <button className="bg-primary text-white border border-primary rounded-lg h-12 lg:h-14 px-8 lg:px-16 text-sm lg:text-base  transition">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
