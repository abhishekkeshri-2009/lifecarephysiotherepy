export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  reviewer: string;
  readingTime: string;
  relatedServiceSlugs: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "home-physiotherapy-first-visit",
    title: "Home Physiotherapy: What to Expect During the First Visit",
    description: "A practical guide to the first home physiotherapy assessment, including what information may be discussed and how the visit is usually structured.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "5 min read",
    relatedServiceSlugs: ["orthopaedic-physiotherapy", "stroke-rehabilitation"],
    sections: [
      {
        heading: "What usually happens first",
        paragraphs: [
          "The first visit usually begins with a conversation about the patient's main concern, when symptoms started, and what activities feel difficult right now.",
          "Because the session happens at home, the assessment can also include practical questions about stairs, seating, transfers, sleep, and the daily routine.",
        ],
      },
      {
        heading: "Movement and function review",
        paragraphs: [
          "A home assessment often looks at how the patient stands, walks, gets up from a chair, or performs simple movements related to the complaint.",
          "This helps shape a plan that is realistic for the patient's environment instead of relying on generic exercises.",
        ],
      },
    ],
  },
  {
    slug: "habits-to-reduce-neck-strain",
    title: "Simple Habits That May Help Reduce Neck Strain",
    description: "Everyday posture and movement habits that may support neck comfort alongside a personalised physiotherapy plan.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "4 min read",
    relatedServiceSlugs: ["neck-pain-physiotherapy", "cervical-spondylosis-physiotherapy"],
    sections: [
      {
        heading: "Take strain out of daily routines",
        paragraphs: [
          "Small habits like lifting the screen to eye level, taking short breaks, and avoiding long static positions may help reduce repeated neck strain.",
          "The aim is not to maintain one perfect posture all day, but to keep the neck moving and reduce prolonged overload.",
        ],
      },
    ],
  },
  {
    slug: "physiotherapy-support-for-knee-pain-at-home",
    title: "Physiotherapy Support for Knee Pain at Home",
    description: "How home physiotherapy may support walking, stairs, strength, and confidence for people living with knee pain.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "5 min read",
    relatedServiceSlugs: ["knee-pain-physiotherapy", "arthritis-rehabilitation"],
    sections: [
      {
        heading: "Why home assessment can be useful",
        paragraphs: [
          "Knee pain often shows up during real-life tasks like stairs, getting up from a chair, or walking on uneven surfaces.",
          "A home visit makes it easier to review those tasks directly and adjust the plan around them.",
        ],
      },
    ],
  },
  {
    slug: "understanding-sciatica-and-medical-advice",
    title: "Understanding Sciatica and When to Seek Medical Advice",
    description: "A plain-language overview of sciatica symptoms, movement concerns, and warning signs that may need medical attention.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "6 min read",
    relatedServiceSlugs: ["sciatica-physiotherapy", "slipped-disc-pivd-physiotherapy"],
    sections: [
      {
        heading: "What people often mean by sciatica",
        paragraphs: [
          "Sciatica is commonly used to describe pain, tingling, or discomfort that travels from the lower back into the leg.",
          "Symptoms vary from person to person, so the best plan depends on assessment rather than assumptions.",
        ],
      },
    ],
  },
  {
    slug: "home-based-stroke-rehabilitation-family-role",
    title: "Home-Based Stroke Rehabilitation: Role of the Family",
    description: "How family members may support stroke rehabilitation at home with safety, consistency, and practical encouragement.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "5 min read",
    relatedServiceSlugs: ["stroke-rehabilitation", "neurophysiotherapy"],
    sections: [
      {
        heading: "Why family involvement matters",
        paragraphs: [
          "Families often play an important role in helping the patient practise safely, stay consistent, and manage everyday activities between sessions.",
          "That support works best when it is guided, simple, and matched to the patient's actual needs.",
        ],
      },
    ],
  },
  {
    slug: "safe-recovery-after-sports-injury",
    title: "Safe Recovery After a Sports Injury",
    description: "How progressive rehabilitation, symptom awareness, and consistency can support a safer return to activity after sports injury.",
    publishedAt: "2026-07-15",
    updatedAt: "2026-07-15",
    author: "Life Care Physiotherapy Center",
    reviewer: "Dr. Puneet Tomar",
    readingTime: "5 min read",
    relatedServiceSlugs: ["sports-injury-rehabilitation", "acl-rehabilitation"],
    sections: [
      {
        heading: "Recovery usually has stages",
        paragraphs: [
          "Early rehab often focuses on pain-aware movement and basic control, while later stages may add strength and activity-specific drills.",
          "Trying to skip stages can increase frustration or delay recovery.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
