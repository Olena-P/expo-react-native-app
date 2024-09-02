import {Platform, StyleSheet, Text, type TextProps} from 'react-native';
import {Colors} from '@/constants/Colors';
import {useThemeColor} from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
                             style,
                             lightColor,
                             darkColor,
                             type = 'default',
                             ...rest
                           }: ThemedTextProps) {
  const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

  return (
    <Text
      style={[
        {color},
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    ...Platform.select({
      ios: {
        color: Colors.light.primary,
      },
      android: {
        color: Colors.light.accent,
      }
    })
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Platform.OS === 'ios' ? Colors.light.accent : Colors.dark.primary,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: Colors.light.primary,
  },
});
