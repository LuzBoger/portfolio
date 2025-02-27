import clsx from "clsx";

const ProgressBar = ({ subItem }) => {
  const getColorClass = (value) => {
    console.log(value);
    if (value >= 0 && value < 20) {
      return "bg-orange-300";
    } else if (value >= 20 && value < 40) {
      return "bg-teal-400";
    } else if (value >= 40 && value < 60) {
      return "bg-pink-600";
    } else if (value >= 60 && value < 80) {
      return "bg-indigo-600";
    } else {
      return "bg-cyan-600";
    }
  };
  console.log(subItem);

  return (
    <div
      className={clsx("h-2 rounded-sm", getColorClass(subItem))}
      style={{ width: `${subItem}%` }}
    ></div>
  );
};

export default ProgressBar;
