import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IButton } from '@core/blocks/Button';
import MjmlBlock from '@core/components/MjmlBlock';

export type ButtonProps = RecursivePartial<IButton['data']> &
  RecursivePartial<IButton['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function Button(props: ButtonProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.BUTTON}
    >
      {props.children}
    </MjmlBlock>
  );
}
