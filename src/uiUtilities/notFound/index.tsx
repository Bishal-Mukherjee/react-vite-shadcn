import NotFoundSvg from "@/assets/svg/not-found.svg";

export const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
      <img src={NotFoundSvg} alt="Error" className="w-72 h-72" />
    </div>
  );
};
