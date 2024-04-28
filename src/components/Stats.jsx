import ProgressBar from "react-bootstrap/ProgressBar";

const Stats = () => {
  return (
    <div>
      <ProgressBar animated now={70} />;
      <ProgressBar animated now={70} />;
      <ProgressBar animated now={70} />;
      <ProgressBar animated now={70} />;
      <ProgressBar animated now={70} />;
    </div>
  );
};

export default Stats;
