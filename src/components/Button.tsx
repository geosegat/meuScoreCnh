import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import AppIcons from './AppIcons';

type IconPosition = 'left' | 'right';
type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  label?: string;
  icon?: keyof typeof AppIcons;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  label,
  icon,
  iconPosition = 'right',
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) => {
  const IconComponent = icon ? AppIcons[icon] : null;
  const isDisabled = disabled || loading;

  const getButtonStyle = () => {
    const baseStyle: ViewStyle[] = [styles.button, styles[`button_${size}`]];
    
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryButton);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryButton);
        break;
      case 'outline':
        baseStyle.push(styles.outlineButton);
        break;
    }

    if (disabled && !loading) {
      baseStyle.push(styles.disabledButton);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle: TextStyle[] = [styles.buttonText, styles[`buttonText_${size}`]];
    
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primaryButtonText);
        break;
      case 'secondary':
        baseStyle.push(styles.secondaryButtonText);
        break;
      case 'outline':
        baseStyle.push(styles.outlineButtonText);
        break;
    }

    if (disabled && !loading) {
      baseStyle.push(styles.disabledButtonText);
    }

    return baseStyle;
  };

  const getIconColor = () => {
    if (disabled && !loading) return '#9CA3AF';
    
    switch (variant) {
      case 'primary':
        return '#fff';
      case 'secondary':
        return '#111827';
      case 'outline':
        return '#111827';
      default:
        return '#fff';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'small':
        return 14;
      case 'medium':
        return 16;
      case 'large':
        return 18;
      default:
        return 16;
    }
  };

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={getIconColor()} />;
    }

    if (!label && IconComponent) {
      return <IconComponent size={getIconSize()} color={getIconColor()} />;
    }

    if (label && !IconComponent) {
      return <Text style={[getTextStyle(), textStyle]}>{label}</Text>;
    }

    if (label && IconComponent) {
      const content = [
        iconPosition === 'left' && (
          <IconComponent key="icon" size={getIconSize()} color={getIconColor()} />
        ),
        <Text key="text" style={[getTextStyle(), textStyle]}>{label}</Text>,
        iconPosition === 'right' && (
          <IconComponent key="icon" size={getIconSize()} color={getIconColor()} />
        ),
      ].filter(Boolean);

      return content;
    }

    return null;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    gap: 8,
  },
  
  button_small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 36,
  },
  button_medium: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    minHeight: 44,
  },
  button_large: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    minHeight: 52,
  },

  primaryButton: {
    backgroundColor: '#111827',
  },
  secondaryButton: {
    backgroundColor: '#F3F4F6',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#111827',
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
    borderColor: '#E5E7EB',
  },

  buttonText: {
    fontWeight: '600',
    textAlign: 'center',
  },
  
  buttonText_small: {
    fontSize: 14,
  },
  buttonText_medium: {
    fontSize: 16,
  },
  buttonText_large: {
    fontSize: 18,
  },

  primaryButtonText: {
    color: '#fff',
  },
  secondaryButtonText: {
    color: '#111827',
  },
  outlineButtonText: {
    color: '#111827',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
});

export default Button;
