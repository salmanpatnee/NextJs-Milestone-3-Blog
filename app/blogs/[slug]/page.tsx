"use client";
import Spinner from "@/app/components/Spinner";
import blogs from "@/data/blogs.json";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, TagIcon, User } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Comment from "./components/comment";
interface Props {
  params: { slug: string };
}



const commentSchema = z.object({
  name: z.string().min(3, "Name is required.").max(255),
  email: z
    .string()
    .email("Email is required")
    .min(1, "Email is required.")
    .max(255),
  comment: z.string().min(1, "Comment is required").max(1000),
});

type CommentForm = z.infer<typeof commentSchema>;

const BlogDetailPage = ({ params: { slug } }: Props) => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<CommentForm>({
    resolver: zodResolver(commentSchema)
  });
  
 

  const blog = blogs.find((blog) => blog.slug === slug);

  const [comments, setComments] = useState(blog?.comments || []);
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  if (!blog) {
    notFound();
  }
  const onSubmit = handleSubmit((data) => {
    setSubmitting(true); // Set submitting state to true
  
    // Simulate delay
    setTimeout(() => {
      const newComment = {
        id: (comments.length + 1).toString(),
        author_name: data.name,
        published_date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        comment: data.comment,
      };
  
      // Add the new comment and reset the submitting state
      setComments([...comments, newComment]);

      reset();
      
      setSubmitting(false); // Set submitting state back to false
    }, 2000); // 2-second delay
  });

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

            <p className="text-2xl uppercase font-semibold mb-5">
              {comments?.length || 0} comments on “{blog.title}
            </p>

            {blog.comments &&
              comments?.map((comment) => (
                <Comment comment={comment} key={comment.id} />
              ))}

            <div>
              <h3 className="text-2xl uppercase font-semibold mb-5">
                Leave a Reply
              </h3>
              <p className="text-sm text-gray-500 font-normal mb-10">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label
                    className="font-medium text-base mb-2 block text-gray-700"
                    htmlFor="comment"
                  >
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    className="rounded-lg  border border-[#9F9F9F] w-full px-4 py-4"
                    placeholder="Your thoughts *"
                    {...register("comment")}
                  ></textarea>
                  {errors.comment && <p className="text-xs text-red-600">{errors.comment.message}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="mb-4">
                    <label
                      className="font-medium text-base mb-2 block text-gray-700"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="rounded-lg border border-[#9F9F9F] w-full px-4 py-4"
                      placeholder="Salman *"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
                  </div>
                  <div className="mb-4">
                    <label
                      className="font-medium text-base mb-2 block text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="rounded-lg border border-[#9F9F9F] w-full px-4 py-4"
                      placeholder="salmanpatni92@gmail.com *"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <button className="bg-primary text-white border border-primary rounded-lg h-12 lg:h-14 px-8 lg:px-16 text-sm lg:text-base  transition" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting' : 'Post Comment'} {isSubmitting && <Spinner/>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
