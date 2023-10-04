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
];

export default inputDatas;
