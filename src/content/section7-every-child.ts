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
  {
    id: 'communication-differences',
    topicNumber: 6,
    title: 'Why Might a Child Communicate in a Different Way?',
    heading: {
      lead: 'Why Might a Child',
      emphasis: 'Communicate in a Different Way',
      trailing: 'From Most of Their Peers?',
    },
    quote: 'I have a lot to say — it just doesn’t come out in words.',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'communication-differences',
    reassurance: "It's common — and communicating differently doesn't mean having less to say!",
    explanation:
      'Most of the time, a child who speaks little, uses a device, or communicates non-verbally has just as much to express as any other child — the pathway looks different, not the depth of what’s inside.',
    reasons: [
      {
        icon: '🗣️',
        title: 'Speech Production Can Be Genuinely Hard',
        description:
          'Coordinating the muscles for speech (apraxia is one example) can make forming words physically difficult even when language understanding is strong.',
      },
      {
        icon: '📱',
        title: 'A Device Is a Voice, Not a Crutch',
        description:
          'An AAC (augmentative and alternative communication) device gives a child a reliable way to express complex thoughts, the same as speech does for anyone else.',
      },
      {
        icon: '🧠',
        title: 'Understanding Can Outpace Output',
        description:
          'A child can understand far more than they can currently express — receptive language and expressive language often develop on different timelines.',
      },
      {
        icon: '🤲',
        title: 'Gesture and Behavior Carry Meaning',
        description:
          'Pointing, leading someone by the hand, or a change in behavior are all genuine communication before or alongside words.',
      },
      {
        icon: '⏳',
        title: 'No Fixed Timeline to “Catch Up”',
        description:
          'Language can develop on a highly individual timeline — there is no single deadline by which every child is expected to speak in full sentences.',
      },
      {
        icon: '🔄',
        title: 'Frustration Often Signals a Communication Gap',
        description:
          'Behavior that looks like frustration frequently is frustration — at not yet having a reliable way to get a message across.',
      },
      {
        icon: '👥',
        title: 'Peers Need a Little Guidance, Not a Lot',
        description:
          'Other children usually adapt quickly to a peer who communicates differently once shown a simple way to interact — waiting, offering choices, watching for gestures.',
      },
      {
        icon: '🌱',
        title: 'A Communication System Can Grow Over Time',
        description:
          'Speech, signs, a device, and pictures can all be used together and can change as a child grows — none of them rules another one out.',
      },
    ],
    concerns: [
      'No progress in any form of communication (words, signs, device, gestures) over an extended period',
      'A sudden loss of previously used words or communication skills',
      'Significant frustration that regularly escalates to distress with no communication outlet at all',
      'A caregiver or teacher unsure how to support communication day to day',
      'A previously working communication method suddenly no longer being understood or accepted',
    ],
    professionalGuidance:
      'A speech-language pathologist can assess how a child communicates now and identify supports — speech therapy, sign, or an AAC device — that build on it.',
    strategies: [
      'Treat any communication attempt — a sound, a point, a device tap — as valid and respond to it',
      'Model the child’s communication method yourself, including a device if they use one',
      'Offer real choices rather than only yes/no questions, giving more to communicate about',
      'Give processing time after speaking before repeating or rephrasing',
      'Ask the child’s speech-language pathologist how to reinforce strategies used in therapy at home',
    ],
    routine: [
      { icon: '👂', label: 'Respond to every attempt' },
      { icon: '🔁', label: 'Model their method' },
      { icon: '⏳', label: 'Give processing time' },
      { icon: '🎉', label: 'Celebrate the message' },
    ],
    insight:
      'A child’s communication method is not a measure of how much they have to say — the goal is building a reliable pathway for what’s already there, not waiting for speech as the only valid outcome.',
    keywords: ['AAC', 'nonverbal', 'apraxia', 'communication differences', 'speech therapy'],
    perspectives: {
      teacher:
        'A classroom that treats a communication device the same as a speaking voice — waiting for it, not talking over it — tends to see a child participate far more readily.',
      clinician:
        'Speech-language pathologists are explicit that AAC has no prerequisites and does not delay spoken language — introducing a device early does not close the door on speech developing too.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong oral-tradition communication norms',
        note: 'Where verbal fluency carries strong social weight, families sometimes feel added pressure around a child’s different communication style — worth naming explicitly rather than assuming it away.',
      },
      {
        region: 'Cultures with established sign-language communities',
        note: 'Where a local sign language has a well-established community and status, a child’s non-verbal communication is often met with more existing infrastructure and less novelty.',
      },
    ],
    sources: ['American Speech-Language-Hearing Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'deaf-and-hard-of-hearing',
    topicNumber: 7,
    title: 'Why Does a Deaf or Hard-of-Hearing Child Need a Different Kind of Inclusion?',
    heading: {
      lead: 'Why Does a Deaf or',
      emphasis: 'Hard-of-Hearing Child',
      trailing: 'Need a Different Kind of Inclusion?',
    },
    quote: 'I want to be part of it — I just need to actually see what’s happening.',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'deaf-and-hard-of-hearing',
    reassurance:
      "It's common — and it's a language-access question, not a limitation on what a child can do!",
    explanation:
      'Most of the time, what a Deaf or hard-of-hearing child needs is full access to communication happening around them — the difference is in how information reaches them, not in what they’re capable of understanding or doing.',
    reasons: [
      {
        icon: '👂',
        title: 'Access, Not Ability, Is the Real Question',
        description:
          'Deaf and hard-of-hearing children have the same range of abilities as any other children — what varies is whether the environment gives them full access to information.',
      },
      {
        icon: '🗣️',
        title: 'Communication Mode Is a Family Choice',
        description:
          'Sign language, spoken language with amplification, or a combination are all legitimate paths — professionals in the field are deliberately neutral on which one a family chooses.',
      },
      {
        icon: '👥',
        title: 'Group Conversations Are Genuinely Harder to Follow',
        description:
          'Fast-moving group conversation, background noise, or people talking over each other can make following along far more effortful, even with hearing technology.',
      },
      {
        icon: '💡',
        title: 'Visual Access Fills Real Gaps',
        description:
          'Captions, visual cues, and clear sightlines to a speaker’s face all genuinely increase how much a child can follow, regardless of communication mode.',
      },
      {
        icon: '🔋',
        title: 'Listening Effort Is Tiring',
        description:
          'Straining to hear or lip-read for an entire school day takes real cognitive effort, which can show up later as fatigue or reduced attention.',
      },
      {
        icon: '🤝',
        title: 'Peer Attitudes Shape the Experience as Much as Access',
        description:
          'A classmate willing to face the child when speaking or repeat something once can matter as much as any formal accommodation.',
      },
      {
        icon: '🎭',
        title: 'Identity and Community Matter',
        description:
          'For many Deaf children, Deaf culture and community are a source of identity and belonging, not solely a set of needs to accommodate.',
      },
      {
        icon: '⚙️',
        title: 'Technology Helps but Doesn’t Erase the Difference',
        description:
          'Hearing aids or cochlear implants can expand access to sound without making the environment itself fully accessible on their own.',
      },
    ],
    concerns: [
      'A child consistently missing key classroom information despite accommodations in place',
      'Signs of social isolation tied specifically to communication access',
      'A sudden change in hearing that hasn’t been evaluated',
      'A caregiver or teacher unsure what accommodations are actually available',
      'Persistent fatigue that seems tied to the effort of listening or lip-reading all day',
    ],
    professionalGuidance:
      'An audiologist can assess hearing directly, and a teacher of the deaf or educational interpreter can help build a classroom communication plan that actually fits the child.',
    strategies: [
      'Face the child when speaking, and get their attention before starting',
      'Use captions on videos as a default, not a special request',
      'Reduce background noise where possible during key conversations',
      'Ask the family and child directly what communication approach works best for them',
      'Build in visual backup for important spoken information — written notes, gestures, slides',
    ],
    routine: [
      { icon: '👀', label: 'Get attention first' },
      { icon: '🙂', label: 'Face them clearly' },
      { icon: '📝', label: 'Back up with visuals' },
      { icon: '🤝', label: 'Check they caught it' },
    ],
    insight:
      'Full inclusion for a Deaf or hard-of-hearing child is mostly a design question — how information is delivered — not a question of what the child is able to understand or achieve.',
    keywords: ['deaf', 'hard of hearing', 'hearing loss', 'sign language', 'classroom inclusion'],
    perspectives: {
      teacher:
        'Simple habits — facing the class, captioning videos, repeating a peer’s question — tend to help every student, not only the child who is Deaf or hard of hearing.',
      clinician:
        'Audiologists and educators of the deaf are careful to frame hearing difference as a spectrum of access needs, not a single fixed category, since two children with similar hearing levels can need very different supports.',
    },
    culturalLens: [
      {
        region: 'Communities with an established Deaf culture and sign language',
        note: 'Where Deaf community and sign language have long-standing status, Deaf identity is often embraced as a cultural identity, not only framed around hearing loss.',
      },
      {
        region: 'Regions with limited access to hearing technology or interpreters',
        note: 'Where amplification devices, interpreters, or specialized teachers are scarce or costly, families often rely more heavily on informal family and community sign systems.',
      },
    ],
    sources: ['National Association of the Deaf', 'Hands & Voices'],
  },
  {
    id: 'low-vision-and-blindness',
    topicNumber: 8,
    title: 'Why Does a Child With Low Vision or Blindness Navigate the World Differently?',
    heading: {
      lead: 'Why Does a Child',
      emphasis: 'With Low Vision or Blindness',
      trailing: 'Navigate the World Differently?',
    },
    quote: 'I know where I’m going — I just get there a different way.',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'low-vision-and-blindness',
    reassurance: "It's common — and it's mostly a question of how the world is designed!",
    explanation:
      'Most of the time, the challenge isn’t what a blind or low-vision child can’t do — it’s that most spaces, materials, and routines are built assuming sight, which a child and their supports work around every day.',
    reasons: [
      {
        icon: '🌍',
        title: 'Most Environments Are Built for Sighted Use',
        description:
          'Signage, printed materials, and layout changes are usually designed with sight as the default, creating real access gaps rather than reflecting a child’s limitation.',
      },
      {
        icon: '🦯',
        title: 'Orientation and Mobility Is a Learnable Skill',
        description:
          'Using a cane, tracking landmarks, and building a mental map of a space are specific, teachable skills, not something a child either has or doesn’t.',
      },
      {
        icon: '👂',
        title: 'Other Senses Carry More of the Load',
        description:
          'Hearing, touch, and memory for spatial layout often become more finely tuned tools for navigating and learning.',
      },
      {
        icon: '📖',
        title: 'Braille and Audio Are Full Literacy, Not a Substitute',
        description:
          'Braille and audio materials provide genuine literacy and access to the same content, not a lesser workaround for print.',
      },
      {
        icon: '🔄',
        title: 'A New Space Takes Deliberate Learning',
        description:
          'Navigating a new or rearranged environment takes real, deliberate learning time that a sighted child doesn’t need for the same space.',
      },
      {
        icon: '🎯',
        title: 'Independence Is Built Skill by Skill',
        description:
          'Self-advocacy, daily living skills, and independent travel are explicitly taught, not assumed — and expand steadily with practice.',
      },
      {
        icon: '💡',
        title: 'Lighting and Contrast Genuinely Matter',
        description:
          'For a child with low vision rather than total blindness, lighting, contrast, and text size can make a real, practical difference day to day.',
      },
      {
        icon: '🤝',
        title: 'Peers Often Just Need a Little Guidance',
        description:
          'Classmates usually adjust quickly once shown simple habits — narrating what’s happening, identifying themselves when they approach, not moving furniture without notice.',
      },
    ],
    concerns: [
      'A sudden change in vision that hasn’t been evaluated',
      'A child avoiding activities specifically because materials or spaces aren’t accessible to them',
      'Signs of social isolation tied to a lack of accessible participation',
      'A caregiver or school unsure what accessible materials or supports currently exist',
      'A child expressing that they feel unable to do something that accessible tools could genuinely support',
    ],
    professionalGuidance:
      'A certified orientation and mobility specialist or a teacher of students with visual impairments can assess specific needs and build a concrete plan for access and skill-building.',
    strategies: [
      'Narrate what’s happening rather than relying on gesture or pointing alone',
      'Keep a consistent layout, and always announce when something has moved',
      'Provide materials in accessible formats — braille, audio, large print — as a default, not an afterthought',
      'Identify yourself by name when approaching, rather than assuming recognition by sight',
      'Ask the child directly what access approach works best for a given task',
    ],
    routine: [
      { icon: '🗣️', label: 'Narrate the scene' },
      { icon: '📍', label: 'Announce any changes' },
      { icon: '📖', label: 'Offer accessible formats' },
      { icon: '🎯', label: 'Build skills, step by step' },
    ],
    insight:
      'A blind or low-vision child’s path through the day is different by design necessity, not by lesser capability — with the right access, the destination is the same one every child reaches.',
    keywords: ['blindness', 'low vision', 'braille', 'orientation and mobility', 'accessibility'],
    perspectives: {
      teacher:
        'Describing what’s on the board out loud, and giving materials in an accessible format ahead of time rather than after a request, keeps a low-vision or blind student on the same pace as the rest of the class.',
      clinician:
        'Vision specialists point to a defined set of skill areas — orientation and mobility, independent living, self-advocacy, assistive technology — as the concrete curriculum behind “independence,” not a vague goal.',
    },
    culturalLens: [
      {
        region: 'Regions with strong accessible-infrastructure standards',
        note: 'Countries with well-established tactile paving, braille signage, and accessible transit norms reduce how often a blind or low-vision child encounters an environment not built with them in mind.',
      },
      {
        region: 'Cultures with strong extended-family support networks',
        note: 'Where several family members share day-to-day support, navigation assistance in unfamiliar settings is often distributed rather than falling to one caregiver alone.',
      },
    ],
    sources: ['American Foundation for the Blind', 'National Federation of the Blind'],
  },
  {
    id: 'chronic-illness-and-school',
    topicNumber: 9,
    title: 'Why Might a Child With a Chronic Illness Need a Different Kind of School Plan?',
    heading: {
      lead: 'Why Might a Child',
      emphasis: 'With a Chronic Illness',
      trailing: 'Need a Different Kind of School Plan?',
    },
    quote: 'I want to go to school — some days my body just doesn’t let me.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'chronic-illness-and-school',
    reassurance:
      "It's common — roughly one in four or five school-age children lives with some chronic health condition!",
    explanation:
      'Most of the time, a child managing a chronic illness needs school and medical care working together as partners, not a single accommodation handled in isolation.',
    reasons: [
      {
        icon: '🔋',
        title: 'Energy Is a Genuinely Limited Resource',
        description:
          'A chronic condition can make ordinary energy demands — a full school day, gym class, homework — cost more than they do for a typically healthy classmate.',
      },
      {
        icon: '📅',
        title: 'Treatment Has Its Own Schedule',
        description:
          'Appointments, medication timing, or treatment side effects can genuinely conflict with the school schedule in ways that require real flexibility.',
      },
      {
        icon: '🏥',
        title: 'Attendance Reflects Health, Not Motivation',
        description:
          'Missed school days are frequently a direct result of the condition or its treatment, not a sign of disengagement from learning.',
      },
      {
        icon: '🧠',
        title: 'Cognitive Effects Can Be Invisible',
        description:
          'Some conditions or medications affect concentration, memory, or processing speed in ways that aren’t visible from the outside.',
      },
      {
        icon: '💬',
        title: 'Explaining It Gets Tiring',
        description:
          'Repeatedly explaining a condition to new teachers, substitutes, or classmates is its own ongoing effort layered on top of managing the illness itself.',
      },
      {
        icon: '🎭',
        title: 'Looking “Fine” Doesn’t Mean Feeling Fine',
        description:
          'Many chronic conditions are not visibly apparent, which can lead to a child’s very real limitations being doubted or overlooked.',
      },
      {
        icon: '🤝',
        title: 'Partnership Beats a One-Time Plan',
        description:
          'Needs often change as a condition fluctuates, so an ongoing relationship between family, school, and medical team works better than a single static accommodation.',
      },
      {
        icon: '🎯',
        title: 'Belonging Matters as Much as Accommodation',
        description:
          'Staying connected to classmates and school life during flare-ups or absences supports wellbeing as directly as any medical accommodation does.',
      },
    ],
    concerns: [
      'Frequent absences with no coordinated plan between school and medical team',
      'A noticeable drop in academic performance coinciding with the condition or its treatment',
      'Signs of social withdrawal tied to repeated absences or feeling different from peers',
      'A school unaware of warning signs specific to the child’s condition',
      'A child masking symptoms at school in a way that risks their safety',
    ],
    professionalGuidance:
      'The child’s medical team, together with the school nurse and a 504 or IEP coordinator, can build a coordinated care and accommodation plan spanning both settings.',
    strategies: [
      'Set up a communication channel between medical team, family, and school that doesn’t rely on the child relaying information',
      'Build in flexibility for attendance, deadlines, and physical activity rather than one-size-fits-all rules',
      'Keep the child connected to class content and peers during extended absences',
      'Train key staff on the specific condition’s warning signs, not just general awareness',
      'Revisit the plan as the condition or treatment changes, not only once a year',
    ],
    routine: [
      { icon: '🩺', label: 'Coordinate care and school' },
      { icon: '📋', label: 'Build in flexibility' },
      { icon: '🔗', label: 'Stay connected during absences' },
      { icon: '🔄', label: 'Revisit as things change' },
    ],
    insight:
      'A chronic illness plan works best as a living partnership between medicine and school, not a static document — the same way the condition itself doesn’t stay static.',
    keywords: ['chronic illness', 'school attendance', '504 plan', 'medical complexity'],
    perspectives: {
      teacher:
        'A simple, current one-page summary of a student’s condition and what to watch for saves a substitute or new teacher from starting from zero, and keeps the child from having to explain it themselves.',
      clinician:
        'Pediatricians increasingly treat school attendance itself as a health indicator worth tracking, since it reflects how well medical and educational plans are actually working together.',
    },
    culturalLens: [
      {
        region: 'Health systems with strong school-nurse infrastructure',
        note: 'Where schools have consistent, well-resourced nursing staff, day-to-day medical needs are often managed on-site rather than requiring a parent to intervene for routine care.',
      },
      {
        region: 'Cultures with strong extended-family caregiving',
        note: 'Where caregiving is shared across several family members, coordinating medical appointments and school communication is often distributed rather than resting on one parent.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'seizure-safety-and-inclusion',
    topicNumber: 10,
    title: 'Why Does a Child With Seizures Need a Safety Plan, Not Just Caution?',
    heading: {
      lead: 'Why Does a Child',
      emphasis: 'With Seizures Need a Safety Plan',
      trailing: 'Rather Than Just Caution?',
    },
    quote: 'I still want to go on the trip — I just need people to know what to do.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'seizure-safety-and-inclusion',
    reassurance: "It's common — and a clear plan lets a child stay included, not sidelined!",
    explanation:
      'Most of the time, the goal isn’t to limit a child’s activities out of caution — it’s a specific, shared safety plan that lets the people around them respond calmly and lets the child keep participating fully.',
    reasons: [
      {
        icon: '📋',
        title: 'A Seizure Action Plan Removes the Guesswork',
        description:
          'A written plan spells out exactly what a seizure looks like for this child and what to do, so adults aren’t improvising in the moment.',
      },
      {
        icon: '🎓',
        title: 'Basic Seizure First Aid Is Simple to Learn',
        description:
          'Staying calm, timing the seizure, protecting the child from injury, and knowing when to call for help are teachable, concrete steps, not specialized medical training.',
      },
      {
        icon: '🚫',
        title: 'Fear Often Outpaces the Actual Risk',
        description:
          'A seizure looks alarming, which can lead adults to restrict activities well beyond what is medically necessary out of understandable but excess caution.',
      },
      {
        icon: '👥',
        title: 'Peer Reactions Shape Belonging',
        description:
          'How classmates react in the moment — and after — has a lasting effect on whether a child feels included or singled out.',
      },
      {
        icon: '🎯',
        title: 'Triggers, When Known, Are Manageable',
        description:
          'Some children have identifiable triggers (sleep loss, certain lighting) that can be planned around without eliminating normal activities.',
      },
      {
        icon: '💊',
        title: 'Medication Routines Need Real Consistency',
        description:
          'Seizure medication often depends on precise timing, which requires school routines to accommodate rather than treat as flexible.',
      },
      {
        icon: '🏫',
        title: 'Inclusion Requires Specific Planning, Not Just Good Intentions',
        description:
          'Field trips, sports, and swimming can usually happen safely with the right plan in place — exclusion is rarely required by the condition itself.',
      },
      {
        icon: '🗣️',
        title: 'Stigma Is Often the Bigger Obstacle',
        description:
          'Misunderstanding about seizures — mistaking them for contagious, dangerous to witness, or a sign of something else — often affects a child more than the seizures themselves.',
      },
    ],
    concerns: [
      'A first-time seizure that hasn’t been medically evaluated',
      'A seizure lasting longer than 5 minutes, or repeated seizures without full recovery between them',
      'A change in seizure frequency, type, or pattern from what’s documented in the current plan',
      'A school or activity without a current, shared seizure action plan',
      'Signs of social exclusion or bullying connected to the condition',
    ],
    professionalGuidance:
      'A pediatric neurologist can help build and update a Seizure Action Plan, and the school nurse can help train relevant staff on it.',
    strategies: [
      'Put a written Seizure Action Plan in place and share it with every relevant adult, not just the school nurse',
      'Offer brief, matter-of-fact seizure first-aid training to staff and, age-appropriately, classmates',
      'Default toward inclusion in activities unless the plan specifically says otherwise',
      'Keep medication timing consistent and built into the daily school routine',
      'Address stigma directly and early, rather than leaving classmates to draw their own conclusions',
    ],
    routine: [
      { icon: '📋', label: 'Share the action plan' },
      { icon: '🎓', label: 'Train key adults' },
      { icon: '🏫', label: 'Default to inclusion' },
      { icon: '💊', label: 'Keep timing consistent' },
    ],
    insight:
      'A good seizure plan turns an unpredictable moment into a rehearsed, calm response — which is usually what keeps a child included, not what keeps them excluded.',
    keywords: ['epilepsy', 'seizures', 'seizure action plan', 'inclusion'],
    perspectives: {
      teacher:
        'A five-minute seizure first-aid refresher at the start of the year, shared with the whole staff rather than just the school nurse, tends to prevent panic far more than a written policy alone.',
      clinician:
        'Pediatric neurologists emphasize that most children with well-managed epilepsy can safely participate in the same activities as their peers, with planning rather than blanket restriction as the standard of care.',
    },
    culturalLens: [
      {
        region: 'Regions with strong public seizure-awareness campaigns',
        note: 'Where public health campaigns have actively worked to demystify seizures, families often report less social stigma and more matter-of-fact peer reactions.',
      },
      {
        region: 'Communities where seizures carry historical stigma or misconception',
        note: 'In some communities, epilepsy has historically carried misconceptions about contagion or causation — direct, early education tends to be especially important in these settings.',
      },
    ],
    sources: ['Epilepsy Foundation', 'American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'intellectual-and-developmental-disability',
    topicNumber: 11,
    title:
      'Why Does a Child With an Intellectual or Developmental Disability Need Different Kinds of Support?',
    heading: {
      lead: 'Why Does a Child',
      emphasis: 'Need Different Kinds of Support',
      trailing: 'to Learn and Grow at Their Own Pace?',
    },
    quote: 'I can do it — just show me, and give me time.',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'intellectual-and-developmental-disability',
    reassurance:
      "It's common — and it's about the support a child needs, not a ceiling on what they can do!",
    explanation:
      'Most of the time, a child with an intellectual or developmental disability is best understood by the specific supports that help them thrive, not by a general label of how limited they are.',
    reasons: [
      {
        icon: '🧩',
        title: 'Support Needs, Not Severity, Is the Useful Frame',
        description:
          'Professionals in the field define intellectual disability by what supports a child needs to participate fully, not primarily by how limited an ability appears.',
      },
      {
        icon: '⏳',
        title: 'Development Happens on Its Own Real Timeline',
        description:
          'Milestones — walking, talking, reading — can arrive later and in a different sequence, while still representing genuine, steady progress.',
      },
      {
        icon: '🎯',
        title: 'New Skills Often Need to Be Taught Explicitly',
        description:
          'Skills that other children pick up incidentally may need direct, repeated, hands-on teaching — a different path to the same skill, not a lesser one.',
      },
      {
        icon: '🔁',
        title: 'Repetition Builds Real Mastery',
        description:
          'More repetition to master a skill reflects a genuine learning process, not a lack of effort or intelligence.',
      },
      {
        icon: '💬',
        title: 'Communication Ability Varies Widely',
        description:
          'Communication style and complexity vary enormously from child to child — assuming a single fixed level based on a diagnosis alone misses the individual.',
      },
      {
        icon: '🌱',
        title: 'Strengths Sit Alongside the Support Needs',
        description:
          'A child with an intellectual or developmental disability typically has genuine strengths and interests that deserve as much attention as the areas needing support.',
      },
      {
        icon: '👥',
        title: 'Social Inclusion Takes Deliberate Effort',
        description:
          'Meaningful friendships and social inclusion for these children usually require adults to actively facilitate opportunities, not assume they’ll happen on their own.',
      },
      {
        icon: '🏡',
        title: 'Independence Grows in Small, Real Steps',
        description:
          'Daily-living independence — dressing, routines, choices — expands through consistent practice and patience, at whatever pace fits the child.',
      },
    ],
    concerns: [
      'A noticeable loss of previously mastered skills',
      'A caregiver or teacher unsure what supports are currently in place or available',
      'Signs of social isolation despite genuine effort to include the child',
      'A support plan that hasn’t been revisited as the child has grown',
      'Behavior suggesting frustration with an unmet communication or support need',
    ],
    professionalGuidance:
      'A developmental pediatrician or psychologist can assess a child’s specific strengths and support needs and help build a plan that fits them individually.',
    strategies: [
      'Teach new skills in small, explicit steps rather than expecting incidental learning',
      'Offer consistent repetition and practice without treating it as remedial',
      'Build daily choices and small responsibilities into routines to grow independence',
      'Actively create opportunities for peer interaction rather than leaving inclusion to chance',
      'Focus conversations on the child’s specific strengths as much as their support needs',
    ],
    routine: [
      { icon: '🧩', label: 'Teach in small steps' },
      { icon: '🔁', label: 'Practice with patience' },
      { icon: '🌟', label: 'Build in real choices' },
      { icon: '👥', label: 'Create peer opportunities' },
    ],
    insight:
      'A child with an intellectual or developmental disability is still building every skill every child builds — the pace and the path are different, not the destination.',
    keywords: [
      'intellectual disability',
      'developmental disability',
      'Down syndrome',
      'support needs',
    ],
    perspectives: {
      teacher:
        'Breaking a new classroom routine into small, explicitly taught steps — rather than expecting a student to pick it up by watching others — tends to build real, lasting independence.',
      clinician:
        'Developmental specialists define intellectual disability by the intensity of support a person needs across life domains, a framework built specifically to avoid reducing a child to a single severity label.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong inclusive-education traditions',
        note: 'Where inclusive classrooms are the long-standing norm rather than the exception, peer relationships for children with intellectual or developmental disabilities often form more naturally from an early age.',
      },
      {
        region: 'Cultures with strong extended-family support systems',
        note: 'Where care is shared across a wider family network, a child’s day-to-day support is often distributed rather than concentrated on one caregiver.',
      },
    ],
    sources: ['American Association on Intellectual and Developmental Disabilities', 'The Arc'],
  },
  {
    id: 'impulsivity-and-executive-function',
    topicNumber: 12,
    title: 'Why Might a Child Struggle With Impulse Control and Planning Ahead?',
    heading: {
      lead: 'Why Might a Child Struggle',
      emphasis: 'With Impulse Control',
      trailing: 'and Planning Ahead?',
    },
    quote: 'I didn’t decide to do it — it just happened before I could stop it.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'impulsivity-and-executive-function',
    reassurance: "It's common — and it's a skills gap, not a willpower problem!",
    explanation:
      'Most of the time, difficulty pausing before acting or planning several steps ahead reflects executive-function skills still developing unevenly, not a choice to ignore expectations.',
    reasons: [
      {
        icon: '🧠',
        title: 'The “Brain Brake” Develops Gradually',
        description:
          'The brain systems that pause an impulse before acting develop over years, and for some children develop more slowly or unevenly than for peers.',
      },
      {
        icon: '📋',
        title: 'Planning Steps Ahead Is a Specific Skill',
        description:
          'Holding a multi-step plan in mind and following it takes working memory and organization that some children are still actively building.',
      },
      {
        icon: '⏱️',
        title: 'Time Awareness Can Lag Behind',
        description:
          'A weaker internal sense of time can make “later” and “in a few minutes” feel abstract, undermining planning even when the child wants to follow through.',
      },
      {
        icon: '🎯',
        title: 'The Invisible Needs to Become Visible',
        description:
          'Executive-function skills are internal and hard to see — external tools like checklists and visual schedules make the invisible steps concrete.',
      },
      {
        icon: '🔋',
        title: 'Fatigue and Stress Make It Harder',
        description:
          'Impulse control and planning both draw on limited mental resources, so a tired or stressed child will show more difficulty with both.',
      },
      {
        icon: '🏆',
        title: 'The Reward Right Now Feels Bigger',
        description:
          'A smaller immediate reward can genuinely outweigh a bigger later one in a still-developing brain’s calculation, not because the child doesn’t understand the tradeoff.',
      },
      {
        icon: '🔁',
        title: 'Consistent External Structure Builds Internal Skill',
        description:
          'Repeated use of the same external scaffolding — routines, reminders — gradually helps internalize the skill over time.',
      },
      {
        icon: '💛',
        title: 'It’s Rarely About Not Caring',
        description:
          'Children who struggle with impulse control usually care just as much about doing well — the gap is in the skill, not the motivation.',
      },
    ],
    concerns: [
      'Impulsivity that regularly leads to safety risks',
      'Difficulty significant enough to disrupt friendships or family life consistently',
      'No improvement at all despite consistent structure and support over time',
      'A teacher or other caregiver separately raising the same pattern',
      'Signs of declining self-esteem tied to repeated impulsive mistakes',
    ],
    professionalGuidance:
      'A child psychologist or developmental pediatrician can assess executive-function skills directly and help build strategies matched to this specific child.',
    strategies: [
      'Use visual checklists and schedules to make multi-step plans concrete',
      'Build in a brief pause habit — counting, a deep breath — practiced during calm moments',
      'Break big goals into small, immediate steps with visible progress',
      'Offer consistent, predictable structure rather than relying on memory alone',
      'Praise the use of a strategy, not just the outcome',
    ],
    routine: [
      { icon: '📋', label: 'Make the plan visible' },
      { icon: '⏸️', label: 'Practice the pause' },
      { icon: '🧩', label: 'Break it into steps' },
      { icon: '👏', label: 'Praise the strategy' },
    ],
    insight:
      'A child who struggles to pause or plan is missing scaffolding, not motivation — the same structure that feels automatic to one child may need to be built deliberately for another.',
    keywords: ['impulsivity', 'executive function', 'ADHD', 'self-regulation', 'planning skills'],
    perspectives: {
      teacher:
        'A visible, external checklist for multi-step classroom routines helps far more than a verbal reminder, since it doesn’t rely on a still-developing working memory to hold the steps.',
      clinician:
        'Clinicians frame executive-function difficulty as a skills-and-scaffolding issue rather than a willpower problem — the same struggle shows up with or without a formal ADHD diagnosis.',
    },
    culturalLens: [
      {
        region: 'Cultures with highly structured daily routines for children',
        note: 'Highly structured daily life can provide more built-in external scaffolding by default, which may mask or reduce how much an executive-function difference shows up day to day.',
      },
      {
        region: 'Cultures with more unstructured, child-led daily life',
        note: 'More flexible daily routines can make executive-function differences more visible, simply because there is less built-in external structure to lean on.',
      },
    ],
    sources: ['CHADD', 'Understood.org', 'American Academy of Child and Adolescent Psychiatry'],
  },
  {
    id: 'siblings-of-a-child-with-a-disability',
    topicNumber: 13,
    title: 'Why Do Siblings of a Child With a Disability Need Their Own Kind of Attention?',
    heading: {
      lead: 'Why Do Siblings',
      emphasis: 'of a Child With a Disability',
      trailing: 'Need Their Own Kind of Attention?',
    },
    quote: 'I love my sister — I just also want someone to ask me how I’m doing.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'siblings-of-a-child-with-a-disability',
    reassurance: "It's common — and it's about adding attention, not taking any away!",
    explanation:
      'Most of the time, a sibling of a child with a disability is doing well overall, but carries a genuinely different, ongoing experience that benefits from being noticed and named, not just managed around.',
    reasons: [
      {
        icon: '⚖️',
        title: 'Attention Can Feel Unevenly Split',
        description:
          'When one child’s needs require more caregiving time, a sibling can genuinely feel like the balance has shifted, even when it’s not anyone’s intention.',
      },
      {
        icon: '🌱',
        title: 'The Relationship Evolves as Both Children Grow',
        description:
          'A sibling’s understanding and role changes across childhood — what a 5-year-old needs to know differs from what a 12-year-old is ready to understand.',
      },
      {
        icon: '💪',
        title: 'Real Strengths Often Develop Alongside Real Stress',
        description:
          'Many siblings develop genuine empathy, patience, and maturity from the experience — alongside, not instead of, real and valid stress.',
      },
      {
        icon: '🗣️',
        title: 'Questions Deserve Honest, Age-Appropriate Answers',
        description:
          'Siblings often have real questions about their brother or sister’s disability that benefit from direct, honest answers rather than being talked around.',
      },
      {
        icon: '👥',
        title: 'Peer Connection With Other Siblings Helps',
        description:
          'Meeting other kids in the same situation — through a sibling support group, for instance — can reduce a sense of being the only one going through it.',
      },
      {
        icon: '😔',
        title: 'Complicated Feelings Are Normal, Not Shameful',
        description:
          'Jealousy, embarrassment, worry, and love can all coexist — a sibling doesn’t need to feel guilty for having mixed feelings.',
      },
      {
        icon: '🎯',
        title: 'One-on-One Time Still Matters',
        description:
          'Even brief, protected one-on-one time with a parent can meaningfully reassure a sibling that they’re still fully seen.',
      },
      {
        icon: '🔮',
        title: 'Long-Term Questions Come Up Eventually',
        description:
          'As siblings get older, real questions about future caregiving roles or responsibilities often surface and deserve an honest, ongoing conversation.',
      },
    ],
    concerns: [
      'A sibling showing signs of significant, persistent distress, withdrawal, or resentment',
      'A sibling taking on caregiving responsibilities well beyond what’s age-appropriate',
      'Reluctance to invite friends home or talk about their family situation at all',
      'A sudden drop in a sibling’s own school performance or mood',
      'A sibling expressing they feel invisible or unimportant within the family',
    ],
    professionalGuidance:
      'A family therapist, or a sibling-focused support program, can give a sibling space of their own and help a family notice needs that can otherwise go quiet.',
    strategies: [
      'Protect regular one-on-one time with each sibling, even briefly',
      'Answer a sibling’s questions honestly, matched to their age and readiness',
      'Name and validate mixed feelings rather than only encouraging positive ones',
      'Connect siblings with peers in similar family situations where possible',
      'Involve siblings in family conversations at a level that fits their age, rather than shielding them entirely',
    ],
    routine: [
      { icon: '🎯', label: 'Protect one-on-one time' },
      { icon: '💬', label: 'Answer questions honestly' },
      { icon: '💛', label: 'Validate mixed feelings' },
      { icon: '👥', label: 'Connect with other siblings' },
    ],
    insight:
      'A sibling’s experience runs alongside their brother or sister’s, not beneath it — giving it dedicated attention tends to strengthen the whole family, not divide it further.',
    keywords: ['siblings', 'disability', 'family dynamics', 'sibling support'],
    perspectives: {
      teacher:
        'A teacher aware that a student has a sibling with significant needs at home can watch for quiet signs of extra responsibility or stress that the student may not bring up directly.',
      clinician:
        'Sibling-support specialists emphasize a strengths-and-needs framing — siblings often gain real empathy and maturity from the experience, and still benefit from dedicated support, not either one instead of the other.',
    },
    culturalLens: [
      {
        region: 'Collectivist family structures',
        note: 'Where caregiving is expected to be shared among family members, an older sibling taking on a caregiving role is more culturally normalized, though the sibling’s own needs still benefit from explicit attention.',
      },
      {
        region: 'Cultures with strong individual-achievement expectations',
        note: 'Where individual achievement carries heavy family expectation, a sibling may feel added pressure to “make up for” perceived gaps, which is worth naming directly rather than assuming isn’t happening.',
      },
    ],
    sources: ['Sibling Support Project', 'Sibling Leadership Network'],
  },
  {
    id: 'planning-for-independence',
    topicNumber: 14,
    title: 'Why Does Planning for Independence Need to Start Early for a Teen With a Disability?',
    heading: {
      lead: 'Why Does Planning',
      emphasis: 'for Independence',
      trailing: 'Need to Start Early?',
    },
    quote: 'I want to figure out my own life — just help me build toward it.',
    ageRanges: ['8–12 years'],
    illustrationId: 'planning-for-independence',
    reassurance: "It's common — and starting early gives a teen more say, not less!",
    explanation:
      'Most of the time, building toward adult independence for a teen with a disability works best as a gradual, whole-life handoff of skills that starts years before any single deadline, not a plan drafted right before graduation.',
    reasons: [
      {
        icon: '📅',
        title: 'Early Planning Means Real Options Later',
        description:
          'Starting the conversation years ahead — often recommended from around age 14 — leaves time to build skills and explore options rather than scrambling near a deadline.',
      },
      {
        icon: '🏥',
        title: 'It Spans More Than One Life Area',
        description:
          'Genuine independence planning covers health-care self-management, education or employment, and daily living together, not any single one alone.',
      },
      {
        icon: '🗣️',
        title: 'The Teen’s Own Voice Should Lead',
        description:
          'A transition plan works best when it’s built around a teen’s own goals and preferences, not decided about them by adults alone.',
      },
      {
        icon: '🎯',
        title: 'Self-Management Skills Are Built Gradually',
        description:
          'Skills like managing a medication schedule or making a phone call independently are taught step by step, well before they’re needed at full independence.',
      },
      {
        icon: '💼',
        title: 'Work and Education Paths Take Early Exploration',
        description:
          'Exploring interests, strengths, and options for further education or employment benefits from starting well before a teen has to decide.',
      },
      {
        icon: '🏡',
        title: 'Daily Living Skills Need Real Practice',
        description:
          'Cooking, budgeting, transportation, and self-care routines take repeated, real practice to build confidently, not a single lesson.',
      },
      {
        icon: '⚖️',
        title: 'Legal and Systems Changes Happen at 18',
        description:
          'Certain rights and responsibilities shift at legal adulthood regardless of a person’s support needs, making early preparation genuinely practical, not just ideal.',
      },
      {
        icon: '🤝',
        title: 'It’s a Handoff, Not a Cutoff',
        description:
          'Support doesn’t have to end at 18 — the goal is a thoughtful transfer of responsibility at whatever pace fits the individual teen.',
      },
    ],
    concerns: [
      'No transition planning in place by the mid-teen years',
      'A teen with little voice or input in decisions about their own future',
      'Significant gaps between a teen’s stated goals and the skills currently being built toward them',
      'A family unsure what benefits, services, or legal considerations apply after age 18',
      'A teen expressing anxiety or hopelessness about the transition to adulthood',
    ],
    professionalGuidance:
      'A transition specialist, school counselor, or the teen’s medical team can help build a coordinated plan spanning health care, education or employment, and daily living.',
    strategies: [
      'Start transition conversations by around age 14, even informally',
      'Center the teen’s own goals and preferences at every step',
      'Practice one concrete independence skill at a time, with real repetition',
      'Coordinate across medical, school, and family conversations rather than keeping them separate',
      'Revisit the plan regularly as the teen’s goals and skills develop',
    ],
    routine: [
      { icon: '🗣️', label: 'Center their goals' },
      { icon: '🎯', label: 'Practice one skill at a time' },
      { icon: '🤝', label: 'Coordinate across settings' },
      { icon: '🔄', label: 'Revisit and adjust' },
    ],
    insight:
      'Independence for a teen with a disability is built the same way as for any teen — gradually, skill by skill — just with more deliberate planning to make sure it actually starts early enough.',
    keywords: ['transition planning', 'independence', 'self-advocacy', 'young adulthood'],
    perspectives: {
      teacher:
        'A school counselor who raises transition planning by early high school, rather than senior year, gives a student with a disability meaningfully more runway to build the skills and explore the options that matter to them.',
      clinician:
        'Transition-medicine specialists recommend health-care self-management skills — knowing one’s own medications, scheduling appointments — start building well before a teen ages out of pediatric care.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong multigenerational household norms',
        note: 'Where adult children commonly continue living with family, “independence” is often defined more around skills and self-determination than around living separately.',
      },
      {
        region: 'Cultures with strong emphasis on early individual independence',
        note: 'Where moving out and full self-sufficiency by a certain age is a strong cultural expectation, families of teens with disabilities sometimes feel added pressure to accelerate timelines beyond what fits the individual teen.',
      },
    ],
    sources: ['Got Transition', 'Center for Parent Information and Resources'],
  },
  {
    id: 'advocating-at-school',
    topicNumber: 15,
    title: 'What Does It Actually Look Like to Advocate for a Child at School?',
    heading: {
      lead: 'What Does It Actually',
      emphasis: 'Look Like to Advocate',
      trailing: 'for a Child at School?',
    },
    quote: 'I just want someone at school to really see him the way I do.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'advocating-at-school',
    reassurance: "It's common — and advocacy is a learnable skill, not a personality trait!",
    explanation:
      'Most of the time, effective school advocacy is a specific, learnable set of skills — communication, documentation, relationship-building — separate from and broader than any single legal process like an IEP or 504 plan.',
    reasons: [
      {
        icon: '🤝',
        title: 'Partnership Usually Works Better Than Confrontation',
        description:
          'Starting from a collaborative stance with the school tends to build the ongoing relationship that actually helps a child, reserving formal escalation for when it’s truly needed.',
      },
      {
        icon: '📝',
        title: 'Documentation Turns Memory Into Evidence',
        description:
          'A simple written record of conversations, concerns, and agreements protects both the family and the child if questions come up later.',
      },
      {
        icon: '🎯',
        title: 'Specific Requests Get Better Results Than General Concerns',
        description:
          'A clear, specific ask is easier for a school to act on than a general sense that something isn’t working.',
      },
      {
        icon: '🗣️',
        title: 'Knowing the Right Contact Saves Real Time',
        description:
          'Understanding who handles what — classroom teacher, counselor, special-education coordinator — helps a concern reach the right person the first time.',
      },
      {
        icon: '📚',
        title: 'Knowing Your Rights Changes the Conversation',
        description:
          'Even a basic understanding of a child’s educational rights shifts a conversation from asking for a favor to discussing an entitlement.',
      },
      {
        icon: '👂',
        title: 'The Child’s Own Voice Belongs in the Process',
        description:
          'Age-appropriately including a child in conversations about their own support builds their own self-advocacy skills over time.',
      },
      {
        icon: '⏫',
        title: 'Escalation Is a Real Tool, Used Deliberately',
        description:
          'Involving a formal advocate, mediator, or higher authority is a legitimate next step when collaboration genuinely isn’t working — not a first resort.',
      },
      {
        icon: '🔁',
        title: 'Advocacy Is Ongoing, Not a One-Time Event',
        description:
          'A child’s needs change over the school years, so effective advocacy is a continuing relationship with the school, not a single meeting.',
      },
    ],
    concerns: [
      'Repeated concerns raised to the school with no meaningful response over time',
      'A family unsure who to contact or what their child’s rights actually are',
      'A pattern of communication breakdowns between family and school',
      'A child who seems to have stopped advocating for themselves at all',
      'A situation that has reached a genuine impasse despite good-faith efforts on both sides',
    ],
    professionalGuidance:
      'A Parent Training and Information Center or a special-education advocate can coach a family through the advocacy process and, when needed, connect them with more formal support.',
    strategies: [
      'Keep a simple written record of meetings, emails, and agreements',
      'Bring specific, concrete requests rather than general concerns to meetings',
      'Learn who at the school handles what, and build a relationship with that contact',
      'Include the child in age-appropriate parts of the conversation about their own needs',
      'Know when and how to escalate, and don’t hesitate to use that option if collaboration stalls',
    ],
    routine: [
      { icon: '📝', label: 'Document conversations' },
      { icon: '🎯', label: 'Make specific requests' },
      { icon: '🤝', label: 'Build the relationship' },
      { icon: '⏫', label: 'Escalate if truly needed' },
    ],
    insight:
      'Advocating well at school is less about being naturally assertive and more about using a specific, learnable set of tools — most families get better at it with practice, not with a different personality.',
    keywords: ['advocacy', 'school advocacy', 'parent advocate', 'special education'],
    perspectives: {
      teacher:
        'A family that documents conversations and comes with specific, concrete requests tends to get faster, clearer responses than one raising a general worry — this isn’t about being difficult, it just gives the school something actionable.',
      clinician:
        'Parent-advocacy organizations distinguish everyday advocacy skills — communication, documentation, relationship-building — from the formal legal process, and note that most families can build real skill in the former without needing to invoke the latter.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong deference to institutional authority',
        note: 'Where questioning a school’s decisions directly feels culturally uncomfortable, families sometimes benefit from a trusted intermediary or advocate to help bridge that gap.',
      },
      {
        region: 'Families navigating a new country’s school system',
        note: 'Families new to a country’s specific school system often benefit especially from a Parent Training and Information Center or bilingual liaison, since both the process and its norms can be unfamiliar.',
      },
    ],
    sources: ['Center for Parent Information and Resources', 'The Arc'],
  },
];
