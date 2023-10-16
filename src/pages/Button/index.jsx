import buttonDatas from "./buttonDatas";

const ButtonPage = () => {
  return (
    <>
      <h1 className="pb-4 text-xl font-medium md:text-2xl md:pb-7 text-4F4F4F">
        Buttons
      </h1>
      <div className="flex flex-col gap-11">
        {buttonDatas.map((row, index) => (
          <div
            className={`grid grid-cols-1 verySmall:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
              index + 1 === buttonDatas.length && "items-end"
            }`}
            key={index}
          >
            {row.map((item) => (
              <div key={item.id}>
                {item.title && (
                  <p
                    className={`mb-3 text-xs font-normal text-000 font-ubuntumono ${
                      item.titlePseudo && "text-828282"
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
        <p className="text-xs font-ubuntumono text-828282">
          Icons: https://material.io/resources/icons/?style=round
        </p>
      </div>
    </>
  );
};

export default ButtonPage;
