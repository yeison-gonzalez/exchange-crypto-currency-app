// Libraries
'use client'
import React, { useEffect, useState } from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// Constants
import { MAIN_ROUTE } from '@/constants/Routes';
import { COIN_PARAM_URL } from '@/constants/Coin';

/**
 * Interface option select
 * @constructor
 * @param {string} value - Value option
 * @param {string} label - Label to show in option select
 */
interface IOption {
  value: string
  label: string
}

/**
 * Interface select multi search component
 * @constructor
 * @param {string} name - Name field
 * @param {IOption[]} defaultValue - Optional to initialize with options
 * @param {IOption[]} options - Options select
 */
interface ISelectMultiSearchProps {
  name: string
  defaultValue?: IOption[] 
  options: IOption[]
}

const customStyles: StylesConfig = {
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
      borderRadius: "1rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
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
      padding: "0.5rem",
      paddingLeft: "0.5rem",
      borderRadius: "1.5rem",
      borderWidth: "0.063rem",
      borderColor: "#3f3f46",
      width: "100%",
      transition: "none",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      color: "#111827",
      backgroundColor: "#3f3f46",
  }),
}

export const SelectMultiSearch: React.FC<ISelectMultiSearchProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<IOption>>([]);

  useEffect(() => {
    // Clear options from select in main route
    if (pathname === MAIN_ROUTE.route) {
        setSelectedOptions([]);
    }
  }, [pathname])

  /**
   * Action to select and change url by options
   * @param {MultiValue<IOption>} selectedOptions - List options selected
   * @returns {void} - Change state from select value
   */
  const onSelect = (selectedOptions: MultiValue<IOption>): void => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (!selectedOptions.length) {
      current.delete(COIN_PARAM_URL)
      return router.push(MAIN_ROUTE.route);
    } else {
      const formatOptions = selectedOptions?.map(selectedOption => selectedOption.label)?.toString()
      current.set(COIN_PARAM_URL, formatOptions)
    }
    
    const query = current.get(COIN_PARAM_URL);
    setSelectedOptions(selectedOptions);
    router.push(`/${query}`);
  };
  
  return (
    <Select
      {...props}
      instanceId='select-search'
      value={selectedOptions}
      isMulti
      onChange={(value): void => onSelect(value as MultiValue<IOption>)}
      placeholder='Search crypto...'
      styles={customStyles}
    />
  );
}