// Button.stories.ts | Button.stories.tsx

import React from 'react'
import { Meta } from '@storybook/react';
import { Button } from "./index"
import { initColors } from "./_colors"

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

export const Variants: React.VFC<{}> = () => (
  <div style={{display: "flex", flexDirection: "column", gap: 8}}>
    <div style={{display: "flex", gap: 8}}>
      <Button>Default</Button>
      <Button variant="solid">Solid</Button>
      <Button variant="light">Light</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
    <div style={{display: "flex", gap: 8}}>
      <Button>Default</Button>
      <Button variant="solid" color="primary">Solid</Button>
      <Button variant="light" color="primary">Light</Button>
      <Button variant="ghost" color="primary">Ghost</Button>
      <Button variant="link" color="primary">Link</Button>
    </div>
    <div style={{display: "flex", gap: 8}}>
      <Button>Default</Button>
      <Button variant="solid" color="tomato">Solid</Button>
      <Button variant="light" color="tomato">Light</Button>
      <Button variant="ghost" color="tomato">Ghost</Button>
      <Button variant="link" color="tomato">Link</Button>
    </div>
  </div>
);
export const Colors: React.VFC<{}> = () => (
  <div style={{display: "flex", flexDirection: "column", gap: 8}}>
    <div style={{display: "flex", gap: 8, flexWrap: 'wrap'}}>
      <Button>Default</Button>
      {
        Object.keys(initColors).map((key) => (
          <Button key={key} color={key}>{key}</Button>
        ))
      }
    </div>
    <div style={{display: "flex", gap: 8, flexWrap: 'wrap'}}>
      <Button>Default</Button>
      {
        Object.keys(initColors).map((key) => (
          <Button key={key} variant="solid" color={key}>{key}</Button>
        ))
      }
    </div>
  </div>
);
export const Sizes: React.VFC<{}> = () => (
  <div style={{display: "flex", flexDirection: "column", gap: 8}}>
    <div style={{display: "flex", gap: 8}}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Base</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
    <div style={{display: "flex", gap: 8}}>
      <Button size="xs" color="tomato">Extra Small</Button>
      <Button size="sm" color="tomato">Small</Button>
      <Button color="tomato">Base</Button>
      <Button size="lg" color="tomato">Large</Button>
      <Button size="xl" color="tomato">Extra Large</Button>
    </div>
    <div style={{display: "flex", gap: 8}}>
      <Button size="xs" color="crimson">Extra Small</Button>
      <Button variant="solid" size="sm" color="crimson">Small</Button>
      <Button variant="light" color="crimson">Base</Button>
      <Button variant="ghost" size="lg" color="crimson">Large</Button>
      <Button variant="link" size="xl" color="crimson">Extra Large</Button>
    </div>
  </div>
);