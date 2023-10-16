import inputDatas from "./inputDatas";

console.log(inputDatas);

const InputPage = () => {
  return (
    <>
      <h1 className="pb-4 text-xl font-medium md:text-2xl md:pb-7 text-4F4F4F">
        Inputs
      </h1>
      {inputDatas.map((row, index) => (
        <div className={index === 7 ? 'mb-6' : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-6'} key={index}>
          {row.map((item) => (
            <div key={item.id}>
              {item.title && (
                <p
                  className={`mb-3 text-xs font-normal text-000 font-ubuntumono ${
                    item.titlePseudo ? "text-828282" : ""
                  }`}
                >
                  {item.title}
                </p>
              )}
              {item.element}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default InputPage;
