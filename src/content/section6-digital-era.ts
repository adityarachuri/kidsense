import type { Topic } from '../types/content';

/**
 * Section 6: Digital Era.
 */
export const digitalEraTopics: Topic[] = [
  {
    id: 'screen-time-ends',
    topicNumber: 1,
    title: 'Why Do Meltdowns Happen When Screen Time Ends?',
    heading: {
      lead: 'Why Do Meltdowns Happen',
      emphasis: 'When Screen Time Ends',
      trailing: 'Even After a Warning?',
    },
    quote: 'Just five more minutes, please!',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'screen-time-ends',
    reassurance: "It's common — and it isn't screen addiction!",
    explanation:
      'Most of the time, it’s a hard transition away from something highly engaging, not a sign the screen itself is harmful.',
    reasons: [
      {
        icon: '🧠',
        title: 'Dopamine-Driven Engagement',
        description:
          'Fast-paced content is designed to hold attention, making it hard to step away from.',
      },
      {
        icon: '🔄',
        title: 'Transitions Are Just Hard',
        description:
          'Stopping any absorbing activity is difficult — screens simply make it very vivid.',
      },
      {
        icon: '⏳',
        title: 'Unclear Sense of "Ending"',
        description: 'A video or level often has no natural stopping point a child can anticipate.',
      },
      {
        icon: '🎯',
        title: 'An Unfinished Goal',
        description: 'Stopping mid-level or mid-episode feels like leaving something incomplete.',
      },
      {
        icon: '🌗',
        title: 'Overstimulation Rebound',
        description:
          'Bright, fast content can leave a nervous system keyed up right when it must calm down.',
      },
      {
        icon: '🔋',
        title: 'Already Tired From the Day',
        description: 'Screen time often happens at a low-reserve point, like end of day.',
      },
      {
        icon: '🕹️',
        title: 'Loss of Control',
        description:
          'Being told to stop by someone else can feel like losing autonomy in the moment.',
      },
      {
        icon: '📉',
        title: 'Comparing to the Fun Just Had',
        description: 'Whatever comes next can feel dull compared to what they were just doing.',
      },
    ],
    concerns: [
      'Meltdowns at every single screen transition, with no exceptions',
      'Aggression directed at people or devices when asked to stop',
      'Difficulty engaging with anything else for a long stretch afterward',
      'Screen time displacing sleep, meals, or in-person time regularly',
      'No improvement despite consistent warnings and routines',
    ],
    professionalGuidance:
      'If transitions off screens are consistently extreme or screen use is displacing sleep and daily activities, a pediatrician can help build a healthier balance.',
    strategies: [
      'Give a clear warning before the transition, like "two more minutes"',
      'Set the time limit before the screen turns on, not during',
      'Choose a natural stopping point — end of an episode, not mid-scene',
      'Have a specific next activity ready to move into',
    ],
    routine: [
      { icon: '⏰', label: 'Set limit up front' },
      { icon: '🗣️', label: 'Give a warning' },
      { icon: '⏹️', label: 'End at a natural stop' },
      { icon: '➡️', label: 'Move to next activity' },
    ],
    insight:
      'Screen-time meltdowns are usually about the transition, not the device — a predictable ending routine reduces the reaction far more than reducing screen time alone.',
    keywords: ['screen time', 'meltdown', 'transitions', 'tablet', 'ending'],
  },
  {
    id: 'asking-for-device',
    topicNumber: 2,
    title: 'Why Do Kids Ask for a Device Constantly?',
    heading: {
      lead: 'Why Do Kids Ask',
      emphasis: 'for a Device',
      trailing: 'Over and Over, All Day?',
    },
    quote: 'Can I play on your phone? Please, please, please?',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'asking-for-device',
    reassurance: "It's common — and it isn't a sign of dependency yet!",
    explanation:
      'Most of the time, repeated requests reflect boredom or habit, not an inability to function without a screen.',
    reasons: [
      {
        icon: '😴',
        title: 'Boredom Seeking the Fastest Fix',
        description:
          'A screen is often the quickest, most reliable route out of boredom available.',
      },
      {
        icon: '🔁',
        title: 'A Learned Habit Loop',
        description: 'If asking has worked before, it becomes the automatic first request.',
      },
      {
        icon: '🧠',
        title: 'High Novelty, Low Effort',
        description:
          'Screens offer constant new content with none of the effort other play requires.',
      },
      {
        icon: '👀',
        title: 'Seeing Adults on Devices',
        description:
          'A device in near-constant adult use naturally raises a child’s interest in it.',
      },
      {
        icon: '🎯',
        title: 'Genuine Interest in the Content',
        description:
          'A specific game or show can be a real, focused interest, not just idle asking.',
      },
      {
        icon: '🕹️',
        title: 'Testing the Current Limit',
        description: 'Repeated asking sometimes checks whether today’s answer might differ.',
      },
      {
        icon: '🧩',
        title: 'Difficulty Self-Initiating Play',
        description:
          'Independent play is a skill that needs practice, and screens can shortcut around it.',
      },
      {
        icon: '📉',
        title: 'Comparing to Peers',
        description: 'A friend’s access to games or shows can raise how often it comes up.',
      },
    ],
    concerns: [
      'Distress disproportionate to a calm, clear "not right now"',
      'Little interest in any other activity, even novel ones',
      'Requests dominating most of the day, most days',
      'Screen use as the only thing that reliably calms distress',
      'Sleep or schoolwork consistently affected by the requests',
    ],
    professionalGuidance:
      'If a device is the only thing that reliably calms a child, or screen requests dominate the day, a pediatrician can help build healthier routines around use.',
    strategies: [
      'Set predictable screen windows so requests outside them are easy to answer',
      'Keep a visible list of other engaging options nearby',
      'Avoid using screens as the default boredom fix yourself',
      'Praise stretches of independent play, however short',
    ],
    routine: [
      { icon: '🗓️', label: 'Set clear windows' },
      { icon: '📋', label: 'Offer other options' },
      { icon: '🧸', label: 'Encourage independent play' },
      { icon: '👏', label: 'Praise the effort' },
    ],
    insight:
      'Constant requests usually settle once screen windows are predictable — a clear "not now, but later at 4" resolves far more than an outright no.',
    keywords: ['screen time', 'device', 'asking', 'boredom', 'tablet'],
  },
  {
    id: 'youtube-obsession',
    topicNumber: 3,
    title: 'Why Do Kids Get So Obsessed With YouTube Videos?',
    heading: {
      lead: 'Why Do Kids Get',
      emphasis: 'So Obsessed',
      trailing: 'With the Same Videos, Over and Over?',
    },
    quote: 'Can we watch it again? One more time!',
    ageRanges: ['3–5 years', '5–8 years'],
    illustrationId: 'youtube-obsession',
    reassurance: "It's common — and rewatching isn't a red flag on its own!",
    explanation:
      'Most of the time, repeat viewing reflects a genuine love of predictability and mastery, not overuse.',
    reasons: [
      {
        icon: '🔁',
        title: 'Predictability Feels Good',
        description: 'Knowing exactly what happens next is comforting for a developing brain.',
      },
      {
        icon: '🧠',
        title: 'Mastery Through Repetition',
        description: 'Rewatching lets a child fully absorb every detail, joke, and line.',
      },
      {
        icon: '🎯',
        title: 'Autoplay Design',
        description:
          'Platforms are built to suggest the next video automatically, reducing any natural stopping point.',
      },
      {
        icon: '🌈',
        title: 'High Sensory Appeal',
        description: 'Bright colors, fast cuts, and upbeat sound are engineered to hold attention.',
      },
      {
        icon: '💛',
        title: 'A Genuine Favorite Character',
        description:
          'Strong attachment to a character can make certain videos feel special, not interchangeable.',
      },
      {
        icon: '🧩',
        title: 'Comfort During Downtime',
        description:
          'A familiar video can be a reliable way to self-soothe during a low-energy moment.',
      },
      {
        icon: '📈',
        title: 'A Developmentally Normal Phase',
        description: 'Intense interest phases are common and typically pass with time.',
      },
      {
        icon: '🕹️',
        title: 'Autonomy Over the Choice',
        description:
          'Choosing what to rewatch is one of few things fully within a child’s control.',
      },
    ],
    concerns: [
      'Distress when unable to watch that goes well beyond ordinary disappointment',
      'Video time displacing sleep, meals, or outdoor play regularly',
      'No interest at all in anything other than watching',
      'Content consumed well beyond age-appropriate settings',
      'Video use as the only way a child seems able to calm down',
    ],
    professionalGuidance:
      'If video time is displacing sleep, meals, or play, or a child seems unable to calm down without it, a pediatrician can help build a healthier balance.',
    strategies: [
      'Turn off autoplay so each video requires an active choice to continue',
      'Set a specific number of videos or a timer in advance',
      'Curate a shortlist of approved content ahead of time',
      'Build in a screen-free wind-down activity afterward',
    ],
    routine: [
      { icon: '⏹️', label: 'Turn off autoplay' },
      { icon: '⏲️', label: 'Set videos or time' },
      { icon: '📋', label: 'Curate options ahead' },
      { icon: '🧘', label: 'Wind down after' },
    ],
    insight:
      'Rewatching a favorite video is closer to reading a favorite book again than to overuse — the platform’s autoplay design, not the child’s interest, is usually what removes the natural stopping point.',
    keywords: ['youtube', 'video', 'rewatching', 'obsession', 'autoplay'],
  },
  {
    id: 'video-games',
    topicNumber: 4,
    title: 'Why Do Video Game Arguments Get So Intense?',
    heading: {
      lead: 'Why Do Video Game',
      emphasis: 'Arguments Get So Intense',
      trailing: 'Compared to Everything Else?',
    },
    quote: "You can't make me quit mid-match!",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'video-games',
    reassurance: "It's common — and it doesn't mean gaming is unhealthy overall!",
    explanation:
      'Most of the time, intensity comes from mid-match investment and social stakes, not the game itself being uniquely harmful.',
    reasons: [
      {
        icon: '🏆',
        title: 'Mid-Match Investment',
        description:
          'Stopping mid-game can feel like abandoning real progress, not just pausing fun.',
      },
      {
        icon: '👥',
        title: 'Social Stakes With Friends',
        description: 'Multiplayer games add pressure not to let teammates down by leaving early.',
      },
      {
        icon: '🧠',
        title: 'High Engagement Design',
        description: 'Games are built with reward loops specifically engineered to hold attention.',
      },
      {
        icon: '🎯',
        title: 'A Sense of Real Achievement',
        description: 'Progress in a game can feel like a genuine accomplishment worth defending.',
      },
      {
        icon: '⏳',
        title: 'No Natural Pause Point',
        description: 'Some games genuinely have no safe or fair place to stop mid-round.',
      },
      {
        icon: '🕹️',
        title: 'Autonomy Over Their Own Time',
        description: 'Being told exactly when to stop can trigger a normal push for more control.',
      },
      {
        icon: '😤',
        title: 'Frustration From Losing',
        description: 'Being asked to quit right after a loss can compound the disappointment.',
      },
      {
        icon: '🔋',
        title: 'Reduced Reserves After Long Sessions',
        description: 'Extended play time itself lowers the capacity to transition calmly.',
      },
    ],
    concerns: [
      'Aggression toward people or devices when asked to stop',
      'Gaming displacing sleep, schoolwork, or in-person friendships',
      'Distress far beyond typical disappointment at every single stop',
      'Secrecy or sneaking extra time beyond agreed limits',
      'Little interest in anything else, even novel non-screen activities',
    ],
    professionalGuidance:
      'If gaming is displacing sleep or schoolwork, or transitions consistently involve aggression, a pediatrician can help build healthier limits.',
    strategies: [
      'Agree on limits before playing, tied to natural stopping points',
      'Ask what round or match is in progress before giving a warning',
      'Build in a short buffer to finish a match rather than an instant stop',
      'Keep gaming social and visible rather than isolated',
    ],
    routine: [
      { icon: '🗓️', label: 'Agree limits first' },
      { icon: '❓', label: 'Check match status' },
      { icon: '⏳', label: 'Allow a finish buffer' },
      { icon: '⏹️', label: 'Confirm the stop' },
    ],
    insight:
      'Fighting over an in-progress match is usually about the game’s built-in stakes, not a red flag — agreeing on stop points before playing prevents most of the conflict.',
    keywords: ['video games', 'gaming', 'multiplayer', 'screen time'],
  },
  {
    id: 'social-media-pressure',
    topicNumber: 5,
    title: 'Why Does Social Media Feel So Important to Tweens?',
    heading: {
      lead: 'Why Does Social Media',
      emphasis: 'Feel So Important',
      trailing: 'to Tweens Especially?',
    },
    quote: "Everyone else already has it, why can't I?",
    ageRanges: ['8–12 years'],
    illustrationId: 'social-media-pressure',
    reassurance: "It's common — and it reflects a normal need to belong, not vanity!",
    explanation:
      'Most of the time, the pull toward social media reflects a developmentally normal need for peer belonging, amplified by the platform itself.',
    reasons: [
      {
        icon: '👥',
        title: 'Peer Belonging Becomes Central',
        description: 'Fitting in with peers naturally becomes a top priority around this age.',
      },
      {
        icon: '🧠',
        title: 'Social Comparison Instinct',
        description:
          'Comparing themselves to others is a normal, if amplified, developmental drive.',
      },
      {
        icon: '📱',
        title: 'Fear of Missing Out',
        description:
          'Not being where friends are talking can feel like a real, immediate social loss.',
      },
      {
        icon: '🎯',
        title: 'Feedback-Driven Design',
        description:
          'Likes and comments are engineered to feel rewarding and to invite checking back.',
      },
      {
        icon: '🪞',
        title: 'Identity Exploration',
        description: 'Tweens are actively experimenting with who they are and how others see them.',
      },
      {
        icon: '🏆',
        title: 'Status Among Peers',
        description: 'Having an account can feel tied to social standing within a friend group.',
      },
      {
        icon: '🌗',
        title: 'Underdeveloped Impulse Control',
        description: 'The judgment to use it well typically lags behind the desire to have it.',
      },
      {
        icon: '🔁',
        title: 'Normalization From Peers',
        description: 'If most friends already have access, going without can feel isolating.',
      },
    ],
    concerns: [
      'Mood consistently worsening after specific app use',
      'Comparing themselves harshly to others they follow',
      'Secretive accounts or contact with unknown adults',
      'Sleep or schoolwork consistently disrupted by use',
      'Significant distress tied to likes, comments, or being excluded online',
    ],
    professionalGuidance:
      'If mood consistently worsens after use, or there are signs of unsafe contact, a pediatrician or school counselor should be looped in promptly.',
    strategies: [
      'Delay access as long as reasonably possible, and explain why',
      'Co-view and discuss content together rather than banning outright',
      'Set clear, collaborative rules about privacy and contact settings',
      'Keep an open, non-judgmental door for questions about what they see',
    ],
    routine: [
      { icon: '🗣️', label: 'Talk openly first' },
      { icon: '⏳', label: 'Delay where reasonable' },
      { icon: '👀', label: 'Co-view together' },
      { icon: '🔒', label: 'Set privacy rules' },
    ],
    insight:
      'The pull toward social media is really a pull toward peer belonging — addressing the underlying need for connection works better than framing it as a discipline problem.',
    keywords: ['social media', 'tween', 'peer pressure', 'apps', 'belonging'],
  },
  {
    id: 'screens-before-bed',
    topicNumber: 6,
    title: 'Why Do Screens Before Bed Wreck Sleep?',
    heading: {
      lead: 'Why Do Screens',
      emphasis: 'Before Bed',
      trailing: 'Make Falling Asleep So Hard?',
    },
    quote: 'Just one more episode before lights out?',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'screens-before-bed',
    reassurance: "It's common — and it's a body-clock issue, not a discipline one!",
    explanation:
      'Most of the time, disrupted sleep after screens comes from light exposure and mental stimulation, not willful stalling.',
    reasons: [
      {
        icon: '💡',
        title: 'Blue Light Delaying Melatonin',
        description: 'Bright screen light can signal "daytime" to the brain right before bed.',
      },
      {
        icon: '🧠',
        title: 'Mental Overstimulation',
        description: 'Engaging content keeps the brain alert exactly when it needs to wind down.',
      },
      {
        icon: '🎢',
        title: 'Leftover Emotional Charge',
        description: 'Exciting or suspenseful content can leave emotions activated at bedtime.',
      },
      {
        icon: '⏳',
        title: 'Losing Track of Time',
        description: 'Absorbing content makes it easy to lose awareness of how late it’s getting.',
      },
      {
        icon: '🔁',
        title: 'A Habit Loop at Bedtime',
        description:
          'If screens are the usual pre-bed activity, the body doesn’t associate this time with winding down.',
      },
      {
        icon: '🛏️',
        title: 'Screens Replacing a Calming Routine',
        description: 'A screen often displaces a quieter activity that would otherwise cue sleep.',
      },
      {
        icon: '📢',
        title: 'Notifications and Interruptions',
        description: 'Alerts can jolt attention right as the body starts to relax.',
      },
      {
        icon: '🕹️',
        title: 'Wanting Just a Bit More Control',
        description: 'Bedtime is often the last chance in the day to choose their own activity.',
      },
    ],
    concerns: [
      'Consistent difficulty falling asleep well beyond a reasonable bedtime',
      'Significant daytime sleepiness or mood changes tied to poor sleep',
      'Resistance to any screen-free wind-down, even briefly',
      'Sleep problems worsening despite consistent limits',
      'Screens used to avoid falling asleep due to fear or anxiety',
    ],
    professionalGuidance:
      'If sleep difficulty is persistent or daytime functioning is affected, a pediatrician can help assess sleep hygiene and any underlying anxiety.',
    strategies: [
      'Set a screen cutoff at least 30–60 minutes before bedtime',
      'Replace pre-bed screens with a calming routine, like reading',
      'Dim lights and lower stimulation gradually in the hour before bed',
      'Keep the cutoff consistent, including on weekends',
    ],
    routine: [
      { icon: '⏰', label: 'Set a screen cutoff' },
      { icon: '📖', label: 'Swap in a calm activity' },
      { icon: '💡', label: 'Dim the lights' },
      { icon: '🛏️', label: 'Keep bedtime consistent' },
    ],
    insight:
      'Sleep trouble after screens is a predictable biological response to light and stimulation — a consistent cutoff time solves it far more reliably than willpower in the moment.',
    keywords: ['screens before bed', 'sleep', 'bedtime', 'blue light'],
  },
  {
    id: 'boredom-without-screens',
    topicNumber: 7,
    title: "Why Do Kids Say They're Bored Without a Screen?",
    heading: {
      lead: 'Why Do Kids Say',
      emphasis: "They're Bored",
      trailing: "the Moment a Screen Isn't Available?",
    },
    quote: "There's NOTHING to do without my tablet!",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'boredom-without-screens',
    reassurance: "It's common — and boredom is actually a valuable, healthy state!",
    explanation:
      'Most of the time, this reflects an underused muscle for self-directed play, not a real absence of options.',
    reasons: [
      {
        icon: '🧠',
        title: 'A Skill That Needs Practice',
        description:
          'Generating your own play ideas is a muscle that atrophies without regular use.',
      },
      {
        icon: '⚡',
        title: 'Adjusting From High Stimulation',
        description: 'Anything feels slow right after highly stimulating screen content.',
      },
      {
        icon: '🎯',
        title: 'Preferring the Path of Least Effort',
        description: 'A screen requires no setup, unlike most other kinds of play.',
      },
      {
        icon: '🔁',
        title: 'A Learned Default',
        description:
          'If a screen has always followed "I’m bored," that becomes the automatic pairing.',
      },
      {
        icon: '🧩',
        title: 'Genuine Uncertainty About Options',
        description:
          'Boredom sometimes really is a lack of visible ideas, not a lack of willingness.',
      },
      {
        icon: '👥',
        title: 'Missing Social Play',
        description:
          'Solo unstructured play can feel less appealing than screen-based social features.',
      },
      {
        icon: '📉',
        title: 'Understimulated Physically',
        description: 'A day with little movement can leave restlessness with no clear outlet.',
      },
      {
        icon: '🕹️',
        title: 'Testing for a Screen Response',
        description:
          '"I’m bored" sometimes is simply a well-practiced opener for requesting a device.',
      },
    ],
    concerns: [
      'Complete inability to self-direct play even with support and modeling',
      'Extreme distress specifically at the absence of a screen',
      'No interest at all in any offline activity over an extended period',
      'Boredom paired with broader signs of low mood',
      'Regression in previously enjoyed offline hobbies',
    ],
    professionalGuidance:
      'If a child cannot engage in any offline activity even with support, or boredom is paired with low mood, a pediatrician can help assess what’s underneath it.',
    strategies: [
      'Resist the urge to immediately solve their boredom for them',
      'Keep a few open-ended supplies visibly accessible',
      'Let the discomfort of boredom sit briefly before stepping in',
      'Model your own offline hobbies and interests',
    ],
    routine: [
      { icon: '⏳', label: 'Let boredom sit briefly' },
      { icon: '🧸', label: 'Keep supplies visible' },
      { icon: '💡', label: 'Offer one idea, not five' },
      { icon: '🪞', label: 'Model offline hobbies' },
    ],
    insight:
      'Boredom is the discomfort right before a child generates their own idea — solving it too quickly for them is what keeps the "bored without a screen" pattern going.',
    keywords: ['boredom', 'screen-free', 'independent play', 'unstructured play'],
  },
  {
    id: 'comparing-to-influencers',
    topicNumber: 8,
    title: 'Why Do Kids Compare Themselves to Influencers?',
    heading: {
      lead: 'Why Do Kids Compare',
      emphasis: 'Themselves to Influencers',
      trailing: 'They See Online?',
    },
    quote: "Why don't I have stuff like that?",
    ageRanges: ['8–12 years'],
    illustrationId: 'comparing-to-influencers',
    reassurance: "It's common — and it doesn't mean they're shallow or ungrateful!",
    explanation:
      'Most of the time, comparison reflects a still-forming ability to separate curated content from real life, not envy of character.',
    reasons: [
      {
        icon: '🎭',
        title: 'Curated Content Looks Like Reality',
        description:
          'A polished highlight reel can genuinely be mistaken for someone’s everyday life.',
      },
      {
        icon: '🧠',
        title: 'Developing Media Literacy',
        description: 'The ability to critically evaluate online content is still being built.',
      },
      {
        icon: '👥',
        title: 'Natural Social Comparison',
        description:
          'Comparing themselves to others is a normal developmental instinct, amplified online.',
      },
      {
        icon: '🏆',
        title: 'Status Signals in Peer Groups',
        description: 'Trends seen online often carry real social currency among peers offline.',
      },
      {
        icon: '📱',
        title: 'Algorithmic Amplification',
        description:
          'Recommendation systems repeatedly surface aspirational content designed to engage.',
      },
      {
        icon: '🎯',
        title: 'Wanting to Belong to a Trend',
        description:
          'Owning what a favorite creator has can feel like a way to share in their appeal.',
      },
      {
        icon: '💭',
        title: 'Underdeveloped Sense of "Enough"',
        description: 'A concept of sufficiency is still forming, so comparisons feel more urgent.',
      },
      {
        icon: '🪞',
        title: 'Identity Still Under Construction',
        description:
          'Trying on other people’s style and interests is part of figuring out their own.',
      },
    ],
    concerns: [
      'Persistent distress or low self-esteem tied to online comparisons',
      'Requests escalating into secrecy or dishonesty about spending',
      'Comparison paired with broader signs of anxiety or low mood',
      'Complete inability to enjoy what they have without comparing it',
      'Following content well beyond what feels age-appropriate',
    ],
    professionalGuidance:
      'If comparisons are tied to persistent low self-esteem or anxiety, a school counselor or child psychologist can help build media literacy and resilience.',
    strategies: [
      'Talk openly about how curated online content really is',
      'Ask what specifically appeals to them, rather than dismissing it',
      'Point out the effort and editing behind polished content',
      'Balance screen exposure with real-world experiences and achievements',
    ],
    routine: [
      { icon: '🗣️', label: 'Talk about curation' },
      { icon: '❓', label: 'Ask what appeals' },
      { icon: '🔍', label: 'Unpack the editing' },
      { icon: '🌟', label: 'Highlight real wins' },
    ],
    insight:
      'Comparison to influencers eases as media literacy grows — helping a child see the effort behind the polish matters more than restricting exposure alone.',
    keywords: ['influencers', 'social media', 'comparison', 'self-esteem'],
  },
  {
    id: 'cyberbullying',
    topicNumber: 9,
    title: 'Why Are Kids Reluctant to Talk About Online Conflict?',
    heading: {
      lead: 'Why Are Kids Reluctant',
      emphasis: 'to Talk About',
      trailing: 'Conflict That Happens Online?',
    },
    quote: "It's nothing, just drop it, okay?",
    ageRanges: ['8–12 years'],
    illustrationId: 'cyberbullying',
    reassurance: "It's common — and staying quiet doesn't mean it's not serious!",
    explanation:
      'Most of the time, silence reflects fear of losing device access, not an absence of real distress.',
    reasons: [
      {
        icon: '📵',
        title: 'Fear of Losing Device Access',
        description: 'Many kids worry that telling a parent will mean the device gets taken away.',
      },
      {
        icon: '😳',
        title: 'Shame About the Situation',
        description:
          'Being targeted online can feel embarrassing, even though it isn’t their fault.',
      },
      {
        icon: '🧠',
        title: 'Uncertainty About What Counts',
        description: 'Kids may not recognize unkind online behavior as something worth reporting.',
      },
      {
        icon: '👥',
        title: 'Fear of Social Consequences',
        description: 'Reporting a peer can feel risky for existing friendships or social standing.',
      },
      {
        icon: '🕹️',
        title: 'Wanting to Handle It Alone',
        description:
          'A growing wish for independence can lead to trying to manage it without help.',
      },
      {
        icon: '🔁',
        title: 'A Belief It Will Just Continue',
        description: 'Some kids assume speaking up won’t actually change anything.',
      },
      {
        icon: '🎭',
        title: 'Minimizing to Cope',
        description: 'Downplaying an incident can be a way of managing how upsetting it feels.',
      },
      {
        icon: '💭',
        title: 'Not Wanting to Worry a Parent',
        description: 'Some kids protect a parent from distress by keeping quiet themselves.',
      },
    ],
    concerns: [
      'Noticeable withdrawal from friends, school, or devices',
      'Sudden changes in mood, sleep, or appetite',
      'Reluctance to attend school or specific online spaces',
      'Any mention of self-harm or hopelessness',
      'Evidence of repeated targeting by the same peer or group',
    ],
    professionalGuidance:
      'If there are signs of withdrawal, mood change, or any mention of self-harm, involve a school counselor or pediatrician immediately — this should not wait.',
    strategies: [
      'Make clear in advance that telling you will never mean losing the device',
      'Ask open, low-pressure questions rather than direct interrogation',
      'Take any disclosure seriously and calmly, without overreacting',
      'Loop in the school if the situation involves classmates',
    ],
    routine: [
      { icon: '🤝', label: 'Promise no punishment' },
      { icon: '👂', label: 'Ask gently, often' },
      { icon: '🧘', label: 'Respond calmly' },
      { icon: '🏫', label: 'Involve the school if needed' },
    ],
    insight:
      'The single biggest reason kids stay silent about online conflict is fear of losing their device — removing that fear in advance is what actually opens the conversation.',
    keywords: ['cyberbullying', 'online conflict', 'social media', 'safety'],
  },
  {
    id: 'sneaking-devices',
    topicNumber: 10,
    title: 'Why Do Kids Sneak Extra Screen Time?',
    heading: {
      lead: 'Why Do Kids Sneak',
      emphasis: 'Extra Screen Time',
      trailing: 'When They Know the Rule?',
    },
    quote: "I wasn't really using it, I swear!",
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'sneaking-devices',
    reassurance: "It's common — and it isn't a sign of dishonesty as a trait!",
    explanation:
      'Most of the time, sneaking reflects a rule that feels overly restrictive, not a broader pattern of dishonesty.',
    reasons: [
      {
        icon: '🧠',
        title: 'Weighing the Wish Against the Rule',
        description:
          'The pull toward more screen time can simply outweigh the fear of getting caught.',
      },
      {
        icon: '🕹️',
        title: 'Wanting More Autonomy',
        description: 'Sneaking can be a way of pushing back against a limit that feels too tight.',
      },
      {
        icon: '📉',
        title: 'A Limit That Feels Unfair',
        description: 'A rule seen as unreasonable is far more likely to be worked around.',
      },
      {
        icon: '🔁',
        title: 'Success in the Past',
        description: 'If sneaking has gone unnoticed before, it becomes a viable option again.',
      },
      {
        icon: '👥',
        title: 'Peer Norms Feeling Different',
        description:
          'A friend’s more permissive rules can make the home limit feel unusually strict.',
      },
      {
        icon: '🎯',
        title: 'An Unfinished Goal in a Game',
        description:
          'Just a little more time can feel necessary to complete something in progress.',
      },
      {
        icon: '⏳',
        title: 'Losing Track of Time',
        description: 'Sometimes extra time genuinely wasn’t planned — it crept up unnoticed.',
      },
      {
        icon: '🧩',
        title: 'Testing How Firm the Rule Is',
        description: 'Sneaking can be a way of checking whether the limit is truly enforced.',
      },
    ],
    concerns: [
      'Sneaking that extends to lying about many other things too',
      'Extreme distress or anger when caught, beyond typical embarrassment',
      'Sneaking that displaces sleep or schoolwork significantly',
      'A pattern that is escalating despite consistent consequences',
      'Access to inappropriate content discovered during the sneaking',
    ],
    professionalGuidance:
      'If sneaking is tied to a broader pattern of dishonesty or access to inappropriate content, a pediatrician or family therapist can help address it directly.',
    strategies: [
      'Revisit whether the current limit still feels reasonable to negotiate together',
      'Use visible time limits on the device rather than relying on memory',
      'Respond to sneaking calmly, focusing on the rule, not character',
      'Involve them in setting the rule so it feels less imposed',
    ],
    routine: [
      { icon: '🤝', label: 'Revisit the rule together' },
      { icon: '⏲️', label: 'Use a visible timer' },
      { icon: '🧘', label: 'Respond calmly' },
      { icon: '💬', label: 'Discuss, don’t just punish' },
    ],
    insight:
      'Sneaking usually points to a rule that feels mismatched to a child’s actual wish for more time — a limit set collaboratively is followed far more consistently than one simply imposed.',
    keywords: ['sneaking devices', 'screen time', 'rules', 'honesty'],
  },
  {
    id: 'screens-at-dinner',
    topicNumber: 11,
    title: 'Why Do Kids Want Screens at the Dinner Table?',
    heading: {
      lead: 'Why Do Kids Want',
      emphasis: 'Screens at Dinner',
      trailing: 'Instead of Just Talking?',
    },
    quote: 'Can I just watch while I eat?',
    ageRanges: ['3–5 years', '5–8 years', '8–12 years'],
    illustrationId: 'screens-at-dinner',
    reassurance: "It's common — and it usually isn't about avoiding the family!",
    explanation:
      'Most of the time, wanting a screen at meals reflects habit and boredom during a slower-paced moment, not avoidance of connection.',
    reasons: [
      {
        icon: '🔁',
        title: 'An Established Habit',
        description: 'If screens have accompanied meals before, the pairing becomes automatic.',
      },
      {
        icon: '⏳',
        title: 'Mealtime Feels Slow',
        description: 'Sitting through a meal can feel unstimulating compared to a screen’s pace.',
      },
      {
        icon: '🧠',
        title: 'Wanting a Distraction From a Disliked Food',
        description:
          'A screen can be requested specifically to make eating something unwanted easier.',
      },
      {
        icon: '🍽️',
        title: 'Meals as Downtime',
        description: 'The end of a busy day can prompt wanting something passive and easy.',
      },
      {
        icon: '👀',
        title: 'Modeling From Adults at the Table',
        description: 'A parent’s own phone use at meals sets a clear, closely watched example.',
      },
      {
        icon: '🕹️',
        title: 'An Unfinished Show or Game',
        description: 'Something left mid-episode earlier can feel worth returning to at dinner.',
      },
      {
        icon: '😴',
        title: 'Low Energy for Conversation',
        description: 'Tiredness can make talking feel like more effort than watching passively.',
      },
      {
        icon: '🧩',
        title: 'Discomfort With Silence',
        description: 'A pause in conversation can feel awkward enough to want to fill it.',
      },
    ],
    concerns: [
      'Extreme distress at every screen-free meal, without exception',
      'A total absence of mealtime conversation, even when screens are off',
      'Screens used consistently to avoid eating certain foods rather than just enjoy',
      'Family meals becoming rare because of screen conflict',
      'No willingness at all to engage even briefly during meals',
    ],
    professionalGuidance:
      'If screen-free meals cause extreme distress or family meals have become rare because of the conflict, a pediatrician or family therapist can help rebuild the routine gradually.',
    strategies: [
      'Set a simple, consistent household rule: no screens during meals, for everyone',
      'Model the rule yourself by keeping your own phone away too',
      'Add a light conversation starter to fill the quiet naturally',
      'Introduce the change gradually if it’s a big shift from the current habit',
    ],
    routine: [
      { icon: '📵', label: 'No screens for anyone' },
      { icon: '🗣️', label: 'Add a conversation prompt' },
      { icon: '🍽️', label: 'Keep meals relaxed' },
      { icon: '🔄', label: 'Phase in gradually' },
    ],
    insight:
      'Wanting a screen at dinner is usually about filling a quiet moment, not avoiding the family — a consistent house-wide rule works better than one that singles out just the kids.',
    keywords: ['screens at dinner', 'family meals', 'screen time', 'mealtime'],
  },
  {
    id: 'online-friendships',
    topicNumber: 12,
    title: 'Why Do Online Friendships Feel So Real to Kids?',
    heading: {
      lead: 'Why Do Online Friendships',
      emphasis: 'Feel So Real',
      trailing: 'Even Without Meeting in Person?',
    },
    quote: "She's my best friend, even though we've never met!",
    ageRanges: ['8–12 years'],
    illustrationId: 'online-friendships',
    reassurance: "It's common — and the connection can be genuinely meaningful!",
    explanation:
      'Most of the time, online friendships form around real shared interests, and the feelings involved are genuinely valid.',
    reasons: [
      {
        icon: '🎯',
        title: 'Shared Specific Interests',
        description:
          'Online spaces connect kids around niche interests that local peers may not share.',
      },
      {
        icon: '🧠',
        title: 'Genuine Emotional Connection',
        description:
          'Regular conversation and shared experience build real attachment, screen or not.',
      },
      {
        icon: '👥',
        title: 'Easier Social Entry',
        description: 'Text-based or game-based interaction can feel lower-pressure than in person.',
      },
      {
        icon: '🌍',
        title: 'Access to a Wider Peer Pool',
        description:
          'Online spaces widen who a child can potentially connect with beyond their school.',
      },
      {
        icon: '🕹️',
        title: 'Shared Activity as the Basis',
        description:
          'Playing or creating together regularly builds a real sense of teamwork and trust.',
      },
      {
        icon: '💛',
        title: 'A Safe Space for Some Kids',
        description:
          'A shy or socially anxious child can find online interaction genuinely more comfortable.',
      },
      {
        icon: '📈',
        title: 'Consistency of Contact',
        description:
          'Frequent, easy contact can build closeness faster than infrequent in-person time.',
      },
      {
        icon: '🎭',
        title: 'Identity Exploration',
        description:
          'Online spaces can offer a lower-stakes place to try out how they present themselves.',
      },
    ],
    concerns: [
      'Any adult presenting themselves as a peer or seeking private contact',
      'Pressure to share personal information, images, or location',
      'Online friendships fully replacing all in-person peer contact',
      'Requests to meet in person without a parent present',
      'Secrecy about who they are talking to or what is discussed',
    ],
    professionalGuidance:
      'If there is any sign of adult contact posing as a peer, or pressure to share personal information, treat it as a safety issue and involve a trusted adult or authority right away.',
    strategies: [
      'Take the friendship seriously rather than dismissing it as "not real"',
      'Set clear, non-negotiable rules about personal information and meeting in person',
      'Stay curious and involved: ask about these friends the way you would offline ones',
      'Balance online connection with continued in-person peer time',
    ],
    routine: [
      { icon: '👂', label: 'Take it seriously' },
      { icon: '🔒', label: 'Set safety rules' },
      { icon: '❓', label: 'Stay curious, ask questions' },
      { icon: '⚖️', label: 'Balance with in-person time' },
    ],
    insight:
      'Online friendships can be as emotionally real as in-person ones — the goal isn’t to dismiss the connection, but to keep it safe while it develops.',
    keywords: ['online friends', 'internet safety', 'gaming friends', 'social connection'],
  },
  {
    id: 'online-school-distraction',
    topicNumber: 13,
    title: 'Why Is It Hard to Focus on Schoolwork Near a Device?',
    heading: {
      lead: 'Why Is It Hard',
      emphasis: 'to Focus on Schoolwork',
      trailing: 'When a Device Is Nearby?',
    },
    quote: 'I was just checking something real quick!',
    ageRanges: ['8–12 years'],
    illustrationId: 'online-school-distraction',
    reassurance: "It's common — and it isn't a lack of discipline!",
    explanation:
      'Most of the time, distraction near a device reflects underdeveloped self-control meeting a genuinely tempting object, not poor character.',
    reasons: [
      {
        icon: '🧠',
        title: 'Immature Impulse Control',
        description:
          'Resisting a nearby, appealing device takes self-control that is still developing.',
      },
      {
        icon: '📢',
        title: 'Notifications Compete for Attention',
        description: 'A single alert can pull focus away from a task requiring sustained effort.',
      },
      {
        icon: '⚖️',
        title: 'Effort Mismatch',
        description:
          'Schoolwork often requires more sustained effort than an easy screen distraction.',
      },
      {
        icon: '🕹️',
        title: 'A Quick Dopamine Break',
        description: 'A brief check-in can feel like a small reward mid-effortful task.',
      },
      {
        icon: '😴',
        title: 'Mental Fatigue',
        description: 'Focus naturally dips over a long task, making distraction more tempting.',
      },
      {
        icon: '🧩',
        title: 'Task Requires the Device Itself',
        description:
          'When schoolwork happens on the same device as games or chat, separation is genuinely hard.',
      },
      {
        icon: '👥',
        title: 'Social Pull From Messages',
        description: 'A message from a friend can feel more urgent than an assignment in progress.',
      },
      {
        icon: '🎯',
        title: 'Underdeveloped Time Estimation',
        description: '"Just a quick check" often takes far longer than a child expects.',
      },
    ],
    concerns: [
      'Schoolwork consistently unfinished or significantly delayed',
      'No improvement despite consistent structure and support',
      'Distraction paired with broader difficulty sustaining attention generally',
      'Grades or engagement noticeably declining over time',
      'Significant distress or conflict around every homework session',
    ],
    professionalGuidance:
      'If schoolwork is consistently unfinished despite support, or attention difficulty appears broadly, not just around devices, a teacher or pediatrician can help assess further.',
    strategies: [
      'Silence non-essential notifications during work time',
      'Use a separate, distraction-free device for schoolwork when possible',
      'Break work into short focused stretches with planned breaks',
      'Keep the workspace visible rather than fully private',
    ],
    routine: [
      { icon: '🔕', label: 'Silence notifications' },
      { icon: '⏲️', label: 'Work in short stretches' },
      { icon: '👀', label: 'Keep workspace visible' },
      { icon: '✅', label: 'Check in at breaks' },
    ],
    insight:
      'Distraction near a device is a predictable design effect, not a discipline failure — removing the temptation works far better than relying on willpower alone.',
    keywords: ['schoolwork', 'distraction', 'focus', 'homework', 'notifications'],
  },
  {
    id: 'age-inappropriate-content',
    topicNumber: 14,
    title: 'Why Do Kids Want to Watch What Older Kids Watch?',
    heading: {
      lead: 'Why Do Kids Want',
      emphasis: 'to Watch What Older Kids Watch',
      trailing: 'Even When It’s Not Meant for Them?',
    },
    quote: 'But my older cousin gets to watch it!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'age-inappropriate-content',
    reassurance: "It's common — and it isn't about seeking out something forbidden!",
    explanation:
      'Most of the time, wanting to watch what older kids watch reflects a wish to feel more grown-up, not genuine interest in mature content itself.',
    reasons: [
      {
        icon: '📈',
        title: 'Wanting to Feel More Grown-Up',
        description: 'Access to "older" content can feel like a marker of maturity worth chasing.',
      },
      {
        icon: '👥',
        title: 'Fitting In With Older Peers or Siblings',
        description: 'Watching the same things can feel like a way to belong with an older group.',
      },
      {
        icon: '🧠',
        title: 'Underestimating the Content’s Intensity',
        description: 'A child often can’t yet judge why an age rating exists until they see it.',
      },
      {
        icon: '🎯',
        title: 'Curiosity About the Forbidden',
        description: 'Anything framed as off-limits naturally becomes more intriguing.',
      },
      {
        icon: '🏆',
        title: 'Social Currency Among Peers',
        description: 'Having seen a popular but mature show can carry status in a peer group.',
      },
      {
        icon: '🪞',
        title: 'Modeling an Older Sibling',
        description:
          'A younger child often wants to mirror exactly what an admired older sibling does.',
      },
      {
        icon: '🔀',
        title: 'Algorithmic Crossover',
        description:
          'Recommendation systems can surface older-audience content without a clear age gate.',
      },
      {
        icon: '🕹️',
        title: 'Testing Independence',
        description:
          'Pushing for more mature content can be part of a broader push for more autonomy.',
      },
    ],
    concerns: [
      'Persistent nightmares, fear, or distress traceable to specific content',
      'Repeating language or behavior modeled from age-inappropriate media',
      'Seeking out mature content secretly, despite clear rules',
      'Difficulty distinguishing fictional violence from real-world consequences',
      'Content involving themes well beyond their developmental understanding',
    ],
    professionalGuidance:
      'If exposure to mature content is causing ongoing fear, nightmares, or concerning behavior, a pediatrician or child therapist can help address the impact directly.',
    strategies: [
      'Explain age ratings honestly rather than just enforcing them silently',
      'Offer an appealing alternative suited to their own age',
      'Watch together when possible, so content can be discussed as it comes up',
      'Use parental controls as a backstop, not the only line of defense',
    ],
    routine: [
      { icon: '🗣️', label: 'Explain the rating' },
      { icon: '🎬', label: 'Offer a suited alternative' },
      { icon: '👀', label: 'Co-view when possible' },
      { icon: '🔒', label: 'Set controls as backup' },
    ],
    insight:
      'Wanting "older" content is usually about status and belonging, not the content itself — an appealing same-age alternative resolves the pull more often than a flat refusal.',
    keywords: ['age-appropriate content', 'parental controls', 'media', 'older siblings'],
  },
  {
    id: 'in-app-purchases',
    topicNumber: 15,
    title: 'Why Do Kids Pester for In-App Purchases?',
    heading: {
      lead: 'Why Do Kids Pester',
      emphasis: 'for In-App Purchases',
      trailing: 'for Things That Aren’t Real?',
    },
    quote: 'I just need one more gem pack, please!',
    ageRanges: ['5–8 years', '8–12 years'],
    illustrationId: 'in-app-purchases',
    reassurance: "It's common — and it isn't a sign of poor money sense long-term!",
    explanation:
      'Most of the time, pestering for in-game purchases reflects a genuinely limited understanding of money, amplified by deliberate game design.',
    reasons: [
      {
        icon: '🧠',
        title: 'Abstract Money Is Hard to Grasp',
        description:
          'A tap on a screen feels very different from handing over real, physical money.',
      },
      {
        icon: '🎯',
        title: 'Reward Loops by Design',
        description:
          'Games are built to make in-app purchases feel urgently rewarding in the moment.',
      },
      {
        icon: '⏳',
        title: 'Artificial Urgency',
        description: 'Limited-time offers are designed to create pressure to buy immediately.',
      },
      {
        icon: '👥',
        title: 'Social Comparison in Games',
        description:
          'Seeing other players with purchased items can raise the pressure to match them.',
      },
      {
        icon: '🏆',
        title: 'Progress Feels Blocked Without It',
        description: 'Some games are designed so progress genuinely slows without a purchase.',
      },
      {
        icon: '🕹️',
        title: 'Underdeveloped Impulse Control',
        description:
          'Wanting something now and weighing its actual cost are separate, unequally developed skills.',
      },
      {
        icon: '💭',
        title: 'Not Understanding "Free-to-Play" Economics',
        description: 'The business model behind free games is often invisible to a young player.',
      },
      {
        icon: '🔁',
        title: 'A Pattern That’s Worked Before',
        description:
          'If asking has ever resulted in a purchase, repeating the ask is a rational strategy.',
      },
    ],
    concerns: [
      'Unauthorized purchases made without permission',
      'Significant distress disproportionate to a calm "no"',
      'Spending requests that keep escalating in frequency or amount',
      'Secrecy about game spending or hidden purchase history',
      'No response at all to consistent limits over time',
    ],
    professionalGuidance:
      'If unauthorized purchases occur or spending requests escalate despite consistent limits, review account settings with a pediatrician-recommended digital-wellness resource if needed.',
    strategies: [
      'Turn off one-tap purchases and require a password for every transaction',
      'Explain the real-world cost in terms they can concretely understand',
      'Set a clear, agreed allowance for any in-game spending',
      'Talk through how limited-time offers are designed to create urgency',
    ],
    routine: [
      { icon: '🔒', label: 'Require a password' },
      { icon: '💰', label: 'Explain real cost' },
      { icon: '🗓️', label: 'Set a spending allowance' },
      { icon: '🗣️', label: 'Discuss the tactics used' },
    ],
    insight:
      'Persistent requests for in-app purchases usually reflect deliberate game design working as intended — a purchase password and an honest conversation about how it works are more effective than repeated refusals alone.',
    keywords: ['in-app purchases', 'microtransactions', 'games', 'money'],
  },
];
