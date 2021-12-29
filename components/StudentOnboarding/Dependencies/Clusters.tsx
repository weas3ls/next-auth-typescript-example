const clusters = [
    {
        name: "Agriculture, Food & Natural Resources",
        pathways: [
            {
                name: "Agriculture, Agricultural Operations, & Related Sciences",
            },
            {
                name: "Animal Health & Veterinary Sciences",
            },
            {
                name: "Applied Horticulture & Horticultural Operations",
            },
            {
                name: "Biotechnology",
            },
            {
                name: "Natural Resources & Conservation",
            },
        ],
    },
    {
        name: "Architecture & Construction",
        pathways: [
            {
                name: "Construction Trades - Carpentry",
            },
            {
                name: "Construction Trades - Electricity",
            },
            {
                name: "Construction Trades - General",
            },
            {
                name: "Construction Trades - Masonry",
            },
            {
                name: "Construction Trades - Remodeling",
            },
            {
                name: "Drafting & Design Technology / Architectural",
            },
            {
                name: "Electrical & Power Transmission Installation",
            },
            {
                name: "Heating, Air Conditioning, Ventilation, & Refrigeration",
            },
            {
                name: "Home Furnishing Equipment Installers & Consultations",
            },
            {
                name: "Plumbing Technology",
            },
        ],
    },
    {
        name: "Energy",
        pathways: [
            {
                name: "Line Worker",
            },
            {
                name: "Plumbing-Pipefitter and Sprinkler Fitter",
            },
        ],
    },
    {
        name: "Health Science",
        pathways: [
            {
                name: "Biomedical Sciences",
            },
            {
                name: "Clinical/Medical Laboratory Science/Research and Allied Professions",
            },
            {
                name: "Clinical/Medical Laboratory Science/Research and Allied Professions",
            },
        ],
    },
    {
        name: "Manufacturing",
        pathways: [
            {
                name: "Electrical/Electronics Equipment Installation & Repair",
            },
            {
                name: "Machine Tool Technology / Machinist",
            },
            {
                name: "Robotics & Automation",
            },
            {
                name: "Welding, Brazing, & Soldering",
            },
            {
                name: "Woodworking",
            },
        ],
    },
    {
        name: "Arts, A/V Technology & Communications",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Education & Training",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Information Technology",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Science, Technology, Engineering & Mathematics",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Business Management & Administration",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Finance",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Government & Public Administration",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Hospitality & Tourism",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Human Services",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Law, Public Safety, Corrections & Security",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Marketing",
        pathways: [
            {
                name: "",
            },
        ],
    },
    {
        name: "Transportation, Distribution & Logistics",
        pathways: [
            {
                name: "",
            },
        ],
    },
];

export default clusters.sort((a, b) => (a.name > b.name ? 1 : -1));
