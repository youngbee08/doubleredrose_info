import React from "react";
import type { IngredientCardProps } from "../../lib/interfaces";

const IngredientCard: React.FC<IngredientCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="group flex items-start gap-4 rounded-2xl border border-secondary-dark/70 bg-white p-4 sm:p-5 shadow-md shadow-black/5 transition hover:-translate-y-0.5">
      <div className="relative shrink-0">
        <span className="absolute -inset-1 rounded-full bg-primary/15 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <img
            src={image}
            alt={`${title}-image`}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div>
        <h4 className="ftext-sm lg:text-base font-semibold">{title}</h4>
        <p className="text-xs lg:text-sm text-neutral-soft leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IngredientCard;
