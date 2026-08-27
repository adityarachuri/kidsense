import type { Topic } from '../types/content';

export const eatingTopics: Topic[] = [
  {
    id: 'picky-eaters',
    topicNumber: 1,
    title: 'Why Kids Become Picky Eaters',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Become Picky Eaters',
      trailing: 'Seemingly Overnight?',
    },
    quote: "I don't like that anymore!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'picky-eater',
    reassurance: "It's common — and usually a normal developmental phase!",
    explanation: "Most of the time, it's a survival instinct called food neophobia, not defiance.",
    reasons: [
      {
        icon: '🆕',
        title: 'Food Neophobia',
        description:
          'A natural wariness of new foods peaks around age 2–6, an evolutionary safety instinct.',
      },
      {
        icon: '👅',
        title: 'Sensory Sensitivity',
        description: 'Texture, smell, or appearance can matter more than taste itself.',
      },
      {
        icon: '🔄',
        title: 'Need for Predictability',
        description: 'Familiar foods feel safe in a world with lots of new experiences.',
      },
      {
        icon: '📉',
        title: 'Appetite Naturally Fluctuates',
        description: "Growth isn't constant, so appetite varies week to week.",
      },
      {
        icon: '🙅',
        title: 'Asserting Independence',
        description: "Refusing food is one of the few choices fully within a child's control.",
      },
      {
        icon: '🐌',
        title: 'Slower to Warm Up to Flavors',
        description: 'Some children need many exposures before accepting a new food.',
      },
      {
        icon: '😖',
        title: 'Past Negative Association',
        description:
          'A single bad experience (choking scare, illness) can create lasting avoidance.',
      },
      {
        icon: '😣',
        title: 'Mealtime Pressure',
        description: 'Pressure to eat can paradoxically increase resistance.',
      },
    ],
    concerns: [
      'Extremely limited number of accepted foods (fewer than 10)',
      'Weight loss or poor growth over time',
      'Complete avoidance of entire food groups long-term',
      'Intense distress, gagging, or vomiting with new foods',
      'Mealtimes causing significant family conflict daily',
    ],
    professionalGuidance:
      "If accepted foods are extremely limited or growth is affected, it's worth discussing with a pediatrician or feeding specialist.",
    strategies: [
      'Keep offering new foods without pressure to eat them',
      'Serve one new food alongside familiar favorites',
      'Let them help prepare or serve their own plate',
      'Model eating a variety of foods yourself, calmly',
    ],
    routine: [
      { icon: '🍚', label: 'Familiar food' },
      { icon: '🥦', label: 'One new food, no pressure' },
      { icon: '👀', label: 'Let them explore' },
      { icon: '😊', label: 'No pressure to finish' },
    ],
    insight:
      "If picky eating is intense AND your child shows similar caution with new textures elsewhere (clothes, activities), it's often connected — a broader sensory caution, not stubbornness about food.",
    keywords: ['picky', 'neophobia', 'selective eating'],
  },
  {
    id: 'refusing-vegetables',
    topicNumber: 2,
    title: 'Why Kids Refuse Vegetables',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Refuse to Eat Vegetables',
      trailing: "No Matter How They're Made?",
    },
    quote: 'Ew, no vegetables!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'vegetables',
    reassurance: "It's common — and usually not dislike of all vegetables forever!",
    explanation:
      'Most of the time, bitterness sensitivity and texture play a bigger role than taste preference.',
    reasons: [
      {
        icon: '👅',
        title: 'Bitter Taste Sensitivity',
        description:
          'Children have more taste buds and can taste bitterness more intensely than adults.',
      },
      {
        icon: '🥬',
        title: 'Texture Aversion',
        description: 'Mushy or stringy textures can feel unpleasant in the mouth.',
      },
      {
        icon: '👁️',
        title: 'Visual Unfamiliarity',
        description: 'Unusual colors or shapes can trigger caution before tasting.',
      },
      {
        icon: '🔁',
        title: 'Lack of Repeated Exposure',
        description: 'It can take 10–15 tries before a new food is accepted.',
      },
      {
        icon: '😤',
        title: 'Association with "Have To"',
        description: 'Foods framed as obligatory can become less appealing.',
      },
      {
        icon: '🍯',
        title: 'Preference for Sweet/Salty',
        description: 'Sweeter or saltier flavors are naturally more appealing early on.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Modeling Effects',
        description: "If vegetables aren't regularly seen being eaten, they feel less normal.",
      },
      {
        icon: '🚫',
        title: 'Feeling Forced',
        description:
          'Pressure to eat vegetables specifically can create a lasting negative association.',
      },
    ],
    concerns: [
      'Complete avoidance of vegetables affecting overall nutrition',
      'Extreme reactions (gagging, vomiting) to vegetable textures',
      'Avoidance extending to all fruits and vegetables broadly',
      'No change even after many relaxed, pressure-free exposures',
      'Signs of nutritional deficiency flagged by a doctor',
    ],
    professionalGuidance:
      "If vegetable avoidance is total and affecting nutrition, it's worth discussing with a pediatrician or dietitian.",
    strategies: [
      'Offer the same vegetable prepared different ways',
      'Pair new vegetables with favorite dips or foods',
      'Grow or shop for vegetables together to build interest',
      'Keep offering without pressure — repetition matters more than persuasion',
    ],
    routine: [
      { icon: '🥕', label: 'Serve small portion' },
      { icon: '😌', label: 'No pressure to eat' },
      { icon: '🔁', label: 'Offer again next time' },
      { icon: '🎉', label: 'Praise any exploration' },
    ],
    insight:
      "If vegetables are consistently refused AND other new foods are too, it's often connected — a broader food neophobia phase, not dislike of vegetables specifically.",
    keywords: ['vegetables', 'bitter taste', 'nutrition'],
  },
  {
    id: 'only-junk-food',
    topicNumber: 3,
    title: 'Why Kids Only Want Junk Food',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Only Want Junk Food',
      trailing: 'And Refuse Everything Else?',
    },
    quote: 'Can I have chips instead?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'junk-food',
    reassurance: "It's common — and usually about how the brain responds to certain foods!",
    explanation:
      'Most of the time, highly processed foods are engineered to be extra rewarding to the brain.',
    reasons: [
      {
        icon: '🧪',
        title: 'Engineered Palatability',
        description: 'Processed foods are designed to hit taste preferences intensely.',
      },
      {
        icon: '🎯',
        title: 'Dopamine Response',
        description: 'Sugary or salty foods trigger a stronger reward response in the brain.',
      },
      {
        icon: '🍟',
        title: 'Easier to Eat',
        description: 'Soft, simple textures require less effort than many whole foods.',
      },
      {
        icon: '📺',
        title: 'Peer and Media Influence',
        description: "Advertising and friends' preferences shape what feels normal to want.",
      },
      {
        icon: '🏠',
        title: 'Availability at Home',
        description: "Kids tend to prefer what's most accessible and familiar in the house.",
      },
      {
        icon: '🎉',
        title: 'Association with Fun',
        description: 'Junk food is often tied to celebrations, making it emotionally appealing.',
      },
      {
        icon: '😐',
        title: 'Contrast with Bland Alternatives',
        description: 'Less-flavorful "healthy" options can feel unappealing by comparison.',
      },
      {
        icon: '🔁',
        title: 'Snacking Pattern Established',
        description: 'Frequent small snacks can reduce hunger for meals.',
      },
    ],
    concerns: [
      'Near-total refusal of any non-processed food',
      'Signs of nutritional concern noted by a pediatrician',
      "Strong emotional distress when processed food isn't available",
      'Weight or growth pattern concerns over time',
      'Eating driven by strong emotional need, not hunger',
    ],
    professionalGuidance:
      "If the diet is extremely restricted to processed foods and growth is a concern, it's worth involving a pediatrician or dietitian.",
    strategies: [
      'Keep a variety of foods regularly available and visible',
      'Make whole foods more appealing — dips, fun shapes, involvement in prep',
      'Limit processed snacks being the default "easy" option',
      'Avoid using food as a reward or punishment',
    ],
    routine: [
      { icon: '🍽️', label: 'Offer variety' },
      { icon: '🍕', label: 'Include one favorite' },
      { icon: '🍎', label: 'Add one whole food' },
      { icon: '😊', label: 'No pressure, just exposure' },
    ],
    insight:
      "If junk food is strongly preferred AND mealtimes feel like a battle generally, it's often connected — a broader pattern worth addressing gradually, not one meal at a time.",
    keywords: ['junk food', 'processed food', 'sugar', 'nutrition'],
  },
  {
    id: 'meals-take-forever',
    topicNumber: 4,
    title: 'Why Kids Take Forever to Finish Meals',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Take Forever to Finish',
      trailing: 'A Meal That Should Take Minutes?',
    },
    quote: "I'm still eating...",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'meals-forever',
    reassurance: "It's common — and usually not defiance or manipulation!",
    explanation:
      "Most of the time, it's low hunger, distraction, or the meal competing with something more interesting.",
    reasons: [
      {
        icon: '🍽️',
        title: 'Genuinely Not Very Hungry',
        description: 'If snacks were recent, real hunger may be low.',
      },
      {
        icon: '👀',
        title: 'Easily Distracted',
        description: 'Conversation, siblings, or surroundings pull attention from eating.',
      },
      {
        icon: '👅',
        title: 'Sensory Processing Takes Time',
        description: 'Some kids chew and process food more slowly than others.',
      },
      {
        icon: '🕹️',
        title: 'Testing Boundaries',
        description: 'Mealtime can become a space to test limits and control.',
      },
      {
        icon: '🧸',
        title: 'Preferring Play Over Eating',
        description: 'A more interesting activity nearby competes for attention.',
      },
      {
        icon: '😰',
        title: 'Portion Feels Overwhelming',
        description: 'A plate that looks too full can feel discouraging to start.',
      },
      {
        icon: '😮‍💨',
        title: 'Oral Motor Fatigue',
        description: 'Chewing is physical work, and some kids tire of it faster.',
      },
      {
        icon: '💬',
        title: 'Enjoying the Social Time',
        description: 'Extending the meal can be a way of enjoying time with family.',
      },
    ],
    concerns: [
      'Meals regularly extending well beyond 45–60 minutes',
      'Very low food intake despite the long duration',
      'Significant family stress or conflict at every meal',
      'Signs of oral motor difficulty (excessive gagging, spitting out)',
      'Weight or growth concerns noted by a doctor',
    ],
    professionalGuidance:
      "If meals are consistently very long with very little eaten, it's worth discussing with a pediatrician.",
    strategies: [
      'Set a reasonable, consistent time limit for meals',
      'Serve smaller portions with the option for more',
      'Minimize distractions like screens during meals',
      'Keep the mood calm and unhurried, not focused on finishing',
    ],
    routine: [
      { icon: '🍽️', label: 'Small portion served' },
      { icon: '👨‍👩‍👧', label: 'Eat together, low pressure' },
      { icon: '⏰', label: 'Gentle time boundary' },
      { icon: '😊', label: 'End meal calmly' },
    ],
    insight:
      "If meals run long AND your child is slow-paced with other tasks too, it's often connected — a broader processing pace, not manipulation at the table.",
    keywords: ['slow eating', 'mealtime', 'distraction'],
  },
  {
    id: 'constant-snack-requests',
    topicNumber: 5,
    title: 'Why Kids Constantly Ask for Snacks',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Constantly Ask for Snacks',
      trailing: 'Right After Eating a Meal?',
    },
    quote: 'Can I have a snack?',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'snacks',
    reassurance: "It's common — and usually not about being manipulative!",
    explanation:
      "Most of the time, it's about small stomachs, boredom, or seeking comfort, not just hunger.",
    reasons: [
      {
        icon: '🍽️',
        title: 'Small Stomach Capacity',
        description: 'Young children genuinely need to eat more frequently than adults.',
      },
      {
        icon: '📈',
        title: 'Growth Spurts',
        description: 'Increased appetite during growth periods is completely normal.',
      },
      {
        icon: '😐',
        title: 'Boredom-Driven Requests',
        description: 'Snacking can be a way of seeking stimulation, not hunger.',
      },
      {
        icon: '🤗',
        title: 'Emotional Comfort Seeking',
        description: 'Food can become associated with soothing difficult feelings.',
      },
      {
        icon: '🔁',
        title: 'Habit and Routine',
        description: 'If snack time always follows a certain activity, it becomes expected.',
      },
      {
        icon: '🍚',
        title: 'Genuine Hunger from Meals',
        description: 'If meals were light, real hunger may follow soon after.',
      },
      {
        icon: '👋',
        title: 'Attention-Seeking',
        description: 'Asking for snacks can be a way of engaging a busy parent.',
      },
      {
        icon: '🍪',
        title: 'Taste-Driven, Not Hunger-Driven',
        description: "Wanting a specific flavor isn't always about being hungry.",
      },
    ],
    concerns: [
      'Snack requests replacing real meals consistently',
      'Strong emotional distress when a snack is declined',
      'Eating clearly disconnected from hunger cues entirely',
      'Weight pattern concerns noted by a pediatrician',
      'Snacking used consistently to manage difficult emotions',
    ],
    professionalGuidance:
      "If snacking consistently replaces meals or seems driven by emotions rather than hunger, it's worth discussing with a pediatrician.",
    strategies: [
      'Offer regular, planned snack times rather than on-demand',
      'Keep a few go-to healthy snack options readily available',
      'Check in on the feeling behind the request sometimes',
      'Offer a non-food activity when boredom seems to be the driver',
    ],
    routine: [
      { icon: '⏰', label: 'Planned snack time' },
      { icon: '🍎', label: 'Offer 1-2 choices' },
      { icon: '🧸', label: 'Eat, then back to play' },
      { icon: '🔁', label: 'Next snack at set time' },
    ],
    insight:
      "If snack requests are frequent AND seem tied to boredom or big feelings, it's often connected — a broader need for engagement or comfort, not just hunger.",
    keywords: ['snacking', 'hunger', 'boredom'],
  },
  {
    id: 'not-drinking-water',
    topicNumber: 6,
    title: "Why Kids Don't Drink Enough Water",
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Not Drink Enough Water',
      trailing: 'Even on a Hot Day?',
    },
    quote: "I'm not thirsty!",
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'water',
    reassurance: "It's common — and usually not neglecting their own needs on purpose!",
    explanation:
      'Most of the time, thirst signals are easy to miss when a child is absorbed in something else.',
    reasons: [
      {
        icon: '🚰',
        title: 'Weaker Thirst Awareness',
        description: 'Young children are less tuned in to internal thirst cues than adults.',
      },
      {
        icon: '🧸',
        title: 'Distraction from Play',
        description: 'Being absorbed in an activity easily overrides the urge to drink.',
      },
      {
        icon: '🧃',
        title: 'Preference for Flavored Drinks',
        description: 'Plain water can feel less appealing than sweeter options.',
      },
      {
        icon: '🤔',
        title: 'Forgetting Rather Than Refusing',
        description: "It's often simply not top of mind, not deliberate avoidance.",
      },
      {
        icon: '🍉',
        title: 'Getting Enough from Food',
        description: 'Water-rich foods can provide some hydration without drinking much.',
      },
      {
        icon: '🚻',
        title: 'Bathroom Avoidance',
        description: 'Not wanting to stop and use the bathroom can reduce drinking.',
      },
      {
        icon: '🥤',
        title: 'Access Issues',
        description: 'Water not being easily within reach reduces spontaneous drinking.',
      },
      {
        icon: '❄️',
        title: 'Temperature Preference',
        description: "Water that's not cold or appealing enough may be avoided.",
      },
    ],
    concerns: [
      'Signs of dehydration (very infrequent urination, dark urine)',
      'Persistent lethargy or headaches that could relate to hydration',
      'Complete refusal of all fluids, not just water',
      'Excessive thirst that seems unusual paired with other symptoms',
      'A pediatrician has flagged hydration as a specific concern',
    ],
    professionalGuidance:
      "If there are visible signs of dehydration or persistent low fluid intake, it's worth checking in with a pediatrician.",
    strategies: [
      'Keep a water bottle easily accessible throughout the day',
      'Offer water alongside every meal and snack automatically',
      'Make water more appealing with fruit slices or a fun cup',
      'Build in reminder moments tied to regular activities',
    ],
    routine: [
      { icon: '🚰', label: 'Water bottle nearby' },
      { icon: '🍽️', label: 'Sip at meal/snack' },
      { icon: '⏰', label: 'Reminder at activity breaks' },
      { icon: '🔄', label: 'Refill together' },
    ],
    insight:
      "If water intake is consistently low AND your child forgets other routine needs too, it's often connected — a broader awareness-of-body-cues pattern, not defiance.",
    keywords: ['hydration', 'water', 'thirst'],
  },
  {
    id: 'suddenly-stops-eating',
    topicNumber: 7,
    title: 'Why Kids Suddenly Stop Eating a Favorite Food',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Suddenly Stop Eating',
      trailing: 'A Food They Used to Love?',
    },
    quote: "I don't want that anymore.",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'stops-eating',
    reassurance: "It's common — and usually not a big red flag on its own!",
    explanation:
      'Most of the time, preferences genuinely shift, or a single incident created a new association.',
    reasons: [
      {
        icon: '👅',
        title: 'Sensory Fatigue',
        description: 'Eating the same food very often can lead to a sudden loss of interest.',
      },
      {
        icon: '🤢',
        title: 'Single Negative Incident',
        description: 'Getting sick once near a food can create a lasting aversion.',
      },
      {
        icon: '🔄',
        title: 'Developmental Taste Shifts',
        description: 'Taste preferences naturally change as children grow.',
      },
      {
        icon: '💭',
        title: 'Association with a Bad Memory',
        description: 'A food linked to an upsetting event may be avoided.',
      },
      {
        icon: '🤒',
        title: 'Subtle Illness',
        description:
          'A minor cold or stomach upset can temporarily reduce appetite for specific foods.',
      },
      {
        icon: '✨',
        title: 'Seeking Novelty',
        description: 'Some kids simply want variety after a food feels overly familiar.',
      },
      {
        icon: '🕹️',
        title: 'Testing Control',
        description: 'Rejecting a previously loved food can be a way of asserting choice.',
      },
      {
        icon: '😔',
        title: 'Emotional State',
        description: 'Stress or big feelings can shift appetite and preferences temporarily.',
      },
    ],
    concerns: [
      'Rejection spreading to most or all previously accepted foods',
      'Paired with other signs of illness or significant appetite loss',
      'Significant weight loss or growth concerns over time',
      'Rejection paired with visible pain or discomfort when eating',
      'The pattern persisting for many weeks without any resolution',
    ],
    professionalGuidance:
      "If food rejection is widespread or paired with pain, illness signs, or weight loss, it's worth checking in with a pediatrician.",
    strategies: [
      'Avoid pressuring them to eat the previously loved food',
      'Offer it again occasionally without comment or fuss',
      'Rotate in other familiar, accepted foods in the meantime',
      'Stay relaxed — most single-food rejections resolve on their own',
    ],
    routine: [
      { icon: '🍚', label: 'Offer familiar alternatives' },
      { icon: '🔁', label: 'Re-offer old favorite occasionally' },
      { icon: '😌', label: 'No pressure or comment' },
      { icon: '⏳', label: 'Let preference return naturally' },
    ],
    insight:
      "If one food is suddenly rejected but overall eating stays fine, it's usually just a normal shift — not a sign of a bigger problem.",
    keywords: ['food rejection', 'preferences', 'appetite change'],
  },
  {
    id: 'demanding-sweets',
    topicNumber: 8,
    title: 'Why Kids Demand Sweets',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Demand Sweets',
      trailing: 'Right Before or After Every Meal?',
    },
    quote: 'Can I have dessert?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'sweets',
    reassurance: "It's common — and usually about biology, not a lack of discipline!",
    explanation:
      'Most of the time, a preference for sweetness is a built-in, evolutionary response.',
    reasons: [
      {
        icon: '🍭',
        title: 'Innate Sweet Preference',
        description: 'Humans are biologically wired to prefer sweet tastes from birth.',
      },
      {
        icon: '🎯',
        title: 'Strong Reward Response',
        description: 'Sugar triggers a notable dopamine response in the brain.',
      },
      {
        icon: '🎉',
        title: 'Association with Celebration',
        description: 'Sweets are often linked to positive, special occasions.',
      },
      {
        icon: '🔁',
        title: 'Learned Expectation',
        description: 'If dessert reliably follows meals, it becomes an anticipated routine.',
      },
      {
        icon: '⚡',
        title: 'Low Energy Seeking Quick Fuel',
        description: 'Tiredness can increase cravings for quick-energy foods.',
      },
      {
        icon: '👨‍👩‍👧',
        title: 'Modeling from Others',
        description: 'Seeing sweets treated as exciting by adults reinforces their appeal.',
      },
      {
        icon: '🏅',
        title: 'Using Sweets as a Reward',
        description: 'If sweets are used to reward behavior, they gain extra emotional weight.',
      },
      {
        icon: '😋',
        title: 'Genuine Enjoyment',
        description: 'Sometimes it really is simply about liking how it tastes.',
      },
    ],
    concerns: [
      'Sweets replacing meals or significantly reducing nutrition',
      'Strong emotional distress or meltdowns when sweets are declined',
      'A pattern of using sweets specifically to manage difficult emotions',
      'Dental concerns flagged by a dentist related to sugar intake',
      'Sweet cravings that seem disconnected from any typical routine',
    ],
    professionalGuidance:
      "If sweets are displacing meals or causing dental concerns, it's worth discussing with a pediatrician or dentist.",
    strategies: [
      'Offer sweets at predictable times rather than on-demand',
      'Avoid using sweets specifically as rewards or bribes',
      'Pair sweets with a meal rather than as a separate treat',
      'Model a relaxed, non-restrictive relationship with treats yourself',
    ],
    routine: [
      { icon: '🍽️', label: 'Meal first' },
      { icon: '🍪', label: 'Planned treat time' },
      { icon: '😊', label: 'Enjoy without guilt' },
      { icon: '🔄', label: 'Back to routine' },
    ],
    insight:
      "If sweet cravings feel intense AND your child seeks comfort through food in other moments too, it's often connected — a broader emotional-comfort pattern, not just a sweet tooth.",
    keywords: ['sweets', 'sugar', 'dessert', 'cravings'],
  },
  {
    id: 'same-food-every-day',
    topicNumber: 9,
    title: 'Why Kids Want the Same Food Every Day',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Want the Same Food',
      trailing: 'Every Single Day?',
    },
    quote: 'Can I have that again?',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'same-food',
    reassurance: "It's common — and usually a source of comfort, not a red flag!",
    explanation:
      'Most of the time, sameness feels safe and predictable in a world full of new experiences.',
    reasons: [
      {
        icon: '🛡️',
        title: 'Predictability Feels Safe',
        description: 'A known food removes the uncertainty that comes with trying something new.',
      },
      {
        icon: '🧠',
        title: 'Reduced Decision Fatigue',
        description: 'Choosing a familiar food is mentally easier than deciding fresh each time.',
      },
      {
        icon: '❤️',
        title: 'Genuine Strong Preference',
        description: 'Sometimes a child has simply found a food they truly enjoy.',
      },
      {
        icon: '👅',
        title: 'Sensory Comfort',
        description: 'A familiar taste and texture is reliably pleasant and expected.',
      },
      {
        icon: '🕹️',
        title: 'Control Over Choices',
        description: 'Requesting the same food is a small, consistent way to exercise choice.',
      },
      {
        icon: '😌',
        title: 'Anxiety Reduction',
        description: 'Familiar routines, including food, can help an anxious child feel settled.',
      },
      {
        icon: '🤗',
        title: 'Association with Comfort',
        description: 'The food may be linked to a positive memory or feeling.',
      },
      {
        icon: '📅',
        title: 'Age-Typical Phase',
        description: 'Food "ruts" are extremely common between ages 2 and 6.',
      },
    ],
    concerns: [
      'Extremely narrow range of accepted foods overall (not just one meal)',
      "Significant distress if the exact same food isn't available",
      'Nutritional gaps becoming apparent over time',
      'The pattern intensifying rather than easing with age',
      'Paired with rigid, anxious behavior in other areas of life',
    ],
    professionalGuidance:
      "If food sameness is extreme and paired with rigidity elsewhere, it's worth discussing with a pediatrician.",
    strategies: [
      'Let the preferred food stay in rotation without a fight',
      'Gently introduce small variations alongside the familiar favorite',
      'Keep offering new foods occasionally without pressure',
      'Trust that most food ruts resolve naturally with time',
    ],
    routine: [
      { icon: '🍝', label: 'Serve the familiar favorite' },
      { icon: '🥄', label: 'Add one small new item nearby' },
      { icon: '😊', label: 'No pressure to try it' },
      { icon: '🔁', label: 'Repeat patiently' },
    ],
    insight:
      "If your child wants sameness in food AND prefers predictable routines elsewhere too, it's often connected — a broader comfort-in-familiarity pattern, not stubbornness.",
    keywords: ['food rut', 'sameness', 'routine'],
  },
  {
    id: 'playing-with-food',
    topicNumber: 10,
    title: 'Why Kids Play With Their Food',
    heading: {
      lead: 'Why Do Some Kids',
      emphasis: 'Play With Their Food',
      trailing: 'Instead of Eating It?',
    },
    quote: "Look, it's a mountain!",
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'play-with-food',
    reassurance: "It's common — and usually a form of exploration, not misbehavior!",
    explanation:
      'Most of the time, playing with food is how young children learn about textures and the world.',
    reasons: [
      {
        icon: '🖐️',
        title: 'Sensory Exploration',
        description: 'Touching and manipulating food helps children learn about textures.',
      },
      {
        icon: '🍽️',
        title: 'Low Hunger in the Moment',
        description: 'If not very hungry, food becomes more interesting to play with than eat.',
      },
      {
        icon: '😐',
        title: 'Boredom at the Table',
        description: 'A long meal without much stimulation invites creative distraction.',
      },
      {
        icon: '🔬',
        title: 'Testing Cause and Effect',
        description: 'Squishing or stacking food is a form of hands-on learning.',
      },
      {
        icon: '👋',
        title: 'Seeking Attention',
        description: 'Playful behavior can be a way of engaging others at the table.',
      },
      {
        icon: '🧠',
        title: 'Developmentally Normal Curiosity',
        description: 'Exploring new textures is part of typical development.',
      },
      {
        icon: '🙅',
        title: 'Avoiding a Disliked Food',
        description: 'Play can be a subtle way of delaying or avoiding a food.',
      },
      {
        icon: '✨',
        title: 'Enjoying the Sensory Feedback',
        description: 'Some textures are simply fun to touch and squish.',
      },
    ],
    concerns: [
      'Food play consistently replacing any actual eating',
      'Significant nutritional intake affected as a result',
      "Persisting well past the age when it's developmentally typical",
      'Paired with broader difficulty focusing during any seated task',
      'Distress or big reactions if food play is redirected',
    ],
    professionalGuidance:
      "If playing consistently replaces eating and affects nutrition, it's worth mentioning to a pediatrician.",
    strategies: [
      'Offer sensory play with non-food items outside of mealtimes',
      'Keep meals appropriately timed so hunger supports eating',
      'Gently redirect back to eating without a big reaction',
      'Keep mealtime engaging with conversation, not just food',
    ],
    routine: [
      { icon: '🍽️', label: 'Serve meal' },
      { icon: '🖐️', label: 'Allow brief exploration' },
      { icon: '🍴', label: 'Gentle redirect to eating' },
      { icon: '🎉', label: 'Praise eating, not just play' },
    ],
    insight:
      "If food play happens often AND your child explores textures elsewhere too, it's often connected — a broader sensory curiosity, not a mealtime problem.",
    keywords: ['playing with food', 'sensory play', 'mealtime behavior'],
  },
];
