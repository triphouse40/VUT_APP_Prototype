// Starter VUT-only knowledge base. Keep entries tied to approved official sources.
const SOURCES = {
  apply: { label: 'VUT: How to apply', url: 'https://vut.ac.za/how-to-apply/' },
  registration: { label: 'VUT: Registration', url: 'https://vut.ac.za/st/registration/' },
  accommodation: { label: 'VUT: Accommodation', url: 'https://vut.ac.za/accommodation/' },
  contact: { label: 'VUT: Contact us', url: 'https://vut.ac.za/nso/contact-us/' },
  sport: { label: 'VUT Sport', url: 'https://www.facebook.com/vutsport/' },
  requirements: { label: '2027 Undergraduate Minimum Admission Requirements', url: 'https://vut.ac.za/how-to-apply/' },
};

const ENTRIES = [
  {
    keywords: ['apply', 'application', 'admission', 'admissions', 'prospective', 'application fee'],
    answer: 'VUT states that 2027 online applications are open. Its official application page lists a R110 application fee and says applicants should choose first and second programme choices, meet the programme requirements, and submit the required information and documents online. The page lists 30 October 2026 for national applications and 30 September 2026 for international applications; several named programmes close earlier on 31 July 2026. Always confirm dates on the official page before applying.',
    source: SOURCES.apply,
  },
  {
    keywords: ['requirement', 'requirements', 'aps', 'minimum', 'matric', 'grade 11', 'grade 12', 'subject', 'qualification'],
    answer: 'The 2027 Undergraduate Minimum Admission Requirements document says meeting a minimum requirement does not guarantee acceptance. Requirements differ by programme. For example, the Diploma in Information Technology lists English level 4, Mathematics or Technical Mathematics level 4, other subjects as specified, and APS 26 with Mathematics/Technical Mathematics or APS 28 with Mathematical Literacy, excluding Life Orientation. Check the requirement for your exact programme before applying.',
    source: SOURCES.requirements,
  },
  {
    keywords: ['register', 'registration', 'ienabler', 'i-enabler', 'fees', 'registration fee'],
    answer: 'VUT registration is completed online through ITS i-Enabler. The official registration page publishes the current process, dates, payments, support contacts and links. Registration dates and fees can change each year, so please use that page as the final authority before acting.',
    source: SOURCES.registration,
  },
  {
    keywords: ['accommodation', 'residence', 'res', 'housing', 'room', 'stay'],
    answer: 'VUT says residence registration becomes active after academic registration is complete. Its accommodation notice lists proof of residence registration, proof of academic registration and an identity document copy as move-in requirements. If residences are full, students are referred to VUT’s accredited off-campus accommodation list. Confirm current availability and dates directly with VUT Accommodation.',
    source: SOURCES.accommodation,
  },
  {
    keywords: ['sport', 'sports', 'football', 'soccer', 'rugby', 'netball', 'athletics', 'gym'],
    answer: 'For official sport news, fixtures and participation information, use the VUT Sport page. This starter knowledge base does not yet contain verified sport schedules or team details, so it will not guess.',
    source: SOURCES.sport,
  },
  {
    keywords: ['contact', 'phone', 'email', 'help', 'support', 'enquiries', 'enquiry'],
    answer: 'VUT’s Contact Us page lists the Student Contact Centre at 0861 861 888 and studentenquiries@vut.ac.za. For admission enquiries it lists 016 950 9276/7671 and admissions@vut.ac.za. Check the official contact page for the latest details and faculty-specific contacts.',
    source: SOURCES.contact,
  },
];

export function getVutAnswer(question) {
  const terms = question.toLowerCase().match(/[a-z0-9-]+/g) || [];
  const matched = ENTRIES
    .map((entry) => ({ entry, score: entry.keywords.filter((word) => terms.includes(word)).length }))
    .sort((a, b) => b.score - a.score)[0];

  if (!matched || matched.score === 0) {
    return {
      answer: 'I do not have confirmed VUT information for that yet. Please use the official VUT website or contact the Student Contact Centre so I do not give you an incorrect answer.',
      source: SOURCES.contact,
    };
  }

  return matched.entry;
}
