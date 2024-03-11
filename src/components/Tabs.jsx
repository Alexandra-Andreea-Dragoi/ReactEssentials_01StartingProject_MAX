export default function Tabs({ children, buttons }) {
  return (
    <>
      <menue>{buttons}</menue>
      {children}
    </>
  );
}
