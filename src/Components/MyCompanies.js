import { FrameworkSection } from "./FrameworkSection";

export const MyCompanies = (props) => {
  const { picture, company, details, frameworks, actions } = props;
  return (
    <div className="border-b shadow-lg gap-x-6 rounded-xl">
      <div className="h-[256px] p-8 border-b border-gray-100 bg-gray-50 border-t rounded-xl">
        {picture}
      </div>
      <div className="flex flex-col gap-6 p-8">
        <p className="text-gray-900 text-ellipsis overflow-hidden text-lg font-semibold">
          {company}
        </p>
        <p className="text-base font-medium text-gray-600">{details}</p>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-gray-600">
          {frameworks.map((framework, index) => {
            return <FrameworkSection key={index} text={framework} />;
          })}
        </div>
        <div className="w-9 h-9 p-[6px]">{actions}</div>
      </div>
    </div>
  );
};
