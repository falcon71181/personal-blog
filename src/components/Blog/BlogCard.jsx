import Post_Date from "@/utils/date";

const BlogCard = (props) => {
    return(
        <div
            className="flex bg-slate-950 h-[100%] w-[60vw] p-2 mb-5 rounded-xl border-2 border-stone-700 overflow-hidden
             hover:shadow-sm hover:shadow-grny transition-shadow blogImgHide:h-40 blogImgHide:w-[70vw]"
            key={props.index}
          >
            {/* Make Use Of Gradient in Image */}
            <img
            src={props.image}
            alt={props.title}
            className="w-[170px] h-[140px] rounded-lg hidden blogImgHide:flex"
          ></img>
            <div>
              {/* Make it More Responsive */}
              <div className="font-heading px-3 text-base text-white truncate">
                {props.title}
              </div>
              <div className="mx-3 text-xs mt-[0.425rem] text-slate-300">
                <Post_Date date={props.date}></Post_Date>
              </div>
              <div className="border-2 border-red-500 font-content_font my-4 mx-3 pr-4 text-sm text-stone-300 max-h-16 w-[54vw] text-ellipsis overflow-hidden ... hidden navHide:flex">
                {props.description}
              </div>
            </div>
          </div>
    )
}

export default BlogCard;
