import React from "react";

export interface mainLayoutProps {
  children: React.ReactNode;
}

export interface navitemsProps {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

export interface BenefitCardProps {
  name: string;
  icon: React.ReactNode;
  detail: string;
}
export interface HowItWorksCardProps {
  name: string;
  id: string;
  detail: string;
}
export interface IngredientCardProps {
  title: string;
  description: string;
  image: string;
}

export interface HowToUseCardProps {
  step: number;
  title: string;
  description: string;
}
export interface WhyChooseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface LegCardProps {
  tag: string;
  title: string;
  description: string;
  cta: string;
  href?: string;
  onClick?: () => void;
}
