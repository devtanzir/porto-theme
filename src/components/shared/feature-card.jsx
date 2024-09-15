const FeatureCard = ({ children, title, description }) => {
  return (
    <>
      <div className="flex gap-5 w-1/2 pb-4">
        <div className="text-[27px] text-[#08c]">{children}</div>
        <div>
          <h4 className="text-[17px] font-bold mb-[10px]">{title}</h4>
          <p className="text-[#777] text-[14px]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
