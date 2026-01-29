import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What does InstaGrow do?",
    answer: "InstaGrow is an Instagram marketing automation platform that helps creators and businesses automate DMs based on comments, manage content, track analytics, and convert followers into customers—all from one dashboard.",
  },
  {
    question: "How does the Comment-to-DM automation work?",
    answer: "Set up keyword triggers on your Reels or Posts. When a follower comments with that keyword, InstaGrow automatically sends them a personalized DM with your offer, link, or message. It's perfect for lead generation and sales.",
  },
  {
    question: "Is InstaGrow compliant with Instagram's policies?",
    answer: "Yes! InstaGrow uses Instagram's official API and follows all platform guidelines. We prioritize your account safety and ensure all automations are compliant with Instagram's terms of service.",
  },
  {
    question: "Does InstaGrow offer a FREE account?",
    answer: "Yes! We offer a free trial so you can experience the power of automated DMs and content management. No credit card required to get started.",
  },
  {
    question: "Can I manage multiple Instagram accounts?",
    answer: "Absolutely! InstaGrow supports multi-account management, making it perfect for agencies and creators with multiple brands. Switch between accounts seamlessly from one dashboard.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
          FAQ
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12">
          Everything you need to know.
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-sm data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
