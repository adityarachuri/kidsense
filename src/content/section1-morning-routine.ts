import type { Topic } from '../types/content';

/**
 * Section 1: Morning Routine.
 */
export const morningRoutineTopics: Topic[] = [
  {
    id: 'brushing-teeth',
    topicNumber: 1,
    title: 'Why Do Kids Postpone Brushing Their Teeth?',
    heading: {
      lead: 'Why Do Kids Postpone',
      emphasis: 'Brushing Their Teeth',
      trailing: 'Every Single Morning?',
    },
    quote: 'Can I skip it today, just this once?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'brushing-teeth',
    reassurance: "It's common — and usually not about hygiene at all!",
    explanation:
      'Most of the time, stalling on brushing is about the sensation and the interruption, not a rejection of hygiene.',
    reasons: [
      {
        icon: '🪥',
        title: 'Sensory Discomfort',
        description:
          'The taste, texture, or feeling of brushing can be genuinely unpleasant to some kids.',
      },
      {
        icon: '⏳',
        title: 'One More Transition',
        description:
          'It’s another stop in an already long chain of morning transitions to get through.',
      },
      {
        icon: '🕹️',
        title: 'A Small Bid for Control',
        description:
          'Brushing is often fully directed by an adult, making it a natural spot to push back.',
      },
      {
        icon: '🎯',
        title: 'No Immediate Payoff',
        description:
          'Unlike breakfast or play, the benefit of brushing is invisible and far in the future.',
      },
      {
        icon: '😴',
        title: 'Low Morning Energy',
        description: 'A task requiring fine motor effort is harder right when energy is still low.',
      },
      {
        icon: '🪞',
        title: 'Skill Still Developing',
        description:
          'Brushing thoroughly and independently is a fine motor skill still being refined.',
      },
      {
        icon: '🔁',
        title: 'A Boring, Repetitive Task',
        description: 'The same two minutes, every single day, can feel tedious to a young mind.',
      },
      {
        icon: '📢',
        title: 'Being Told, Not Asked',
        description: 'A direct command first thing in the morning can trigger simple resistance.',
      },
    ],
    concerns: [
      'Extreme, ongoing sensory distress well beyond typical dislike',
      'Visible tooth pain, discoloration, or bleeding gums',
      'Complete refusal for many weeks despite consistent, gentle approaches',
      'Gagging or distress severe enough to suggest a sensory sensitivity',
      'A dentist raising concerns about hygiene at a checkup',
    ],
    professionalGuidance:
      'If there is visible tooth pain, bleeding gums, or an extreme sensory reaction, a pediatric dentist can help identify the right approach and rule out other issues.',
    strategies: [
      'Let them choose their own toothbrush and toothpaste flavor',
      'Make it collaborative: brush together side by side',
      'Use a two-minute song or timer to make the task concrete',
      'Offer a small, consistent choice: "Top teeth first or bottom?"',
    ],
    routine: [
      { icon: '🪥', label: 'Choose the toothbrush' },
      { icon: '🎵', label: 'Start the timer song' },
      { icon: '🦷', label: 'Brush together' },
      { icon: '👏', label: 'Celebrate finishing' },
    ],
    insight:
      'If brushing resistance shows up alongside other morning slowdowns, it’s rarely about teeth specifically — it’s about the number of transitions packed into a short morning window.',
    keywords: ['teeth', 'brushing', 'hygiene', 'toothbrush', 'dental'],
    perspectives: {
      clinician:
        "Pediatric dentists see brushing resistance constantly, and it's rarely about hygiene — building the two-minute daily habit matters more than any single brushing session being perfect.",
    },
    culturalLens: [
      {
        region: 'East Asian households',
        note: 'Many families start brushing routines early and frame them as a shared family ritual — parents and children brushing side by side at the same sink — which can ease resistance through modeling rather than instruction.',
      },
      {
        region: 'Nordic countries',
        note: 'Public health systems often provide free dental checkups and toothbrushing coaching starting in preschool, so brushing resistance tends to be treated as a routine developmental hurdle rather than a parenting failure.',
      },
      {
        region: 'South Asian households',
        note: 'Extended family members often share morning hygiene routines with young children, spreading the daily back-and-forth across more than one adult.',
      },
      {
        region: 'Collectivist family structures',
        note: "Where sibling caregiving is common, an older sibling brushing alongside a younger one can succeed where a parent's direct instruction stalls, since peer modeling feels less like a command.",
      },
    ],
    sources: ['American Academy of Pediatric Dentistry', 'American Academy of Pediatrics'],
  },
  {
    id: 'wake-up',
    topicNumber: 2,
    title: "Why Don't Kids Want to Wake Up?",
    heading: {
      lead: "Why Don't Some Kids",
      emphasis: 'Want to Wake Up',
      trailing: 'Right After the Alarm Rings?',
    },
    quote: 'Just 5 more minutes...',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'wake-up',
    reassurance: "It's common — and usually not about defiance!",
    explanation:
      "Most of the time, it's because their brain hasn't finished switching from sleep mode to alert mode yet.",
    reasons: [
      {
        icon: '😴',
        title: 'Sleep Inertia',
        description:
          'The brain takes time to switch from sleep to alert mode — grogginess is expected, not defiance.',
      },
      {
        icon: '⏰',
        title: 'Not Enough Sleep',
        description:
          'If bedtime is later than their body needs, wake time arrives before the sleep debt is paid off.',
      },
      {
        icon: '🦉',
        title: 'Body Clock Differences',
        description: 'Some kids are naturally wired to fall asleep and wake later than others.',
      },
      {
        icon: '🛏️',
        title: 'Comfort & Safety',
        description: 'A warm bed feels safe. Leaving it can feel like an abrupt, unwelcome change.',
      },
      {
        icon: '💡',
        title: 'Sensory Jolt',
        description:
          'Bright lights or loud alarms can feel shocking to a still-waking nervous system.',
      },
      {
        icon: '📈',
        title: 'Growth Spurts',
        description:
          'During growth spurts, sleep needs temporarily increase — extra tiredness is normal.',
      },
      {
        icon: '🎯',
        title: 'Low Motivation',
        description:
          'A boring or stressful day ahead gives little internal pull to get up quickly.',
      },
      {
        icon: '🕹️',
        title: 'Wanting Control',
        description:
          'Waking up is decided by someone else — slow mornings can be a quiet bid for control.',
      },
    ],
    concerns: [
      'Loud snoring or gasping during sleep',
      "Daytime sleepiness even after a full night's sleep",
      'Mornings consistently much harder than the rest of the day',
      'Extreme fatigue affecting school or mood',
      'Sudden, unexplained changes in sleep pattern',
    ],
    professionalGuidance:
      'If hard waking pairs with snoring or daytime exhaustion, it may be worth discussing sleep quality with a pediatrician.',
    strategies: [
      'Use a gentle sunrise-style alarm, not a jarring buzzer',
      'Give a 5–10 minute waking window before expecting movement',
      'Keep the same wake-up routine every single day',
      'Protect bedtime — hard mornings start the night before',
    ],
    routine: [
      { icon: '⏰', label: 'Alarm rings' },
      { icon: '🪟', label: 'Open curtains' },
      { icon: '😊', label: 'Warm greeting' },
      { icon: '🙆', label: 'Slow stretch' },
    ],
    insight:
      "If your child struggles to get moving in the morning AND shows the same slow-start pattern with homework, meals, or leaving the house, it's often connected — a broader need for more transition time, not a wake-up problem specifically.",
    keywords: ['sleep', 'alarm', 'grogginess', 'sleep inertia', 'bedtime'],
    perspectives: {
      clinician:
        'Pediatric sleep specialists distinguish ordinary sleep inertia — grogginess for roughly 15–30 minutes after waking — from insufficient total sleep. If a child is hard to wake AND sleepy all day, bedtime is usually the real lever, not the wake-up routine.',
    },
    culturalLens: [
      {
        region: 'Mediterranean households',
        note: 'Later bedtimes are common in many Mediterranean cultures, and mornings are often built with more cushion to match — a slower start is accepted as normal rather than treated as a problem to fix.',
      },
      {
        region: 'East Asian households',
        note: 'Some East Asian family cultures place a high priority on punctual academic start times, leading to earlier, more consistent wake routines enforced from a young age.',
      },
      {
        region: 'Nordic countries',
        note: 'Guidance on children’s sleep leans heavily on natural light exposure — many families open curtains or use daylight lamps as the primary wake strategy rather than relying on an alarm alone.',
      },
      {
        region: 'Collectivist multigenerational households',
        note: 'Where grandparents or extended family share morning caregiving, waking a child can be distributed across more than one adult, reducing the pressure on a single parent to manage the whole routine.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'Sleep Foundation'],
  },
  {
    id: 'five-more-minutes',
    topicNumber: 3,
    title: 'Why Kids Always Ask for "5 More Minutes"',
    heading: {
      lead: 'Why Do Kids Always Ask For',
      emphasis: '"Just 5 More Minutes"',
      trailing: 'Every Single Time?',
    },
    quote: 'Just 5 more minutes!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'five-more-minutes',
    reassurance: "It's common — and usually not stalling on purpose!",
    explanation:
      "Most of the time, it's a young brain asking for time to switch gears, not defiance.",
    reasons: [
      {
        icon: '🔄',
        title: 'Task-Switching Difficulty',
        description: 'Disengaging from one activity to start another takes years to build.',
      },
      {
        icon: '⏳',
        title: 'Poor Sense of Time',
        description: '"5 minutes" is an abstract idea to a young brain.',
      },
      {
        icon: '🎨',
        title: 'Deep Absorption',
        description: 'Being immersed in play is healthy — stopping mid-flow feels like a loss.',
      },
      {
        icon: '🏁',
        title: 'Wanting Closure',
        description: 'Kids often want to finish the level, page, or round first.',
      },
      {
        icon: '🕹️',
        title: 'Testing Autonomy',
        description: 'Negotiating for time is a normal way to practice control.',
      },
      {
        icon: '😟',
        title: "Dreading What's Next",
        description: 'If the next task feels unpleasant, delaying feels safer.',
      },
      {
        icon: '🔁',
        title: "It's Worked Before",
        description: 'If asking for more time has succeeded, the brain repeats it.',
      },
      {
        icon: '📱',
        title: 'High-Reward Activities',
        description: 'Screens and games are built to hold attention tightly.',
      },
    ],
    concerns: [
      'Cannot disengage from an activity regardless of strategy',
      'Extreme distress at every single transition',
      'Signs of screen dependency affecting sleep or mood',
      'Meltdowns at nearly every transition, all day',
      'No improvement after weeks of consistent warnings',
    ],
    professionalGuidance:
      "If transitions stay distressing regardless of strategy — especially around screens — it's worth discussing screen habits with a professional.",
    strategies: [
      'Give a 5-minute and a 2-minute warning before switching',
      'Use a visual timer so time feels real, not abstract',
      'Let them finish the round or chapter, not cut off mid-task',
      'Keep your response the same every single time',
    ],
    routine: [
      { icon: '🔔', label: '5-min warning' },
      { icon: '⏳', label: '2-min warning' },
      { icon: '⏰', label: 'Timer ends' },
      { icon: '➡️', label: 'Move on' },
    ],
    insight:
      "If stopping one activity to start another is hard AND your child shows similar resistance at bedtime or leaving the house, it's often connected — a broader need for more transition time, not stalling on purpose.",
    keywords: ['transitions', 'screen time', 'timers', 'delay'],
    perspectives: {
      teacher:
        'Teachers see the identical pattern during classroom transitions — a child absorbed in one activity needs advance warning before switching, or the switch itself becomes the fight, not the next activity.',
    },
    culturalLens: [
      {
        region: 'Play-based early education cultures (e.g. Nordic, Reggio Emilia-inspired)',
        note: "Programs built around child-led play tend to build in longer, unhurried transition windows by design, treating a child's need to finish an activity as normal rather than something to override quickly.",
      },
      {
        region: 'East Asian households',
        note: 'Cultures with more structured daily schedules for young children often introduce visual or auditory time cues — bells, songs — earlier, treating time-awareness as a skill to teach explicitly rather than expect.',
      },
      {
        region: 'Collectivist family structures',
        note: "Where multiple children share supervision, an older sibling or cousin modeling a smooth transition can ease a younger child's resistance more effectively than an adult's direct instruction.",
      },
    ],
    sources: ['Zero to Three', 'American Academy of Pediatrics'],
  },
  {
    id: 'bath-refusal',
    topicNumber: 4,
    title: 'Why Kids Hate Taking a Bath',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Hate Taking a Bath',
      trailing: 'Every Single Night?',
    },
    quote: "I don't want a bath!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'bath',
    reassurance: 'It\'s common — and usually not about being "dirty-averse"!',
    explanation:
      "Most of the time, it's sensory discomfort or a loss of control over their own body.",
    reasons: [
      {
        icon: '🌡️',
        title: 'Temperature Sensitivity',
        description: 'Water that feels fine to an adult can feel too hot or cold to a child.',
      },
      {
        icon: '💧',
        title: 'Fear of Water on the Face',
        description: 'Rinsing hair or splashing near the eyes can feel startling.',
      },
      {
        icon: '🧸',
        title: 'Interrupted Play',
        description: 'Bath time means stopping a fun activity mid-flow.',
      },
      {
        icon: '🕳️',
        title: 'Fear of the Drain',
        description: 'The sound of water disappearing can spark real, if irrational, fear.',
      },
      {
        icon: '🥶',
        title: 'Cold on Exit',
        description: 'Stepping into cooler air is a genuine sensory jolt.',
      },
      {
        icon: '🕹️',
        title: 'Loss of Control',
        description: "Being undressed and washed limits a child's sense of ownership.",
      },
      {
        icon: '😐',
        title: 'Boredom',
        description:
          "If the bath itself isn't engaging, there's little reason to want to be there.",
      },
      {
        icon: '🫧',
        title: 'Past Bad Experience',
        description: 'Soap in the eyes or a slip once can create lasting caution.',
      },
    ],
    concerns: [
      'Intense sensory distress across many situations',
      'Avoids water entirely — rain, pools, sprinklers too',
      'Distress disrupting daily hygiene consistently',
      'Extreme reaction to temperature or texture for months',
      'No improvement even with gentler routines',
    ],
    professionalGuidance:
      'If water avoidance extends far beyond bath time, it may be worth a sensory-focused conversation with a pediatrician.',
    strategies: [
      'Let them test the water temperature themselves',
      'Warn before hair-washing — use a visor they control',
      'Make it playful with bubbles, toys, and songs',
      'Offer small choices, like bubbles or toys tonight',
    ],
    routine: [
      { icon: '⏰', label: 'Warn 5 min before' },
      { icon: '🌡️', label: 'Pick temp together' },
      { icon: '🫧', label: 'Bath with toys' },
      { icon: '🧴', label: 'Warm towel ready' },
    ],
    insight:
      "If bath time is a struggle AND your child shows similar resistance to dressing or hair-combing, it's often connected — a broader sensory sensitivity, not dislike of water itself.",
    keywords: ['bathing', 'water', 'sensory', 'hygiene'],
    perspectives: {
      clinician:
        'Occupational therapists treat bath resistance as a sensory-regulation issue first: temperature, the sound of running water, and rinsing near the face are common triggers, and gentle, predictable exposure works better than pushing through.',
    },
    culturalLens: [
      {
        region: 'South Asian households',
        note: 'Daily bathing is often a firmly fixed expectation from infancy, with an oil massage beforehand common in many families — which can actually ease the sensory transition into water for some children.',
      },
      {
        region: 'Northern European households',
        note: 'Some families bathe less frequently by cultural norm, treating bath refusal as a lower-stakes, more flexible negotiation rather than a daily non-negotiable.',
      },
      {
        region: 'Japanese households',
        note: 'The evening bath (ofuro) is often a shared, unhurried family ritual rather than a quick hygiene task, which can reduce a child’s sense of being rushed or controlled.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Occupational Therapy Association'],
  },
  {
    id: 'getting-dressed',
    topicNumber: 5,
    title: 'Why Kids Refuse to Get Dressed',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Refuse to Get Dressed',
      trailing: 'Every Single Morning?',
    },
    quote: "I don't want to wear that!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'getting-dressed',
    reassurance: "It's common — and usually not defiance for its own sake!",
    explanation:
      "Most of the time, it's fabric texture, fiddly fasteners, or wanting a say in their outfit.",
    reasons: [
      {
        icon: '🏷️',
        title: 'Texture Sensitivity',
        description: 'Tags, seams, and tight fabric can genuinely irritate sensitive skin.',
      },
      {
        icon: '🧸',
        title: 'Interrupted Play',
        description: 'Stopping an activity to get dressed is another hard transition.',
      },
      {
        icon: '🔘',
        title: 'Fine Motor Frustration',
        description: 'Buttons, zips, and sleeves take coordination still being built.',
      },
      {
        icon: '👗',
        title: 'Wanting to Choose',
        description: 'Picking their own outfit is a rare moment of full control.',
      },
      {
        icon: '🌡️',
        title: 'Temperature Mismatch',
        description: 'An outfit may feel wrong for how warm or cold they feel.',
      },
      {
        icon: '👕',
        title: 'Favorite Item Attachment',
        description: 'Comfort items offer predictability in an unpredictable day.',
      },
      {
        icon: '🔁',
        title: 'Repeated Power Struggle',
        description: 'A daily battleground can make resistance the default.',
      },
      {
        icon: '😐',
        title: 'Low Motivation',
        description: "There's simply nothing exciting pulling attention to the task.",
      },
    ],
    concerns: [
      'Extreme, persistent distress over most fabrics',
      'Sensory reactions affecting many daily activities',
      'Daily meltdowns over specific textures',
      'No improvement after removing tags and seams',
      'Distress spreading to more and more clothing types',
    ],
    professionalGuidance:
      'If clothing distress is severe and widespread, it may be worth a sensory processing conversation with a professional.',
    strategies: [
      'Offer two outfit choices, both acceptable to you',
      'Remove tags in advance, choose soft fabrics',
      "Build in extra time so it's never rushed",
      'Lay clothes out together the night before',
    ],
    routine: [
      { icon: '🌙', label: 'Lay clothes out' },
      { icon: '👕', label: 'Offer 2 choices' },
      { icon: '🙌', label: 'Get dressed together' },
      { icon: '🎉', label: 'Praise effort' },
    ],
    insight:
      "If dressing is a struggle AND your child shows similar resistance to baths or hair-combing, it's often connected — a broader sensory sensitivity, not stubbornness about clothes.",
    keywords: ['clothing', 'texture', 'sensory', 'fasteners'],
    perspectives: {
      clinician:
        'Occupational therapists note that fine-motor frustration with buttons and zippers usually resolves with practice by early elementary age; persistent, severe texture aversion past that point is more often a sensory-processing pattern worth a closer look.',
    },
    culturalLens: [
      {
        region: 'Collectivist family structures',
        note: "A parent or older sibling choosing a young child's outfit remains normal well into elementary school in many collectivist cultures, with less early emphasis on individual choice than in more individualist cultures.",
      },
      {
        region: 'Western individualist cultures (e.g. US, UK)',
        note: 'Offering a young child choice over their own clothing is often treated as an early autonomy-building milestone, sometimes starting as young as age 3.',
      },
      {
        region: 'Religious and modesty-conscious communities',
        note: 'Dress norms are often set by family or community expectation rather than negotiated daily, which can reduce morning conflict while shifting the tension elsewhere — fitting in outside the home.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Occupational Therapy Association'],
  },
  {
    id: 'getting-dressed',
    topicNumber: 5,
    title: 'Why Do Tweens Suddenly Care So Much About What They Wear?',
    heading: {
      lead: 'Why Do Tweens Suddenly',
      emphasis: 'Care So Much About What They Wear',
      trailing: 'Every Single Morning?',
    },
    quote: 'Everyone will see me in this!',
    ageRanges: ['10–12 years'],
    illustrationId: 'getting-dressed',
    ageBandIds: ['tween'],
    reassurance: "It's common — and it's identity-building, not vanity!",
    explanation:
      'By this age, clothing becomes a way to signal who they are to their peer group, not just a comfort or fine-motor issue anymore.',
    reasons: [
      {
        icon: '🪞',
        title: 'Identity Formation',
        description:
          'Clothing becomes one of the first tools tweens use to express who they are outside the family.',
      },
      {
        icon: '👀',
        title: 'Peer Awareness',
        description:
          'Awareness of how peers will judge an outfit grows sharply in the tween years.',
      },
      {
        icon: '📱',
        title: 'Social Media Exposure',
        description:
          "Seeing curated outfits online raises the bar for what feels 'acceptable' to wear.",
      },
      {
        icon: '🧍',
        title: 'Body Image Shifts',
        description:
          'Early puberty changes how clothes fit and feel, adding a new layer of self-consciousness.',
      },
      {
        icon: '🏷️',
        title: 'Brand Pressure',
        description:
          'Wanting specific brands or styles is a normal way to signal belonging to a peer group.',
      },
      {
        icon: '🕹️',
        title: 'Growing Autonomy',
        description:
          'Tweens are developmentally primed to want more control over personal decisions, and clothing is a low-stakes place to practice it.',
      },
      {
        icon: '😳',
        title: 'Fear of Standing Out',
        description:
          'Many tweens would rather blend in than risk being noticed for the wrong reasons.',
      },
      {
        icon: '🔁',
        title: 'Comparing to Peers',
        description:
          'Outfit choices are often measured against a specific friend, not an abstract standard.',
      },
    ],
    concerns: [
      'Persistent distress about body shape or size tied to clothing',
      'Avoiding school or activities specifically over what to wear',
      'Extreme rigidity about brands well beyond typical peer influence',
      'Signs of comparison spiraling into broader self-esteem concerns',
    ],
    professionalGuidance:
      'If clothing anxiety is tangled with body image distress or school avoidance, a conversation with a school counselor or pediatrician can help separate a normal identity phase from something needing more support.',
    strategies: [
      'Involve them in buying decisions within a set budget, rather than dictating each piece',
      'Talk through outfit choices the night before, away from morning time pressure',
      'Normalize that peer opinions matter to them right now — dismissing it rarely helps',
      'Keep a few reliable, pre-approved outfits ready for low-energy mornings',
    ],
    routine: [
      { icon: '👕', label: 'Plan outfit tonight' },
      { icon: '🪞', label: 'Try it on early' },
      { icon: '💬', label: 'Quick gut-check' },
      { icon: '🎒', label: 'Out the door' },
    ],
    insight:
      "Tween clothing battles are rarely about the clothes — they're an early, low-stakes rehearsal for the much bigger identity questions adolescence brings.",
    keywords: ['clothing', 'tween', 'identity', 'peer pressure', 'body image'],
    perspectives: {
      teacher:
        "Middle-school teachers regularly see clothing anxiety spike before specific events — school photos, PE clothing swaps — and it's rarely about the outfit itself but about visibility in front of peers.",
    },
    culturalLens: [
      {
        region: 'Individualist peer cultures with strong youth marketing',
        note: 'Trend-driven dressing and brand consciousness tend to peak earlier where youth consumer marketing is heavily targeted at this age group.',
      },
      {
        region: 'School-uniform cultures (e.g. UK, many Asian and African school systems)',
        note: 'Where uniforms are standard, tween identity expression often shifts to accessories, hairstyles, or after-school clothing instead of the morning uniform choice.',
      },
      {
        region: 'Collectivist family structures',
        note: 'Family input on appropriate dress may carry more weight relative to peer pressure than in cultures where individual choice is prioritized from a young age.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'National Association of School Psychologists'],
  },
  {
    id: 'combing-hair',
    topicNumber: 6,
    title: "Why Kids Don't Want to Comb Their Hair",
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Not Want to Comb',
      trailing: 'Their Hair in the Morning?',
    },
    quote: 'Ow, that hurts!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'combing-hair',
    reassurance: "It's common — and usually not exaggeration!",
    explanation: 'Most of the time, combing genuinely hurts more than it looks like it should.',
    reasons: [
      {
        icon: '😣',
        title: 'Genuine Pain',
        description: "Tangles being pulled can really hurt — this usually isn't exaggeration.",
      },
      {
        icon: '🧠',
        title: 'Scalp Sensitivity',
        description: 'Some children are simply more sensitive to touch on the head.',
      },
      {
        icon: '💭',
        title: 'Memory of Pain',
        description: 'A previous rough session can create lasting anticipatory resistance.',
      },
      {
        icon: '🧸',
        title: 'Interrupted Play',
        description: 'Being called away from an activity adds resistance too.',
      },
      {
        icon: '🕹️',
        title: 'Wanting Control',
        description: 'Having their head touched by someone else can feel like a loss of control.',
      },
      {
        icon: '⏱️',
        title: 'Impatience',
        description: 'If it takes a while, sitting still becomes its own challenge.',
      },
      {
        icon: '👃',
        title: 'Product Sensitivity',
        description: 'Strong smells or textures from products can be unpleasant.',
      },
      {
        icon: '🪮',
        title: 'Fear of the Tool',
        description: 'A specific brush or spray bottle may itself feel threatening.',
      },
    ],
    concerns: [
      'Distress severe enough to disrupt hygiene entirely',
      'Extends to all head or face touch',
      'Extreme reaction even to gentle touch',
      'No improvement with better technique',
      'Avoiding all head or hair contact',
    ],
    professionalGuidance:
      'If reactions extend well beyond hair-combing, it may be worth a sensory-focused conversation with a professional.',
    strategies: [
      'Detangle on wet hair with conditioner, not dry',
      'Comb from the ends up, not root-down',
      'Hold hair near the scalp while combing',
      'Let them hold and try the brush themselves',
    ],
    routine: [
      { icon: '💧', label: 'Wet + conditioner' },
      { icon: '✋', label: 'Hold near scalp' },
      { icon: '🔽', label: 'Comb ends up' },
      { icon: '🎉', label: 'All done!' },
    ],
    insight:
      "If hair-combing is painful AND your child shows similar sensitivity during baths or dressing, it's often connected — a broader touch sensitivity, not fussiness about hair.",
    keywords: ['hair', 'brushing', 'scalp', 'tangles'],
    perspectives: {
      clinician:
        "Occupational and sensory therapists point out that scalp pain during combing is often real and disproportionate to how it looks — technique changes like detangling wet hair and holding it near the scalp resolve most cases without needing a child to 'push through' distress.",
    },
    culturalLens: [
      {
        region: 'Black and multicultural hair-care traditions',
        note: 'Many families use detangling techniques developed specifically for textured hair — finger-detangling, leave-in conditioner, sectioning — that differ meaningfully from techniques designed for straight hair, and matter for reducing real pain.',
      },
      {
        region: 'South Asian households',
        note: 'Oiling hair before combing is a common practice in many families, which softens strands and can reduce pulling during detangling.',
      },
      {
        region: 'East Asian households',
        note: 'Shorter, low-maintenance hairstyles are common for young children in some East Asian cultures specifically to minimize daily grooming conflict.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'American Occupational Therapy Association'],
  },
  {
    id: 'breakfast-refusal',
    topicNumber: 7,
    title: 'Why Kids Refuse Breakfast',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Refuse to Eat Breakfast',
      trailing: 'Every Single Morning?',
    },
    quote: "I'm not hungry!",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'breakfast',
    reassurance: "It's common — and usually not a food fight in the making!",
    explanation: 'Most of the time, low morning appetite is biological, not defiant.',
    reasons: [
      {
        icon: '🌅',
        title: 'Naturally Low Appetite',
        description: "Hunger hormones often haven't kicked in right after waking.",
      },
      {
        icon: '⏱️',
        title: 'Not Enough Time',
        description: 'Too little gap between waking and eating leaves no room for hunger.',
      },
      {
        icon: '😟',
        title: 'Morning Nervousness',
        description: 'Worry about the day ahead can genuinely suppress appetite.',
      },
      {
        icon: '🍽️',
        title: 'Food Mismatch',
        description: "What's offered may not match what they feel like eating.",
      },
      {
        icon: '😴',
        title: 'Overtiredness',
        description: 'A tired body often shows less interest in food generally.',
      },
      {
        icon: '⏳',
        title: 'Too Much Pressure',
        description: 'Rushed or forced eating can make the moment unpleasant.',
      },
      {
        icon: '🥣',
        title: 'Texture Pickiness',
        description: 'Sensory sensitivity can rule out certain foods.',
      },
      {
        icon: '🌙',
        title: 'Recent Eating',
        description: "A late dinner can mean real hunger hasn't returned yet.",
      },
    ],
    concerns: [
      'Sustained weight or growth concerns',
      'Refusal tied to visible anxiety or distress',
      'Complete refusal continuing for several weeks',
      'Visible impact on energy or mood at school',
      'Increasingly narrow list of accepted foods',
    ],
    professionalGuidance:
      "If refusal is prolonged and tied to weight or growth concerns, it's worth discussing with a pediatrician.",
    strategies: [
      'Offer breakfast a little earlier to let appetite wake up',
      'Give two simple choices instead of one fixed menu',
      'Keep portions small to start',
      'Lower the pressure — a few bites still count',
    ],
    routine: [
      { icon: '☀️', label: 'Wake up' },
      { icon: '🧸', label: 'Free time first' },
      { icon: '🥣', label: 'Offer food, no pressure' },
      { icon: '😊', label: 'Eat what they can' },
    ],
    insight:
      "If breakfast is a struggle AND your child shows similar resistance to other morning transitions, it's often connected — a broader need for a slower start, not a food problem.",
    keywords: ['eating', 'appetite', 'meals', 'nutrition'],
    perspectives: {
      teacher:
        'Teachers often notice the effects of a skipped breakfast by mid-morning — a dip in attention or mood around 10am is a common signal, more than the breakfast table itself.',
      clinician:
        'Pediatricians usually reassure parents that low morning appetite is developmentally normal and self-corrects; the bigger flag is low appetite across the whole day, not just mornings.',
    },
    culturalLens: [
      {
        region: 'Mediterranean and Latin American households',
        note: "A lighter, later breakfast — or a small snack soon after waking, with a fuller meal later — is culturally standard in many families, reframing 'refusal' as simply a different, equally healthy pattern.",
      },
      {
        region: 'East Asian households',
        note: 'Savory, warm breakfasts such as rice, soup, or congee are common in many East Asian cultures, and children raised on sweeter Western-style breakfasts elsewhere sometimes resist them for taste reasons rather than appetite.',
      },
      {
        region: 'South Asian households',
        note: 'Extended family often shares breakfast preparation and encouragement duties, spreading the effort of getting a child to eat across more than one adult.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'Academy of Nutrition and Dietetics'],
  },
  {
    id: 'slow-mornings',
    topicNumber: 8,
    title: 'Why Kids Move So Slowly in the Morning',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Move So Slowly',
      trailing: 'Every Single Morning?',
    },
    quote: "I'm going, I'm going...",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'slow-mornings',
    reassurance: "It's common — and usually not laziness!",
    explanation: "Most of the time, it's an immature sense of time and sequencing, not defiance.",
    reasons: [
      {
        icon: '🧩',
        title: 'Immature Sequencing',
        description: 'Multi-step routines need executive function still under construction.',
      },
      {
        icon: '⏳',
        title: 'Time Blindness',
        description: 'Young children genuinely lack an internal sense of urgency.',
      },
      {
        icon: '🧸',
        title: 'Getting Distracted',
        description: 'A toy on the floor can derail the whole routine.',
      },
      {
        icon: '😐',
        title: 'Low Motivation',
        description: "The individual tasks aren't inherently interesting.",
      },
      {
        icon: '🌀',
        title: 'Feeling Overwhelmed',
        description: 'Too many steps at once can be hard to hold in mind together.',
      },
      {
        icon: '😴',
        title: 'Still Groggy',
        description: 'An incomplete wake-up naturally slows everything after.',
      },
      {
        icon: '🐌',
        title: 'Enjoying the Slow Pace',
        description: "Sometimes it's just their own comfortable speed.",
      },
      {
        icon: '😣',
        title: 'A Rushed Environment',
        description: 'A tense atmosphere adds overwhelm, not speed.',
      },
    ],
    concerns: [
      'Extreme slowness daily despite visual aids',
      'Well beyond peers of the same age',
      'Paired with attention difficulty across settings',
      'Affecting both school and home consistently',
      'Frequent complete derailment mid-routine',
    ],
    professionalGuidance:
      "If slowness is paired with attention difficulty across many settings, it's worth discussing executive function support.",
    strategies: [
      'Use a picture or checklist chart for the routine',
      'Use a visible timer for the whole morning',
      'Break tasks into smaller, single steps',
      'Praise progress, not just finishing fast',
    ],
    routine: [
      { icon: '📋', label: 'Checklist chart' },
      { icon: '⏳', label: 'Timer starts' },
      { icon: '🧩', label: 'One step at a time' },
      { icon: '🎉', label: 'All done!' },
    ],
    insight:
      "If mornings are consistently slow AND your child shows the same pace with homework or chores, it's often connected — a broader sequencing challenge, not laziness.",
    keywords: ['slow', 'routine', 'sequencing', 'time blindness'],
    perspectives: {
      teacher:
        'Teachers see the same sequencing struggle during classroom routines like packing up or lining up — visual checklists that work at school translate directly to mornings at home.',
      clinician:
        'Developmental pediatricians frame morning slowness before age 7–8 as expected executive-function immaturity, not a red flag on its own; a visual routine chart is a genuinely evidence-supported strategy, not just a parenting trick.',
    },
    culturalLens: [
      {
        region: 'Play-based early education cultures',
        note: 'Programs that avoid rushing young children between activities tend to produce home routines with more built-in slack time by habit, reducing the friction of a naturally slow pace.',
      },
      {
        region: 'High-structure academic cultures',
        note: 'Cultures with earlier, stricter school start expectations often introduce visual schedules and timers for young children earlier as a matter of course.',
      },
    ],
    sources: ['American Academy of Pediatrics', 'Zero to Three'],
  },
  {
    id: 'school-reluctance',
    topicNumber: 9,
    title: "Why Kids Don't Want to Go to School",
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Not Want to Go to School',
      trailing: 'Some Mornings?',
    },
    quote: "I don't want to go...",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'school',
    reassurance: "It's common — and usually a normal part of growing up!",
    explanation:
      "Most of the time, it's separation, social stress, or transition fatigue — not dislike of school.",
    reasons: [
      {
        icon: '🤗',
        title: 'Separation Anxiety',
        description: 'Missing a caregiver is a core, biologically-rooted response.',
      },
      {
        icon: '👥',
        title: 'Social Stress',
        description: 'Friendship troubles can make school feel emotionally exhausting.',
      },
      {
        icon: '📚',
        title: 'Academic Pressure',
        description: 'Fear of struggling with schoolwork feels intimidating.',
      },
      {
        icon: '🔊',
        title: 'Sensory Overwhelm',
        description: 'Noise, crowds, and bright lights can be genuinely draining.',
      },
      {
        icon: '⚠️',
        title: 'A Specific Incident',
        description: 'Bullying or one bad experience creates lasting reluctance.',
      },
      {
        icon: '🏠',
        title: 'Preferring Home',
        description: "Home's predictability can simply feel easier than the unknown.",
      },
      {
        icon: '🔄',
        title: 'Transition Fatigue',
        description: 'A new teacher or term takes real adjustment time.',
      },
      {
        icon: '😴',
        title: 'General Tiredness',
        description: 'Being under-rested makes every part of the day harder.',
      },
    ],
    concerns: [
      'Persistent refusal or panic at drop-off',
      'Physical symptoms severe enough to miss school',
      'Reluctance most days for several weeks',
      'Physical complaints tied to school mornings',
      'Growing avoidance of specific classes or peers',
    ],
    professionalGuidance:
      "If refusal or physical symptoms persist, it's worth involving the school and a pediatrician.",
    strategies: [
      'Keep goodbyes short, warm, and consistent',
      'Add a small comforting ritual — a note or handshake',
      'Loop in the teacher if reluctance becomes frequent',
      'Praise the effort of going, not just enjoying it',
    ],
    routine: [
      { icon: '☀️', label: 'Wake up' },
      { icon: '👋', label: 'Short goodbye ritual' },
      { icon: '🚸', label: 'Walk or ride to school' },
      { icon: '🎉', label: 'Praise effort' },
    ],
    insight:
      "If school mornings are hard AND your child shows similar reluctance around other separations, it's often connected — a broader adjustment need, not dislike of school.",
    keywords: ['school', 'separation anxiety', 'drop-off'],
    perspectives: {
      teacher:
        'Teachers are often the first to notice a pattern — reluctance tied to a specific class, peer, or time of day is a useful clue that something concrete, not just general anxiety, may be going on.',
      clinician:
        'Pediatricians and school counselors distinguish ordinary reluctance from school refusal — persistent, escalating avoidance with physical symptoms. The first usually resolves with consistency; the second benefits from involving the school early.',
    },
    culturalLens: [
      {
        region: 'Cultures with strong extended-family involvement',
        note: 'Where grandparents or extended family are closely involved in daily life, the transition to a less familiar school environment can feel like a bigger jump, sometimes intensifying early separation reluctance.',
      },
      {
        region: 'Cultures with early, near-universal preschool attendance',
        note: 'Where group childcare starts very early and is culturally the norm, children often build separation tolerance earlier, and reluctance tends to be treated as briefer and more routine.',
      },
    ],
    sources: [
      'Zero to Three',
      'American Academy of Pediatrics',
      'National Association of School Psychologists',
    ],
  },
  {
    id: 'crying-before-leaving',
    topicNumber: 10,
    title: 'Why Kids Cry Before Leaving Home',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Cry Before Leaving Home',
      trailing: 'Even for Fun Outings?',
    },
    quote: "Don't go, stay with me!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'crying-leaving',
    reassurance: "It's common — and usually about attachment, not defiance!",
    explanation:
      'Most of the time, tears at the door are a normal separation response that eases within minutes.',
    reasons: [
      {
        icon: '🤗',
        title: 'Separation Anxiety',
        description: 'A core attachment response to leaving a caregiver.',
      },
      {
        icon: '❓',
        title: 'Uncertainty Ahead',
        description: "Not knowing what's coming next can feel unsettling.",
      },
      {
        icon: '🧸',
        title: 'Interrupted Comfort',
        description: 'Leaving means stopping a comfortable routine at home.',
      },
      {
        icon: '😴',
        title: 'Overtiredness',
        description: 'A tired nervous system finds every transition harder.',
      },
      {
        icon: '🔊',
        title: 'Destination Dread',
        description: 'A loud or crowded place ahead adds sensory apprehension.',
      },
      {
        icon: '🔁',
        title: 'Testing Reliability',
        description: "Sometimes it's confirming the caregiver will really come back.",
      },
      {
        icon: '💭',
        title: 'Earlier Big Feelings',
        description: 'Emotions from earlier can surface at the transition point.',
      },
      {
        icon: '✨',
        title: 'Overstimulation',
        description: 'Even excitement can tip into tears at a big transition.',
      },
    ],
    concerns: [
      'Extreme, prolonged panic at every separation',
      'Physical symptoms tied to leaving',
      "Distress that doesn't ease during the outing",
      'Happening most days for several weeks',
      'Growing more intense over time',
    ],
    professionalGuidance:
      "If panic is extreme and prolonged at every separation, it's worth discussing with a pediatrician.",
    strategies: [
      "Give a heads-up before it's time to leave",
      'Keep goodbyes brief, warm, and predictable',
      'Create a small leaving ritual — a wave, a phrase',
      'Stay calm yourself — it helps regulate them too',
    ],
    routine: [
      { icon: '⏰', label: 'Warning ("10 min")' },
      { icon: '👋', label: 'Goodbye ritual' },
      { icon: '🚪', label: 'Leave calmly' },
      { icon: '🤗', label: 'Reunite later' },
    ],
    insight:
      "If leaving home is hard AND your child shows similar tears at school drop-off or bedtime, it's often connected — a broader attachment need, not defiance about the outing.",
    keywords: ['separation', 'attachment', 'crying', 'goodbye'],
    perspectives: {
      clinician:
        'Attachment researchers frame separation tears as a sign of a secure, healthy bond, not a red flag — children who protest separation are demonstrating that the relationship matters to them, which is developmentally reassuring.',
    },
    culturalLens: [
      {
        region: 'Attachment-parenting-oriented cultures',
        note: "Cultures that emphasize prolonged physical closeness in infancy — extended babywearing, co-sleeping — don't show consistently different separation-anxiety timelines; the response is a normal developmental stage across cultures, just expressed differently.",
      },
      {
        region: 'Collectivist multigenerational households',
        note: "Where a child is cared for by multiple trusted adults from infancy, separation from any one caregiver can sometimes feel less high-stakes, since 'goodbye' rarely means being left with an unfamiliar person.",
      },
    ],
    sources: ['Zero to Three', 'American Academy of Pediatrics'],
  },
];
