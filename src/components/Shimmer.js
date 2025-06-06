const ShimmerComponent = () => {
  return (
    <div className="flex flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => (
        <div className="w-[250px] rounded-4xl p-4 shadow-md  h-[250px]" key={a}>
          <div className="shimmer-body"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerComponent;
