type DayPeriodType = "Morning" | "Afternoon" | "Evening";

const getDayPeriod = (time: Date): DayPeriodType => {
  return time.getHours() >= 18 || time.getHours() < 6
    ? "Evening"
    : time.getHours() >= 12
    ? "Afternoon"
    : "Morning";
};

export default getDayPeriod;
