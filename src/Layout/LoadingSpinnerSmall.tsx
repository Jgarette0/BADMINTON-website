import "../styles/global.css";

const LoadingSpinnerSmall = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
      <div className="loader ease-linear rounded-full border-2 border-gray-200 h-3 w-3"></div>
    </div>
  );
};

export default LoadingSpinnerSmall;
