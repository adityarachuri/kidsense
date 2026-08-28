import type { Topic } from '../types/content';

export const homeworkTopics: Topic[] = [
  {
    id: 'postponing-homework',
    topicNumber: 1,
    title: 'Why Kids Postpone Homework',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Postpone Their Homework',
      trailing: 'Until the Last Possible Minute?',
    },
    quote: "I'll do it later...",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'postpone-homework',
    reassurance: "It's common — and usually not laziness!",
    explanation: "Most of the time, it's about avoiding a feeling, not avoiding the task itself.",
    reasons: [
      {
        icon: '😖',
        title: 'Task Aversion',
        description:
          'Starting effortful work after a full school day of concentrating feels unappealing.',
      },
      {
        icon: '😰',
        title: 'Fear of Difficulty',
        description: 'Delaying avoids the uncomfortable feeling of possibly getting it wrong.',
      },
      {
        icon: '🧠',
        title: 'Mental Switching Cost',
        description: 'Moving from play or rest back into focused work takes real effort.',
      },
      {
        icon: '🎮',
        title: 'Present Bias',
        description: 'Immediate rewards feel far more compelling than a distant deadline.',
      },
      {
        icon: '🎯',
        title: 'Perfectionism',
        description: 'Some kids delay because they\'re afraid of not doing it "right."',
      },
      {
        icon: '😐',
        title: 'Low Subject Motivation',
        description: 'A boring or irrelevant-feeling topic gives little pull to start.',
      },
      {
        icon: '🗂️',
        title: 'Executive Function Gaps',
        description: 'Planning when and how to start is a skill still developing.',
      },
      {
        icon: '🔁',
        title: 'Learned Habit',
        description: 'If postponing has "worked" before, it becomes the default pattern.',
      },
    ],
    concerns: [
      'Homework refusal most days despite support',
      'Visible anxiety or panic specifically around homework',
      'Consistently missing deadlines despite reminders',
      'Avoidance spreading to all schoolwork, not just homework',
      'Signs of shutting down rather than simply delaying',
    ],
    professionalGuidance:
      'If avoidance is paired with visible distress or panic, it may be worth discussing with a teacher or school counselor.',
    strategies: [
      'Start with a specific, easy first step, not "do your homework"',
      'Use a consistent homework time and place',
      'Break tasks into short chunks with breaks between',
      'Sit nearby for the first few minutes, then step back',
    ],
    routine: [
      { icon: '⏰', label: 'Set timer' },
      { icon: '✅', label: 'Easiest task first' },
      { icon: '📚', label: 'Work in bursts' },
      { icon: '🎉', label: 'Break + reward' },
    ],
    insight:
      "If your child postpones homework AND shows the same delay pattern with chores or getting ready, it's often connected — a broader task-initiation challenge, not laziness about schoolwork.",
    keywords: ['procrastination', 'homework', 'avoidance'],
    perspectives: {
      clinician:
        'Executive-function specialists treat task initiation as a distinct, teachable skill — the same one that makes chores or getting ready hard to start — not a character flaw, and it typically strengthens with practice and consistent external structure.',
    },
    culturalLens: [
      {
        region: 'High-pressure academic cultures (e.g. East Asia)',
        note: 'In education systems with intense academic competition, structured study time is often built into the daily schedule from a young age, which can reduce negotiation around when homework starts even as it raises other pressures.',
      },
      {
        region: 'Nordic and Western supportive-parenting cultures',
        note: 'Parents are often encouraged to act as a low-pressure homework companion rather than an enforcer, an approach linked to less conflict around getting started.',
      },
      {
        region: 'Collectivist family structures',
        note: 'Older siblings or extended family often share homework supervision, spreading the daily prompting across more than one person.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'cant-sit-still',
    topicNumber: 2,
    title: "Why Kids Can't Sit Still During Homework",
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Struggle to Sit Still',
      trailing: 'During Homework Time?',
    },
    quote: 'Can I stand up?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'sit-still',
    reassurance: "It's common — and usually not defiance or lack of discipline!",
    explanation:
      'Most of the time, movement actually helps their brain stay focused, not distracted.',
    reasons: [
      {
        icon: '🏃',
        title: 'Need for Movement',
        description: 'Physical movement can help the brain stay alert and organized.',
      },
      {
        icon: '⏱️',
        title: 'Long Stillness Is Hard',
        description: 'Sitting still for extended stretches is genuinely difficult at this age.',
      },
      {
        icon: '⚡',
        title: 'Excess Energy',
        description: 'After a day sitting at school, the body may simply need to move.',
      },
      {
        icon: '😴',
        title: 'Understimulating Task',
        description:
          "A task that isn't engaging can trigger restlessness as the brain seeks input.",
      },
      {
        icon: '🌀',
        title: 'Sensory Seeking',
        description: 'Some kids seek movement or fidgeting to help themselves concentrate.',
      },
      {
        icon: '🪑',
        title: 'Uncomfortable Seating',
        description: 'An uncomfortable chair or desk height makes sitting physically unpleasant.',
      },
      {
        icon: '😟',
        title: 'Anxiety or Overwhelm',
        description: 'Restlessness can be a physical sign of feeling anxious about a task.',
      },
      {
        icon: '🌟',
        title: 'Individual Temperament',
        description: 'Some children are naturally more active and need more movement daily.',
      },
    ],
    concerns: [
      'Inability to stay seated across many settings, not just homework',
      'Constant fidgeting significantly disrupting completion',
      'Paired with difficulty following instructions generally',
      'Restlessness noticeably beyond same-age peers',
      'Impacting friendships or classroom functioning',
    ],
    professionalGuidance:
      "If restlessness is significant across many settings and affecting daily functioning, it's worth discussing with a pediatrician.",
    strategies: [
      'Allow standing or movement breaks between tasks',
      'Offer a wobble cushion or stand-up desk option',
      'Break work into short chunks with physical breaks between',
      'Provide a fidget tool for hands during focused work',
    ],
    routine: [
      { icon: '📝', label: 'Sit + start task' },
      { icon: '⏳', label: 'Work 10 min' },
      { icon: '🤸', label: 'Movement break' },
      { icon: '🔄', label: 'Back to task' },
    ],
    insight:
      "If sitting still is hard during homework AND your child shows the same restlessness at meals or in the car, it's often connected — a broader need for movement, not a discipline issue.",
    keywords: ['fidgeting', 'restless', 'movement', 'attention'],
    perspectives: {
      clinician:
        "Occupational therapists often describe movement during focused tasks as self-regulation, not misbehavior — some children's brains genuinely organize attention better with input like standing, rocking, or fidgeting.",
    },
    culturalLens: [
      {
        region: 'Play-based and outdoor-focused education cultures',
        note: 'Cultures that build regular movement breaks into the school day tend to treat restlessness during focused work as an expected need to plan around, not a behavior to eliminate.',
      },
      {
        region: 'High-structure academic cultures',
        note: 'Cultures with longer expected periods of seated, quiet study tend to introduce explicit sitting-stamina expectations earlier, sometimes with less tolerance for movement during work.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Occupational Therapy Association'],
  },
  {
    id: 'getting-distracted',
    topicNumber: 3,
    title: 'Why Kids Keep Getting Distracted During Homework',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Keep Getting Distracted',
      trailing: 'During Homework Time?',
    },
    quote: 'Wait, what was I doing?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'distracted',
    reassurance: "It's common — and usually not a lack of effort!",
    explanation:
      'Most of the time, attention naturally drifts when a task feels effortful or unengaging.',
    reasons: [
      {
        icon: '⏳',
        title: 'Developing Attention Span',
        description: 'Sustained attention is a skill that takes years to fully mature.',
      },
      {
        icon: '🔊',
        title: 'Environmental Distractions',
        description: 'Noise, siblings, or a busy room easily pull focus away.',
      },
      {
        icon: '📊',
        title: 'Task Difficulty Mismatch',
        description: "Work that's too hard or too easy is more likely to lose attention.",
      },
      {
        icon: '🥱',
        title: 'Mental Fatigue',
        description: 'After a full school day, sustained focus becomes harder to maintain.',
      },
      {
        icon: '💭',
        title: 'Internal Distraction',
        description: 'Their own thoughts can be just as distracting as external noise.',
      },
      {
        icon: '📱',
        title: 'Digital Pull',
        description: 'Nearby devices compete strongly for attention, even when off.',
      },
      {
        icon: '😐',
        title: 'Low Subject Interest',
        description: 'Less engaging material is naturally harder to stay focused on.',
      },
      {
        icon: '🍎',
        title: 'Hunger or Tiredness',
        description: "Basic physical needs affect the brain's ability to concentrate.",
      },
    ],
    concerns: [
      'Attention difficulty affecting many areas, not just homework',
      'Significantly more distractible than same-age peers',
      'Paired with impulsivity or trouble following instructions',
      'Distraction preventing completion even of short tasks',
      'Affecting friendships or classroom performance broadly',
    ],
    professionalGuidance:
      "If distractibility is significant and widespread across settings, it's worth discussing with a teacher or pediatrician.",
    strategies: [
      'Create a quiet, consistent homework space',
      'Keep devices out of sight during work time',
      'Break homework into short, focused chunks',
      'Use a visible timer so focus periods feel finite',
    ],
    routine: [
      { icon: '🧹', label: 'Clear the space' },
      { icon: '⏳', label: 'Set short timer' },
      { icon: '🎯', label: 'Focus burst' },
      { icon: '🔄', label: 'Check in + reset' },
    ],
    insight:
      "If focus drifts during homework AND your child shows similar distractibility during meals or chores, it's often connected — a broader attention pattern, not a lack of effort.",
    keywords: ['distraction', 'focus', 'attention span'],
    perspectives: {
      teacher:
        'Teachers see the same drift during independent classwork — short, clearly bounded work periods hold attention far better than open-ended ones, at home or at school.',
    },
    culturalLens: [
      {
        region: 'Multigenerational and shared-living households',
        note: 'Where several family members share living space, a dedicated quiet corner for homework is often more realistic than a separate room, and is treated as sufficient rather than a compromise.',
      },
      {
        region: 'Cultures with strict household device rules',
        note: 'Some cultures set firm, community-reinforced norms around device use during study hours, which removes a source of daily negotiation entirely rather than relying on a single household to enforce it.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'homework-takes-hours',
    topicNumber: 4,
    title: 'Why Homework Takes Hours to Finish',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Take Hours to Finish',
      trailing: 'Homework That Should Take Minutes?',
    },
    quote: "I'm still not done...",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'takes-hours',
    reassurance: "It's common — and usually not stalling on purpose!",
    explanation: 'Most of the time, frequent small interruptions add up to a much longer task.',
    reasons: [
      {
        icon: '🌀',
        title: 'Frequent Micro-Distractions',
        description: 'Small interruptions add up, stretching a short task over a long time.',
      },
      {
        icon: '🔁',
        title: 'Task Avoidance Loops',
        description: 'Anxiety about the task can lead to repeated starting and stopping.',
      },
      {
        icon: '🎯',
        title: 'Perfectionism',
        description: 'Redoing work repeatedly to get it "just right" adds significant time.',
      },
      {
        icon: '⏱️',
        title: 'Difficulty Estimating Time',
        description: "Kids often don't yet judge how long a task should realistically take.",
      },
      {
        icon: '📚',
        title: 'Skill Gaps',
        description: 'If foundational skills are shaky, even simple tasks take much longer.',
      },
      {
        icon: '🔋',
        title: 'Low Stamina',
        description: 'Sustained mental effort is tiring and harder to maintain over time.',
      },
      {
        icon: '📱',
        title: 'Multitasking Attempts',
        description: 'Doing homework alongside other activities slows everything down.',
      },
      {
        icon: '😣',
        title: 'Emotional Overwhelm',
        description: 'Feeling overwhelmed by the whole task can stall progress entirely.',
      },
    ],
    concerns: [
      'Simple tasks consistently taking hours despite support',
      'Clear signs of skill gaps beneath the slowness',
      'Significant emotional distress during homework time',
      'Little improvement even with a quiet, distraction-free space',
      'Sleep or family time being consistently displaced',
    ],
    professionalGuidance:
      "If homework consistently consumes hours despite support, it's worth discussing learning support with the school.",
    strategies: [
      'Break homework into short, timed chunks with breaks',
      'Remove multitasking temptations during work time',
      'Praise effort and progress, not just completion',
      'Check in briefly rather than hovering the whole time',
    ],
    routine: [
      { icon: '🧩', label: 'Break into chunks' },
      { icon: '⏳', label: 'Timer per chunk' },
      { icon: '🚶', label: 'Short break' },
      { icon: '✅', label: 'Repeat until done' },
    ],
    insight:
      "If homework consistently runs long AND your child shows similar slowness with other tasks, it's often connected — a broader pacing challenge, not stalling on purpose.",
    keywords: ['slow', 'pacing', 'homework duration'],
    perspectives: {
      teacher:
        'Teachers often see the same task stretch out in class when a student is quietly stuck rather than genuinely working — checking in partway through is usually more useful than waiting for the whole thing to be finished.',
    },
    culturalLens: [
      {
        region: 'Cultures with heavier homework loads',
        note: 'Where nightly homework volume is culturally high, families more often build in scheduled breaks as a standard part of the routine rather than treating a long session as unusual.',
      },
      {
        region: 'Cultures with lighter, more flexible homework norms',
        note: 'Where homework load is lighter by design, a task taking unexpectedly long is more likely to be read as a signal to pause and revisit later rather than push through.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'National Association of School Psychologists'],
  },
  {
    id: 'avoiding-difficult-subjects',
    topicNumber: 5,
    title: 'Why Kids Avoid Difficult Subjects',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Avoid Difficult Subjects',
      trailing: 'Every Chance They Get?',
    },
    quote: 'Can I do this one later?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'difficult-subjects',
    reassurance: "It's common — and usually not dislike of the subject itself!",
    explanation:
      'Most of the time, avoidance protects against the uncomfortable feeling of struggling.',
    reasons: [
      {
        icon: '😰',
        title: 'Fear of Failure',
        description: 'Avoiding a hard subject sidesteps the risk of getting it wrong.',
      },
      {
        icon: '💭',
        title: 'Past Negative Experience',
        description: 'A previous struggle or criticism can create lasting avoidance.',
      },
      {
        icon: '📉',
        title: 'Skill Gaps',
        description: 'Missing foundational skills makes new material feel much harder.',
      },
      {
        icon: '🪞',
        title: 'Low Self-Efficacy',
        description: 'Believing "I\'m just not good at this" reduces willingness to try.',
      },
      {
        icon: '👥',
        title: 'Comparison to Peers',
        description: 'Feeling behind classmates can make a subject feel discouraging.',
      },
      {
        icon: '🐢',
        title: 'Slower Processing Speed',
        description: 'Needing more time to process can make a subject feel harder than it is.',
      },
      {
        icon: '🏆',
        title: 'Few Confidence-Building Wins',
        description: 'Without small successes, motivation to try again drops.',
      },
      {
        icon: '❌',
        title: 'Fear of Being Wrong',
        description: 'Fear of visible mistakes can outweigh willingness to attempt.',
      },
    ],
    concerns: [
      'Avoidance covering nearly all schoolwork, not one subject',
      'Visible anxiety or shutdown at just the mention of the subject',
      "Significant, sustained gap in that subject's skills",
      'Avoidance despite consistent one-on-one support',
      'Self-critical talk about being "bad" or "stupid" at it',
    ],
    professionalGuidance:
      "If avoidance is paired with strong self-critical talk or shutdown, it's worth discussing learning support with the school.",
    strategies: [
      'Start with an easy win in that subject to build confidence',
      'Break the subject into small, achievable steps',
      'Praise effort and strategy, not just correct answers',
      'Normalize struggle as part of learning, not failure',
    ],
    routine: [
      { icon: '⭐', label: 'Easy warm-up' },
      { icon: '🧩', label: 'One small step' },
      { icon: '📖', label: 'Short practice' },
      { icon: '🎉', label: 'Celebrate progress' },
    ],
    insight:
      "If one subject is consistently avoided AND your child shows self-doubt talk elsewhere too, it's often connected — a broader confidence pattern, not dislike of the subject.",
    keywords: ['avoidance', 'confidence', 'fear of failure'],
    perspectives: {
      teacher:
        'Teachers can usually tell whether avoidance is about the subject itself or a specific gap from an earlier unit — a quick skills check often reveals a fixable gap rather than a fixed dislike.',
      clinician:
        "Psychologists distinguish healthy short-term avoidance from a self-efficacy belief hardening into 'I'm just bad at this' — the earlier a small, genuine win happens, the easier that belief is to unwind.",
    },
    culturalLens: [
      {
        region: 'Growth-mindset-oriented education cultures',
        note: 'Some school systems explicitly teach that ability grows with effort, which research links to more willingness to attempt difficult subjects rather than avoid them.',
      },
      {
        region: 'High-stakes examination cultures',
        note: 'Where academic ranking carries heavy social weight, avoidance of a weak subject can be reinforced by a stronger fear of visible comparison to peers.',
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'hating-reading',
    topicNumber: 6,
    title: 'Why Kids Hate Reading',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Hate Reading',
      trailing: 'Even Books They Might Enjoy?',
    },
    quote: 'Do I have to read?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'reading',
    reassurance: "It's common — and usually not a lack of imagination!",
    explanation:
      "Most of the time, reading feels effortful in a way that other activities don't yet.",
    reasons: [
      {
        icon: '🔤',
        title: 'Decoding Still Effortful',
        description: 'For many kids, sounding out words still takes real conscious effort.',
      },
      {
        icon: '📚',
        title: 'Mismatched Book Level',
        description: "A book that's too hard or too easy quickly kills interest.",
      },
      {
        icon: '🐢',
        title: 'Slower Reading Speed',
        description: 'Comparing their pace to faster readers can feel discouraging.',
      },
      {
        icon: '🧠',
        title: 'Attention Demands',
        description:
          'Reading requires sustained focus that competes with more stimulating activities.',
      },
      {
        icon: '💭',
        title: 'Past Negative Experience',
        description: 'Frequent correction while reading aloud can create lasting reluctance.',
      },
      {
        icon: '😐',
        title: 'Low Interest in Available Books',
        description: 'Assigned books may not match what actually interests them.',
      },
      {
        icon: '📱',
        title: 'Comparison to Screens',
        description: 'Fast-paced digital entertainment can make reading feel slow.',
      },
      {
        icon: '🔍',
        title: 'Possible Reading Difficulty',
        description: 'For some kids, reading is harder due to an underlying processing difference.',
      },
    ],
    concerns: [
      'Reading noticeably behind grade-level expectations',
      'Avoidance even of books on topics they love',
      "Difficulty that doesn't improve with easier material",
      'Signs of letter or word confusion beyond typical age range',
      'Strong distress specifically tied to reading aloud',
    ],
    professionalGuidance:
      "If reading difficulty seems disproportionate to age and doesn't ease with support, it's worth a reading assessment with the school.",
    strategies: [
      'Let them choose books on topics they genuinely like',
      'Try audiobooks alongside print to build interest',
      'Read together, taking turns by page or paragraph',
      'Keep reading sessions short and low-pressure at first',
    ],
    routine: [
      { icon: '📖', label: 'Pick a book together' },
      { icon: '👀', label: 'Read a few pages' },
      { icon: '💬', label: 'Talk about it' },
      { icon: '⏹️', label: "Stop before it's a chore" },
    ],
    insight:
      "If reading is a struggle AND your child avoids other focus-heavy tasks too, it's often connected — a broader attention or skill-building need, not dislike of stories.",
    keywords: ['reading', 'books', 'literacy'],
    perspectives: {
      clinician:
        'Reading specialists note that persistent difficulty sounding out words, well past when classmates found it easy, is one of the clearer early signs worth a formal reading assessment — not something to wait out.',
      teacher:
        'Teachers often see reading reluctance ease dramatically once a child finds one genuinely engaging series or topic — the skill practice happens almost as a side effect of wanting to keep reading.',
    },
    culturalLens: [
      {
        region: 'Oral storytelling traditions',
        note: 'In cultures with strong oral storytelling traditions, being read to and telling stories aloud are valued alongside independent reading, which can ease pressure on a reluctant early reader.',
      },
      {
        region: 'Multilingual households',
        note: 'Children learning to read in a second or third language often decode more slowly at first for entirely typical reasons, not a reading difficulty.',
      },
    ],
    sources: ['International Dyslexia Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'careless-mistakes',
    topicNumber: 7,
    title: 'Why Kids Make Careless Mistakes',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Make Careless Mistakes',
      trailing: 'On Work They Actually Know?',
    },
    quote: 'Oops, I read that wrong.',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'careless-mistakes',
    reassurance: "It's common — and usually not a lack of knowledge!",
    explanation:
      "Most of the time, it's attention to detail under speed or fatigue, not understanding.",
    reasons: [
      {
        icon: '🏃',
        title: 'Rushing to Finish',
        description: 'Wanting to be done quickly can override careful checking.',
      },
      {
        icon: '💭',
        title: 'Attention Lapses',
        description: 'Brief lapses in focus are common, especially on repetitive work.',
      },
      {
        icon: '🧠',
        title: 'Working Memory Limits',
        description: 'Holding multiple steps in mind at once can cause small slips.',
      },
      {
        icon: '🥱',
        title: 'Mental Fatigue',
        description: 'Errors often increase as sustained effort wears down focus.',
      },
      {
        icon: '✔️',
        title: 'Skipping Double-Checking',
        description: "Many kids haven't yet built the habit of reviewing their work.",
      },
      {
        icon: '😐',
        title: 'Low Task Engagement',
        description: 'Boring or repetitive work invites more slips.',
      },
      {
        icon: '⏱️',
        title: 'Anxiety Under Time Pressure',
        description: 'Feeling rushed can increase errors even on known material.',
      },
      {
        icon: '✍️',
        title: 'Handwriting or Motor Slips',
        description: "Physical writing mistakes can look like knowledge errors but aren't.",
      },
    ],
    concerns: [
      'Careless errors persisting even when slowed down deliberately',
      'Pattern of errors suggesting a true skill gap, not carelessness',
      'Significant frustration or shutdown after mistakes',
      'Errors affecting confidence broadly, not just grades',
      'No improvement with review or double-checking habits',
    ],
    professionalGuidance:
      "If errors persist even at a slower pace, it's worth checking whether it's a skill gap rather than carelessness.",
    strategies: [
      'Encourage a quick double-check pass before finishing',
      'Break work into shorter sections to reduce fatigue',
      'Read instructions aloud together before starting',
      'Praise accuracy, not just speed of completion',
    ],
    routine: [
      { icon: '🗣️', label: 'Read instructions aloud' },
      { icon: '✏️', label: 'Work the section' },
      { icon: '🔍', label: 'Quick double-check' },
      { icon: '➡️', label: 'Move to next' },
    ],
    insight:
      "If careless errors show up in homework AND your child rushes through other tasks too, it's often connected — a broader pacing pattern, not a knowledge gap.",
    keywords: ['mistakes', 'accuracy', 'carelessness'],
    perspectives: {
      teacher:
        'Teachers can usually tell the difference on paper — errors that vanish when a student is asked to slow down and redo the same problem are pacing, not a knowledge gap; errors that repeat even slowed down are worth a closer look.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong emphasis on precision and accuracy',
        note: 'Some education systems explicitly teach double-checking as a taught step of the work, not an optional extra, which can reduce careless errors over time.',
      },
      {
        region: 'Cultures that de-emphasize grades for young learners',
        note: 'Where formal grading starts later, small errors on early schoolwork attract less scrutiny by design, framing them as a normal part of practicing rather than a mark against the child.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'National Association of School Psychologists'],
  },
  {
    id: 'forgetting-what-learned',
    topicNumber: 8,
    title: 'Why Kids Forget What They Learned',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Forget What They Learned',
      trailing: 'Just a Day or Two Later?',
    },
    quote: 'Wait, we learned that?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'forgetting',
    reassurance: "It's common — and usually not a memory problem!",
    explanation:
      "Most of the time, it's about how information was practiced, not whether it was understood.",
    reasons: [
      {
        icon: '🔁',
        title: "Single Exposure Isn't Enough",
        description: 'New information often needs to be revisited several times to stick.',
      },
      {
        icon: '🧠',
        title: 'No Active Recall Practice',
        description: 'Just reading or listening is weaker than actively retrieving information.',
      },
      {
        icon: '📚',
        title: 'Information Overload',
        description: 'A full school day introduces a lot of new material at once.',
      },
      {
        icon: '🔗',
        title: 'Lack of Real-World Connection',
        description: 'Facts stick better when linked to something meaningful.',
      },
      {
        icon: '😴',
        title: 'Sleep and Memory',
        description: 'Memory formation relies heavily on adequate sleep.',
      },
      {
        icon: '📺',
        title: 'Passive Learning Style',
        description: 'Rereading notes is less effective than testing oneself.',
      },
      {
        icon: '😰',
        title: 'Anxiety Interfering with Recall',
        description: 'Stress can block access to information a child actually knows.',
      },
      {
        icon: '🕐',
        title: 'Different Learning Pace',
        description: 'Some kids need more repetition to build lasting memory.',
      },
    ],
    concerns: [
      'Forgetting affecting basic, frequently-practiced skills',
      'Significant difficulty across most subjects, not just one',
      'Paired with broader difficulty following multi-step instructions',
      'No improvement even with repeated practice over time',
      'Forgetting affecting daily functioning beyond school',
    ],
    professionalGuidance:
      "If forgetting is severe and widespread despite repetition, it's worth discussing learning support with the school.",
    strategies: [
      'Use short review sessions spaced out over several days',
      'Practice active recall — quiz instead of just re-reading',
      'Connect new facts to things they already care about',
      'Protect consistent, adequate sleep for memory consolidation',
    ],
    routine: [
      { icon: '📖', label: 'Learn it' },
      { icon: '❓', label: 'Quiz same day' },
      { icon: '🔁', label: 'Review next day' },
      { icon: '🗓️', label: 'Review again in a week' },
    ],
    insight:
      "If your child forgets material quickly AND seems to need more repetition generally, it's often connected — a broader learning pace, not a memory problem.",
    keywords: ['memory', 'forgetting', 'retention', 'studying'],
    perspectives: {
      teacher:
        "Teachers see this constantly with material taught once and never revisited — quizzing a child on yesterday's lesson for two minutes tonight does more for retention than an hour of rereading notes next week.",
      clinician:
        'Sleep researchers point out that memory consolidation happens largely during sleep, so a child who studies well but sleeps too little often forgets material that was genuinely understood at the time.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong rote-learning traditions',
        note: 'Some education systems build repeated recitation and practice into daily schooling by default, which research broadly supports as effective — even though it can look old-fashioned next to newer teaching styles.',
      },
      {
        region: 'Cultures with later, more relaxed bedtimes',
        note: 'Where later bedtimes are culturally accepted, families may need to be more deliberate about protecting the sleep window closest to a study session, since that is when consolidation matters most.',
      },
    ],
    sources: ['American Psychological Association', 'Sleep Foundation'],
  },
  {
    id: 'giving-up-quickly',
    topicNumber: 9,
    title: 'Why Kids Give Up Quickly',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Give Up So Quickly',
      trailing: 'When Homework Gets Hard?',
    },
    quote: "I can't do this!",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'give-up',
    reassurance: "It's common — and usually not a lack of effort or grit!",
    explanation:
      'Most of the time, giving up quickly protects against the discomfort of struggling.',
    reasons: [
      {
        icon: '😰',
        title: 'Fear of Failure',
        description: 'Stopping early avoids the risk of trying and still getting it wrong.',
      },
      {
        icon: '😤',
        title: 'Low Frustration Tolerance',
        description: 'Managing frustration is a skill still being built at this age.',
      },
      {
        icon: '🪞',
        title: 'Fixed Mindset About Ability',
        description: 'Believing ability is fixed makes struggle feel pointless.',
      },
      {
        icon: '💭',
        title: 'Past Experience of Struggle',
        description: 'Previous hard tasks that ended badly can shape quick avoidance.',
      },
      {
        icon: '🌀',
        title: 'Overwhelm from Task Size',
        description: "A task that looks huge can feel impossible before it's even started.",
      },
      {
        icon: '🪫',
        title: 'Low Self-Efficacy',
        description: 'Not believing they can succeed reduces willingness to keep trying.',
      },
      {
        icon: '🎮',
        title: 'Seeking Quick Relief',
        description: 'Giving up quickly ends the uncomfortable feeling fast.',
      },
      {
        icon: '🧩',
        title: 'Possible Skill Gap',
        description: 'If a task is genuinely too hard, giving up may reflect a real mismatch.',
      },
    ],
    concerns: [
      'Giving up on nearly everything challenging, not just homework',
      'Strong self-critical talk after any struggle',
      'Giving up even with support and encouragement present',
      'Avoidance of all new or unfamiliar tasks broadly',
      'Signs of shutdown rather than simple frustration',
    ],
    professionalGuidance:
      "If giving up is paired with strong self-critical talk or broad avoidance, it's worth discussing with a teacher or counselor.",
    strategies: [
      'Break tasks into smaller, clearly achievable steps',
      'Praise effort and strategy, not just getting it right',
      'Normalize struggle as a normal part of learning',
      'Offer support at the first sign of frustration, before shutdown',
    ],
    routine: [
      { icon: '🧩', label: 'Small first step' },
      { icon: '✏️', label: 'Try it' },
      { icon: '🙋', label: 'If stuck, ask for help' },
      { icon: '🎉', label: 'Celebrate the attempt' },
    ],
    insight:
      "If your child gives up quickly on homework AND shows the same pattern with new games or activities, it's often connected — a broader frustration-tolerance pattern, not laziness.",
    keywords: ['giving up', 'frustration', 'persistence', 'grit'],
    perspectives: {
      teacher:
        "Teachers who explicitly praise a student's strategy and effort — not just correct answers — consistently see more willingness to keep trying after a wrong turn, both in class and reported at home.",
      clinician:
        "Psychologists distinguish typical frustration intolerance, which eases with practice and support, from a fixed belief that ability can't grow — the second responds well to hearing specific stories of your own struggle and improvement.",
    },
    culturalLens: [
      {
        region: 'Growth-mindset-oriented education cultures',
        note: 'Explicitly praising effort and strategy over innate ability is a deliberate teaching practice in some school systems, and is associated with children persisting longer through difficulty.',
      },
      {
        region: 'Cultures emphasizing quiet perseverance',
        note: 'Some cultural traditions frame calm, steady effort through difficulty as a core virtue, which can support persistence — though it can also make a child reluctant to voice frustration or ask for help.',
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'ill-do-it-later',
    topicNumber: 10,
    title: 'Why Kids Say "I\'ll Do It Later"',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Say "I\'ll Do It Later"',
      trailing: 'About Almost Everything?',
    },
    quote: 'Later, I promise!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'do-it-later',
    reassurance: "It's common — and usually not a broken promise!",
    explanation: 'Most of the time, "later" genuinely feels far away and less real than right now.',
    reasons: [
      {
        icon: '🎮',
        title: 'Present Bias',
        description:
          'Immediate activities feel far more real and rewarding than a future deadline.',
      },
      {
        icon: '⏳',
        title: 'Poor Time Estimation',
        description: 'Kids often underestimate how long "later" actually is.',
      },
      {
        icon: '😖',
        title: 'Task Aversion',
        description: '"Later" delays the discomfort of starting something effortful.',
      },
      {
        icon: '🗂️',
        title: 'Executive Function Gaps',
        description: 'Planning and initiating tasks are skills still under construction.',
      },
      {
        icon: '🔁',
        title: 'Learned Habit',
        description: 'If "later" has worked before without consequence, it becomes automatic.',
      },
      {
        icon: '🌀',
        title: 'Overwhelm at Starting',
        description: 'The idea of starting can feel bigger than the task itself.',
      },
      {
        icon: '❓',
        title: 'No Clear Plan for Later',
        description: 'Without a specific time, "later" has no real trigger to happen.',
      },
      {
        icon: '😐',
        title: 'Low Task Motivation',
        description: 'If the task feels unimportant to them, delay feels harmless.',
      },
    ],
    concerns: [
      '"Later" consistently never arrives despite reminders',
      'Pattern spreading to responsibilities with real consequences',
      'Significant conflict or distress around follow-through',
      'No improvement even with clear schedules and reminders',
      'Avoidance covering nearly all effortful tasks broadly',
    ],
    professionalGuidance:
      "If follow-through doesn't improve with structure and reminders, it's worth exploring executive function support.",
    strategies: [
      'Replace "later" with a specific time or trigger',
      'Break the task down so starting feels smaller',
      'Use a visible schedule or checklist together',
      'Praise starting promptly, not just finishing',
    ],
    routine: [
      { icon: '🕐', label: 'Set a specific time' },
      { icon: '🧩', label: 'Small first step' },
      { icon: '▶️', label: 'Start right then' },
      { icon: '🎉', label: 'Praise starting' },
    ],
    insight:
      'If "later" keeps slipping away AND your child shows the same pattern with chores or getting ready, it\'s often connected — a broader planning challenge, not empty promises.',
    keywords: ['procrastination', 'planning', 'follow-through'],
    perspectives: {
      clinician:
        "Executive-function specialists note that a vague future intention rarely converts into action on its own — pairing 'later' with a specific time and place is one of the most consistently effective, evidence-supported fixes.",
    },
    culturalLens: [
      {
        region: 'Cultures with strong routine and schedule orientation',
        note: 'Some cultures build very predictable daily schedules into family life from early childhood, which gives "later" a concrete, expected moment to happen rather than leaving it open-ended.',
      },
      {
        region: 'Cultures with more flexible, present-focused time norms',
        note: "Where daily life is organized more flexibly around events than the clock, a fixed 'homework time' may need to be introduced deliberately rather than assumed.",
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
];
