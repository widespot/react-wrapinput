import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WrapInput from './WrapInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/WrapInput',
  component: WrapInput,
  argTypes: { onChange: { action: 'changed' } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return (
    <p>
      This is an
      {' '}
      <WrapInput {...args} />
      {' '}
      input based on a native
      {' '}
      <code>&lt;input&gt;</code>
      {' '}
      element
    </p>
  );
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'undefined',
  value: '',
  name: 'display_name',
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  placeholder: null,
  value: '',
  name: 'display_name',
};
