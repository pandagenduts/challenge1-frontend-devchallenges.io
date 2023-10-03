import Button from '../../component/UI/Button'

// each array inside represent each row
// each object inside array represent each button element
// you can easily add a row or remove an element on each row without messing with the html

const buttonDatas = [
  [
    {
      id: 1,
      title: "<Button />",
      element: <Button>Default</Button>,
    },
    {
      id: 2,
      title: "&:hover, &:focus",
      titlePseudo: true,
      element: <Button className="!bg-AEAEAE hover:!bg-AEAEAE">Default</Button>,
    },
  ],
  [
    {
      id: 3,
      title: '<Button variant="outline" />',
      element: <Button variant="outline">Default</Button>,
    },
    {
      id: 4,
      title: "&:hover, &:focus",
      titlePseudo: true,
      element: (
        <Button variant="outline" className="!bg-EAF0FF">
          Default
        </Button>
      ),
    },
  ],
  [
    {
      id: 5,
      title: '<Button variant="text" />',
      element: <Button variant="text">Default</Button>,
    },
    {
      id: 6,
      title: "&:hover, &:focus",
      titlePseudo: true,
      element: (
        <Button variant="text" className="!bg-EAF0FF">
          Default
        </Button>
      ),
    },
  ],
  [
    {
      id: 7,
      title: "<Button disableShadow />",
      element: <Button disableShadow>Default</Button>,
    },
  ],
  [
    {
      id: 8,
      title: "<Button disabled />",
      element: <Button disabled>Disabled</Button>,
    },
    {
      id: 9,
      title: '<Button variant="text" disabled />',
      element: (
        <Button variant="text" disabled>
          Disabled
        </Button>
      ),
    },
  ],
  [
    {
      id: 10,
      title: '<Button startIcon="local_grocery_store" />',
      element: <Button startIcon="add_shopping_cart">Disabled</Button>,
    },
    {
      id: 11,
      title: '<Button endIcon="local_grocery_store" />',
      element: <Button endIcon="add_shopping_cart">Disabled</Button>,
    },
  ],
  [
    {
      id: 12,
      title: '<Button size="sm" />',
      element: (
        <Button size="sm" color="primary">
          Default
        </Button>
      ),
    },
    {
      id: 13,
      title: '<Button size="md" />',
      element: (
        <Button size="md" color="primary">
          Default
        </Button>
      ),
    },
    {
      id: 14,
      title: '<Button size="lg" />',
      element: (
        <Button size="lg" color="primary">
          Default
        </Button>
      ),
    },
  ],
  [
    {
      id: 15,
      title: '<Button color="default" />',
      element: <Button color="default">Default</Button>,
    },
    {
      id: 16,
      title: '<Button color="primary" />',
      element: <Button color="primary">Primary</Button>,
    },
    {
      id: 17,
      title: '<Button color="secondary" />',
      element: <Button color="secondary">Secondary</Button>,
    },
    {
      id: 18,
      title: '<Button color="danger" />',
      element: <Button color="danger">Danger</Button>,
    },
  ],
  [
    {
      id: 19,
      title: "&:hover, &:focus",
      titlePseudo: true,
      element: <Button color="default" className='!bg-AEAEAE'>Default</Button>,
    },
    {
      id: 20,
      title: "",
      element: <Button color="primary" className='!bg-0039CB'>Primary</Button>,
    },
    {
      id: 21,
      title: "",
      element: <Button color="secondary" className='!bg-1C313A'>Secondary</Button>,
    },
    {
      id: 22,
      title: "",
      element: <Button color="danger" className='!bg-9A0007'>Danger</Button>,
    },
  ],
];

export default buttonDatas;