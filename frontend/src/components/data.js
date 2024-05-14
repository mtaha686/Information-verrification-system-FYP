export const genderOptions = [
  { value: "", label: "" },
  { value: "male", label: "M" },
  { value: "female", label: "F" },
];

const BoardsList = [
  "Inter Board Committee of Chairman (IBCC) Islamabad",
  "Federal Board of Intermediate and Secondary Education, Islamabad",
  "Board of Intermediate and Secondary Education, Bahawalpur",
  "Board of Intermediate and Secondary Education, DG Khan",
  "Board of Intermediate and Secondary Education, Faisalabad",
  "Board of Intermediate and Secondary Education, Gujranwala",
  "Board of Intermediate and Secondary Education, Lahore",
  "Board of Intermediate and Secondary Education, Multan",
  "Board of Intermediate and Secondary Education, Rawalpindi",
  "Board of Intermediate and Secondary Education, Sahiwal",
  "Board of Intermediate and Secondary Education, Sargodha",
  "Aga Khan Educational Board, Karachi",
  "Board of Intermediate Education, Karachi",
  "Board of Intermediate and Secondary Education, Hyderabad",
  "Board of Intermediate and Secondary Education, Larkana",
  "Board of Intermediate and Secondary Education, Sukkur",
  "Board of Secondary Education, Karachi",
  "Board of Intermediate and Secondary Education, Abbottabad",
  "Board of Intermediate and Secondary Education, Bannu",
  "Board of Intermediate and Secondary Education, Dera Ismail Khan",
  "Board of Intermediate and Secondary Education, Kohat",
  "Board of Intermediate and Secondary Education, Malakand",
  "Board of Intermediate and Secondary Education, Mardan",
  "Board of Intermediate and Secondary Education, Peshawar",
  "Board of Intermediate and Secondary Education, Swat",
  "Board of Intermediate and Secondary Education, Quetta",
  "Board of Intermediate and Secondary Education, Turbat",
  "Board of Intermediate and Secondary Education, Zhob",
  "Board of Intermediate and Secondary Education, Mirpur",
  "KPK Board of Technical Education, Peshawar",
  "Punjab Board of Technical Education, Lahore",
  "Sindh Board of Technical Education, Karachi",
];
export const BoardsOptions = [
  { value: "", label: "" },
  ...BoardsList.map((board) => ({ value: board, label: board })),
];

const yearsArray = Array.from(
  { length: 2023 - 2010 + 1 },
  (_, index) => 2010 + index
);

export const YearList = [
  { value: "", label: "" },
  ...yearsArray.map((year) => ({
    value: year.toString(),
    label: year,
  })),
];
