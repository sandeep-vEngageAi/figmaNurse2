export const stringToDateFunc = (dischargedDate) => {
  if (
    dischargedDate == "" ||
    dischargedDate == null ||
    dischargedDate == undefined
  ) {
    dischargedDate = new Date().toString();
  }
  dischargedDate = new Date(dischargedDate).toString();
  dischargedDate = dischargedDate.split(" ");
  let dischargedDateRequired = `${dischargedDate[1]} ${dischargedDate[2]}, ${dischargedDate[3]}`;
  return dischargedDateRequired;
};
