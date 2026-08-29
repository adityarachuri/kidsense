import type { Topic } from '../types/content';

/**
 * Section 7: Understanding Every Child.
 *
 * Every topic here describes a situation — never a diagnosis. See ADR-0004
 * for why: the site never tells a specific reader whether their specific
 * child has a specific condition, and that constraint applies here exactly
 * as it does everywhere else in the content.
 */
export const everyChildTopics: Topic[] = [
  {
    id: 'moving-through-the-world',
    topicNumber: 1,
    title: 'Why Might a Child Move Through the World Differently?',
    heading: {
      lead: 'Why Might a Child',
      emphasis: 'Move Through the World',
      trailing: 'Differently From Their Peers?',
    },
    quote: 'I just need a minute to get there — I am getting there.',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'moving-through-the-world',
    reassurance: "It's common — and moving differently doesn't mean moving less capably!",
    explanation:
      'Most of the time, what looks like a slower pace or a different route is simply how a child’s body and the environment around them fit together that day.',
    reasons: [
      {
        icon: '🦽',
        title: 'Extra Steps, Not Extra Trouble',
        description:
          'A mobility aid or a different gait can add real steps to an ordinary task without adding difficulty to the child’s day.',
      },
      {
        icon: '🏫',
        title: 'Environments Not Built Equally',
        description:
          'Stairs, narrow doorways, and uneven ground are genuine obstacles built into many everyday spaces, not something the child is failing to work around.',
      },
      {
        icon: '🔋',
        title: 'Fatigue From Extra Effort',
        description:
          'Covering the same distance can take meaningfully more energy, so tiredness can show up earlier in the day than it does for peers.',
      },
      {
        icon: '⏳',
        title: 'Timing Needs Flexibility',
        description:
          'Transitions that take others a moment can genuinely take longer — not from reluctance, but from the mechanics of the movement itself.',
      },
      {
        icon: '👀',
        title: 'Peer Curiosity and Questions',
        description:
          'Other children often ask direct questions about equipment or movement out of genuine curiosity, which can feel like extra attention on a hard day.',
      },
      {
        icon: '🎨',
        title: 'Equipment Becomes Part of Play',
        description:
          'A wheelchair, walker, or brace is often incorporated into games and identity rather than set apart from them.',
      },
      {
        icon: '🕹️',
        title: 'Independence Looks Different',
        description:
          'Doing something a different way, or with a tool, is still doing it independently — not a lesser version of the same task.',
      },
      {
        icon: '🌤️',
        title: 'Good Days and Harder Days Both Happen',
        description:
          'Energy, pain, and mobility can genuinely vary day to day for reasons that are not always visible or predictable from the outside.',
      },
    ],
    concerns: [
      'A sudden change in mobility, strength, or coordination',
      'New or worsening pain during everyday movement',
      'Visible frustration or withdrawal tied specifically to physical tasks others complete easily',
      'Loss of a previously mastered physical skill',
      'A caregiver unsure whether current equipment or supports still fit the child’s needs',
    ],
    professionalGuidance:
      'A pediatrician, physical therapist, or occupational therapist can assess mobility, comfort, and whether current supports still match a child’s needs as they grow.',
    strategies: [
      'Build in extra time for transitions rather than rushing them',
      'Ask the child what helps, rather than assuming what they need',
      'Coordinate with school or activity leaders on physical access ahead of time, not on the day itself',
      'Celebrate effort and problem-solving, not just speed or how something looks compared to peers',
      'Keep any equipment normalized — spoken about the same way as glasses or a bike',
    ],
    routine: [
      { icon: '⏳', label: 'Build in extra time' },
      { icon: '❓', label: 'Ask what helps' },
      { icon: '🚶', label: 'Follow their pace' },
      { icon: '👏', label: 'Celebrate the effort' },
    ],
    insight:
      'A different pace or route is a description of how a child moves, not a measure of how capable they are — the goal is genuine access, not matching everyone else’s method.',
    keywords: [
      'physical disability',
      'mobility',
      'wheelchair',
      'motor differences',
      'accessibility',
      'cerebral palsy',
    ],
    perspectives: {
      teacher:
        'Building physical access into the plan for a field trip or activity from the start — not as a last-minute accommodation — usually prevents the moment a child feels singled out.',
      clinician:
        'Physical and occupational therapists frame independence around the outcome a child achieves, not the specific method — a task completed with a tool or a different technique still counts as independent.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong extended-family caregiving',
        note: 'Where several family members routinely share caregiving, physical support during a task is often distributed across more than one adult rather than falling to a single parent.',
      },
      {
        region: 'Cultures with universal-design building norms',
        note: 'Countries with stronger accessible-design requirements in public buildings and transit reduce how often a child encounters an environment that was not built with them in mind.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC', 'American Occupational Therapy Association'],
  },
  {
    id: 'sensory-overwhelm',
    topicNumber: 2,
    title: 'Why Do Ordinary Sounds, Textures, or Lights Sometimes Feel Like Too Much?',
    heading: {
      lead: 'Why Do Ordinary Sounds or Lights',
      emphasis: 'Sometimes Feel Like Too Much',
      trailing: 'for Some Kids?',
    },
    quote: "It's too loud, it's too much, I need to go.",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'sensory-overwhelm',
    reassurance: "It's common — and it isn't an overreaction to something small!",
    explanation:
      'Most of the time, a nervous system that takes in and processes sensory input differently genuinely experiences ordinary noise, light, or texture as more intense than it registers for most children.',
    reasons: [
      {
        icon: '🔊',
        title: 'Sound Genuinely Registers Louder',
        description:
          'A sensitive auditory system can experience ordinary background noise as sharp or overwhelming rather than easy to filter out.',
      },
      {
        icon: '💡',
        title: 'Bright or Flickering Light',
        description:
          'Fluorescent lighting or sudden brightness can be genuinely uncomfortable, not just distracting.',
      },
      {
        icon: '🧵',
        title: 'Texture Sensitivity',
        description:
          'Clothing tags, certain fabrics, or food textures can register as intensely unpleasant rather than mildly annoying.',
      },
      {
        icon: '👥',
        title: 'Crowded Spaces Compound Input',
        description:
          'Many sensory inputs arriving at once — noise, movement, smell — can add up faster than any one of them would alone.',
      },
      {
        icon: '🔋',
        title: 'Limited Reserves by Day’s End',
        description:
          'Filtering sensory input all day is genuinely effortful, so tolerance is often lowest by afternoon or evening.',
      },
      {
        icon: '🌀',
        title: 'Difficulty Predicting the Next Input',
        description:
          'An environment where sensory input is unpredictable is harder to prepare for than one that is loud but consistent.',
      },
      {
        icon: '🧠',
        title: 'A Nervous System Wired to Notice More',
        description:
          'Some children’s nervous systems are simply more attuned to sensory detail most people filter out automatically.',
      },
      {
        icon: '🛡️',
        title: 'Overwhelm Is a Protective Response',
        description:
          'Covering ears, closing eyes, or leaving the room is the nervous system managing real input, not defiance or drama.',
      },
    ],
    concerns: [
      'Sensory reactions severe enough to prevent participating in school or family life',
      'Physical distress — gagging, pain, panic — tied specifically to sensory input',
      'No easing at all with predictable, gradual exposure over time',
      'Sensory overwhelm paired with broader signs of anxiety',
      'A caregiver or teacher unsure how to tell overwhelm apart from a behavioral choice',
    ],
    professionalGuidance:
      'An occupational therapist can assess sensory processing directly and help build a personalized toolkit of strategies that actually fit the child.',
    strategies: [
      'Offer noise-reducing headphones or sunglasses as ordinary tools, not a last resort',
      'Give advance warning before a likely sensory-heavy event',
      'Build in a quiet space to retreat to, and normalize using it',
      'Ask the child what specifically feels like too much, rather than guessing',
      'Introduce new sensory experiences gradually and on the child’s terms',
    ],
    routine: [
      { icon: '🗓️', label: 'Warn about it in advance' },
      { icon: '🎧', label: 'Offer sensory tools' },
      { icon: '🚪', label: 'Keep a quiet retreat space' },
      { icon: '❓', label: 'Ask what feels like too much' },
    ],
    insight:
      'Sensory overwhelm is information about the input, not the child’s tolerance for life in general — the same child can handle plenty elsewhere once the specific trigger is understood.',
    keywords: [
      'sensory processing',
      'sensory overwhelm',
      'noise sensitivity',
      'sensory differences',
    ],
    perspectives: {
      teacher:
        'A predictable signal a child can use to request a break — a card, a hand signal — often prevents overwhelm from building to the point of a full exit from the room.',
      clinician:
        'Occupational therapists note that sensory thresholds are highly individual — the goal is identifying a specific child’s actual triggers and tolerances, not applying a generic sensory diet.',
    },
    culturalLens: [
      {
        region: 'Cultures with quieter, structured daily environments',
        note: 'Lower-stimulation daily environments by cultural norm can mean sensory sensitivity is noticed later, since fewer everyday situations test it.',
      },
      {
        region: 'Cultures with dense, high-stimulation public life',
        note: 'Crowded, noisy public environments as a daily norm can mean sensory-overwhelm accommodations are less routinely available or expected in public spaces.',
      },
    ],
    sources: ['American Occupational Therapy Association', 'STAR Institute for Sensory Processing'],
  },
  {
    id: 'learning-a-different-path',
    topicNumber: 3,
    title: 'Why Might Learning Take More Time or a Different Route for Some Kids?',
    heading: {
      lead: 'Why Might Learning Take',
      emphasis: 'More Time or a Different Route',
      trailing: 'for Some Kids?',
    },
    quote: 'I know it, I just can’t get it out fast enough.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'learning-a-different-path',
    reassurance: "It's common — and a different route doesn't mean a lesser one!",
    explanation:
      'Most of the time, learning that takes more time or a different approach reflects how a child’s brain processes information, not how much effort they are putting in or how capable they are.',
    reasons: [
      {
        icon: '⏱️',
        title: 'Processing Speed Differences',
        description:
          'Understanding and responding can take genuinely longer, even when the underlying understanding is solid.',
      },
      {
        icon: '🧠',
        title: 'Working-Memory Differences',
        description:
          'Holding several pieces of information in mind at once while working through a task can be harder than it looks from the outside.',
      },
      {
        icon: '🔤',
        title: 'Reading or Language Processing Differences',
        description:
          'Decoding text or spoken instructions can require more conscious effort than it does for most classmates.',
      },
      {
        icon: '✍️',
        title: 'A Mismatch Between Knowing and Showing',
        description:
          'A child can genuinely know an answer while struggling to produce it in the format a test or worksheet expects.',
      },
      {
        icon: '🎯',
        title: 'Attention Regulation Differences',
        description:
          'Sustaining focus on a less-engaging task takes more active effort for some kids than for others.',
      },
      {
        icon: '📉',
        title: 'A History of Struggling Erodes Confidence',
        description:
          'Repeated difficulty can lower a child’s expectation of success before a new task even begins.',
      },
      {
        icon: '🧩',
        title: 'One Area Can Differ While Others Don’t',
        description:
          'A child can be strong in most areas and genuinely struggle in one specific one — that unevenness is itself common.',
      },
      {
        icon: '🏫',
        title: 'The Standard Method Doesn’t Fit Every Learner',
        description:
          'Most classroom instruction is built for how most students learn — a real minority of students need a genuinely different approach, not more of the same one.',
      },
    ],
    concerns: [
      'A significant, persistent gap between effort and results despite support at home and school',
      'Visible loss of confidence or growing reluctance to attempt schoolwork',
      'Difficulty concentrated in one specific area (reading, math, writing) rather than general effort',
      'A teacher separately raising concerns about the same pattern',
      'No improvement despite consistent, patient support over a full term',
    ],
    professionalGuidance:
      'A school psychologist or educational evaluator can assess how a child learns and identify what kind of support or accommodation would actually help.',
    strategies: [
      'Break tasks into smaller steps with a clear stopping point for each',
      'Offer more than one way to show understanding — verbally, drawn, written',
      'Praise strategy and persistence, not just the correct answer',
      'Ask the school what accommodations already exist before assuming none do',
      'Keep the child’s own strengths part of the conversation, not just the area of struggle',
    ],
    routine: [
      { icon: '🧩', label: 'Break it into steps' },
      { icon: '🗣️', label: 'Offer another way to show it' },
      { icon: '👏', label: 'Praise the strategy' },
      { icon: '🌟', label: 'Name a real strength' },
    ],
    insight:
      'A different route to learning is still learning — the goal is finding the route that actually works for this specific child, not measuring them against the most common one.',
    keywords: [
      'learning differences',
      'processing speed',
      'working memory',
      'dyslexia',
      'school support',
    ],
    perspectives: {
      teacher:
        'A student who takes a different path to the same understanding often needs the destination assessed, not just the method — partial credit for a correct process matters.',
      clinician:
        'Educational evaluators note that a specific learning difference is not a measure of overall intelligence — it describes one particular processing pathway, not general capability.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong rote-memorization traditions',
        note: 'Education systems built heavily around memorization and recitation can make certain processing differences more visible earlier than systems emphasizing varied formats.',
      },
      {
        region: 'Cultures with individualized-education infrastructure',
        note: 'Where formal evaluation and accommodation systems are well established and normalized, families often access support earlier and with less stigma.',
      },
    ],
    sources: [
      'National Center for Learning Disabilities',
      'Understood.org',
      'American Academy of Pediatrics',
    ],
  },
  {
    id: 'big-reactions-need-more-support',
    topicNumber: 4,
    title: 'Why Might Some Children Need Extra Support With Very Big Reactions?',
    heading: {
      lead: 'Why Might Some Children Need',
      emphasis: 'Extra Support',
      trailing: 'With Very Big Reactions?',
    },
    quote: 'I couldn’t stop it, it was too big.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'big-reactions-need-more-support',
    reassurance:
      "It's common — and needing more support doesn't mean something is wrong with the child!",
    explanation:
      'Most of the time, reactions that are consistently more intense or harder to recover from than a typical reaction reflect a nervous system or regulation system that genuinely needs more support to manage big feelings, not a lack of trying.',
    reasons: [
      {
        icon: '🎢',
        title: 'A Genuinely Higher Baseline Intensity',
        description:
          'Some children’s emotional responses are wired to fire more strongly and more quickly than the typical range.',
      },
      {
        icon: '🔁',
        title: 'A Longer Road Back to Calm',
        description:
          'Returning to a regulated state after a big reaction can take substantially longer, even with the same support that works quickly for other kids.',
      },
      {
        icon: '🧠',
        title: 'Regulation Skills Still Under Heavy Construction',
        description:
          'The brain systems that manage a big reaction can be developing on a genuinely different timeline, not a slower version of the typical one.',
      },
      {
        icon: '🧩',
        title: 'Layered, Not Single, Triggers',
        description:
          'Several smaller stressors — sensory, social, physical — often stack together before one visible trigger sets off a big reaction.',
      },
      {
        icon: '🗣️',
        title: 'Limited Words for the Size of the Feeling',
        description:
          'A reaction can be the only available outlet when a child doesn’t yet have language that matches the intensity of what they feel.',
      },
      {
        icon: '🔋',
        title: 'Depleted Reserves Lower the Threshold',
        description:
          'Hunger, poor sleep, or a hard day can drop the threshold for a big reaction further than it does for most children.',
      },
      {
        icon: '💛',
        title: 'A Genuine Support Need, Not a Discipline Gap',
        description:
          'A child needing more scaffolding to regulate is a support need to build toward, similar to any other skill still being learned.',
      },
      {
        icon: '🎭',
        title: 'The Reaction Can Look Different at School and Home',
        description:
          'A child holding it together all day at school may release the accumulated strain at home, where it feels safest to do so.',
      },
    ],
    concerns: [
      'Reactions that regularly involve harm to self, others, or property',
      'Reactions that are increasing in frequency or intensity over time despite consistent support',
      'No easing at all even with calm, consistent, patient strategies over an extended period',
      'A persistent low mood or high anxiety between reactions, not just during them',
      'A teacher or other caregiver separately raising the same concern',
    ],
    professionalGuidance:
      'A child psychologist or behavioral therapist can help identify what is driving reactions of this intensity and build a plan with tools that genuinely fit this specific child.',
    strategies: [
      'Build regulation tools during calm moments, not in the middle of a big reaction',
      'Identify and reduce the smaller stressors that stack up before the trigger',
      'Stay physically calm and present rather than trying to reason in the moment',
      'Work with the school on a consistent plan across both settings',
      'Track patterns — time of day, triggers, what helps — to bring to a professional',
    ],
    routine: [
      { icon: '🧘', label: 'Practice tools when calm' },
      { icon: '🔍', label: 'Track the pattern' },
      { icon: '🤝', label: 'Stay present, not reactive' },
      { icon: '🏫', label: 'Keep school and home aligned' },
    ],
    insight:
      'A child whose reactions need more support is still building the same regulation skills every child builds — they need a wider scaffold to get there, not a different goal.',
    keywords: ['emotional regulation', 'big reactions', 'behavioral support', 'meltdowns'],
    perspectives: {
      teacher:
        'A consistent, predictable response across school and home tends to help more than any single technique — inconsistency between settings often prolongs the pattern.',
      clinician:
        'Behavioral therapists frame a child needing more regulation support as a capacity question, not a compliance one — the skill is still being built, not being withheld.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong communal caregiving networks',
        note: 'Where several trusted adults share day-to-day caregiving, the load of supporting a child through frequent big reactions is often spread more widely.',
      },
      {
        region: 'Cultures with high emphasis on public composure',
        note: 'Strong social expectations around composure in public can add pressure on a family managing a child’s big reactions outside the home.',
      },
    ],
    sources: [
      'Zero to Three',
      'American Psychological Association',
      'American Academy of Child and Adolescent Psychiatry',
    ],
  },
  {
    id: 'understanding-iep-504',
    topicNumber: 5,
    title: 'What Are IEPs and 504 Plans, and How Do Families Navigate Them?',
    heading: {
      lead: 'What Are IEPs and 504 Plans,',
      emphasis: 'and How Do Families',
      trailing: 'Navigate Them?',
    },
    quote: 'Where do we even start with the school?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'understanding-iep-504',
    reassurance: "It's common — and starting the process is more straightforward than it looks!",
    explanation:
      'IEPs and 504 plans are specific to U.S. public schools; this explains how the process generally works, not legal advice for your specific situation.',
    reasons: [
      {
        icon: '📋',
        title: 'Formalizes Support Already Needed',
        description:
          'An IEP or 504 plan puts existing informal accommodations into a documented, consistent plan the whole school follows.',
      },
      {
        icon: '⚖️',
        title: 'Legal Protection Under IDEA or Section 504',
        description:
          'Both are grounded in U.S. federal law (the Individuals with Disabilities Education Act, and Section 504 of the Rehabilitation Act) requiring equitable access to education.',
      },
      {
        icon: '🎯',
        title: 'Individualized Goals',
        description:
          'An IEP in particular sets specific, measurable goals tailored to a child rather than a generic classroom accommodation.',
      },
      {
        icon: '🗣️',
        title: 'Access to Related Services',
        description:
          'An IEP can provide access to speech therapy, occupational therapy, or physical therapy as part of a child’s school day.',
      },
      {
        icon: '✅',
        title: 'Testing and Classroom Accommodations',
        description:
          'Extra time, a quieter testing room, or modified assignments can be formally guaranteed rather than left to an individual teacher’s discretion.',
      },
      {
        icon: '📈',
        title: 'Mandated Progress Monitoring',
        description:
          'Schools are required to track and report on progress toward an IEP’s goals at regular intervals.',
      },
      {
        icon: '🚀',
        title: 'Transition Planning for Older Students',
        description:
          'For older students, an IEP can include planning for the transition to further education or independent life after high school.',
      },
      {
        icon: '👪',
        title: 'A Structured Voice for Parents',
        description:
          'Both processes give parents a formal role in decisions about their child’s education, not just an advisory one.',
      },
    ],
    concerns: [
      'A child falling behind academically despite informal classroom support',
      'A teacher repeatedly raising the same concern without a formal plan in place',
      'A child needing consistent accommodations to participate that currently depend on one teacher remembering',
      'Informal adjustments already tried without meaningful improvement',
      'A family unsure whether their child would qualify at all',
    ],
    professionalGuidance:
      'A school’s special-education coordinator, or a parent advocate familiar with IDEA and Section 504, can help navigate next steps — this article is general information, not legal advice.',
    strategies: [
      'Request an evaluation in writing, which starts a formal timeline the school must follow',
      'Learn the basic difference: an IEP provides specialized instruction, a 504 plan provides accommodations within general education',
      'Bring a note-taker or advocate to meetings, and ask questions freely',
      'Keep written records of communications with the school',
      'Revisit the plan at least once a year — needs change as a child grows',
    ],
    routine: [
      { icon: '✉️', label: 'Request in writing' },
      { icon: '🧑‍🏫', label: 'Attend the evaluation meeting' },
      { icon: '📄', label: 'Review the draft plan' },
      { icon: '🔄', label: 'Revisit annually' },
    ],
    insight:
      'Starting the conversation is almost always the hardest part — the process itself is more structured and more governed by parental rights than it first appears.',
    keywords: ['IEP', '504 plan', 'IDEA', 'special education', 'school accommodations'],
    perspectives: {
      teacher:
        'A written request from a parent starts a legal timeline schools must follow — teachers can often point families toward the school’s special-education coordinator to begin it.',
      clinician:
        'School psychologists note that a formal evaluation looks at a child’s functioning across multiple settings, not a single test score, and parents can request one at any time.',
    },
    culturalLens: [
      {
        region: 'Families new to the U.S. school system',
        note: 'Families unfamiliar with U.S. special-education law often benefit from a parent advocate or a bilingual liaison, since the process and its terminology are genuinely U.S.-specific.',
      },
      {
        region: 'Countries with different accommodation systems',
        note: 'Outside the U.S., equivalent support exists under different names and different legal frameworks — this topic describes the U.S. process specifically, not a universal one.',
      },
    ],
    sources: [
      'U.S. Department of Education',
      'Center for Parent Information and Resources',
      'Understood.org',
    ],
  },
];
