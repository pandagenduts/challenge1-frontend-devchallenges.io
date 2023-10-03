
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
      element: <Input />,
    },
    {
      id: 3,
      title: "&:focus",
      titlePseudo: true,
      element: <Input />,
    },
  ],

];

export default inputDatas;