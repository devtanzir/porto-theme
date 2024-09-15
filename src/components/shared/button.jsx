const Button = ({ text, primary = false }) => {
  return (
    <button
      className={`py-4 px-6 ${
        primary
          ? "bg-[#08c] hover:bg-[#00A0F0]"
          : "bg-[#212529] hover:bg-[#333]"
      } transition rounded text-white text-xs font-semibold cursor-pointer mr-3`}
    >
      {text}
    </button>
  );
};

export default Button;
