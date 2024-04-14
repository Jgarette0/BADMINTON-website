import LoadingSpinner from "./LoadingSpinner";

function PageLoading() {
  return (
    <div className="page-loading">
      <div className="page-loading-text">
        <LoadingSpinner />
      </div>
    </div>
  );
}

const styles = `
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }

  .page-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .page-loading-text {
    color: white;
    animation: pulse 1.5s infinite;
  }
`;

function LazyLoading() {
  return (
    <>
      <style>{styles}</style>
      <PageLoading />
    </>
  );
}

export default LazyLoading;
