import React from "react";

export interface RadioButtonsProps {
  name: string;
  legend: string;
  changeFunc: (val: string) => void;
  items: Array<{ label: string; value: string | number }>;
  currentValue: string | number;
}
