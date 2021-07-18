import React from 'react'
import { Meta } from '@storybook/react';
import { Checkbox } from "./index"

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as Meta;

export const Sizes: React.VFC<{}> = () => (
  <div style={{display: "flex", flexDirection: "column", gap: 8}}>
    <div style={{display: "flex", gap: 8}}>
      <Checkbox label="Checkbox"/>
    </div>
  </div>
);