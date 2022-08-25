import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = 'primary' | 'secondary' | DefaultMantineColor

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}
declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
declare module '*.css'
