import React from "react";
import assets from "../assets/assets";
import BenefitCard from "../components/common/BenefitCard";
import type { BenefitCardProps } from "../lib/interfaces";
import { PiFlowerTulip } from "react-icons/pi";
import { MdCleanHands } from "react-icons/md";
import { GiRopeCoil } from "react-icons/gi";
import FaqCard from "../components/common/FaqCard";

const About: React.FC = () => {
  const values: BenefitCardProps[] = [
    {
      name: "Purity",
      icon: <PiFlowerTulip />,
      detail:
        "Made with carefully selected red botanicals and superfruits, free from unnecessary additives.",
    },
    {
      name: "Quality",
      icon: <MdCleanHands />,
      detail:
        "Formulated with high-grade ingredients and produced under strict quality standards for consistent results.",
    },
    {
      name: "Consistency",
      icon: <GiRopeCoil />,
      detail:
        "Designed for daily use to support long-term wellness through regular, mindful intake.",
    },
  ];

  const faqs = [
    {
      question: "Is this product safe to use?",
      answer:
        "Yes. Our products are made with carefully sourced ingredients and follow recommended safety standards.",
    },
    {
      question: "Do I need experience to become an affiliate?",
      answer:
        "No experience is required. You’ll receive guidance and support to help you get started.",
    },
    {
      question: "How soon can I see results?",
      answer:
        "Results vary depending on consistency and individual response, but many users notice changes over time.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply reach out to us or follow the sign-up process. We’ll guide you step by step.",
    },
  ];
  return (
    <div className="flex flex-col gap-10 lg:gap-14">
      <section className="flex lg:flex-row flex-col-reverse gap-6 lg:gap-12 items-start">
        <div className="w-full lg:w-1/2 h-full bg-neutral-soft/30 backdrop-blur-2xl rounded-2xl">
          <img
            src={assets.about}
            alt="about-image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 w-full lg:w-1/2">
          <div className="lg:hidden w-full flex items-center gap-2">
            <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
            <h2 className="text-xl lg:text-2xl  text-primary font-semibold">
              Product Overview{" "}
            </h2>
          </div>
          <h1 className="text-neutral-dark text-2xl lg:text-5xl font-semibold">
            Crafted for Daily Wellness{" "}
          </h1>

          <div className="w-full">
            <div className="flex flex-col gap-3">
              <p className="text-neutral-soft font-medium text-xs lg:text-sm">
                The human body functions as a connected system built from cells,
                tissues, organs, and body systems, with healthy cells forming
                the foundation of overall wellbeing. Every day, these cells are
                exposed to internal and environmental stress that can affect how
                the body performs and maintains balance over time.
              </p>

              <p className="text-neutral-soft font-medium text-xs lg:text-sm">
                Antioxidants play an important role in supporting cellular
                protection by neutralizing free radicals and reducing oxidative
                stress. One of the body’s key antioxidants, glutathione,
                supports cellular balance, immune function, and natural detox
                processes, helping maintain healthy cellular activity as the
                body responds to daily demands.
              </p>

              <p className="text-neutral-soft font-medium text-xs lg:text-sm">
                Double Red Rose is thoughtfully formulated to support
                antioxidant activity at the cellular level. By helping protect
                cells from oxidative stress and supporting glutathione-related
                functions, it contributes to healthier tissues, stronger organs,
                balanced body systems, and consistent daily wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            Core Values
          </h2>
        </div>
        <div className="flex items-center gap-5 lg:flex-row flex-col">
          {values.map((value, index) => (
            <BenefitCard
              name={value.name}
              icon={value.icon}
              detail={value.detail}
              key={index}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 lg:gap-12">
        <div className="w-full flex items-center gap-2">
          <div className="w-1 h-6 bg-primary rounded-t-xl rounded-b-xl"></div>
          <h2 className="text-xl lg:text-2xl  text-neutral-dark font-semibold">
            FAQs
          </h2>
        </div>
        <div className="w-full mx-auto flex flex-col gap-3">
          {faqs.map((faq) => (
            <FaqCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
