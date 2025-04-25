'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { event } from '@/lib/analytics';

interface AnalyticsEventButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  eventAction: string;
  eventCategory: string;
  eventLabel: string;
  eventValue?: number;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function AnalyticsEventButton({
  children,
  eventAction,
  eventCategory,
  eventLabel,
  eventValue,
  variant = 'default',
  size = 'default',
  ...props
}: AnalyticsEventButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the event
    event({
      action: eventAction,
      category: eventCategory,
      label: eventLabel,
      value: eventValue,
    });

    // Call the original onClick if provided
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      {...props}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
} 