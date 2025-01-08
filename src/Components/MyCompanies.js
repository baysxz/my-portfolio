import { FrameworkSection } from "./FrameworkSection";

export const MyCompanies = (props) => {
  const { picture, company, details, frameworks, actions } = props;
  return (
    <div>
      <div>{picture} </div>
      <div>
        <p>{details}</p>
        <div>
          {frameworks.map((framework, index) => {
            return <FrameworkSection key={index} text={framework} />;
          })}
        </div>
        <div>{actions}</div>
      </div>
    </div>
  );
};
