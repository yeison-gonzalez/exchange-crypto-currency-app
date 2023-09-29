'use client'
import React from 'react';
import Select, { MultiValue } from 'react-select';
import { useRouter, useSearchParams } from 'next/navigation';

interface IOption {
    value: string
    label: string
}

interface ISelectMultiSearchProps {
    name: string
    defaultValue?: IOption[] 
    options: IOption[]
}

const stylesControl = {
    padding: "0.5rem",
    paddingLeft: "0.5rem",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    borderColor: "#3f3f46",
    width: "100%",
    transition: "none",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: "#111827",
    backgroundColor: "#3f3f46",
}

export const SelectMultiSearch: React.FC<ISelectMultiSearchProps> = ({ name, defaultValue = [], options }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const onSelect = (selectedOptions: MultiValue<IOption>): void => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));

        if (!selectedOptions.length) {
            current.delete("coin")
            return router.push("/");
        } else {
            const formatOptions = selectedOptions?.map(selectedOption => selectedOption.label)?.toString()
            current.set("coin", formatOptions)
        }
        
        const query = current.get("coin");
        router.push(`/${query}`);
    };
    
    return (
        <Select
            instanceId='select-search'
            defaultValue={defaultValue}
            isMulti
            name={name}
            options={options}
            onChange={onSelect}
            placeholder='Search crypto...'
            styles={{
                input: (base) => ({
                    ...base,
                    "input:focus": {
                        boxShadow: "none",
                    },
                    color: 'white',

                }),
                valueContainer: (base) => ({
                    ...base,
                    flexWrap: "wrap",
                    padding: '0'
                }),
                indicatorsContainer: (base) => ({
                    ...base,
                    flexWrap: "wrap"
                }),
                multiValue: (base) => ({
                    ...base,
                    borderRadius: "16px",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                }),
                multiValueLabel: (base) => ({
                    ...base,
                    fontWeight: 'bold'
                }),
                singleValue: (base) => ({
                    ...base,
                    width: "100%",
                }),
                control: (base) => ({
                    ...base,
                    ...stylesControl
                }),
            }}
        />
    );
}