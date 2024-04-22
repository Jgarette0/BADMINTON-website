import { Link } from "react-router-dom";

function PaymentPage() {
  return (
    <>
      <div className="w-screen h-screen bg-[#007dfe] flex flex-col place-items-center justify-center gap-8 rounded-md absolute">
        <img src="img/gcash.png" className="" alt="" />
        <div className="flex flex-col-reverse md:flex-row gap-12 p-8">
          <Link to="/">
            <button className="p-8 md:w-64 w-80 place-items-center justify-center text-center h-24 text-[#007dfe] hover:opacity-80 text-lg font-mona font-semibold bg-white rounded-full">
              Go back
            </button>
          </Link>
          <a
            href="http://m.me/61557379647439?text=I%20want%20to%20ask%20for%20the%20payment%20number"
            target="_blank"
          >
            <button className="p-8 md:w-64 w-80 place-items-center justify-center text-center h-24 text-[#007dfe] hover:opacity-80 text-lg font-mona font-semibold bg-white rounded-full">
              Ask number
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
