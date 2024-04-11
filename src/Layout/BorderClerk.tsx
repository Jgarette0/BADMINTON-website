function BorderClerk() {
  return (
    <>
      <div className="h-full w-10 bg-background absolute top-0 left-0 hidden md:block rounded-l-full"></div>
      <div className="h-full w-10 bg-background absolute top-0 right-0 hidden md:block rounded-r-full"></div>
      <div className="h-10 lg:h-10 w-full bg-background absolute top-0 right-0 hidden lg:hidden md:block rounded-t-full"></div>
      <div className="h-10 w-full bg-background absolute bottom-0 right-0 md:block lg:hidden  rounded-b-full"></div>
    </>
  );
}
export default BorderClerk;
