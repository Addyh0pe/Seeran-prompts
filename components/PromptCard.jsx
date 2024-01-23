'use client'

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  const [copied, setCopied] = useState('')
  const { data: session } = useSession();
  const pathName = usePathname();

  const copyToClipBoard = () => {

    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);

    setTimeout(() => {
      setCopied('')
    }, 2000);

  };

  return (
    <div className="prompt_card ">


      {/* creator image and info section */}
      <div className="flex justify-between items-start gap-5">

        <div className="flex-1 flex justify-start items-center gap-3 ">
          <Image
            src={post.creator.image}
            alt="user image"
            width={40}
            height={40}
            className="rounded-full object-contain cursor-pointer"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 cursor-pointer max-w-fit">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500 cursor-pointer max-w-fit">
              {post.creator.email}
            </p>
          </div>
        </div>

        {/* copy button section */}
        <div className="copy_btn" onClick={copyToClipBoard}>
          <Image
            src={copied === post.prompt
            ? '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
            }
            alt="copy button"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* prompt and tag section */}
      <p className="my-4 font-satoshi text-sm text-gray-700 h-fit overflow-hidden" >
        { post.prompt.length < 1045 
          ? post.prompt
          : post.prompt.slice(0, 1048) + '...'
        }
      </p>
      <p 
        className="font-inter blue_gradient text-sm cursor-pointer max-w-fit text-ellipsis overflow-x-hidden"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        { post.tag.startsWith('#')
          ? post.tag
          : '#' + post.tag
        }
      </p>

      { session?.user.id === post.creator._id && pathName === '/profile' &&
        <div className=" flex-center gap-4 border-t border-gray-100">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p 
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      }

    </div>
  )

};

export default PromptCard;