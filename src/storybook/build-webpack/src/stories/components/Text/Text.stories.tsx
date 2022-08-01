import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Text } from '@components/Text/Text'

const meta: ComponentMeta<typeof Text> = { component: Text }
export default meta

export const Default: ComponentStoryObj<typeof Text> = {}
