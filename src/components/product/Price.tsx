import React from 'react';
import { FormatCurrency } from '../../utilities/FormatCurrency';

export const Price = ({price}: any) => {
  return (
    <>
    <p className="font-bold text-slate-700 dark:text-slate-400">
        {FormatCurrency(price)}
    </p>
    </>
  )
}