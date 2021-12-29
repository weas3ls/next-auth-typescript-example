const jobTypes = [
    { value: "fullTime", label: "Full Time" },
    { value: "partTime", label: "Part Time" },
    { value: "apprenticeship", label: "Apprenticeship" },
    { value: "coop", label: "Co-Op" },
    { value: "seasonal", label: "Seasonal" },
    { value: "jobShadow", label: "Job Shadow" },
    { value: "internship", label: "Internship" },
];

export default jobTypes.sort((a, b) => (a.value > b.value ? 1 : -1));
