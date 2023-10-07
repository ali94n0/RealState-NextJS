const { ThreeDots } = require("react-loader-spinner");

function Loader() {
  return (
    <ThreeDots
      color="#304ffe"
      height={15}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{ margin: "auto" }}
    />
  );
}

export default Loader;
