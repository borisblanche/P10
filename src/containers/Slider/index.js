

// import { useEffect, useState } from "react";
// import { useData } from "../../contexts/DataContext";
// import { getMonth } from "../../helpers/Date";

// import "./style.scss";

// const Slider = () => {
//   const { data } = useData();
//   const [index, setIndex] = useState(0);
//   const byDateDesc = data?.focus ? [...data.focus].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];
  
//   useEffect(() => {
//     const nextCard = () => {
//       setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
//     };

//     const timer = setTimeout(nextCard, 5000);

//     return () => clearTimeout(timer);
//   }, [index, byDateDesc]);

//   return (
//     <div className="SlideCardList">
//       {byDateDesc?.map((event , idx) => (
//         <div
//           key={event.id}
//           className={`SlideCard SlideCard--${index === idx ? "display" : "hide"
//           }`}
//         >
//           <img src={event.cover} alt="forum" />
//           <div className="SlideCard__descriptionContainer">
//             <div className="SlideCard__description">
//               <h3>{event.title}</h3>
//               <p>{event.description}</p>
//               <div>{getMonth(new Date(event.date))}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="SlideCard__paginationContainer">
//         <div className="SlideCard__pagination">
//           {byDateDesc?.map((event, idx) => (
//             <input
//               key={event.id}
//               type="radio"
//               name="radio-button"
//               checked={index === idx}
//               onChange={() => setIndex(idx)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Slider;

import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  const byDateDesc = data?.focus ? [...data.focus].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];

  useEffect(() => {
    const nextCard = () => {
      setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
    };

    const timer = setTimeout(nextCard, 5000);

    return () => clearTimeout(timer);
  }, [index, byDateDesc]);

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.id || idx}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, idx) => (
            <input
              key={event.id || `pagination-${idx}`}
              type="radio"
              name="radio-button"
              checked={index === idx}
              onChange={() => setIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

