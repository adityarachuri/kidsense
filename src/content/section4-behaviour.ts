import type { Topic } from '../types/content';

/**
 * Section 4: Behaviour.
 */
export const behaviourTopics: Topic[] = [
  {
    id: 'talking-back',
    topicNumber: 1,
    title: 'Why Do Kids Talk Back?',
    heading: {
      lead: 'Why Do Kids',
      emphasis: 'Talk Back',
      trailing: 'Instead of Just Listening?',
    },
    quote: "That's not fair, I don't want to!",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'talking-back',
    reassurance: "It's common — and usually not disrespect on purpose!",
    explanation:
      "Most of the time, it's an underdeveloped filter between feeling upset and speaking it out loud, not a lack of respect.",
    reasons: [
      {
        icon: '🧠',
        title: 'Immature Impulse Control',
        description:
          "The brain's brake on blurting out a reaction is still years from fully developing.",
      },
      {
        icon: '🗣️',
        title: 'Practicing Independence',
        description: 'Pushing back verbally is often a clumsy first attempt at having a voice.',
      },
      {
        icon: '😤',
        title: 'Frustration Overflow',
        description: 'Backtalk can be frustration spilling out through the only outlet at hand.',
      },
      {
        icon: '🪞',
        title: 'Modeling What They Hear',
        description: 'Kids often echo the sharp tone they hear modeled around them.',
      },
      {
        icon: '🕹️',
        title: 'Testing Where the Line Is',
        description: 'Pushing back with words is a normal way of mapping out what is firm.',
      },
      {
        icon: '😴',
        title: 'Low Reserves',
        description: 'Tired or hungry kids have far less self-control left for a polite tone.',
      },
      {
        icon: '🎯',
        title: 'Wanting the Last Word',
        description: 'Feeling unheard makes some kids fight to have their point land.',
      },
      {
        icon: '💥',
        title: 'Emotional Flooding',
        description: 'Once upset, the thinking brain goes offline before words can be filtered.',
      },
    ],
    concerns: [
      'Backtalk that includes threats or physical aggression',
      'Disrespect in nearly every interaction, not just during conflict',
      'No response to calm, consistent limits over several weeks',
      'A sudden sharp increase in hostility toward one parent',
      'Backtalk paired with signs of high stress or anxiety',
    ],
    professionalGuidance:
      "If backtalk regularly escalates into aggression or seems tied to high anxiety, a pediatrician or child therapist can help sort out what's underneath it.",
    strategies: [
      'Stay calm and low-key rather than matching their volume',
      "Name the feeling first: 'You're frustrated — say it without the tone'",
      "Offer a redo: 'Try that again, more respectfully'",
      'Praise the moments they express frustration without backtalk',
    ],
    routine: [
      { icon: '😤', label: 'Pause, don’t react' },
      { icon: '💬', label: 'Name the feeling' },
      { icon: '🔁', label: 'Ask for a redo' },
      { icon: '👍', label: 'Notice the effort' },
    ],
    insight:
      "If backtalk shows up alongside meltdowns over small changes or trouble following instructions, it's often one thing: a still-developing self-control system, not a discipline failure.",
    keywords: ['backtalk', 'disrespect', 'arguing', 'attitude', 'defiance'],
    perspectives: {
      clinician:
        "Child psychologists point out that the brain circuitry that inhibits a sharp reaction develops gradually through the early teen years — a calm, consistent response models the very regulation skill that's still under construction.",
    },
    culturalLens: [
      {
        region: 'Cultures with strong respect-for-elders norms',
        note: 'These cultures often draw a firmer, earlier line around tone with adults, while the underlying impulse-control skill still takes years to mature at the same pace as everywhere else.',
      },
      {
        region: 'Individualist Western cultures',
        note: 'Some Western parenting approaches deliberately make room for children to voice disagreement, treating a respectfully-argued point as a skill to nurture rather than suppress.',
      },
    ],
    sources: ['CDC', 'American Academy of Pediatrics'],
  },
  {
    id: 'not-listening',
    topicNumber: 2,
    title: "Why Don't Kids Listen the First Time?",
    heading: {
      lead: "Why Don't Kids Listen",
      emphasis: 'the First Time',
      trailing: 'No Matter How Many Times You Ask?',
    },
    quote: 'Wait, what did you say?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'not-listening',
    reassurance: "It's common — and usually not deliberate ignoring!",
    explanation:
      "Most of the time, it's genuine inattention or deep focus elsewhere, not a decision to tune a parent out.",
    reasons: [
      {
        icon: '🎮',
        title: 'Deep Focus Elsewhere',
        description: 'A truly absorbed brain filters out background sound, including instructions.',
      },
      {
        icon: '🔁',
        title: 'Habituation to Repeats',
        description:
          "If requests are usually repeated, a child's brain learns the first one isn't final.",
      },
      {
        icon: '🧩',
        title: 'Processing Delay',
        description:
          'It can take several extra seconds for a spoken instruction to fully register.',
      },
      {
        icon: '📢',
        title: 'Too Many Steps at Once',
        description: 'A multi-part instruction can overload working memory before it is finished.',
      },
      {
        icon: '👂',
        title: 'Distance and Volume',
        description: 'Instructions called from another room are easy to miss, not easy to ignore.',
      },
      {
        icon: '🕹️',
        title: 'Autonomy Push',
        description: 'A brief pause before complying can be a small, normal bid for control.',
      },
      {
        icon: '😴',
        title: 'Fatigue or Overstimulation',
        description: 'A tired or overloaded brain has less capacity to register and act on speech.',
      },
      {
        icon: '🎯',
        title: 'Unclear What "Now" Means',
        description: 'Young kids often lack a strong sense of urgency behind an adult’s tone.',
      },
    ],
    concerns: [
      'Not responding to name being called across many settings',
      'Missing sounds or instructions consistently, even up close',
      'Difficulty following instructions paired with delayed speech',
      'No improvement despite calm, direct, one-step requests',
      'Teachers separately raising the same concern',
    ],
    professionalGuidance:
      'If a child rarely responds to their name or spoken instructions across settings, a hearing check and developmental screening are worth ruling out early.',
    strategies: [
      'Get close and make eye contact before speaking',
      'Give one step at a time instead of a chained list',
      'Ask them to repeat the instruction back',
      'Use a consistent cue — like a hand on the shoulder — before speaking',
    ],
    routine: [
      { icon: '🚶', label: 'Walk over' },
      { icon: '👀', label: 'Get eye contact' },
      { icon: '💬', label: 'One clear step' },
      { icon: '🔁', label: 'Have them repeat it' },
    ],
    insight:
      "If not listening shows up alongside trouble with multi-step instructions, it's often the same root cause — processing load, not defiance.",
    keywords: ['not listening', 'ignoring', 'inattention', 'instructions'],
    perspectives: {
      clinician:
        'Developmental specialists note that processing delay and selective attention are normal at this age — getting close and making eye contact before speaking measurably improves first-time compliance more than repeating the request louder.',
    },
    culturalLens: [
      {
        region: 'Cultures with communal childcare',
        note: 'Where several adults share supervision, a child may learn that instructions get repeated or reinforced by whoever is nearest, reducing urgency around any single first request.',
      },
      {
        region: 'Cultures with a strong single-authority-figure model',
        note: 'Where one adult is clearly the primary instruction-giver, a child may respond faster to that specific voice, since there is less ambiguity about whose request is the one that matters.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'public-tantrums',
    topicNumber: 3,
    title: 'Why Do Meltdowns Happen in Public?',
    heading: {
      lead: 'Why Do Meltdowns',
      emphasis: 'Happen in Public',
      trailing: 'at the Worst Possible Moment?',
    },
    quote: 'I want it NOW!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'public-tantrums',
    reassurance: "It's common — and it isn't a performance for an audience!",
    explanation:
      'Most of the time, a public setting simply stacks extra sensory and emotional load onto a brain that was already close to its limit.',
    reasons: [
      {
        icon: '🛒',
        title: 'Sensory Overload',
        description:
          'Bright lights, noise, and crowds add up fast for a still-developing nervous system.',
      },
      {
        icon: '⏳',
        title: 'Waiting Fatigue',
        description: 'Lines and errands ask for a level of patience many kids have not built yet.',
      },
      {
        icon: '🍽️',
        title: 'Hunger or Low Blood Sugar',
        description: 'An outing that runs past a mealtime quietly erodes self-control.',
      },
      {
        icon: '🚫',
        title: 'A Firm "No" in a New Setting',
        description: 'Limits that hold easily at home can feel harder to accept somewhere new.',
      },
      {
        icon: '👀',
        title: 'Feeling Watched',
        description: "Some kids' distress grows, not shrinks, once they sense an audience.",
      },
      {
        icon: '🔋',
        title: 'Depleted Reserves',
        description: 'A busy day already used up most of the self-regulation available.',
      },
      {
        icon: '🗣️',
        title: 'Limited Words for Big Feelings',
        description: 'Without the vocabulary to explain distress, the body says it instead.',
      },
      {
        icon: '🧠',
        title: 'Immature Emotional Brakes',
        description: 'The brain region that dampens a big reaction is still years from mature.',
      },
    ],
    concerns: [
      'Meltdowns lasting well beyond 20–30 minutes',
      'Frequent self-injury or harm to others during outbursts',
      'No calming even once removed from the trigger',
      'Meltdowns escalating in frequency or intensity over months',
      'Significant distress about most outings, not occasional ones',
    ],
    professionalGuidance:
      "If meltdowns are unusually long, frequent, or don't ease with calming support, a pediatrician can help assess sensory or regulatory needs.",
    strategies: [
      'Plan outings around meals and naps, not against them',
      "Preview what's coming: 'We'll get milk, then leave — no toy today'",
      'Offer a small, calm choice to restore a sense of control',
      'Stay steady rather than negotiating in the moment',
    ],
    routine: [
      { icon: '🗓️', label: 'Preview the plan' },
      { icon: '🍎', label: 'Feed before you go' },
      { icon: '🤏', label: 'Offer a small choice' },
      { icon: '🧘', label: 'Stay calm through it' },
    ],
    insight:
      'If public meltdowns happen mostly on tired or hungry days, the setting is rarely the real trigger — depleted reserves are.',
    keywords: ['tantrum', 'meltdown', 'public', 'store', 'outburst'],
    perspectives: {
      clinician:
        'Pediatricians frame public meltdowns as a capacity issue, not a discipline issue — a child who has used up their self-regulation for the day will melt down regardless of setting, and the store is just where it became visible.',
    },
    culturalLens: [
      {
        region: 'Cultures with communal public spaces',
        note: 'Where children are a very visible, expected part of public life, a meltdown in public tends to draw less social judgment and less pressure on parents to suppress it quickly.',
      },
      {
        region: 'Cultures with high public-behavior expectations',
        note: "Some cultures hold stricter public-behavior norms for children, which can add pressure on parents in the moment even though the child's underlying capacity is the same.",
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'hitting-siblings',
    topicNumber: 4,
    title: 'Why Do Siblings Hit Each Other?',
    heading: {
      lead: 'Why Do Siblings',
      emphasis: 'Hit Each Other',
      trailing: 'Over the Smallest Things?',
    },
    quote: 'He started it!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'hitting-siblings',
    reassurance: "It's common — and it doesn't mean they don't love each other!",
    explanation:
      "Most of the time, it's an undeveloped verbal toolkit for conflict, not genuine hostility between siblings.",
    reasons: [
      {
        icon: '🥊',
        title: 'Body Before Words',
        description: 'When words run out mid-frustration, hands are the fastest tool left.',
      },
      {
        icon: '🧸',
        title: 'Resource Competition',
        description:
          'Sharing space, toys, and attention naturally creates friction between siblings.',
      },
      {
        icon: '📢',
        title: 'Bids for Attention',
        description:
          'Any reaction from a parent, even a scolding one, can feel like attention won.',
      },
      {
        icon: '🪞',
        title: 'Copying What They See',
        description: 'Physical conflict resolution modeled elsewhere gets tried out at home.',
      },
      {
        icon: '🧠',
        title: 'Underdeveloped Impulse Control',
        description:
          'The urge to hit and the ability to stop it develop on very different timelines.',
      },
      {
        icon: '👑',
        title: 'Perceived Unfairness',
        description: 'A sibling getting more of anything can feel like a personal loss.',
      },
      {
        icon: '😤',
        title: 'Built-Up Frustration',
        description:
          'A sibling is often the safest target for frustration from somewhere else entirely.',
      },
      {
        icon: '🔁',
        title: 'A Pattern That Gets Results',
        description: 'If hitting has ever ended a conflict in their favor, it gets tried again.',
      },
    ],
    concerns: [
      'Hitting that causes injury, not just a startled reaction',
      'One sibling consistently and deliberately targeted',
      'Aggression that is escalating rather than easing with age',
      'No response to calm, consistent, repeated intervention',
      'Aggression appearing well beyond the sibling relationship',
    ],
    professionalGuidance:
      'If aggression is frequent, injury-causing, or not improving with consistent guidance, a pediatrician or family therapist can help build a targeted plan.',
    strategies: [
      'Separate first, calm second, talk third — in that order',
      'Coach the words: "Say ‘stop, that’s mine’ instead"',
      'Give both siblings dedicated one-on-one time daily',
      'Avoid assigning blame before both sides are heard',
    ],
    routine: [
      { icon: '✋', label: 'Separate calmly' },
      { icon: '🧘', label: 'Let bodies settle' },
      { icon: '👂', label: 'Hear both sides' },
      { icon: '🤝', label: 'Coach a repair' },
    ],
    insight:
      "If sibling hitting spikes during transitions or tired stretches of the day, it's often about depleted self-control, not the relationship itself.",
    keywords: ['siblings', 'hitting', 'aggression', 'fighting', 'rivalry'],
    perspectives: {
      clinician:
        'Family therapists emphasize separating bodies before addressing feelings — trying to reason with a child mid-conflict rarely works, because their thinking brain is temporarily offline.',
    },
    culturalLens: [
      {
        region: 'Cultures with close sibling caregiving',
        note: 'Where older siblings are expected to help care for younger ones, sibling conflict is often mediated by a wider family circle rather than falling to one parent alone.',
      },
      {
        region: 'Cultures with typically small sibling age gaps',
        note: 'These cultures tend to treat some physical squabbling as an ordinary part of growing up together, addressed through repair rather than heavy consequence.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'sharing',
    topicNumber: 5,
    title: 'Why Is Sharing So Hard?',
    heading: {
      lead: 'Why Is',
      emphasis: 'Sharing So Hard',
      trailing: 'for Kids to Do Willingly?',
    },
    quote: "It's MINE!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'sharing',
    reassurance: "It's common — and not a sign of a selfish child!",
    explanation:
      "Most of the time, it's an ownership instinct that hasn't yet learned to coexist with generosity, not a character flaw.",
    reasons: [
      {
        icon: '🧠',
        title: 'Object Permanence Fear',
        description: 'Young kids can genuinely worry a shared item may never come back.',
      },
      {
        icon: '🪞',
        title: 'Identity Attachment',
        description: 'A favorite toy can feel like part of who they are, not just a possession.',
      },
      {
        icon: '⏳',
        title: 'No Sense of "Later"',
        description: 'Waiting for a turn requires a concept of time still under construction.',
      },
      {
        icon: '🕹️',
        title: 'Control in a World of Little Control',
        description: "A toy is often one of the few things fully under a child's own say.",
      },
      {
        icon: '🎭',
        title: 'Perspective-Taking Is Still Developing',
        description: 'Imagining how a sibling or friend feels is a skill still being built.',
      },
      {
        icon: '📈',
        title: 'Recent Milestone Pride',
        description: 'A newly mastered toy or skill often gets guarded most fiercely.',
      },
      {
        icon: '😤',
        title: 'Fear of Losing the Interaction',
        description: 'Sharing can feel like giving up the fun itself, not just the object.',
      },
      {
        icon: '🏆',
        title: 'Scarcity Thinking',
        description: 'Kids often assume there is only one "good" version of a toy or turn.',
      },
    ],
    concerns: [
      'Extreme distress at every single sharing request, well past age 6',
      'Sharing difficulty paired with very limited peer play overall',
      'Aggression, not just refusal, whenever asked to share',
      'No improvement despite repeated, patient modeling',
      'Concerns raised consistently by more than one caregiver or teacher',
    ],
    professionalGuidance:
      'If sharing difficulty is extreme, aggressive, or paired with limited peer interaction more broadly, a pediatrician can help assess social development.',
    strategies: [
      "Use a visible timer for turns instead of a vague 'in a minute'",
      "Let them choose one 'special' item that never has to be shared",
      'Narrate the other child’s feelings out loud, briefly',
      'Praise a share the moment it happens, however small',
    ],
    routine: [
      { icon: '⏲️', label: 'Set a turn timer' },
      { icon: '🧸', label: 'Protect one special item' },
      { icon: '👂', label: 'Name both feelings' },
      { icon: '👏', label: 'Praise the share' },
    ],
    insight:
      "If sharing is hardest with a favorite item specifically, it's rarely about generosity — it's about attachment to that one thing.",
    keywords: ['sharing', 'possessive', 'turns', 'toys', 'selfish'],
    perspectives: {
      clinician:
        "Developmental psychologists note that true, voluntary sharing typically doesn't stabilize until around age 5–6, once perspective-taking has matured — expecting it reliably earlier is often expecting a skill that isn't built yet.",
    },
    culturalLens: [
      {
        region: 'Collectivist family structures',
        note: 'Cultures that emphasize communal property and group harmony often introduce shared-ownership norms earlier and more explicitly than cultures built around individual possession.',
      },
      {
        region: 'Individualist Western cultures',
        note: "Some Western parenting approaches deliberately protect a child's right to decline sharing a specific item, treating ownership as a boundary to respect rather than override.",
      },
    ],
    sources: ['American Psychological Association', 'Zero to Three'],
  },
  {
    id: 'interrupting',
    topicNumber: 6,
    title: 'Why Do Kids Interrupt Constantly?',
    heading: {
      lead: 'Why Do Kids',
      emphasis: 'Interrupt Constantly',
      trailing: 'Even Mid-Sentence?',
    },
    quote: 'Mom, mom, MOM, look!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'interrupting',
    reassurance: "It's common — and usually not rudeness!",
    explanation:
      "Most of the time, it's a fear the thought will vanish before their turn comes, not a lack of manners.",
    reasons: [
      {
        icon: '💭',
        title: 'Thoughts Feel Urgent',
        description: 'Young kids often believe an idea will disappear if not said immediately.',
      },
      {
        icon: '🧠',
        title: 'Limited Working Memory',
        description: 'Holding a thought while waiting for a pause is a genuinely hard skill.',
      },
      {
        icon: '⏳',
        title: 'No Internal Sense of Turn-Taking Yet',
        description: 'Reading conversational pauses is a subtle social skill, still being learned.',
      },
      {
        icon: '🎉',
        title: 'Genuine Excitement',
        description: 'Enthusiasm can override the pause-and-wait step entirely in the moment.',
      },
      {
        icon: '👂',
        title: 'Wanting to Be Heard',
        description: 'If past attempts to speak up felt missed, interrupting can feel necessary.',
      },
      {
        icon: '🪞',
        title: 'Modeling Adult Conversation',
        description: 'Interrupting is often simply what they see modeled around them.',
      },
      {
        icon: '🎯',
        title: 'Impulse Beats Etiquette',
        description: 'The urge to speak fires before the "wait" rule has a chance to apply.',
      },
      {
        icon: '📵',
        title: 'Competing for Divided Attention',
        description: 'A parent on the phone or distracted can prompt louder bids to be noticed.',
      },
    ],
    concerns: [
      'Interrupting that persists well past age 8 with no improvement',
      'Difficulty waiting for a turn in most settings, not just at home',
      'Interrupting paired with broader difficulty following conversations',
      'Significant frustration or meltdown whenever asked to wait',
      'Teachers separately raising concerns about turn-taking',
    ],
    professionalGuidance:
      'If interrupting is extreme, paired with broader attention difficulties, or not improving with practice, a pediatrician can help assess whether more support is needed.',
    strategies: [
      "Teach a quiet signal, like a hand on the arm, to mean 'I have something'",
      'Acknowledge the signal quickly: "I see your hand, one moment"',
      'Praise waiting the moment it happens, even briefly',
      'Give short, focused listening windows during the day',
    ],
    routine: [
      { icon: '✋', label: 'Teach the signal' },
      { icon: '👀', label: 'Acknowledge fast' },
      { icon: '⏳', label: 'Ask for a short wait' },
      { icon: '👏', label: 'Praise the pause' },
    ],
    insight:
      'If interrupting is worse when a child is excited or tired, it tracks impulse control, not disrespect for the conversation.',
    keywords: ['interrupting', 'talking over', 'turn-taking', 'manners'],
    perspectives: {
      teacher:
        "Teachers see the identical pattern in the classroom — a quiet hand signal that gets acknowledged quickly teaches waiting far faster than a repeated 'don't interrupt.'",
    },
    culturalLens: [
      {
        region: 'Cultures with overlapping conversational styles',
        note: 'Some cultures have naturally more overlapping, high-energy conversational norms, where an interruption carries a different social meaning than in cultures with strict turn-taking expectations.',
      },
      {
        region: 'Cultures with formal turn-taking norms',
        note: 'Other cultures teach explicit conversational turn-taking as a matter of etiquette from an early age, which can make interrupting a more actively corrected behavior.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'lying',
    topicNumber: 7,
    title: 'Why Do Kids Tell Small Lies?',
    heading: {
      lead: 'Why Do Kids',
      emphasis: 'Tell Small Lies',
      trailing: 'Even When the Truth Is Obvious?',
    },
    quote: "I didn't do it!",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'lying',
    reassurance: "It's common — and it doesn't predict a dishonest character!",
    explanation:
      "Most of the time, it's fear of a consequence or wishful thinking, not calculated deception.",
    reasons: [
      {
        icon: '😨',
        title: 'Fear of Consequences',
        description: 'A lie can feel like the fastest way to avoid trouble in the moment.',
      },
      {
        icon: '🪄',
        title: 'Wishful Thinking',
        description: 'Younger kids sometimes say what they wish were true, not what happened.',
      },
      {
        icon: '🧠',
        title: 'Developing Theory of Mind',
        description: 'Realizing a parent doesn’t automatically know the truth is a real milestone.',
      },
      {
        icon: '🎭',
        title: 'Blurred Fantasy and Reality',
        description: 'Young imaginations can genuinely blend make-believe with real events.',
      },
      {
        icon: '🛡️',
        title: 'Protecting Self-Image',
        description: 'A lie can guard against feeling like a disappointment.',
      },
      {
        icon: '🕹️',
        title: 'Testing the Boundary',
        description: 'Some lying is simply testing what a parent will notice or accept.',
      },
      {
        icon: '😳',
        title: 'Avoiding Embarrassment',
        description: 'A small lie can feel safer than admitting an awkward mistake.',
      },
      {
        icon: '🏆',
        title: 'Cognitive Skill, Not Just Deceit',
        description: 'Constructing a believable story actually reflects growing reasoning ability.',
      },
    ],
    concerns: [
      'Frequent, elaborate lying that continues even without any real stakes',
      'Lying paired with a broader pattern of manipulating others',
      'No response to calm, consistent honesty-focused conversations',
      'Lying that escalates alongside stealing or rule-breaking',
      'A sudden increase in secrecy well beyond typical privacy needs',
    ],
    professionalGuidance:
      'If lying is frequent, elaborate, or paired with other concerning behavior, a pediatrician or child therapist can help understand what is driving it.',
    strategies: [
      'React calmly — a big reaction makes future honesty feel riskier',
      'Separate the mistake from the lie: address them one at a time',
      'Praise honesty specifically, even when the truth is inconvenient',
      'Avoid setting up "gotcha" questions when the answer is already known',
    ],
    routine: [
      { icon: '🧘', label: 'Stay calm' },
      { icon: '🔍', label: 'Address the act' },
      { icon: '💬', label: 'Invite honesty' },
      { icon: '👏', label: 'Praise the truth' },
    ],
    insight:
      'If lying is mostly about avoiding trouble, the more effective fix is usually making honesty feel safe, not increasing the punishment for lying.',
    keywords: ['lying', 'honesty', 'fibbing', 'truth'],
    perspectives: {
      clinician:
        "Developmental psychologists note early lying is actually a cognitive milestone — it requires realizing another person's mind holds different information from your own — which is why calm, low-drama responses work better than treating it as a moral crisis.",
    },
    culturalLens: [
      {
        region: 'Cultures with strong face-saving norms',
        note: 'In cultures that place high value on avoiding shame or public embarrassment, small protective lies may be more culturally tolerated as a way of preserving harmony.',
      },
      {
        region: 'Direct-communication cultures',
        note: 'Cultures with a strong direct-honesty norm may address even small lies more explicitly and immediately, framing truth-telling as a core value from an early age.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'testing-limits',
    topicNumber: 8,
    title: 'Why Do Kids Test the Same Rule Over and Over?',
    heading: {
      lead: 'Why Do Kids Test',
      emphasis: 'the Same Rule',
      trailing: 'Over and Over Again?',
    },
    quote: 'But why not, just this once?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'testing-limits',
    reassurance: "It's common — and it's actually a healthy part of learning!",
    explanation:
      "Most of the time, it's how kids confirm a rule is real and consistent, not an attempt to wear a parent down.",
    reasons: [
      {
        icon: '🔬',
        title: 'Confirming Consistency',
        description: 'Retesting a rule checks whether it truly holds every time, not just once.',
      },
      {
        icon: '🕹️',
        title: 'Autonomy-Seeking',
        description: 'Pushing on a limit is a normal way of exploring personal control.',
      },
      {
        icon: '🧠',
        title: 'Learning Through Repetition',
        description: 'Young brains often need many repeated experiences to fully absorb a rule.',
      },
      {
        icon: '🎯',
        title: 'Hoping Circumstances Changed',
        description: 'A different day or mood might mean a different answer, in a child’s logic.',
      },
      {
        icon: '📉',
        title: 'Inconsistent Past Enforcement',
        description: 'If a rule has ever bent before, retesting it becomes a rational strategy.',
      },
      {
        icon: '😤',
        title: 'Genuine Disagreement',
        description: 'Sometimes the pushback is a real, if clumsy, negotiation attempt.',
      },
      {
        icon: '🔁',
        title: 'Habit From Past Success',
        description: 'If persistence has ever paid off before, it becomes the default approach.',
      },
      {
        icon: '🧩',
        title: 'Building a Mental Rulebook',
        description: 'Every test adds a data point to their evolving map of how the world works.',
      },
    ],
    concerns: [
      'Limit-testing that turns aggressive rather than verbal',
      'No settling of a rule even after months of consistent enforcement',
      'Testing paired with disregard for safety-related rules specifically',
      'Extreme distress disproportionate to the size of the limit',
      'A pattern that is intensifying rather than gradually easing',
    ],
    professionalGuidance:
      "If limit-testing is aggressive, unsafe, or shows no change over months of consistency, a pediatrician can help assess what's underneath it.",
    strategies: [
      'Keep the rule identical every time it applies, without exception',
      'State it briefly and calmly rather than re-explaining at length',
      'Acknowledge the wish before holding the limit: "I know you want to — the answer is still no"',
      'Praise acceptance of a limit, even a grudging one',
    ],
    routine: [
      { icon: '📏', label: 'State the rule once' },
      { icon: '🧘', label: 'Hold it calmly' },
      { icon: '💬', label: 'Acknowledge the wish' },
      { icon: '👍', label: 'Praise acceptance' },
    ],
    insight:
      'A rule that gets tested repeatedly is often simply a rule still being learned — consistency, not a bigger reaction, is what settles it.',
    keywords: ['limit testing', 'boundaries', 'rules', 'defiance', 'consistency'],
    perspectives: {
      clinician:
        'Behavioral psychologists frame limit-testing as information-gathering, not manipulation — a rule enforced identically every time settles faster than the same rule enforced inconsistently, even if enforced more strictly on average.',
    },
    culturalLens: [
      {
        region: 'Cultures with communally reinforced rules',
        note: 'Where extended family and community reinforce the same rule consistently, a child gets fewer inconsistent signals to test against.',
      },
      {
        region: 'Cultures with more negotiable household rules',
        note: 'Some family cultures treat many rules as open to discussion by design, which shifts limit-testing toward negotiation rather than repeated retrying of a fixed line.',
      },
    ],
    sources: ['CDC', 'American Academy of Pediatrics'],
  },
  {
    id: 'meltdowns-change',
    topicNumber: 9,
    title: 'Why Do Small Changes Cause Big Meltdowns?',
    heading: {
      lead: 'Why Do Small Changes',
      emphasis: 'Cause Big Meltdowns',
      trailing: 'Out of Nowhere?',
    },
    quote: 'You said we were going a DIFFERENT way!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'meltdowns-change',
    reassurance: "It's common — and it isn't about being spoiled!",
    explanation:
      "Most of the time, it's a strong preference for predictability meeting a brain that hasn't yet built flexible coping tools.",
    reasons: [
      {
        icon: '🗺️',
        title: 'Mental Map Disrupted',
        description: 'A change breaks the internal plan a child had already committed to.',
      },
      {
        icon: '🔒',
        title: 'Predictability Feels Safe',
        description: 'Sameness gives a still-developing brain a reliable sense of control.',
      },
      {
        icon: '🧠',
        title: 'Cognitive Flexibility Is Still Forming',
        description: 'Adjusting smoothly to new information is a skill that takes years to build.',
      },
      {
        icon: '⏳',
        title: 'No Warning Time',
        description: 'A sudden change skips the mental preparation a transition usually needs.',
      },
      {
        icon: '💭',
        title: 'Loss of a Small Hope',
        description: 'Even a minor expected treat can carry real emotional weight to a child.',
      },
      {
        icon: '🔋',
        title: 'Already Near Capacity',
        description: 'A change lands hardest when a child’s reserves were already low.',
      },
      {
        icon: '🌀',
        title: 'Difficulty Regulating Disappointment',
        description: 'The gap between expectation and reality can feel enormous, not minor.',
      },
      {
        icon: '🕹️',
        title: 'Wanting a Say',
        description: 'An unplanned change can feel like losing what little control they had.',
      },
    ],
    concerns: [
      'Extreme, prolonged distress from very minor, everyday changes',
      'Rigidity around routine that limits normal daily flexibility',
      'Meltdowns from change paired with narrow, intense special interests',
      'No easing of the reaction even with plenty of advance notice',
      'Similar reports of rigidity from school or other caregivers',
    ],
    professionalGuidance:
      'If distress over small changes is extreme, frequent, or limits everyday flexibility, a pediatrician can help assess sensory or developmental factors.',
    strategies: [
      'Give advance notice whenever a change is known ahead of time',
      "Acknowledge the disappointment before problem-solving: 'That's a real bummer'",
      'Keep a few anchor routines predictable even on unusual days',
      'Offer a small choice within the change to restore some control',
    ],
    routine: [
      { icon: '🗓️', label: 'Warn early' },
      { icon: '💬', label: 'Name the disappointment' },
      { icon: '🧭', label: 'Keep one anchor the same' },
      { icon: '🤏', label: 'Offer a small choice' },
    ],
    insight:
      'A child who struggles with small changes usually isn’t rigid by nature — they’re protecting a sense of predictability that helps them feel safe.',
    keywords: ['meltdown', 'change', 'routine', 'flexibility', 'transitions'],
    perspectives: {
      clinician:
        'Occupational and developmental therapists note that cognitive flexibility — shifting smoothly between plans — is one of the last executive function skills to mature, often not solidifying until well into the school years.',
    },
    culturalLens: [
      {
        region: 'Cultures with more flexible daily scheduling',
        note: 'Less rigidly scheduled daily life can give children more everyday practice tolerating minor plan changes, simply through more frequent exposure.',
      },
      {
        region: 'Cultures with tightly structured daily routines',
        note: 'Highly structured daily life can make a child more dependent on routine holding steady, since there is less everyday practice with things not going as expected.',
      },
    ],
    abilityLens: [
      {
        context: 'Autism spectrum',
        note: 'A strong need for sameness is often a core part of how the world feels manageable, not a preference — a small change can carry the same weight as a large one.',
      },
      {
        context: 'Sensory processing differences',
        note: 'An unplanned change often arrives alongside new sounds, sights, or textures to process all at once, compounding the disruption beyond the change itself.',
      },
      {
        context: 'Anxiety',
        note: 'Uncertainty about what happens next can be the harder part, not the change itself — advance, concrete detail helps more than reassurance alone.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Occupational Therapy Association'],
  },
  {
    id: 'whining',
    topicNumber: 10,
    title: 'Why Do Kids Whine Instead of Just Asking?',
    heading: {
      lead: 'Why Do Kids Whine',
      emphasis: 'Instead of Just Asking',
      trailing: 'in a Normal Voice?',
    },
    quote: "But I'm sooo tiiired...",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'whining',
    reassurance: "It's common — and it isn't manipulation!",
    explanation:
      'Most of the time, whining is a low-grade distress signal a child doesn’t yet know how to phrase clearly.',
    reasons: [
      {
        icon: '🔋',
        title: 'Low Reserves',
        description: 'Whining often spikes exactly when tiredness or hunger is climbing.',
      },
      {
        icon: '🗣️',
        title: 'Vocabulary Gap',
        description: 'A whine can be the closest available sound to an unnamed frustration.',
      },
      {
        icon: '🔁',
        title: 'A Pattern That Gets Attention',
        description: 'If whining has ever worked before, it becomes the default request style.',
      },
      {
        icon: '😩',
        title: 'Low-Level Overwhelm',
        description: 'Small annoyances stacking up can come out as one long, drawn-out complaint.',
      },
      {
        icon: '🧠',
        title: 'Difficulty Regulating Tone',
        description: 'Matching voice tone to the size of a request is a skill still developing.',
      },
      {
        icon: '🕰️',
        title: 'End-of-Day Depletion',
        description: 'Self-regulation is a limited resource that runs lowest by late afternoon.',
      },
      {
        icon: '💭',
        title: 'Testing for a Softer Answer',
        description: "A whining tone sometimes hopes a firm 'no' might soften into a 'maybe'.",
      },
      {
        icon: '🤒',
        title: 'Feeling Slightly Unwell',
        description: 'A minor cold or discomfort can lower the threshold for whining noticeably.',
      },
    ],
    concerns: [
      'Whining as the near-constant default tone across most of the day',
      'No improvement even when needs are consistently met promptly',
      'Whining paired with broader difficulty expressing feelings verbally',
      'A sudden, unexplained increase in whining out of the ordinary',
      'Whining that escalates quickly into full meltdowns',
    ],
    professionalGuidance:
      'If whining is near-constant or paired with broader communication difficulty, a pediatrician can help rule out speech or developmental factors.',
    strategies: [
      'Model the request in a normal voice and ask for a repeat',
      "Respond only to the calm version: 'I can’t understand whining — try your regular voice'",
      'Check for hunger, tiredness, or overstimulation first',
      'Praise the regular-voice version warmly and promptly',
    ],
    routine: [
      { icon: '🔍', label: 'Check basic needs' },
      { icon: '🗣️', label: 'Model the ask' },
      { icon: '⏳', label: 'Wait for the calm version' },
      { icon: '👏', label: 'Respond warmly to it' },
    ],
    insight:
      'Whining almost always tracks a depleted state, not a character trait — the fix is usually rest and food before it’s a communication lesson.',
    keywords: ['whining', 'complaining', 'tone of voice'],
    perspectives: {
      clinician:
        "Speech-language and developmental specialists note whining often fills a real gap — a feeling the child can't yet phrase clearly — and responding only to the calm-voice version teaches the replacement skill without shaming the original signal.",
    },
    culturalLens: [
      {
        region: 'Cultures with open emotional expression',
        note: 'Cultures that encourage open emotional expression may treat whining as an ordinary, unremarkable form of communication rather than a behavior needing correction.',
      },
      {
        region: 'Cultures emphasizing emotional composure',
        note: 'Cultures that emphasize calm composure may address whining more directly and earlier as a communication style to grow out of.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'refusing-apology',
    topicNumber: 11,
    title: "Why Won't Kids Say Sorry and Mean It?",
    heading: {
      lead: "Why Won't Kids",
      emphasis: 'Say Sorry',
      trailing: 'Like They Actually Mean It?',
    },
    quote: 'Sorrrry. Happy now?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'refusing-apology',
    reassurance: "It's common — and it doesn't mean they lack empathy!",
    explanation:
      "Most of the time, a forced apology clashes with feelings that haven't caught up yet, not genuine indifference.",
    reasons: [
      {
        icon: '😤',
        title: 'Still Feeling Justified',
        description: 'A child mid-conflict often still believes they were the wronged party.',
      },
      {
        icon: '🧠',
        title: 'Empathy Still Developing',
        description:
          'Genuinely feeling another’s hurt takes longer to develop than saying the word.',
      },
      {
        icon: '🕹️',
        title: 'Resisting Being Forced',
        description: 'A demanded apology can trigger resistance to the demand itself.',
      },
      {
        icon: '😳',
        title: 'Shame, Not Indifference',
        description: 'Some kids resist apologizing because admitting fault feels overwhelming.',
      },
      {
        icon: '⏳',
        title: 'Needs Time to Cool Down',
        description: 'An apology asked for mid-anger rarely reflects genuine feeling yet.',
      },
      {
        icon: '🎭',
        title: 'Words Without the Concept',
        description:
          'Young kids can say "sorry" as a script before truly grasping what it repairs.',
      },
      {
        icon: '🪞',
        title: 'Modeling Gaps',
        description: 'A child rarely shown a heartfelt apology has less to draw the words from.',
      },
      {
        icon: '🔁',
        title: 'History of Empty Apologies',
        description: 'If "sorry" has only ever ended a scolding, it can become a hollow ritual.',
      },
    ],
    concerns: [
      'A near-total absence of remorse across many, varied situations',
      'Enjoyment of others’ distress rather than discomfort with it',
      'No development of empathy at all over an extended period',
      'Apology refusal paired with a broader pattern of cruelty',
      'Concerns echoed consistently by teachers or other caregivers',
    ],
    professionalGuidance:
      'If genuine remorse seems consistently absent across many situations, a pediatrician or child psychologist can help assess social-emotional development.',
    strategies: [
      'Let feelings cool before asking for any kind of repair',
      'Model a repair action instead of only demanding the word: "Let’s help fix it together"',
      "Focus on the impact, not the script: 'She’s sad her tower fell'",
      'Accept a non-verbal repair — a hug, a helping hand — as valid too',
    ],
    routine: [
      { icon: '🧘', label: 'Let things cool' },
      { icon: '👂', label: 'Name the impact' },
      { icon: '🤝', label: 'Offer a repair action' },
      { icon: '💛', label: 'Accept any sincere version' },
    ],
    insight:
      'A genuine repair usually matters more than the specific word — modeling repair builds real empathy faster than insisting on a script.',
    keywords: ['apology', 'sorry', 'empathy', 'remorse'],
    perspectives: {
      clinician:
        "Developmental psychologists note real empathy typically outpaces the ability to name it clearly — a modeled repair action often reaches a child faster than requiring the specific word 'sorry.'",
    },
    culturalLens: [
      {
        region: 'Cultures with ritualized apology customs',
        note: 'Some cultures have specific, taught apology rituals or gestures that give children a concrete script to fall back on before they can generate a heartfelt one spontaneously.',
      },
      {
        region: 'Cultures emphasizing restorative action over words',
        note: 'Some cultures place more weight on the repair action itself — fixing what was broken, helping the hurt party — than on a spoken apology.',
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'clinginess',
    topicNumber: 12,
    title: 'Why Do Kids Get So Clingy?',
    heading: {
      lead: 'Why Do Kids',
      emphasis: 'Get So Clingy',
      trailing: 'Out of Nowhere?',
    },
    quote: "Don't go, stay with me!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'clinginess',
    reassurance: "It's common — and it's a sign of a secure bond, not a step backward!",
    explanation:
      'Most of the time, a clingy phase reflects a temporary extra need for reassurance, not a lasting change in independence.',
    reasons: [
      {
        icon: '🔄',
        title: 'A Developmental Leap Underway',
        description: 'Big new skills often come with a temporary pull back toward security.',
      },
      {
        icon: '💛',
        title: 'Secure Attachment at Work',
        description: 'Wanting a trusted caregiver nearby is a sign the bond is working well.',
      },
      {
        icon: '🌪️',
        title: 'Change in the Environment',
        description:
          'A new sibling, move, or schedule shift often triggers extra closeness-seeking.',
      },
      {
        icon: '😴',
        title: 'Tiredness or Illness',
        description: 'A run-down body naturally seeks more comfort and closeness.',
      },
      {
        icon: '🎢',
        title: 'Emotional Overload',
        description: 'A big feeling that’s hard to name can show up as wanting to be held.',
      },
      {
        icon: '🧠',
        title: 'Separation Awareness Sharpening',
        description: 'As object permanence develops, absence becomes something felt more acutely.',
      },
      {
        icon: '🕰️',
        title: 'Recent Time Apart',
        description: 'A stretch of less togetherness can prompt a period of extra reconnecting.',
      },
      {
        icon: '🛡️',
        title: 'A New or Unfamiliar Setting',
        description: 'Novel places and people naturally raise the pull toward a familiar anchor.',
      },
    ],
    concerns: [
      'Clinginess that suddenly worsens after weeks of easy independence',
      'Extreme panic, not just preference, at every brief separation',
      'Clinginess paired with a noticeable loss of previously mastered skills',
      'Physical symptoms accompanying every separation attempt',
      'No easing at all over several consistent months',
    ],
    professionalGuidance:
      'If clinginess is extreme, sudden, or paired with regression in other skills, a pediatrician can help rule out underlying stressors.',
    strategies: [
      'Offer extra connection proactively, before it’s demanded',
      'Practice brief, low-stakes separations that build back confidence',
      'Keep goodbyes calm, brief, and predictable',
      'Name what’s changed recently rather than dismissing the phase',
    ],
    routine: [
      { icon: '🤗', label: 'Give proactive closeness' },
      { icon: '⏱️', label: 'Practice short separations' },
      { icon: '👋', label: 'Keep goodbyes brief' },
      { icon: '💬', label: 'Name recent changes' },
    ],
    insight:
      'A clingy phase almost always passes once the underlying need for reassurance is met — pushing independence too fast tends to prolong it.',
    keywords: ['clingy', 'separation anxiety', 'attachment', 'independence'],
    perspectives: {
      clinician:
        'Attachment researchers frame a clingy phase as evidence the primary bond is working as intended, not a step backward — pushing independence too fast during this window often prolongs it rather than shortening it.',
    },
    culturalLens: [
      {
        region: 'Cultures with high physical-closeness norms',
        note: "Cultures that practice extended babywearing or co-sleeping don't show a different overall timeline for clingy phases — the response is a normal developmental stage expressed within whatever closeness norms already exist.",
      },
      {
        region: 'Cultures with earlier independence expectations',
        note: 'Cultures that expect earlier independence from young children may respond to a clingy phase with more active encouragement toward separation, while the underlying developmental timeline is unchanged.',
      },
    ],
    sources: ['Zero to Three', 'American Academy of Pediatrics'],
  },
  {
    id: 'bossiness',
    topicNumber: 13,
    title: 'Why Do Kids Boss Their Friends Around?',
    heading: {
      lead: 'Why Do Kids',
      emphasis: 'Boss Their Friends',
      trailing: 'Around During Play?',
    },
    quote: 'No, you have to do it MY way!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'bossiness',
    reassurance: "It's common — and it usually fades with practice, not punishment!",
    explanation:
      'Most of the time, bossiness reflects excitement and a growing plan in their head, not a wish to control others.',
    reasons: [
      {
        icon: '🎬',
        title: 'A Vivid Idea in Mind',
        description: 'A strong mental picture of the game can override interest in others’ input.',
      },
      {
        icon: '🕹️',
        title: 'Practicing Leadership',
        description: 'Directing play is often a first, clumsy attempt at organizing a group.',
      },
      {
        icon: '😰',
        title: 'Anxiety About Losing Control',
        description:
          'Some kids direct heavily because unpredictability in play feels uncomfortable.',
      },
      {
        icon: '🎭',
        title: 'Limited Perspective-Taking',
        description: "Imagining a friend's different preference is still a developing skill.",
      },
      {
        icon: '🏆',
        title: 'Wanting the Play to "Work"',
        description: 'Strong direction can come from really wanting the game to go well.',
      },
      {
        icon: '🪞',
        title: 'Modeling a Directive Style',
        description: 'A child may be echoing a bossy tone modeled by an older sibling or adult.',
      },
      {
        icon: '📈',
        title: 'Confidence in a Familiar Role',
        description: 'Leading in a favorite game is often where a child feels most competent.',
      },
      {
        icon: '😤',
        title: 'Frustration With Being Overruled',
        description: 'A history of being overruled elsewhere can fuel wanting control here.',
      },
    ],
    concerns: [
      'Peers consistently avoiding play because of the bossiness',
      'Little to no give-and-take even after direct coaching',
      'Bossiness paired with real distress whenever not in charge',
      'No interest at all in a friend’s ideas over time',
      'Bossiness escalating into exclusion or unkindness toward peers',
    ],
    professionalGuidance:
      'If bossiness is consistently pushing peers away or escalating into unkindness, a teacher or child psychologist can help build social skills directly.',
    strategies: [
      "Coach turn-taking directly: 'Your idea first, then ask for theirs'",
      'Praise moments of following a friend’s lead, specifically',
      'Practice offering choices instead of directives during play',
      'Debrief gently after playdates about how the other child felt',
    ],
    routine: [
      { icon: '🔄', label: 'Coach turn-taking' },
      { icon: '❓', label: 'Ask for their idea' },
      { icon: '👏', label: 'Praise sharing the lead' },
      { icon: '💬', label: 'Debrief afterward' },
    ],
    insight:
      'Bossiness usually fades as perspective-taking matures — the most effective help is direct practice sharing control, not scolding the instinct to lead.',
    keywords: ['bossy', 'controlling', 'peers', 'friends', 'play'],
    perspectives: {
      teacher:
        'Teachers see this ease naturally with structured turn-taking practice during group activities — direct coaching in sharing the lead works faster than simply discouraging the behavior.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong hierarchy and leadership norms',
        note: 'Some cultures explicitly value and reward leadership behavior in children from an early age, which can shape how bossiness during play is read by adults.',
      },
      {
        region: 'Cultures emphasizing group consensus',
        note: 'Other cultures place strong emphasis on group consensus in play, where a bossy directing style draws more immediate peer and adult correction.',
      },
    ],
    sources: ['American Psychological Association', 'CDC'],
  },
  {
    id: 'following-instructions',
    topicNumber: 14,
    title: "Why Don't Kids Follow Multi-Step Instructions?",
    heading: {
      lead: "Why Don't Kids Follow",
      emphasis: 'Multi-Step Instructions',
      trailing: 'Even When They Understood Each Part?',
    },
    quote: 'Wait, what was the first thing again?',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'following-instructions',
    reassurance: "It's common — and it's a memory limit, not a listening problem!",
    explanation:
      "Most of the time, it's the working-memory ceiling for holding several steps at once, not a failure to understand.",
    reasons: [
      {
        icon: '🧠',
        title: 'Working Memory Ceiling',
        description: 'Young brains can typically hold far fewer steps in mind than adults assume.',
      },
      {
        icon: '🎯',
        title: 'The First Step Wins Attention',
        description: 'Kids often start step one and simply lose track of what followed it.',
      },
      {
        icon: '🔀',
        title: 'Sequencing Is Still Developing',
        description: 'Ordering steps correctly in memory is a skill that takes years to mature.',
      },
      {
        icon: '🎮',
        title: 'Distraction Mid-Task',
        description:
          'Something noticed along the way can fully bump the remaining steps out of mind.',
      },
      {
        icon: '📢',
        title: 'Instructions Given Too Fast',
        description: 'A rapid list leaves little time to actually encode each step.',
      },
      {
        icon: '😴',
        title: 'Fatigue Reduces Capacity',
        description: 'Tiredness shrinks working memory further, right when it’s needed most.',
      },
      {
        icon: '🗣️',
        title: 'No Chance to Repeat It Back',
        description: 'Without saying it aloud, a multi-step instruction fades quickly.',
      },
      {
        icon: '🧩',
        title: 'Steps Not Yet Automatic',
        description: 'Each step still takes conscious effort instead of running on habit.',
      },
    ],
    concerns: [
      'Difficulty even with single-step instructions much of the time',
      'Multi-step struggles paired with broader attention or focus concerns',
      'No improvement at all when steps are broken down and repeated',
      'Similar difficulty separately reported at school',
      'Following instructions noticeably behind same-age peers',
    ],
    professionalGuidance:
      'If even single-step instructions are consistently difficult, or a teacher raises similar concerns, a developmental screening can help rule out attention or processing differences.',
    strategies: [
      'Break instructions into one step at a time',
      'Ask them to repeat the step back before starting',
      'Pair steps with a visual checklist for repeat routines',
      'Give the next step only once the current one is done',
    ],
    routine: [
      { icon: '1️⃣', label: 'One step at a time' },
      { icon: '🔁', label: 'Have them repeat it' },
      { icon: '✅', label: 'Confirm it’s done' },
      { icon: '➡️', label: 'Give the next step' },
    ],
    insight:
      'If multi-step instructions are hard everywhere — home, school, play — it usually points to working memory load, not a motivation problem.',
    keywords: ['instructions', 'multi-step', 'working memory', 'following directions'],
    perspectives: {
      clinician:
        'Developmental specialists point out that working memory for holding multiple steps is genuinely limited at this age — asking a child to repeat an instruction back before starting is one of the most effective, evidence-supported fixes.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong oral-instruction traditions',
        note: 'Cultures that rely heavily on oral instruction and repetition in daily life sometimes build in more natural repeat-back practice as a matter of course.',
      },
      {
        region: 'Cultures with visual/written instruction traditions',
        note: 'Cultures that lean more on written or visual instructions from an early age may see multi-step spoken directions land less reliably by comparison.',
      },
    ],
    abilityLens: [
      {
        context: 'Working-memory or processing differences',
        note: 'The gap between "working memory ceiling" and what a child actually needs to hold in mind can be substantially wider, so even a well-broken-down instruction may need repeating.',
      },
      {
        context: 'Auditory processing differences',
        note: 'Spoken instructions can take longer to decode into meaning even when hearing is unaffected — a written or visual version alongside the spoken one often lands more reliably.',
      },
      {
        context: 'ADHD-related attention differences',
        note: 'Sustaining attention across every step of a spoken sequence takes more active effort, so a step can be missed even when the earlier ones were clearly heard.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'sore-loser',
    topicNumber: 15,
    title: 'Why Is Losing a Game So Hard?',
    heading: {
      lead: 'Why Is',
      emphasis: 'Losing a Game',
      trailing: 'So Hard to Handle?',
    },
    quote: 'This game is STUPID, I never win!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'sore-loser',
    reassurance: "It's common — and it doesn't predict poor sportsmanship for life!",
    explanation:
      "Most of the time, it's a still-developing ability to tolerate disappointment, not a character flaw about winning.",
    reasons: [
      {
        icon: '🎯',
        title: 'Outcome Feels Personal',
        description: 'Younger kids often can’t yet separate losing a game from being "bad" at it.',
      },
      {
        icon: '🧠',
        title: 'Disappointment Tolerance Still Forming',
        description: 'Managing the gap between hoped-for and actual outcomes takes years to build.',
      },
      {
        icon: '📈',
        title: 'High Investment in Winning',
        description: 'A child who tries hard naturally feels a loss more sharply.',
      },
      {
        icon: '🎭',
        title: 'Limited Perspective on the Other Player',
        description: "It's hard to feel happy for a winner while still processing one's own loss.",
      },
      {
        icon: '🔁',
        title: 'Comparing to a Recent Win',
        description: 'A previous winning streak can make an ordinary loss feel much bigger.',
      },
      {
        icon: '😤',
        title: 'Fairness Reasoning Still Developing',
        description:
          'Random elements like dice can feel deeply "unfair" before probability makes sense.',
      },
      {
        icon: '🔋',
        title: 'Limited Reserves in the Moment',
        description: 'A tired or hungry child has less capacity to regulate disappointment.',
      },
      {
        icon: '🪞',
        title: 'Modeling From Competitive Adults',
        description:
          'A highly competitive household can unintentionally raise the stakes of losing.',
      },
    ],
    concerns: [
      'Losing triggering aggression toward people or the game itself',
      'Complete refusal to ever play a game with any risk of losing',
      'No improvement at all with repeated, low-stakes practice',
      'Reactions disproportionate to the actual game most of the time',
      'Peers beginning to avoid playing games with them',
    ],
    professionalGuidance:
      'If losing consistently triggers aggression or peers are avoiding play, a pediatrician or child psychologist can help build frustration tolerance directly.',
    strategies: [
      'Practice with low-stakes games and narrate your own losses calmly',
      "Name the feeling before the fix: 'Losing feels rotten — it’s okay to be upset'",
      'Praise good sportsmanship specifically, not just winning',
      'Keep game sessions short while tolerance is still building',
    ],
    routine: [
      { icon: '🎲', label: 'Play low-stakes games' },
      { icon: '💬', label: 'Name the disappointment' },
      { icon: '🧘', label: 'Model losing calmly' },
      { icon: '👏', label: 'Praise good sportsmanship' },
    ],
    insight:
      'Losing gracefully is a learned skill built through repeated low-stakes practice — not something that improves by avoiding games where losing is possible.',
    keywords: ['sore loser', 'games', 'competition', 'sportsmanship', 'losing'],
    perspectives: {
      clinician:
        'Child psychologists note that disappointment tolerance is a skill built through repeated, low-stakes practice — avoiding competitive games to prevent upset tends to slow this skill down rather than protect it.',
    },
    culturalLens: [
      {
        region: 'Highly competitive achievement-oriented cultures',
        note: 'Cultures that place a strong emphasis on competition and achievement can raise the emotional stakes of losing even in casual play, for children and modeling adults alike.',
      },
      {
        region: 'Cultures emphasizing collective harmony',
        note: "Cultures that emphasize group harmony over individual competition sometimes structure children's games to minimize a single clear winner, reducing how often this exact moment comes up.",
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
];
