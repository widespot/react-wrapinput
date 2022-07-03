import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import WrapInput from './WrapInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: WrapInput,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return (
    <p>
      This is an
      {' '}
      <WrapInput {...args} />
      {' '}
      input
    </p>
  );
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'undefined',
};

export const NoPlaceholder = Template.bind({});
NoPlaceholder.args = {
  placeholder: null,
};
