import Button from "../../component/ui/Button";

// each array inside represent each row
// each object inside array represent each button element
// you can easily add a row or remove an element on each row without messing with the html
const buttonDatas = [
  [
    {
      title: "<Button />",
      element: <Button>Default</Button>,
    },
  ],
  [
    {
      title: '<Button variant="outline" />',
      element: <Button variant="outline">Default</Button>,
    },
  ],
  [
    {
      title: '<Button variant="text" />',
      element: <Button variant="text">Default</Button>,
    },
  ],
  [
    {
      title: '<Button disableShadow />',
      element: <Button disableShadow>Default</Button>,
    },
  ],
  [
    {
      title: '<Button disabled />',
      element: <Button disabled>Disabled</Button>,
    },
    {
      title: '<Button variant="text" disabled />',
      element: <Button variant="text" disabled>Disabled</Button>,
    },
  ],
  [
    {
      title: '<Button startIcon="local_grocery_store" />',
      element: <Button startIcon="add_shopping_cart">Disabled</Button>,
    },
    {
      title: '<Button endIcon="local_grocery_store" />',
      element: <Button endIcon="add_shopping_cart">Disabled</Button>,
    },
  ],
  [
    {
      title: '<Button size="sm" />',
      element: <Button size="sm" color="primary">Default</Button>,
    },
    {
      title: '<Button size="md" />',
      element: <Button size="md" color="primary">Default</Button>,
    },
    {
      title: '<Button size="lg" />',
      element: <Button size="lg" color="primary">Default</Button>,
    },
  ],
  [
    {
      title: '<Button color="default" />',
      element: <Button color="default">Default</Button>,
    },
    {
      title: '<Button color="primary" />',
      element: <Button color="primary">Primary</Button>,
    },
    {
      title: '<Button color="secondary" />',
      element: <Button color="secondary">Secondary</Button>,
    },
    {
      title: '<Button color="danger" />',
      element: <Button color="danger">Danger</Button>,
    },
  ],

];

const ButtonPage = () => {
  return (
    <>
      <h1 className="pb-4 text-xl font-medium md:text-2xl md:pb-7 text-4F4F4F">
        Buttons
      </h1>
      <div className="flex flex-col gap-11">
        {buttonDatas.map((row) => (
          <div className={`flex flex-wrap`}>
            {row.map(item => (
            <div>
              <p className="mb-3 text-xs font-normal text-000">{item.title}</p>
              {item.element}
            </div>
            ))}

          </div>
        ))}
        <p className="text-xs font-ubuntumono text-828282">Icons: https://material.io/resources/icons/?style=round</p>
      </div>
    </>
  );
};

export default ButtonPage;
