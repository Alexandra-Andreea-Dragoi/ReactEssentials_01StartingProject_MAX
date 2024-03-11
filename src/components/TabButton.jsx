// export default function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       <button className={isSelected ? "active" : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }

// we replace onSelect with spread operator ...props and in this case we make sure that where we use TabButton, we will replace onSelect with onClick

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
