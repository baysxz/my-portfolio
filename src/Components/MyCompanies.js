import { FrameworkSection } from "./FrameworkSection";

export const MyCompanies = (props) => {
  const { picture, company, details, frameworks, actions } = props;
  return (
    <div className='flex justify-center items-center flex-col '>
      <div className='flex flex-col justify-center items-center gap-5'>
        <p className='px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm '>
          Work
        </p>
        <p className='text-lg font-normal text-gray-600'>
          Some of the noteworthy projects I have built:{" "}
        </p>
      </div>
      <div className='w-[344px] h-[256px] p-8 rounded-xl border-b border-gray-100 bg-gray-50 mt-6'>
        {picture}
      </div>

      <div className='flex flex-col gap-6 p-8'>
        <p className='text-gray-900 text-ellipsis overflow-hidden text-lg font-semibold'>
          {company}
        </p>
        <p className='text-base font-medium'>{details}</p>
        <div className='grid grid-cols-2 gap-x-2 gap-y-2'>
          {frameworks.map((framework, index) => {
            return <FrameworkSection key={index} text={framework} />;
          })}
        </div>
        <div className='w-9 h-9 p-[6px]'>{actions}</div>
      </div>
    </div>
  );
};
