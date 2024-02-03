import Post_Date from "@/utils/date";

const BlogCard = (props) => {
  return (
    <div
      className="flex bg-slate-950 h-[100%] w-[60vw] p-1 navHide:p-2 mb-5 rounded-xl border-2 border-stone-700 overflow-hidden
             hover:shadow-sm hover:shadow-grny transition-shadow blogImgHide:h-40 blogImgHide:w-[70vw] hover:translate-y-1 hover:translate-x-2"
      key={props.index}
    >
      {/* Make Use Of Gradient in Image */}
      <img
        src={props.image}
        alt={props.title}
        className="w-[170px] h-[140px] rounded-lg hidden blogImgHide:flex"
      ></img>
      <div className="overflow-hidden w-full h-full">
        {/* Make it More Responsive */}
        <div className="w-full font-heading px-3 text-base">
          <span className="text-green-500 text-shadow-green-600 bg-[url('https://static.cracked.io/images/bg1.gif')] whitespace-pre-wrap hyphens-auto">
            {props.title}
          </span>
        </div>
        <div className="mx-3 text-xs mt-[0.425rem] text-slate-300">
          <Post_Date date={props.date}></Post_Date>
        </div>
        <div className="font-content_font my-4 mx-3 pr-4 text-sm text-stone-300 max-h-16 max-w-full overflow-hidden whitespace-pre-wrap hyphens-auto hidden navHide:flex">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
