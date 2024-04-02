import { useParams } from "react-router-dom";

export const SomethingPage = () => {
  const params = useParams<{ item: string }>();
  console.log(params);
  return <>Hello Something Page! {params.item}</>;
};

export default SomethingPage;
