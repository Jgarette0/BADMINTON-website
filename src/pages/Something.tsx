import { Link, useParams } from "react-router-dom";

export const SomethingPage = () => {
  const params = useParams<{ item: string }>();
  console.log(params);
  return (
    <>
      <div className="fixed bottom-0 left-0 text-6xl bg-secondary h-screen w-screen">
        <img src={params.item} alt={params.item} />
        title: {params.item}
        descrption: {params.item}
        <Link to="/somethings" className="bg-gold">
          x
        </Link>
      </div>
    </>
  );
};

export default SomethingPage;
