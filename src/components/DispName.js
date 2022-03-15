const dispName = ({ props }) => {
  return props.map((each) => {
    return (
      <div key={each.id}>
        {each.name}: {each.number}
      </div>
    );
  });
};

export default dispName;
