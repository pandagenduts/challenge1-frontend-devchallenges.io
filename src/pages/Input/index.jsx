import inputDatas from "./inputDatas";

console.log(inputDatas);

const InputPage = () => {


  return (
    <>
      <h1 className="pb-4 text-xl font-medium md:text-2xl md:pb-7 text-4F4F4F">
        Inputs
      </h1>
      <div className="flex flex-col gap-11">
        {inputDatas.map((row, index) => (
          <div
            className={`flex flex-wrap gap-6`}
            key={index}
          >
            {row.map((item) => (
              <div key={item.id}>
                {item.title && (
                  <p
                    className={`mb-3 text-xs font-normal text-000 ${
                      item.titlePseudo && "text-828282 font-ubuntumono"
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
      </div>
    </>
  );
};

export default InputPage;
