import Image from "next/image";
import React from "react";

import { Comment } from "@/app/components/BlogPost";

interface Props {
  comment: Comment;
}

const comment = ({ comment }: Props) => {
  return (
    <div className="p-4 border-b pb-8 mb-10">
      <div className="grid grid-cols-[auto,1fr] gap-4 items-start max-w-4xl">
        <div className="flex justify-center">
          <Image
            src={`https://i.pravatar.cc/150?u=${comment.id}`}
            width={100}
            height={100}
            alt="Author"
            className="w-16 h-16 rounded-full"
          />
        </div>

        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              {comment.author_name}
            </h3>
            <p className="text-xs text-gray-500 font-normal">
              {comment.published_date}
            </p>
          </div>

          <p className="mt-2 text-gray-700 text-sm font-light leading-5">
            {comment.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default comment;
