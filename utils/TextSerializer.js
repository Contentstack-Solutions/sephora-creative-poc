export default function TextSerializer({ props }) {
  const data = props;
  return (
    <>
      {data.map((item) => {
        return (
          <>
            {item.children.map((item_1) => {
              return <p key={item_1.text}>{item_1.text}</p>;
            })}
          </>
        );
      })}
    </>
  );
}
