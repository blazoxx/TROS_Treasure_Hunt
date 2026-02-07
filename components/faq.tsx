"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is The Realm of Six?",
    answer: "It's a multi-stage treasure hunt competition where teams compete through online preliminaries and an offline finale at IIIT Bhagalpur. Choose your House, solve puzzles, and claim victory.",
  },
  {
    question: "Who can participate?",
    answer: "Registrations for 2026 are closed. Future openings will be announced. The event is open to students from all colleges.",
  },
  {
    question: "What is the team size?",
    answer: "Teams should consist of 3 members. Solo participation is not allowed.",
  },
  {
    question: "What are the stages of the competition?",
    answer: "Stage 1: Online Registration & House Selection. Stage 2: Online Preliminaries (puzzle solving). Stage 3: Offline Grand Finale at IIIT Bhagalpur campus on 20th February.",
  },
  {
    question: "Is there an entry fee?",
    answer: "No, participation in The Realm of Six is completely free of charge.",
  },
  {
    question: "What are the prizes?",
    answer: "The winning team will receive ₹10,000 worth of prizes (cash + gifts). Only the champion team claims the throne and the rewards.",
  },
  {
    question: "When are the online preliminaries?",
    answer: "Check the Timeline section for exact dates. The grand finale is on 20th February 2026.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/5 to-black" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-blood-red" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight mb-4">
            <span className="text-foreground">Frequently Asked</span>
            <span className="block text-blood-red mt-2">Questions</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base">
            Everything you need to know about The Realm of Six
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blood-red/20 bg-black/40 backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-blood-red/5 transition-colors"
              >
                <span className="text-foreground font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blood-red flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-foreground/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for more questions */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-sm mb-3">
            Still have questions?
          </p>
          <a
            href="mailto:bps1trn@gmail.com"
            className="text-blood-red hover:text-ember-orange transition-colors text-sm font-medium"
          >
            Contact the Council →
          </a>
        </div>
      </div>
    </section>
  );
}
