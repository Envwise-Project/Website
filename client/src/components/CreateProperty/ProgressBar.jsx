import css from "./CreateProperty.module.css";

const ProgressBar = ({ step }) => {
  let width = null;
  if (step === "1") width = "33.333%";
  if (step === "2") width = "66.667%";
  if (step === "3") width = "100%";

  return (
    <div className={css.progressBarContainer}>
      <p>
        <span>Step {step}</span> of 3
      </p>
      <div className={css.progressBar}>
        <div className={css.progressBar__bar} style={{ width: width }}></div>
        <div className={css.progressBar__bg}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
