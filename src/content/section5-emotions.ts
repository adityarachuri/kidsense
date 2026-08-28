import type { Topic } from '../types/content';

/**
 * Section 5: Emotions.
 */
export const emotionsTopics: Topic[] = [
  {
    id: 'big-feelings',
    topicNumber: 1,
    title: 'Why Do Small Things Trigger Big Feelings?',
    heading: {
      lead: 'Why Do Small Things',
      emphasis: 'Trigger Big Feelings',
      trailing: 'That Seem Way Out of Proportion?',
    },
    quote: "It's the WORST thing that's ever happened!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'big-feelings',
    reassurance: "It's common — and it isn't overreacting on purpose!",
    explanation:
      'Most of the time, a small trigger is simply the final drop in a cup that was already nearly full.',
    reasons: [
      {
        icon: '🧠',
        title: 'Emotional Regulation Still Developing',
        description: 'The brain circuitry that dampens a big reaction takes years to fully mature.',
      },
      {
        icon: '🥤',
        title: 'The Cup Was Already Full',
        description: 'Small stresses stack invisibly across a day until one more tips it over.',
      },
      {
        icon: '📏',
        title: 'No Sense of Scale Yet',
        description: 'A young child genuinely cannot yet judge how big a problem "really" is.',
      },
      {
        icon: '🗣️',
        title: 'Limited Words for the Real Feeling',
        description: 'A small trigger can be the only available label for a much bigger emotion.',
      },
      {
        icon: '🔋',
        title: 'Depleted Reserves',
        description:
          'Hunger, tiredness, or overstimulation lower the threshold for a big reaction.',
      },
      {
        icon: '💭',
        title: 'An Earlier Unresolved Feeling',
        description: 'Emotion from something earlier in the day often resurfaces at the next bump.',
      },
      {
        icon: '🎢',
        title: 'Genuine Intensity of Temperament',
        description: 'Some kids simply feel emotions more intensely than others by nature.',
      },
      {
        icon: '🧩',
        title: 'Disrupted Expectations',
        description: 'Even a tiny thing going differently than hoped can feel like a real loss.',
      },
    ],
    concerns: [
      'Intense reactions to nearly everything, with no calmer stretches',
      'Big feelings that don’t ease at all with comfort or time',
      'Reactions that include harm to self or others',
      'A sudden, unexplained rise in intensity or frequency',
      'Big feelings paired with signs of ongoing anxiety or low mood',
    ],
    professionalGuidance:
      'If intense reactions are near-constant, escalating, or include harm to self or others, a pediatrician or child therapist can help build stronger regulation skills.',
    strategies: [
      'Name the feeling before addressing the trigger: "You’re really disappointed"',
      'Stay calm and steady rather than matching the intensity',
      'Check hunger, sleep, and stimulation levels first',
      'Offer comfort before problem-solving, not instead of it',
    ],
    routine: [
      { icon: '🔍', label: 'Check basic needs' },
      { icon: '💬', label: 'Name the feeling' },
      { icon: '🤗', label: 'Offer comfort' },
      { icon: '🧘', label: 'Problem-solve later' },
    ],
    insight:
      'A reaction that looks out of proportion almost always makes sense once the whole day, not just the trigger, is taken into account.',
    keywords: ['big feelings', 'overreacting', 'emotional regulation', 'meltdown'],
    perspectives: {
      clinician:
        'Child psychologists describe this as the cup already being full — a small trigger is rarely the real cause, so addressing accumulated stress (hunger, fatigue, earlier frustrations) does more than addressing the trigger itself.',
    },
    culturalLens: [
      {
        region: 'Collectivist cultures with strong emotional-restraint norms',
        note: 'Harmony-focused cultures often coach children toward calmer outward expression earlier, while the intensity of the underlying feeling develops on the same broad timeline everywhere.',
      },
      {
        region: 'Individualist Western cultures',
        note: 'These cultures often explicitly encourage naming and expressing big feelings out loud as a parenting practice, treating vocalized emotion as healthy rather than something to minimize.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CASEL'],
  },
  {
    id: 'crying-easily',
    topicNumber: 2,
    title: 'Why Do Some Kids Cry So Easily?',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Cry So Easily',
      trailing: 'Over Things That Seem Minor?',
    },
    quote: 'I don’t even know why I’m crying!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'crying-easily',
    reassurance: "It's common — and it isn't a sign of weakness!",
    explanation:
      'Most of the time, easy tears reflect a naturally sensitive temperament, not fragility or manipulation.',
    reasons: [
      {
        icon: '🎨',
        title: 'High Sensitivity Temperament',
        description: 'Some kids are simply wired to feel and express emotion more vividly.',
      },
      {
        icon: '🧠',
        title: 'Tears as a Release Valve',
        description: 'Crying is often the fastest way a young nervous system discharges tension.',
      },
      {
        icon: '🗣️',
        title: 'Words Not Catching Up Yet',
        description: 'Tears can fill in for feelings a child can’t yet fully articulate.',
      },
      {
        icon: '🔋',
        title: 'Low Reserves',
        description: 'Tiredness and hunger both lower the threshold for tears substantially.',
      },
      {
        icon: '👀',
        title: 'Sensitivity to Others’ Reactions',
        description: 'A sharp tone or disapproving look can land harder for some children.',
      },
      {
        icon: '🌊',
        title: 'Empathic Absorption',
        description: 'Highly empathic kids often cry in response to someone else’s distress too.',
      },
      {
        icon: '📈',
        title: 'A Developmental Stretch',
        description: 'Growth spurts and new milestones can temporarily heighten sensitivity.',
      },
      {
        icon: '🪞',
        title: 'Modeling Emotional Openness',
        description:
          'A household where feelings are expressed openly can make tears feel safe to show.',
      },
    ],
    concerns: [
      'Crying that seems inconsolable for long stretches, most days',
      'Tears paired with a loss of interest in things once enjoyed',
      'Crying accompanied by frequent physical complaints',
      'A sudden, sustained increase with no clear cause',
      'Crying that isolates them from friends or activities',
    ],
    professionalGuidance:
      'If crying is frequent, inconsolable, or paired with a broader loss of interest or energy, a pediatrician can help assess mood and well-being.',
    strategies: [
      'Validate rather than minimize: "It makes sense you’re upset"',
      'Avoid labeling them as "too sensitive" or "dramatic"',
      'Offer a calm, quiet space to let the wave pass',
      'Build in downtime so daily reserves stay topped up',
    ],
    routine: [
      { icon: '👂', label: 'Validate the feeling' },
      { icon: '🧘', label: 'Give space to release' },
      { icon: '🤗', label: 'Offer comfort' },
      { icon: '☀️', label: 'Protect daily downtime' },
    ],
    insight:
      'Sensitivity that shows up as easy tears often comes with real strengths — deep empathy and self-awareness — once it’s supported rather than suppressed.',
    keywords: ['crying', 'sensitive', 'tears', 'emotional'],
    perspectives: {
      clinician:
        'Temperament researchers describe high sensitivity as a stable, biologically-rooted trait, not a phase to train out — supporting it tends to build the emotional insight that comes with it, rather than suppressing the tears alone.',
    },
    culturalLens: [
      {
        region: 'Cultures with open emotional expression',
        note: 'Cultures that normalize visible emotion, including tears, in children of any gender tend to treat easy crying as unremarkable rather than something to toughen up.',
      },
      {
        region: 'Cultures with stronger stoicism norms',
        note: "Some cultures apply stronger 'toughen up' expectations, especially to boys, which can push a sensitive child's tears underground rather than easing the underlying sensitivity.",
      },
    ],
    sources: ['American Psychological Association', 'CDC'],
  },
  {
    id: 'fear-of-dark',
    topicNumber: 3,
    title: 'Why Are Kids Afraid of the Dark?',
    heading: {
      lead: 'Why Are Kids',
      emphasis: 'Afraid of the Dark',
      trailing: 'Even in Their Own Room?',
    },
    quote: 'Can you check under the bed again?',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'fear-of-dark',
    reassurance: "It's common — and it's a very normal developmental stage!",
    explanation:
      'Most of the time, fear of the dark peaks alongside a growing imagination that hasn’t yet learned to filter what is real.',
    reasons: [
      {
        icon: '🎨',
        title: 'Imagination Outpacing Reasoning',
        description:
          'A vivid imagination develops well before the logic to dismiss what it invents.',
      },
      {
        icon: '👁️',
        title: 'Reduced Visual Information',
        description:
          'Darkness removes the visual cues a brain relies on to feel safe and oriented.',
      },
      {
        icon: '🧠',
        title: 'A Normal Developmental Stage',
        description:
          'Fear of the dark peaks in early childhood as imagination and memory both grow.',
      },
      {
        icon: '📺',
        title: 'Absorbed Stories or Images',
        description:
          'A scary scene from a show or story can resurface vividly once the lights go off.',
      },
      {
        icon: '🌙',
        title: 'Being Alone at Bedtime',
        description:
          'The dark often coincides with the one time of day a child is truly by themselves.',
      },
      {
        icon: '🔊',
        title: 'Unfamiliar Nighttime Sounds',
        description: 'Ordinary house sounds seem louder and stranger without visual context.',
      },
      {
        icon: '😰',
        title: 'Anxiety From Elsewhere',
        description: 'Unrelated daytime stress can surface as nighttime fear once things go quiet.',
      },
      {
        icon: '🕹️',
        title: 'Loss of Control at Night',
        description: 'Bedtime removes a lot of the daytime control a child otherwise has.',
      },
    ],
    concerns: [
      'Fear so severe it prevents sleep most nights',
      'Fear spreading to daytime hours or many other situations',
      'Physical symptoms of panic at bedtime specifically',
      'No improvement at all after months of gentle, consistent support',
      'Fear paired with broader signs of anxiety',
    ],
    professionalGuidance:
      'If fear of the dark is severe, spreading beyond bedtime, or preventing sleep most nights, a pediatrician can help assess anxiety and sleep needs.',
    strategies: [
      'Use a dim nightlight rather than full darkness',
      'Do a calm, matter-of-fact "safety check" of the room together',
      'Avoid frightening media close to bedtime',
      'Validate the fear without confirming the imagined threat is real',
    ],
    routine: [
      { icon: '💡', label: 'Add a soft nightlight' },
      { icon: '🔍', label: 'Do a safety check' },
      { icon: '📖', label: 'Calm wind-down story' },
      { icon: '🛏️', label: 'Consistent goodnight' },
    ],
    insight:
      'Fear of the dark usually fades on its own as reasoning catches up to imagination — steady, low-key reassurance shortens that stretch far more than dismissing the fear.',
    keywords: ['fear of the dark', 'nighttime fear', 'bedtime anxiety', 'nightlight'],
    perspectives: {
      clinician:
        "Sleep and anxiety specialists note fear of the dark is one of the most universal, time-limited childhood fears — a dim nightlight and a calm 'safety check' ritual outperform trying to logically argue a child out of the fear.",
    },
    culturalLens: [
      {
        region: 'Co-sleeping cultures',
        note: 'Where children commonly sleep in the same room as a caregiver for longer, fear of the dark may be expressed later or differently, since the child is rarely truly alone at night.',
      },
      {
        region: 'Solo-sleeping cultures',
        note: 'Cultures that expect independent sleep from infancy often introduce nightlights and bedtime rituals earlier as a matter of course.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'Sleep Foundation'],
  },
  {
    id: 'drop-off-anxiety',
    topicNumber: 4,
    title: 'Why Is School Drop-Off So Hard?',
    heading: {
      lead: 'Why Is',
      emphasis: 'School Drop-Off',
      trailing: 'So Hard Some Mornings?',
    },
    quote: "Please don't leave me here!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'drop-off-anxiety',
    reassurance: "It's common — and it usually isn't about the school itself!",
    explanation:
      'Most of the time, drop-off distress is the moment separation becomes real, not a sign something is wrong at school.',
    reasons: [
      {
        icon: '💛',
        title: 'A Strong, Healthy Attachment',
        description: 'Distress at separation often reflects a secure bond, not an unhealthy one.',
      },
      {
        icon: '🧠',
        title: 'The Moment Separation Becomes Real',
        description: 'Anticipation can feel fine until the actual goodbye moment arrives.',
      },
      {
        icon: '🔁',
        title: 'A Recent Change at Home',
        description: 'A new sibling, move, or schedule shift often intensifies drop-off distress.',
      },
      {
        icon: '⏳',
        title: 'Uncertain Sense of Time',
        description: 'A full school day can feel like an unknowable stretch to a young child.',
      },
      {
        icon: '😴',
        title: 'Tiredness Lowering Coping',
        description: 'A short night’s sleep makes the whole morning transition much harder.',
      },
      {
        icon: '👀',
        title: 'Picking Up on a Caregiver’s Own Anxiety',
        description: 'Kids are quick to sense hesitation or worry in a parent’s own goodbye.',
      },
      {
        icon: '🎭',
        title: 'A Hard Social Moment',
        description: 'A recent friendship hiccup can make the classroom feel less safe that day.',
      },
      {
        icon: '🔄',
        title: 'Monday-Morning Effect',
        description: 'A longer stretch away from a caregiver often makes the next goodbye harder.',
      },
    ],
    concerns: [
      'Distress that doesn’t ease at all after settling-in time each day',
      'Panic that persists for weeks with no improving trend',
      'Physical symptoms tied specifically to school mornings',
      'Reluctance to attend school itself, beyond just the goodbye',
      'Teachers reporting ongoing distress well into the school day',
    ],
    professionalGuidance:
      'If distress persists for weeks, includes physical symptoms, or extends into the school day, a pediatrician or school counselor can help assess what’s underneath it.',
    strategies: [
      'Keep goodbyes brief, warm, and predictable — long goodbyes prolong distress',
      'Create a simple goodbye ritual, like a special handshake',
      'Preview the day’s plan so it feels less unknown',
      'Stay calm and confident yourself during the handoff',
    ],
    routine: [
      { icon: '🗓️', label: 'Preview the day' },
      { icon: '🤝', label: 'Goodbye ritual' },
      { icon: '🚶', label: 'Leave promptly' },
      { icon: '🤗', label: 'Warm reunion later' },
    ],
    insight:
      'Drop-off distress almost always eases within minutes once a trusted adult confirms it — the goodbye itself, not the day ahead, is usually the hardest part.',
    keywords: ['separation anxiety', 'school drop-off', 'goodbye', 'attachment'],
    perspectives: {
      clinician:
        'Attachment researchers frame drop-off distress as confirmation of a healthy bond — a brief, warm, and prompt goodbye consistently shortens the distress more than lingering to comfort longer.',
    },
    culturalLens: [
      {
        region: 'Cultures with early, near-universal group childcare',
        note: 'Where group childcare starts very early and is culturally the norm, children tend to build separation tolerance earlier on average.',
      },
      {
        region: 'Cultures with strong extended-family involvement',
        note: 'Close, ever-present extended family can make the shift to an unfamiliar caregiver feel like a bigger jump, intensifying drop-off distress at first.',
      },
    ],
    sources: ['Zero to Three', 'American Academy of Pediatrics'],
  },
  {
    id: 'sibling-jealousy',
    topicNumber: 5,
    title: 'Why Are Siblings So Jealous of Each Other?',
    heading: {
      lead: 'Why Are Siblings',
      emphasis: 'So Jealous',
      trailing: 'of Each Other?',
    },
    quote: 'You always let HER do it!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'sibling-jealousy',
    reassurance: "It's common — and it doesn't mean they don't love their sibling!",
    explanation:
      'Most of the time, jealousy is a signal about attention and fairness, not genuine resentment of the sibling.',
    reasons: [
      {
        icon: '⚖️',
        title: 'A Strong Fairness Instinct',
        description: 'Kids track perceived fairness closely, even when the difference is tiny.',
      },
      {
        icon: '💛',
        title: 'Wanting Reassurance of Love',
        description: 'Jealousy often really means "am I still just as important to you?"',
      },
      {
        icon: '🧠',
        title: 'Limited Perspective on Different Needs',
        description: 'It’s hard to grasp that a sibling’s needs differ from their own at this age.',
      },
      {
        icon: '📈',
        title: 'A New Milestone for the Sibling',
        description: 'A sibling’s recent achievement can spotlight a perceived gap.',
      },
      {
        icon: '🕰️',
        title: 'Divided Attention',
        description: 'Attention that used to be undivided now has to be genuinely shared.',
      },
      {
        icon: '👶',
        title: 'A Younger Sibling’s Arrival',
        description: 'A new baby is a well-documented trigger for jealousy in an older child.',
      },
      {
        icon: '🏆',
        title: 'Comparison, Not Just Competition',
        description: 'Being compared, even lightly, sharpens jealousy far more than sharing does.',
      },
      {
        icon: '🎭',
        title: 'A Role Already Assigned',
        description:
          'Being cast as "the responsible one" or "the easy one" fuels resentment either way.',
      },
    ],
    concerns: [
      'Jealousy escalating into ongoing hostility or aggression',
      'Persistent belief that one child is clearly favored, unaddressed',
      'Jealousy affecting the sibling relationship well beyond typical rivalry',
      'A child regularly voicing feeling unloved, not just treated unequally',
      'No easing at all despite deliberate individual attention',
    ],
    professionalGuidance:
      'If jealousy is intense, ongoing, or a child regularly expresses feeling unloved, a family therapist can help address the dynamic directly.',
    strategies: [
      'Give each child dedicated one-on-one time, without the sibling present',
      'Avoid comparing siblings, even in praise',
      'Acknowledge the feeling directly: "It’s hard when it feels unfair"',
      'Notice and value each child’s distinct strengths, not just fairness',
    ],
    routine: [
      { icon: '⏱️', label: 'One-on-one time' },
      { icon: '👂', label: 'Name the feeling' },
      { icon: '⚖️', label: 'Avoid comparisons' },
      { icon: '🌟', label: 'Notice their strengths' },
    ],
    insight:
      'Sibling jealousy usually settles once a child feels individually seen — equal treatment matters less than each child feeling uniquely valued.',
    keywords: ['sibling jealousy', 'rivalry', 'fairness', 'favoritism'],
    perspectives: {
      clinician:
        "Family therapists note jealousy is usually a proxy question — 'do you love me as much?' — so individual one-on-one time reliably eases it faster than trying to enforce perfect fairness.",
    },
    culturalLens: [
      {
        region: 'Cultures with defined sibling roles by birth order',
        note: "Some cultures assign clear roles by birth order — such as 'the responsible eldest' — which can shape jealousy differently than cultures with a less defined sibling hierarchy.",
      },
      {
        region: 'Cultures with close, cooperative sibling caregiving',
        note: 'Where siblings routinely care for one another, jealousy is often actively mediated by the family as a whole rather than left to the parents alone.',
      },
    ],
    sources: ['American Psychological Association', 'Zero to Three'],
  },
  {
    id: 'anger-outbursts',
    topicNumber: 6,
    title: 'Why Do Kids Have Sudden Anger Outbursts?',
    heading: {
      lead: 'Why Do Kids Have',
      emphasis: 'Sudden Anger Outbursts',
      trailing: 'Seemingly Out of Nowhere?',
    },
    quote: 'I HATE this, I HATE everything!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'anger-outbursts',
    reassurance: "It's common — and anger is a normal, valid emotion!",
    explanation:
      'Most of the time, anger is covering a softer feeling underneath — hurt, fear, or disappointment — that hasn’t found its own words yet.',
    reasons: [
      {
        icon: '🎭',
        title: 'A Secondary Emotion',
        description: 'Anger often masks hurt, embarrassment, or fear that feels harder to show.',
      },
      {
        icon: '🧠',
        title: 'Fast, Underdeveloped Fuse',
        description:
          'The pause between trigger and reaction is genuinely shorter in a young brain.',
      },
      {
        icon: '🔋',
        title: 'Accumulated Frustration',
        description: 'Small frustrations across the day can combine into one sudden outburst.',
      },
      {
        icon: '🕹️',
        title: 'A Reaction to Feeling Powerless',
        description: 'Anger can be the loudest available response to a situation felt as unfair.',
      },
      {
        icon: '🗣️',
        title: 'Missing Words for the Real Feeling',
        description: 'Anger is often the only emotion word a child reaches for reliably.',
      },
      {
        icon: '🪞',
        title: 'Modeling From the Environment',
        description: 'A child’s style of expressing anger is heavily shaped by what they’ve seen.',
      },
      {
        icon: '😴',
        title: 'Physical Depletion',
        description: 'Hunger, tiredness, or illness sharply shorten the fuse for anger.',
      },
      {
        icon: '🧩',
        title: 'Sensory or Situational Overload',
        description: 'Too much noise, mess, or demand can tip a child suddenly into anger.',
      },
    ],
    concerns: [
      'Anger that regularly leads to harming self, others, or property',
      'Outbursts that are increasing in frequency or intensity',
      'No calming even with time, space, or a trusted adult’s support',
      'Anger paired with a persistent low mood between outbursts',
      'A sudden, unexplained increase out of typical range for the child',
    ],
    professionalGuidance:
      'If outbursts are frequent, escalating, or involve harm, a pediatrician or child therapist can help identify triggers and build coping strategies.',
    strategies: [
      'Stay calm and physically steady rather than escalating in response',
      'Name the likely feeling underneath: "Something felt really unfair"',
      'Give space to cool down before problem-solving together',
      'Teach simple calming tools in advance, during a calm moment',
    ],
    routine: [
      { icon: '🧘', label: 'Stay calm yourself' },
      { icon: '🚪', label: 'Give cooling-down space' },
      { icon: '💬', label: 'Name the real feeling' },
      { icon: '🤝', label: 'Problem-solve after' },
    ],
    insight:
      'Anger is rarely the whole story — looking for the softer feeling underneath it usually reveals what actually needs addressing.',
    keywords: ['anger', 'outbursts', 'temper', 'frustration'],
    perspectives: {
      clinician:
        'Child psychologists frame anger as almost always a secondary emotion — covering hurt, fear, or embarrassment — so naming the feeling underneath tends to defuse an outburst faster than addressing the anger itself.',
    },
    culturalLens: [
      {
        region: 'Cultures with open anger expression',
        note: 'Some cultures treat visible anger, including from children, as an acceptable direct emotion rather than one requiring immediate suppression.',
      },
      {
        region: 'Cultures emphasizing composure',
        note: 'Cultures that emphasize emotional composure may coach children toward quieter anger expression earlier, without changing how intensely the feeling is experienced underneath.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'perfectionism',
    topicNumber: 7,
    title: 'Why Do Some Kids Fear Making Mistakes?',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Fear Making Mistakes',
      trailing: 'Even Small, Harmless Ones?',
    },
    quote: 'I have to erase it and start completely over!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'perfectionism',
    reassurance: "It's common — and it usually reflects high standards, not fragility!",
    explanation:
      'Most of the time, fear of mistakes reflects a strong desire to do well that hasn’t yet learned mistakes are part of the process.',
    reasons: [
      {
        icon: '🎯',
        title: 'High Personal Standards',
        description: 'A genuine wish to do well can tip into fear when standards feel absolute.',
      },
      {
        icon: '🪞',
        title: 'Self-Worth Tied to Performance',
        description: 'Some kids equate a mistake with being less capable or less loved.',
      },
      {
        icon: '👀',
        title: 'Fear of Others’ Reactions',
        description: 'Worry about disappointing an adult can loom larger than the task itself.',
      },
      {
        icon: '🧠',
        title: 'Black-and-White Thinking',
        description: 'Younger reasoning often sorts outcomes into simply "right" or "wrong."',
      },
      {
        icon: '📈',
        title: 'Praise Focused on Outcomes',
        description:
          'Frequent praise for being "so smart" can make errors feel identity-threatening.',
      },
      {
        icon: '🏆',
        title: 'Comparison to Peers or Siblings',
        description: 'Measuring against someone else raises the stakes of any single mistake.',
      },
      {
        icon: '😰',
        title: 'Underlying Anxiety',
        description: 'General anxiety often shows up specifically as fear of getting things wrong.',
      },
      {
        icon: '🎭',
        title: 'A Temperament Drawn to Control',
        description: 'Some kids are naturally more oriented toward order and certainty.',
      },
    ],
    concerns: [
      'Avoiding tasks entirely rather than risk a mistake',
      'Extreme distress — well beyond frustration — at small errors',
      'Perfectionism paired with signs of broader anxiety or low mood',
      'Self-critical talk that is harsh or persistent',
      'No willingness to try again after a mistake, ever',
    ],
    professionalGuidance:
      'If fear of mistakes leads to avoiding tasks altogether or is paired with harsh self-talk, a child psychologist can help build a healthier relationship with error.',
    strategies: [
      'Praise effort and process, not just outcomes: "You worked hard on that"',
      'Model making mistakes calmly and out loud yourself',
      'Reframe mistakes explicitly as part of learning, not failure',
      'Avoid over-focusing on grades or being "the best"',
    ],
    routine: [
      { icon: '💬', label: 'Praise the effort' },
      { icon: '🪞', label: 'Model your own mistakes' },
      { icon: '🔄', label: 'Reframe as learning' },
      { icon: '🌱', label: 'Encourage trying again' },
    ],
    insight:
      'Fear of mistakes usually eases once a mistake stops meaning something about who a child is — and starts meaning simply "one step in learning."',
    keywords: ['perfectionism', 'fear of failure', 'mistakes', 'self-critical'],
    perspectives: {
      clinician:
        'Psychologists note that praise focused on effort and process, rather than innate ability, is one of the most consistently evidence-supported ways to ease fear of mistakes over time.',
      teacher:
        'Teachers see this ease when a classroom explicitly treats mistakes as part of the visible learning process, not just at home.',
    },
    culturalLens: [
      {
        region: 'High-achievement academic cultures',
        note: "Intense academic competition can raise the stakes of any single mistake, adding pressure on top of a child's own perfectionist tendencies.",
      },
      {
        region: 'Growth-mindset-oriented cultures',
        note: 'Cultures or schools that explicitly teach that ability grows with effort are associated with children showing less fear of mistakes.',
      },
    ],
    sources: ['American Psychological Association', 'CASEL'],
  },
  {
    id: 'shyness',
    topicNumber: 8,
    title: 'Why Are Some Kids So Shy in New Situations?',
    heading: {
      lead: 'Why Are Some Kids',
      emphasis: 'So Shy',
      trailing: 'in New Social Situations?',
    },
    quote: "I don't want to say hi, I want to go home.",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'shyness',
    reassurance: "It's common — and it isn't a problem to be fixed!",
    explanation:
      'Most of the time, shyness reflects a temperament that needs more time to warm up, not a lack of social skill.',
    reasons: [
      {
        icon: '🎨',
        title: 'A Naturally Cautious Temperament',
        description: 'Some kids are simply wired to observe carefully before engaging.',
      },
      {
        icon: '🧠',
        title: 'A Slower "Warm-Up" Style',
        description: 'A slow-to-warm temperament needs extra time to feel comfortable, not none.',
      },
      {
        icon: '👀',
        title: 'Heightened Awareness of Being Watched',
        description: 'Some kids feel especially self-conscious under new or group attention.',
      },
      {
        icon: '🧩',
        title: 'Unfamiliar Social Rules',
        description: 'A new setting means untested expectations, which can feel unsettling.',
      },
      {
        icon: '🌊',
        title: 'Sensory Sensitivity',
        description: 'Noisy, crowded gatherings can simply feel like more input to process.',
      },
      {
        icon: '🔁',
        title: 'A Recent Difficult Social Experience',
        description: 'A past awkward or hurtful moment can make new situations feel riskier.',
      },
      {
        icon: '💛',
        title: 'Preference for Deeper Connection',
        description: 'Some kids simply prefer one close friend to a wide group of acquaintances.',
      },
      {
        icon: '🪞',
        title: 'Modeling From a Caregiver',
        description: 'A caregiver’s own social ease or hesitation is closely observed and echoed.',
      },
    ],
    concerns: [
      'Shyness severe enough to prevent speaking in familiar settings too',
      'Significant, ongoing distress about school or peer situations',
      'Complete avoidance of nearly all social interaction over time',
      'Shyness paired with signs of broader anxiety',
      'No warming up at all, even after repeated, extended exposure',
    ],
    professionalGuidance:
      'If shyness is severe, prevents speaking even in familiar settings, or causes significant distress, a pediatrician can help assess for social anxiety.',
    strategies: [
      'Give plenty of advance notice before new social situations',
      'Let them observe from the sidelines before joining in',
      'Avoid labeling them as "shy" in front of others',
      'Celebrate small steps toward engaging, without pressure',
    ],
    routine: [
      { icon: '🗓️', label: 'Preview what’s coming' },
      { icon: '👀', label: 'Allow observing first' },
      { icon: '⏳', label: 'Let warm-up take time' },
      { icon: '👏', label: 'Celebrate small steps' },
    ],
    insight:
      'Shy kids usually engage just as fully as anyone else — they simply need more runway to get there, not a push to skip it.',
    keywords: ['shy', 'social anxiety', 'introvert', 'new situations'],
    perspectives: {
      clinician:
        "Temperament researchers describe 'slow to warm up' as one of the most well-documented, stable temperament categories — pushing a shy child to perform socially before they're ready tends to backfire, while patient exposure builds confidence.",
      teacher:
        'Teachers know that letting a shy child observe from the edges before joining in usually gets them participating faster than requiring immediate engagement.',
    },
    culturalLens: [
      {
        region: 'Cultures with unstructured extended-family socializing',
        note: 'Growing up around a large, familiar extended family can mean less practice with true strangers specifically, even for an otherwise socially comfortable child.',
      },
      {
        region: 'Cultures where reserve is considered polite',
        note: "Some cultures treat reserved, quiet behavior with new people as simply polite, not as something needing to be 'fixed.'",
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Psychological Association'],
  },
  {
    id: 'sadness',
    topicNumber: 9,
    title: 'Why Do Kids Get Sad Without an Obvious Reason?',
    heading: {
      lead: 'Why Do Kids Get Sad',
      emphasis: 'Without an Obvious Reason',
      trailing: 'Some Days?',
    },
    quote: "I just feel sad and I don't know why.",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'sadness',
    reassurance: "It's common — and noticing it is already a healthy sign!",
    explanation:
      'Most of the time, an unexplained sad mood reflects an accumulation of small things a child hasn’t yet connected out loud.',
    reasons: [
      {
        icon: '🧩',
        title: 'Unnamed Small Stressors',
        description:
          'Several minor disappointments can add up into a mood without one clear cause.',
      },
      {
        icon: '🧠',
        title: 'Developing Self-Awareness',
        description: 'Noticing and naming an inner mood is itself a skill still being built.',
      },
      {
        icon: '😴',
        title: 'Sleep or Diet Changes',
        description: 'Mood is closely tied to rest and nutrition, more than adults often expect.',
      },
      {
        icon: '📉',
        title: 'A Natural Emotional Dip',
        description:
          'Like adults, kids have lower-energy stretches that pass without a clear trigger.',
      },
      {
        icon: '🌦️',
        title: 'Weather or Season Change',
        description: 'Less daylight or being cooped up indoors can genuinely lower mood.',
      },
      {
        icon: '🎭',
        title: 'Processing Something Unspoken',
        description: 'A friendship shift or overheard worry may be quietly weighing on them.',
      },
      {
        icon: '📈',
        title: 'Post-Excitement Letdown',
        description: 'A big anticipated event ending can leave a real emotional dip behind.',
      },
      {
        icon: '💛',
        title: 'Empathic Absorption',
        description:
          'A sensitive child can pick up and internalize a parent’s or friend’s low mood.',
      },
    ],
    concerns: [
      'Sadness lasting two weeks or more, most of most days',
      'Loss of interest in activities they usually enjoy',
      'Changes in appetite, sleep, or energy alongside the sadness',
      'Any talk of hopelessness or not wanting to be around',
      'Withdrawal from friends or family that continues over time',
    ],
    professionalGuidance:
      'If sadness persists for two weeks or more, or comes with changes in sleep, appetite, or withdrawal, a pediatrician should be consulted without delay.',
    strategies: [
      'Make space for the feeling without rushing to fix it: "I’m here if you want to talk"',
      'Keep gentle daily routines steady — movement, sleep, meals',
      'Check in casually rather than pressing for an explanation',
      'Watch for patterns rather than judging any single day',
    ],
    routine: [
      { icon: '👂', label: 'Make space to talk' },
      { icon: '☀️', label: 'Protect routines' },
      { icon: '🚶', label: 'Encourage movement' },
      { icon: '📆', label: 'Watch for patterns' },
    ],
    insight:
      'A single sad day is normal and usually passes on its own — what matters most is tracking the pattern over time, not any one afternoon.',
    keywords: ['sadness', 'low mood', 'blue', 'down'],
    perspectives: {
      clinician:
        'Pediatricians draw a clear line at two weeks: an occasional sad day is normal, but sadness most of most days for two weeks or more — especially with sleep, appetite, or energy changes — warrants a conversation with a doctor without delay.',
    },
    culturalLens: [
      {
        region: 'Cultures with frequent communal check-ins',
        note: "Where extended family checks in daily, a shift in a child's mood may get noticed earlier, simply through more frequent observation.",
      },
      {
        region: 'Cultures that discourage discussing low mood openly',
        note: 'Where sadness is treated as private, a child may show fewer outward signals, making the two-week/functioning check especially useful since it doesn’t rely on the child volunteering the feeling.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'fear-of-new-things',
    topicNumber: 10,
    title: 'Why Are Kids Scared to Try New Things?',
    heading: {
      lead: 'Why Are Kids',
      emphasis: 'Scared to Try',
      trailing: 'New Things?',
    },
    quote: "What if I'm bad at it?",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'fear-of-new-things',
    reassurance: "It's common — and it doesn't mean they lack confidence overall!",
    explanation:
      'Most of the time, hesitation about something new is the fear of not being immediately good at it, not a lack of interest.',
    reasons: [
      {
        icon: '🎯',
        title: 'Fear of Not Being Good Right Away',
        description: 'Many kids expect to be instantly competent and fear the gap before that.',
      },
      {
        icon: '🧠',
        title: 'Uncertainty Feels Uncomfortable',
        description: 'An unfamiliar activity offers none of the predictability a child relies on.',
      },
      {
        icon: '👀',
        title: 'Fear of Being Watched While Learning',
        description: 'Struggling in front of others can feel far riskier than the activity itself.',
      },
      {
        icon: '🔁',
        title: 'A Past Difficult First Try',
        description: 'One earlier awkward experience can generalize into avoiding anything new.',
      },
      {
        icon: '🎭',
        title: 'Comparison to a More Experienced Peer',
        description:
          'Seeing someone already skilled can make starting from zero feel discouraging.',
      },
      {
        icon: '🕹️',
        title: 'Loss of Control Over the Unknown',
        description: 'A new activity removes the sense of mastery a child has over familiar ones.',
      },
      {
        icon: '🧩',
        title: 'Temperamental Caution',
        description:
          'Some kids are simply more careful and deliberate before jumping into anything.',
      },
      {
        icon: '📈',
        title: 'High Standards From Success Elsewhere',
        description:
          'Being skilled at other things can raise the bar they expect of themselves here too.',
      },
    ],
    concerns: [
      'Avoidance so broad it limits most new activities entirely',
      'Extreme distress, not just reluctance, when facing anything new',
      'Fear of trying paired with signs of broader anxiety',
      'No easing at all even with low-pressure, repeated exposure',
      'Avoidance that is worsening rather than gradually easing with age',
    ],
    professionalGuidance:
      'If avoidance of new things is broad, extreme, or paired with signs of anxiety, a pediatrician or child psychologist can help build coping strategies.',
    strategies: [
      'Normalize being a beginner: "Everyone is bad at something the first time"',
      'Let them watch or try privately before doing it in front of others',
      'Praise the attempt itself, regardless of the outcome',
      'Start with low-stakes, low-pressure versions of new activities',
    ],
    routine: [
      { icon: '👀', label: 'Watch or preview first' },
      { icon: '🎯', label: 'Start low-stakes' },
      { icon: '🌱', label: 'Try it privately first' },
      { icon: '👏', label: 'Praise the attempt' },
    ],
    insight:
      'Reluctance to try something new is almost always about the discomfort of being a beginner, not a lack of curiosity or ability.',
    keywords: ['fear of trying', 'new activities', 'confidence', 'avoidance'],
    perspectives: {
      teacher:
        'Teachers see this most clearly around new units or activities — letting a hesitant child watch or try privately before performing in front of the group usually gets them started faster than requiring immediate participation.',
      clinician:
        'Psychologists note the fear is almost always about the visible gap before competence, not the activity itself — normalizing being a beginner out loud is one of the simplest, most effective fixes.',
    },
    culturalLens: [
      {
        region: 'Cultures with early competitive activity structures',
        note: 'Cultures that introduce structured, ranked activities earlier can raise the stakes of being a visible beginner sooner.',
      },
      {
        region: 'Cultures with playful, low-stakes early exposure',
        note: 'Cultures that treat early attempts at new skills as playful rather than evaluative tend to lower the perceived risk of trying something new in front of others.',
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'embarrassment',
    topicNumber: 11,
    title: 'Why Do Kids Get So Embarrassed So Easily?',
    heading: {
      lead: 'Why Do Kids Get',
      emphasis: 'So Embarrassed',
      trailing: 'Over Small Slip-Ups?',
    },
    quote: 'Everyone saw, I want to disappear!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'embarrassment',
    reassurance: "It's common — and it's a sign of growing social awareness!",
    explanation:
      'Most of the time, embarrassment peaks alongside a new awareness of how others might see them, not an actual disaster.',
    reasons: [
      {
        icon: '🧠',
        title: 'Emerging Social Awareness',
        description:
          'A growing sense of how others perceive them makes small slip-ups feel bigger.',
      },
      {
        icon: '👀',
        title: 'Overestimating How Much Others Noticed',
        description:
          'Kids often assume a mistake was far more visible to others than it really was.',
      },
      {
        icon: '🎭',
        title: 'Fear of Judgment From Peers',
        description: 'Peer opinion starts mattering intensely around this developmental stage.',
      },
      {
        icon: '📈',
        title: 'High Self-Expectations',
        description: 'A child who usually does well can feel a slip-up especially sharply.',
      },
      {
        icon: '🔁',
        title: 'Replaying the Moment',
        description: 'Rumination over a small mistake can amplify it far beyond its actual size.',
      },
      {
        icon: '🌡️',
        title: 'A Genuine Physical Response',
        description: 'Blushing and a racing heart are involuntary and can heighten the discomfort.',
      },
      {
        icon: '🎨',
        title: 'A More Sensitive Temperament',
        description: 'Some kids simply register social moments more intensely than others.',
      },
      {
        icon: '🪞',
        title: 'Modeling Adult Reactions to Mistakes',
        description: 'How adults respond to their own mistakes shapes how big a slip-up feels.',
      },
    ],
    concerns: [
      'Embarrassment so intense it leads to avoiding school or activities',
      'Rumination over small moments that lasts for days',
      'Embarrassment paired with signs of broader social anxiety',
      'Harsh self-criticism following ordinary, minor mistakes',
      'No easing over time despite repeated reassurance',
    ],
    professionalGuidance:
      'If embarrassment leads to avoiding school or activities, or triggers harsh self-criticism, a school counselor or child psychologist can help build resilience.',
    strategies: [
      'Normalize it: "Everyone has moments like that — they happen to me too"',
      'Share your own small embarrassing moments matter-of-factly',
      'Avoid dwelling on the incident longer than they do',
      'Help them notice how quickly others actually move on',
    ],
    routine: [
      { icon: '💬', label: 'Normalize the moment' },
      { icon: '🪞', label: 'Share your own story' },
      { icon: '⏳', label: 'Let it pass quickly' },
      { icon: '🌟', label: 'Refocus forward' },
    ],
    insight:
      'Embarrassment fades fastest when it isn’t dwelt on — most peers genuinely forget the moment far sooner than the child expects.',
    keywords: ['embarrassment', 'self-conscious', 'social awareness'],
    perspectives: {
      teacher:
        'Teachers notice peers genuinely forget an embarrassing moment far faster than the child expects — pointing that out, gently, tends to help more than dwelling on the moment.',
      clinician:
        "Psychologists note the 'spotlight effect' — overestimating how much others noticed — is a well-documented cognitive bias, not unique to any one child, and tends to ease with direct, matter-of-fact reassurance.",
    },
    culturalLens: [
      {
        region: "Cultures with strong social 'face' or reputation concerns",
        note: 'These cultures can intensify embarrassment around visible mistakes, since a slip-up carries more perceived social weight.',
      },
      {
        region: 'Cultures that normalize public mistakes',
        note: 'Some cultures actively model shrugging off small public mistakes, which gives children a visible example that a slip-up is not a lasting mark.',
      },
    ],
    sources: ['American Psychological Association', 'American Academy of Pediatrics'],
  },
  {
    id: 'worry',
    topicNumber: 12,
    title: 'Why Do Kids Worry About Things That Might Not Happen?',
    heading: {
      lead: 'Why Do Kids Worry',
      emphasis: 'About Things',
      trailing: 'That Might Never Even Happen?',
    },
    quote: 'But what if the plane crashes?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'worry',
    reassurance: "It's common — and it's a sign of a thoughtful, imaginative mind!",
    explanation:
      'Most of the time, worry reflects a growing ability to imagine future possibilities, without yet the experience to weigh how likely they are.',
    reasons: [
      {
        icon: '🧠',
        title: 'New Ability to Imagine the Future',
        description:
          'Kids only recently gain the capacity to picture events that haven’t happened.',
      },
      {
        icon: '📊',
        title: 'Limited Sense of Probability',
        description: 'A rare event and a likely one can feel equally possible to a young mind.',
      },
      {
        icon: '👂',
        title: 'Overheard Adult Conversations',
        description:
          'Fragments of grown-up worry, half-understood, often become a child’s own fear.',
      },
      {
        icon: '🎭',
        title: 'A Vivid Imagination',
        description:
          'The same imagination that fuels creativity can also fuel worst-case scenarios.',
      },
      {
        icon: '🕹️',
        title: 'Wanting to Feel Prepared',
        description:
          'Worrying can feel, mistakenly, like a way of controlling an uncertain outcome.',
      },
      {
        icon: '🌡️',
        title: 'A More Anxious Temperament',
        description: 'Some kids are naturally more attuned to potential threats than others.',
      },
      {
        icon: '📺',
        title: 'Exposure to Scary News or Media',
        description: 'Frightening stories, even briefly seen, can seed lasting specific worries.',
      },
      {
        icon: '🔁',
        title: 'One Worry Feeding Another',
        description: 'Anxious thoughts often spiral, each one triggering the next in sequence.',
      },
    ],
    concerns: [
      'Worry that interferes with sleep, school, or daily activities',
      'Physical symptoms — stomachaches, headaches — tied to worry',
      'Worry about many different things, most of the time',
      'No reassurance that ever seems to fully settle the fear',
      'Worry accompanied by avoidance of normal daily situations',
    ],
    professionalGuidance:
      'If worry interferes with sleep, school, or daily life, or comes with frequent physical symptoms, a pediatrician can help assess for an anxiety condition.',
    strategies: [
      'Take the worry seriously without amplifying it further',
      'Gently offer realistic odds: "That’s very unlikely to happen"',
      'Teach a simple calming tool, like slow breathing, in advance',
      'Limit exposure to frightening news or media for their age',
    ],
    routine: [
      { icon: '👂', label: 'Take it seriously' },
      { icon: '📊', label: 'Offer realistic odds' },
      { icon: '🫁', label: 'Practice calm breathing' },
      { icon: '🛡️', label: 'Limit scary media' },
    ],
    insight:
      'Worry usually eases once a child has both the words to name it and evidence that naming it doesn’t make it more likely to happen.',
    keywords: ['worry', 'anxiety', 'fear', 'what-if thoughts'],
    perspectives: {
      clinician:
        'Pediatricians recommend taking a specific worry seriously rather than dismissing it, then gently offering realistic odds — this validates the feeling while still challenging the catastrophic thought underneath it.',
    },
    culturalLens: [
      {
        region: 'Cultures with more open discussion of real-world risk',
        note: 'Some cultures discuss real-world dangers more openly and matter-of-factly with children, which can shape how a specific worry gets processed and named.',
      },
      {
        region: 'Cultures with strong protective/reassurance norms',
        note: 'Some cultures lean toward shielding children from worrying topics entirely, which can mean a specific fear is less often named and discussed openly at home.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
  {
    id: 'difficulty-calming-down',
    topicNumber: 13,
    title: 'Why Is It So Hard for Kids to Calm Down Once Upset?',
    heading: {
      lead: 'Why Is It So Hard',
      emphasis: 'to Calm Down',
      trailing: 'Once They Get Upset?',
    },
    quote: "I can't stop crying, leave me alone!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'difficulty-calming-down',
    reassurance: "It's common — and calming down is a skill, not an instinct!",
    explanation:
      "Most of the time, it's because the ability to self-soothe is still being built, borrowed from a calm adult before it becomes internal.",
    reasons: [
      {
        icon: '🧠',
        title: 'Self-Soothing Is a Learned Skill',
        description: 'The ability to calm oneself down is built gradually, not present from birth.',
      },
      {
        icon: '🌊',
        title: 'A Genuine Physiological Wave',
        description: 'Once triggered, stress chemicals take real time to clear from the body.',
      },
      {
        icon: '🔄',
        title: 'Co-Regulation Comes First',
        description:
          'Young kids calm down by borrowing a calm adult’s state before they can do it alone.',
      },
      {
        icon: '🧩',
        title: 'The Thinking Brain Goes Offline',
        description: 'Mid-meltdown, the part of the brain that reasons is temporarily unavailable.',
      },
      {
        icon: '🔁',
        title: 'Escalation From Being Rushed',
        description: '"Calm down now" often prolongs distress rather than shortening it.',
      },
      {
        icon: '😴',
        title: 'Depleted Physical Reserves',
        description: 'A tired or hungry body has less capacity left to regulate itself.',
      },
      {
        icon: '🗣️',
        title: 'No Words Left to Reach For',
        description:
          'Once flooded, a child often can’t access language to explain or request help.',
      },
      {
        icon: '🎭',
        title: 'Fear of the Feeling Itself',
        description:
          'The intensity of the emotion can feel scary, which extends the distress further.',
      },
    ],
    concerns: [
      'Meltdowns lasting well beyond 30 minutes, regularly',
      'No calming at all even with a calm, present adult nearby',
      'Escalating rather than settling distress the longer it continues',
      'Physical harm to self or others during the difficulty calming',
      'No gradual improvement in calming ability as the child gets older',
    ],
    professionalGuidance:
      'If meltdowns are unusually long, don’t respond to a calm presence, or involve harm, a pediatrician can help assess sensory or regulatory needs.',
    strategies: [
      'Stay physically present and calm rather than trying to talk it through',
      'Lower your own voice and pace, rather than raising it',
      'Wait for the wave to pass before problem-solving or teaching',
      'Practice calming tools during calm moments, not mid-meltdown',
    ],
    routine: [
      { icon: '🧘', label: 'Stay calm and near' },
      { icon: '🔉', label: 'Lower your voice' },
      { icon: '⏳', label: 'Wait out the wave' },
      { icon: '💬', label: 'Talk once calm' },
    ],
    insight:
      'A child who struggles to calm down needs a calm adult nearby more than a lesson in the moment — the lesson lands only after the wave has passed.',
    keywords: ['calming down', 'meltdown', 'self-regulation', 'co-regulation'],
    perspectives: {
      clinician:
        "Co-regulation — borrowing a calm adult's steady presence — is the well-established mechanism by which young children learn to self-soothe; a parent's own calm, physical presence teaches the skill faster than words alone.",
    },
    culturalLens: [
      {
        region: 'Cultures with strong physical-comfort norms during distress',
        note: 'Some cultures lean heavily on physical closeness — holding, rocking — during a child’s distress, which aligns closely with the co-regulation mechanism research supports.',
      },
      {
        region: 'Cultures emphasizing independent self-soothing',
        note: 'Some cultures encourage independent self-soothing earlier, which can mean the co-regulation stage is shorter by design rather than skipped entirely.',
      },
    ],
    sources: ['Zero to Three', 'American Academy of Pediatrics'],
  },
  {
    id: 'empathy-development',
    topicNumber: 14,
    title: 'Why Do Kids Seem to Not Care About Others’ Feelings Sometimes?',
    heading: {
      lead: 'Why Do Kids Seem',
      emphasis: 'Not to Care',
      trailing: 'About Others’ Feelings Sometimes?',
    },
    quote: "So? It's just her toy, not mine.",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'empathy-development',
    reassurance: "It's common — and it doesn't mean they lack compassion long-term!",
    explanation:
      'Most of the time, this reflects a perspective-taking skill still under construction, not a lack of caring.',
    reasons: [
      {
        icon: '🧠',
        title: 'Perspective-Taking Still Developing',
        description: 'Fully imagining another person’s inner experience takes years to mature.',
      },
      {
        icon: '🎯',
        title: 'Self-Focus Is Developmentally Normal',
        description: 'Young children naturally see the world from their own vantage point first.',
      },
      {
        icon: '😵',
        title: 'Overwhelmed by Their Own Feelings',
        description:
          'A child flooded with their own emotion has little capacity left for another’s.',
      },
      {
        icon: '🗣️',
        title: 'Not Recognizing the Cue',
        description:
          'Subtle signs of someone else’s distress can genuinely go unnoticed at this age.',
      },
      {
        icon: '🪞',
        title: 'Empathy Is Built Through Modeling',
        description: 'Seeing empathy demonstrated repeatedly is how the skill gets absorbed.',
      },
      {
        icon: '🧩',
        title: 'Understanding vs. Feeling',
        description: 'A child can know the "right" response without yet feeling it internally.',
      },
      {
        icon: '⏳',
        title: 'A Skill on a Long Timeline',
        description: 'Mature empathy continues developing well into adolescence and beyond.',
      },
      {
        icon: '🎭',
        title: 'Practicing Independence',
        description:
          'Asserting their own view can sometimes come at the temporary cost of another’s.',
      },
    ],
    concerns: [
      'A consistent pattern of enjoying others’ distress, not just indifference',
      'No development of empathy at all over an extended period',
      'Cruelty toward animals or much younger children specifically',
      'No response to repeated modeling or direct coaching',
      'Concerns echoed consistently by teachers or other caregivers',
    ],
    professionalGuidance:
      'If a pattern of enjoying others’ distress or cruelty persists despite consistent guidance, a pediatrician or child psychologist can help assess social-emotional development.',
    strategies: [
      'Name others’ feelings out loud in everyday moments: "She looks sad, I wonder why"',
      'Model empathetic responses consistently yourself',
      'Ask reflective questions rather than lecturing: "How do you think that felt?"',
      'Praise empathetic moments specifically when they happen',
    ],
    routine: [
      { icon: '💬', label: 'Name others’ feelings' },
      { icon: '🪞', label: 'Model empathy' },
      { icon: '❓', label: 'Ask reflective questions' },
      { icon: '👏', label: 'Praise empathetic acts' },
    ],
    insight:
      'Empathy is a skill built through years of modeling and practice, not something present in full from the start — most kids develop it steadily with consistent examples.',
    keywords: ['empathy', 'caring', 'perspective-taking', 'compassion'],
    perspectives: {
      clinician:
        "Developmental psychologists note that genuinely feeling empathy, not just knowing the 'right' response, continues developing well into adolescence — modeling it consistently matters more than a single lecture.",
      teacher:
        'Teachers see empathy build steadily through repeated small moments — a class discussion about how a character felt does more over time than a single big talk.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong communal caregiving',
        note: "Children who routinely help care for younger siblings or cousins often get more early, concrete practice reading and responding to another person's needs.",
      },
      {
        region: 'Cultures with explicit social-emotional teaching in school',
        note: 'Where schools explicitly teach perspective-taking as a skill, children get structured practice beyond what happens naturally at home.',
      },
    ],
    sources: ['American Psychological Association', 'CASEL'],
  },
  {
    id: 'mood-swings',
    topicNumber: 15,
    title: 'Why Do Kids’ Moods Swing So Fast?',
    heading: {
      lead: 'Why Do Kids’ Moods',
      emphasis: 'Swing So Fast',
      trailing: 'From Happy to Upset in Minutes?',
    },
    quote: 'I was fine two minutes ago!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'mood-swings',
    reassurance: "It's common — and it isn't a sign of instability!",
    explanation:
      'Most of the time, rapid mood shifts reflect a nervous system that reacts quickly and recovers just as quickly, without the smoothing adults have developed.',
    reasons: [
      {
        icon: '🧠',
        title: 'Immature Emotional Buffering',
        description:
          'Adults have years of practice smoothing transitions between feelings; kids don’t yet.',
      },
      {
        icon: '🎢',
        title: 'Genuine Emotional Intensity',
        description:
          'Kids often feel each emotion fully and immediately, without a gradual buildup.',
      },
      {
        icon: '⚡',
        title: 'Fast Recovery Is Also Normal',
        description:
          'The same quick shift into upset usually comes with an equally quick shift out.',
      },
      {
        icon: '🔋',
        title: 'Fluctuating Reserves Through the Day',
        description: 'Blood sugar and energy dips throughout the day naturally shift mood too.',
      },
      {
        icon: '📈',
        title: 'Developmental Growth Spurts',
        description: 'Rapid physical or cognitive growth can bring temporary emotional volatility.',
      },
      {
        icon: '🧩',
        title: 'Small Triggers Add Up Quickly',
        description: 'A minor frustration can flip a mood fast when reserves are already thin.',
      },
      {
        icon: '🕹️',
        title: 'Limited Emotional Vocabulary',
        description: 'Without words for a shifting feeling, the mood itself does the talking.',
      },
      {
        icon: '🌗',
        title: 'Hormonal Shifts (Older Kids)',
        description: 'Approaching puberty can introduce genuinely new sources of mood variability.',
      },
    ],
    concerns: [
      'Mood swings severe enough to disrupt daily functioning',
      'Swings accompanied by aggression or self-harm',
      'A sustained low mood underneath the swings, not just variability',
      'Mood shifts that are worsening rather than gradually stabilizing',
      'Swings paired with major changes in sleep, appetite, or energy',
    ],
    professionalGuidance:
      'If mood swings are severe, disrupt daily life, or come with a sustained low mood underneath, a pediatrician can help assess what’s driving them.',
    strategies: [
      'Stay steady yourself rather than mirroring the shift',
      'Keep routines, sleep, and meals as consistent as possible',
      'Name the shift neutrally: "Looks like your mood changed — what happened?"',
      'Avoid over-interpreting a single mood as a lasting trait',
    ],
    routine: [
      { icon: '🧘', label: 'Stay steady' },
      { icon: '☀️', label: 'Protect routines' },
      { icon: '💬', label: 'Name the shift' },
      { icon: '⏳', label: 'Let it pass naturally' },
    ],
    insight:
      'Quick mood swings usually mean quick recovery too — the same system that shifts fast into upset just as often shifts fast back out of it.',
    keywords: ['mood swings', 'emotional volatility', 'ups and downs'],
    perspectives: {
      clinician:
        'Pediatricians note that fast mood shifts in childhood usually come with equally fast recovery — the same system that flips quickly into upset just as often flips quickly back, which distinguishes it from a sustained low mood worth flagging.',
    },
    culturalLens: [
      {
        region: 'Cultures with communal emotional support',
        note: "Extended family involvement can mean a child's mood shift gets noticed and responded to by more than one adult, spreading the support around.",
      },
      {
        region: 'Cultures with structured daily routines',
        note: 'Highly structured meal and sleep schedules can smooth out some of the blood-sugar- and fatigue-driven mood swings, simply by keeping reserves steadier through the day.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'CDC'],
  },
];
