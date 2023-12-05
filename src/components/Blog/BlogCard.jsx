import Post_Date from "@/utils/date";

const BlogCard = (props) => {
    return(
        <div
            className="flex bg-slate-950 h-40 w-[60%] p-2 mb-5 rounded-xl border-2 border-stone-700 overflow-hidden
             hover:shadow-sm hover:shadow-grny transition-shadow"
            key={props.index}
          >
            {/* Make Image Disappear for Smaller screens */}
            {/* Make Use Of Gradient in Image */}
            <img
            src={props.image}
            alt={props.title}
            width={170}
            height={100}
            className="rounded-lg"
          ></img>
            <div>
              <div className="font-heading mx-3 text-base text-white">
                {props.title}
              </div>
              <div className="mx-3 text-xs mt-[0.425rem] text-slate-300">
                <Post_Date date={props.date}></Post_Date>
              </div>
              <div className="font-content_font my-4 mx-3 text-sm text-stone-300 border-2 border-red-500 h-16 w-[550px] text-ellipsis overflow-hidden ...">
                {props.description}
              </div>
            </div>
          </div>
    )
}

export default BlogCard;