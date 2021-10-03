const Child = (props) => {
  let count = 0;
  let counter = 1;
  return (
    <div>
      <h1>child</h1>
      <button onClick={() => props.update(counter)}>{counter}</button>
    </div>
  );
};

export default Child;
