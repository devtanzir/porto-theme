const PostCard = ({ title, description, date, month, className }) => {
  return (
    <>
      <div className={`flex gap-5 w-1/2 pb-4 px-2 ${className}`}>
        <div className="flex flex-col">
          <span className="text-base font-medium bg-white text-[#08c] text-center py-[10px]">
            {date}
          </span>
          <span className="text-xs bg-[#08c] text-white p-2">{month}</span>
        </div>
        <div>
          <h4 className="text-[17px] font-bold mb-[10px]">{title}</h4>
          <p className="text-[#777] text-[14px]">{description}</p>
          <span className="text-sm font-medium text-black cursor-pointer">
            read more {">"}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default PostCard;
