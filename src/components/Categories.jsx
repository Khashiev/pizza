import React from 'react';

function Categories({value, onChangeCategory}) {
  // const [aciveIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Мясные', 'Гриль', 'Вегетарианская', 'Острые', 'Закрытые'];

  // const onClickCategory = (idx) => {
  //   setActiveIndex(idx);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, idx) => (
          <li
            key={idx}
            onClick={() => onChangeCategory(idx)}
            className={value === idx ? 'active' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
