export const Skill = (props) => {
  const { name, icon } = props;

  return (
    <div className="flex flex-col justify-center justify-self-center">
      {icon}
      <p>{name}</p>
    </div>
  );
};
