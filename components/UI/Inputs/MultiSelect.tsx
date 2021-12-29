import { FormLabel } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

const customStyles = {
    option: (provided: any) => ({
        ...provided,
        background: "#2D3748",
        color: "white",
        padding: "0 2px 1px",
    }),
    control: (provided: any) => ({
        ...provided,
        background: "transparent",
        borderColor: "rgba(255, 255, 255, 0.16)",
    }),
    menuList: (provided: any) => ({
        ...provided,
        background: "transparent",
        padding: 0,
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none",
    }),
    multiValueLabel: (provided: any) => ({
        ...provided,
        background: "#2D3748",
        color: "white",
        borderRadius: 0,
    }),
    multiValueRemove: (provided: any) => ({
        ...provided,
        background: "#2D3748",
        color: "white",
        borderRadius: 0,
    }),
};

const MultiSelect = (props: { name: string; options: { value: string; label: string }[]; label: string }) => {
    return (
        <>
            <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
            <Select
                isMulti
                name={props.name}
                styles={customStyles}
                options={props.options}
                className="basic-multi-select"
            />
        </>
    );
};

export default MultiSelect;
