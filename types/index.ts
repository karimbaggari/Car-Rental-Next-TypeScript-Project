import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}
export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  pageNumber?: number;
  limit?: number;
  fuel?: string;
}

// export interface CustomButtonProps {
//   isDisabled?: boolean;
//   btnType?: "button" | "submit";
//   containerStyles?: string;
//   textStyles?: string;
//   title: string;
//   rightIcon?: string;
//   handleClick?: MouseEventHandler<HTMLButtonElement>;
// }

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
