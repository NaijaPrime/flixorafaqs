import { useState } from "react";
const faqs = [
  {
    question: "What is Flixora?",
    answer:
      "Flixora is a creator-owned movie distribution and streaming platform that enables filmmakers and producers to distribute, monetise, and showcase their original content to audiences worldwide.",
  },
  {
    question: "Who can upload content to Flixora?",
    answer:
      "Flixora is designed for independent filmmakers, film producers, production companies, documentary creators, short film creators, feature film producers and content studios. Only original content is accepted on the platform.",
  },
  {
    question: "How does Flixora work?",
    answer:
      "Filmmakers upload their movies, the content becomes available to streamers globally. Producers can then monetise their content while maintaining ownership of their work.",
  },
  {
    question: "What makes Flixora different from other streaming platforms?",
    answer:
      "Flixora is built specifically for filmmakers. We focus on original content only, direct creator monetisation, global distribution, creator ownership, content verification and a marketplace model designed for filmmakers.",
  },
  {
    question: "How much does it cost for filmmakers?",
    answer:
      "Filmmakers and producers can join Flixora through a monthly subscription of $100, which provides access to content distribution, monetisation tools, analytics and platform features.",
  },
  {
    question: "How much does it cost for viewers?",
    answer:
      "Viewers can access Flixora through a monthly subscription of $5, providing unlimited access to a growing catalogue of original movies and content. For viewers who do not wish to subscribe monthly, Flixora also offers a pay-per-stream option, allowing users to watch individual movies for between $1 and $2 per stream.",
  },
  {
    question: "Do filmmakers keep ownership of their content?",
    answer:
      "Yes. Filmmakers retain ownership of their content. Flixora acts as a distribution and monetisation platform, allowing creators to maintain control over their intellectual property.",
  },
  {
    question: "What type of content is accepted?",
    answer:
      "We accept feature films, short films, documentaries, independent productions and original entertainment content. Content must be original and owned or controlled by the uploader.",
  },
  {
    question: "Does Flixora accept duplicate content?",
    answer:
      "No. Flixora operates a strict content verification process. Duplicate content and unauthorised uploads are not permitted on the platform.",
  },
  {
    question: "Which countries does Flixora operate in?",
    answer:
      "Flixora provides global distribution, allowing creators to reach audiences across multiple countries and territories worldwide.",
  },
  {
    question: "How do filmmakers earn money?",
    answer:
      "Filmmakers earn revenue when audiences stream their content on the platform. The more viewers a movie attracts, the greater its earning potential.",
  },
  {
    question: "Is there a limit to how much a filmmaker can earn?",
    answer:
      "No. Earnings are directly linked to audience engagement and viewership. As content reaches larger audiences, revenue opportunities increase accordingly.",
  },
  {
    question: "How is content verified?",
    answer:
      "Every submission undergoes a verification process to ensure it is original, complies with copyright requirements and meets platform standards before being published.",
  },
    {
    question: "How do I become a filmmaker partner?",
    answer:
      "Simply visit www.flixora.co.uk and apply for the Flixora Producers Partnership (FPP). Once approved, you'll gain access to the Flixora Producer Dashboard where you can upload and manage your original content.",
  },
  {
    question: "Why was Flixora created?",
    answer:
      "Flixora was created to solve one of the biggest challenges facing filmmakers: distribution and monetisation. We believe creators should have direct access to global audiences without relying solely on traditional gatekeepers.",
  },
  {
    question: "What is Flixora's vision?",
    answer:
      "Our vision is to become the world's leading creator-owned movie marketplace, where filmmakers can distribute, monetise and own their success while audiences discover original stories from around the globe.",
  },
  {
    question: "Is Flixora committed to original content?",
    answer:
      "Absolutely. Flixora was built to support original filmmakers and content creators. Every movie submitted undergoes a verification process to help ensure that content is authentic, properly owned and authorised for distribution.",
  },
  {
    question: "How does Flixora protect creators?",
    answer:
      "Flixora operates a strict content verification system designed to protect intellectual property and creator rights. We do not allow unauthorised uploads, duplicate content or copyright infringement on the platform.",
  },
  {
    question: "How can I verify that I am using the official Flixora platform?",
    answer:
      "The official Flixora platform can be accessed through www.flixora.co.uk. We encourage users, filmmakers and partners to always use our official website and verified communication channels when interacting with Flixora.",
  },
  {
    question: "What is Flixora's commitment to filmmakers?",
    answer:
      "Flixora exists to give filmmakers a legitimate, transparent and creator-focused platform for global distribution and monetisation. We are committed to helping creators retain ownership, reach new audiences and build sustainable revenue from their original content.",
  },
  {
    question: "Are there other companies using the Flixora name?",
    answer:
      "There may be other businesses or websites operating under similar names in different industries or regions. However, Flixora.co.uk is the official creator-owned movie distribution and streaming platform focused on helping filmmakers distribute and monetise original content globally.",
  },
  {
    question: "Where is Flixora headquartered?",
    answer:
      "Flixora is headquartered in London, United Kingdom, and operates as a global movie distribution and streaming platform serving filmmakers and audiences worldwide.",
  },
  {
    question: "What is the founder's mission?",
    answer:
      "Osuofia founded Flixora with a simple belief: Great stories should not be limited by gatekeepers. His mission is to build the world's leading creator-owned movie marketplace, giving filmmakers everywhere the opportunity to distribute, monetise and own their success on a global scale.",
  },
  {
    question: "Who founded Flixora?",
    answer:
      "Flixora was founded by Chukwuemeka Martins Osuofia, an entrepreneur and innovator passionate about empowering filmmakers through creator-owned distribution and monetisation. The vision behind Flixora is to remove traditional barriers to film distribution and create a platform where creators can reach global audiences, generate revenue and maintain ownership of their content.",
  },
  {
    question: "When was Flixora founded?",
    answer:
      "Flixora was officially launched in June 2026 with a mission to transform how filmmakers distribute and monetise their content globally.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />

    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <img src="/logo.png" alt="Flixora" className="h-12 object-contain" />

          <div className="flex gap-3">
            <button className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
              Sign Up
            </button>
            <button className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition">
              Log In
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <section className="mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-400 mb-4">
            Help Centre
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl">
            Everything you need to know about Flixora, watching movies, uploading
            content, subscriptions, payments, creators and your account.
          </p>
        </section>

        <section className="space-y-5">
  {faqs.map((faq, index) => {
    const isOpen = openIndex === index;

    return (
      <article
        key={faq.question}
        className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl overflow-hidden transition hover:border-pink-500/60"
      >
        <button
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full flex items-center justify-between gap-6 text-left p-6 md:p-8"
        >
          <h2 className="text-2xl md:text-3xl font-black">
            {index + 1}. {faq.question}
          </h2>

          <span className="text-4xl font-light text-pink-400">
            {isOpen ? "−" : "+"}
          </span>
        </button>

        {isOpen && (
          <div className="px-6 md:px-8 pb-8">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {faq.answer}
            </p>
          </div>
        )}
      </article>
    );
  })}
</section>
            </main>
    </div>
  </>
  );
};

export default Faq;