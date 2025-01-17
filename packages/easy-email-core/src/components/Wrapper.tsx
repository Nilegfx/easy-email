import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IWrapper } from '@core/blocks/Wrapper';
import MjmlBlock from '@core/components/MjmlBlock';

export type WrapperProps = RecursivePartial<IWrapper['data']> &
  RecursivePartial<IWrapper['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function Wrapper(props: WrapperProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.WRAPPER}
    >
      {props.children}
    </MjmlBlock>
  );
}
