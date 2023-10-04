// each array inside represent each row
// each object inside array represent each button element
// you can easily add a row or remove an element on each row without messing with the html

import Input from "../../component/UI/Input";

const inputDatas = [
  [
    {
      id: 1,
      title: "<Input />",
      element: <Input />,
    },
    {
      id: 2,
      title: "&:hover",
      titlePseudo: true,
      element: <Input className="!outline-[#333]" />,
    },
    {
      id: 3,
      title: "&:focus",
      titlePseudo: true,
      element: (
        <Input
          className="!outline-[#2962FF]"
          labelClassName="!text-[#2962FF]"
        />
      ),
    },
  ],
  [
    {
      id: 4,
      title: "<Input error />",
      element: <Input error />,
    },
    {
      id: 5,
      title: "&:hover",
      titlePseudo: true,
      element: <Input error className="!outline-[#333]" labelClassName="!text-[#333]" />,
    },
    {
      id: 6,
      title: "&:focus",
      titlePseudo: true,
      element: (
        <Input
          error
          className="!outline-[#D32F2F]"
          labelClassName="!text-[#D32F2F]"
        />
      ),
    },
  ],
  [
    {
      id: 7,
      title: "<Input disabled />",
      element: <Input disabled />,
    },
  ],
  [
    {
      id: 8,
      title: "<Input helperText=”Some interesting text” />",
      element: <Input helperText='Some interesting text' />,
    },
    {
      id: 9,
      title: "<Input helperText=”Some interesting text” error />",
      element: <Input helperText='Some interesting text' error />,
    },
  ],
  [
    {
      id: 10,
      title: "<Input startIcon />",
      element: <Input startIcon='call' />,
    },
    {
      id: 11,
      title: "<Input endIcon />",
      element: <Input endIcon='lock' />,
    },
  ],
  [
    {
      id: 12,
      title: "<Input value=”Text” />",
      element: <Input value='Text' />,
    },
  ],
  [
    {
      id: 13,
      title: "<Input size=”sm” />",
      element: <Input size='sm' />,
    },
    {
      id: 14,
      title: "<Input size=”md” />",
      element: <Input size='md' />,
    },
  ],
  [
    {
      id: 15,
      title: "<Input fullWidth  />",
      element: <Input fullWidth />,
    },
  ],

];

export default inputDatas;
