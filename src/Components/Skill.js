export const Skill = (props) => {
  const { name, icon } = props;

  return (
    <div className="w-[78px] h-24">
      <div className="w-16 h-16 ">{icon}</div>
      <p className="text-base font-normal text-gray-600 justify-center">
        {name}
      </p>
    </div>
  );
};
