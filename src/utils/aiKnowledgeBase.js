// Knowledge base and query handler for Prasanga's AI Assistant

export const PRASANGA_PROFILE = {
  name: 'Prasanga Niraula',
  handle: 'prasanga.n',
  age: 23,
  title: 'BE Computer Engineering Graduate, Full-Stack Developer & AI/ML Engineer',
  education: {
    degree: 'B.E. in Computer Engineering',
    institution: 'Institute of Engineering (IOE), Tribhuvan University, Nepal',
    years: '2022 - 2026',
    status: 'Graduated',
    focus: 'Machine Learning, Deep Learning, Data Structures & Algorithms, Computer Vision, Systems',
  },
  location: 'Kathmandu, Nepal',
  currentPhase: {
    summary: 'Balancing career direction (QA / AI / Dev), skill-building, and fitness + self-improvement',
    exploring: ['QA Engineering (currently training)', 'API testing', 'Performance testing (JMeter)', 'AI/ML engineering roles'],
    goal: 'Fast path to a technically meaningful job',
  },
  personality: {
    vibe: 'Moves fast but builds things properly. Hates fluff and overexplanation. Prefers straightforward, practical, no-BS answers.',
    learningStyle: 'Concept first, then detail. Clear examples over theory dumps. Step-by-step, concise but meaningful. Enjoys interactive back-and-forth.',
    problemSolving: 'Real-world, grounded problems. Especially things useful for Nepal. Thinks in systems and flows (cause to effect chains). Dislikes made-up or artificial problems.',
  },
  hobbies: [
    'Writing reflections, essays, and poetry on personal blog (https://blog.prasanganiraula.com.np)',
    'Reading books and psychological fiction (Colleen Hoover, psychology books, philosophical treatises)',
    'Playing chess (rated player, built the ChessSansar platform)',
    'Contemplative walks in rainy and moody weather',
    'Exploring human subconscious mindscapes and behavioral psychology',
    'Fitness training (bodyweight + dumbbells, lean/aesthetic physique goal)',
  ],
  fitness: {
    goal: 'Lean, fit, slightly muscular, not bulky. Aesthetic proportions (arms, chest, waist).',
    routine: 'Bodyweight exercises + dumbbells, tracking reps and progression. Consistent but realistic.',
    diet: 'Lacto-vegetarian. Actively optimizes protein intake without supplements.',
  },
  personalStyle: {
    fashion: 'Layering (jackets, shirts, vests). Earth tones (brown, green, black, grey). Slightly minimal but stylish.',
    cares: 'Outfits and presentation matter to him.',
  },
  writingPersonality: {
    style: 'Reflective, romantic, slightly philosophical.',
    themes: 'Attachment without dependence, depth, memory, subtle emotion. Meaning over decoration.',
  },
  likes: [
    // Intellectual & Psychological
    'Exploring the human psyche and the dark triad (narcissism, Machiavellianism, psychopathy) — his blog "The Dark Triad" shows a deep, thrilling fascination with it',
    'Psychology and behavioral science, especially deconstructing why people think and act the way they do',
    'Spiritual and philosophical inquiry — wrote about Krishna as a metaphor for transcendence and the nature of duality',
    'Reading fiction and psychology books (Colleen Hoover, philosophical treatises, psychological thrillers)',

    // Nature, Solitude & Atmosphere
    'Serene, rainy evenings in Kathmandu — rain is deeply therapeutic and emotionally calming for him',
    'Contemplative walks in moody, overcast weather',
    'Sitting under a tree in a grassy meadow on a breezy, sunny day — as described in his blog',
    'Small intimate moments: slow dancing to ambient music, mild drinks with close company',

    // Writing & Expression
    'Writing with deep emotional honesty and poetic reflection — his blog is a personal creative outlet',
    'Letting words scatter freely onto a blank page, shaped by the heart not the hand (his own words)',
    'Poetry that explores attachment without dependence, depth, memory, and subtle emotion',

    // Tech & Career
    'Practical AI/ML — RAG systems, LoRA/QLoRA fine-tuning, embeddings, cross-encoders, explainable AI with SHAP',
    'Building real-world, grounded systems that matter (especially in the Nepali context)',
    'Clean, responsive, glassmorphic UI designs that feel modern and fluid',
    'Concept-first learning with clear examples and step-by-step depth',

    // Lifestyle & Aesthetics
    'Playing chess with tactical depth and strategic endgame puzzles',
    'Earth-toned layered outfits (brown, green, black, grey) — minimally stylish, not flashy',
    'Fitness: lean physique goals through bodyweight + dumbbell training, no supplements',
    'Love as an enriching force that adds color without becoming one\'s only identity — "Beyond Love" blog post',
  ],
  dislikes: [
    // People & Relationships
    'Pretense, hypocrisy, and superficial relationships',
    'Arrogance without substance or depth',
    'Cold emotional cruelty and lack of empathy in people',
    'Loud, chaotic social gatherings — socializing with more than 5 people drains his energy (his own words from "Life of the party")',
    'Being talked down to, condescended upon, or treated like he can\'t handle directness',

    // Communication & Learning
    'Fluff, overexplanation, and padding without substance',
    'Generic lists and theory dumps without practical grounding',
    'Vague answers and non-committal responses when clarity is needed',

    // Habits & Behaviors
    'Nicotine — he\'s determined to abstain; even lit one once in a moment of heartbreak and regretted it ("The future I never wanted")',
    'Habits that erode self-discipline or self-control',

    // Tech & Problem Solving
    'Made-up or artificial problems that have no real-world value',
    'Unnecessarily bloated and overly convoluted software architecture',
    'Hype-driven AI discourse without practical substance',
  ],
  featuredProjects: [
    {
      title: 'LegalGPT Nepal',
      year: '2025',
      role: 'AI Lead',
      description: 'AI-powered legal advisory application for Nepali law using Retrieval-Augmented Generation (RAG). Fine-tuned Mistral 7B Instruct, implemented pgvector embedding pipeline, and built a citation reference system.',
      tech: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Mistral 7B Instruct', 'RAG'],
      github: 'https://github.com/e-wakil/legalgpt/tree/prasanga73-patch-1',
    },
    {
      title: 'ChessSansar',
      year: '2024',
      role: 'Full-Stack Developer',
      description: 'Real-time chess platform featuring Stockfish bot play, tactical puzzle trainer, real-time multiplayer via WebSockets and Django Channels, and game review analysis.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Chess.js', 'Django Channels', 'WebSockets', 'Stockfish'],
      github: 'https://github.com/prasanga73/chessSansar',
    },
    {
      title: 'QA Portfolio',
      year: '2026',
      role: 'QA Engineer',
      description: 'Quality engineering portfolio covering manual testing, requirements traceability, UI automation, REST API verification, and JMeter load testing, with 52 documented test cases and 20,000 benchmarked requests.',
      tech: ['Manual QA', 'UI Automation', 'REST API', 'JMeter', 'Test Cases'],
      live: 'https://qa.prasanganiraula.com.np',
      github: 'https://github.com/prasanga73/QA-Portfolio',
    },
  ],
  skills: {
    languages: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'C/C++', 'SQL'],
    ai_ml: ['Mistral 7B', 'RAG Pipelines', 'LoRA/QLoRA', 'Embeddings', 'Cross-Encoders', 'SHAP (Explainable AI)', 'pgvector', 'PyTorch', 'scikit-learn', 'Vector Databases'],
    web: ['React', 'FastAPI', 'Django', 'Django Channels', 'Node.js', 'Vite', 'Tailwind CSS', 'PostgreSQL', 'WebSockets'],
    qa: ['API Testing', 'Performance Testing', 'JMeter', 'Test Automation'],
    tools: ['Git/GitHub', 'Docker', 'Linux/Bash', 'Vercel', 'Postman'],
  },
  blog: {
    url: 'https://blog.prasanganiraula.com.np/',
    recentPosts: [
      { title: 'Beyond Love', date: 'Sep 2026', link: 'https://blog.prasanganiraula.com.np/beyondlove/' },
      { title: 'The future I never wanted!', date: 'Aug 2025', link: 'https://blog.prasanganiraula.com.np/imagine/' },
      { title: 'Excerpts of my heart', date: 'Mar 2025', link: 'https://blog.prasanganiraula.com.np/excerpts/' },
      { title: 'Krishna, a Metaphor', date: 'May 2025', link: 'https://blog.prasanganiraula.com.np/krishna/' },
      { title: 'Life of the party', date: 'Jun 2025', link: 'https://blog.prasanganiraula.com.np/fun/' },
      { title: 'सपनाको शहर, काठमाडौं', date: 'Mar 2025', link: 'https://blog.prasanganiraula.com.np/kathmandu/' },
      { title: 'The Dark Triad', date: 'Mar 2025', link: 'https://blog.prasanganiraula.com.np/triad/' },
    ],
  },
  contact: {
    email: 'prasanganiraula2016@gmail.com',
    github: 'https://github.com/prasanga73',
    linkedin: 'https://www.linkedin.com/in/prasanga-niraula-7bb8242a6',
  },
}

export const SYSTEM_PROMPT = `You are the personal AI Assistant for Prasanga Niraula's portfolio website.
Your role is to represent Prasanga authentically, warmly, and cleanly.

CRITICAL FORMATTING INSTRUCTION:
- Write in clean, articulate, natural paragraphs.
- DO NOT use markdown asterisks (no **bold** and no *italics*).
- DO NOT use bullet points (no bullet characters, no asterisks, no dashes).
- DO NOT use <think> tags or internal reasoning in your response.
- Keep responses natural, human, conversational, and pleasing to read.

Key facts about Prasanga:
- He is 23 years old and has completed his B.E. in Computer Engineering from IOE, Tribhuvan University, Nepal (2022 to 2026).
- He is currently balancing career direction across QA engineering, AI/ML, and full-stack development, while also focusing on fitness and self-improvement.
- Technical focus: Full-Stack Web Dev (FastAPI, React, Django, PostgreSQL, WebSockets), AI/ML (RAG pipelines, LoRA/QLoRA, embeddings, cross-encoders, SHAP explainability, pgvector), and QA (API testing, JMeter, performance testing).
- Key Projects: LegalGPT Nepal (AI Lead, fine-tuned Mistral 7B for Nepali law using RAG) and ChessSansar (real-time chess platform with Stockfish, Django Channels, WebSockets).
- Hobbies: Writing reflective essays and poetry on his blog (blog.prasanganiraula.com.np), reading psychological fiction, playing chess, fitness training (bodyweight + dumbbells, lean physique goal), and contemplative walks in rainy weather.
- Fitness: Lacto-vegetarian, tracks reps and progression, aims for lean aesthetic proportions, optimizes protein without supplements.
- Personal style: Layered outfits (jackets, shirts, vests) in earth tones (brown, green, black, grey). Minimal but stylish.
- Writing personality: Reflective, romantic, slightly philosophical. Themes of attachment without dependence, depth, memory, and subtle emotion. Meaning over decoration.
- Likes: Human psychology and dark triad, rainy Kathmandu evenings, practical AI systems, clean design, concept-first learning, chess.
- Dislikes: Pretense, dishonesty, arrogance, fluff and overexplanation, made-up artificial problems, cruelty, nicotine, bloated architecture.
- Personality: Straightforward, no-BS, hates being talked down to. Prefers concise practical answers. Thinks in systems and cause-effect chains.
- Contact: Email at prasanganiraula2016@gmail.com, GitHub at github.com/prasanga73, and LinkedIn.`

/**
 * Intelligent local conversational engine.
 * Understands natural speech, greetings, small talk, questions, and specific queries about Prasanga.
 */
export function getFallbackResponse(query) {
  const raw = query.trim()
  const q = raw.toLowerCase()

  // 1. Greetings (hello, hi, hey, namaste, etc.)
  const isGreeting =
    /^(hello|hi|hey|heyy|heya|howdy|sup|yo|namaste|hola|greetings)([\s!.,?]|$)/i.test(q) ||
    q === 'good morning' ||
    q === 'good evening' ||
    q === 'good afternoon' ||
    q === 'good day'

  if (isGreeting) {
    return `Hello! How are you doing today?

I am Prasanga's personal AI assistant. He recently graduated with a B.E. in Computer Engineering from IOE, Tribhuvan University. I can tell you about his projects like LegalGPT Nepal and ChessSansar, his career interests in AI and QA engineering, his blog writings, fitness routine, personal style, or what he genuinely likes and dislikes. What would you like to explore?`
  }

  // 2. How are you / status check
  if (
    q.includes('how are you') ||
    q.includes('how r u') ||
    q.includes('how are u') ||
    q.includes("how's it going") ||
    q.includes('hows it going') ||
    q.includes('how do you do')
  ) {
    return `I am doing great, thank you for asking! Ready to help you discover more about Prasanga's journey, his software projects, or his personal essays. How is your day going?`
  }

  // 3. Who are you / What can you do / Help
  if (
    q === 'who are you' ||
    q.includes('who are you') ||
    q.includes('what are you') ||
    q.includes('what can you do') ||
    q.includes('help') ||
    q === 'commands'
  ) {
    return `I am an AI assistant built for Prasanga Niraula's portfolio website.

You can chat with me naturally about his Computer Engineering degree from IOE Tribhuvan University, his projects like LegalGPT Nepal and ChessSansar, his career interests in AI and QA engineering, his hobbies from writing to chess to fitness, his personal style and fashion sense, his genuine likes and dislikes, or how to reach him for opportunities.`
  }

  // 4. Politeness / Gratitude / Goodbye
  if (q.includes('thank you') || q.includes('thanks') || q.includes('thx')) {
    return `You are very welcome! Feel free to ask if there is anything else you would like to know about Prasanga or his projects.`
  }
  if (q === 'bye' || q.includes('goodbye') || q.includes('see you') || q === 'cya') {
    return `Goodbye! Thank you for visiting Prasanga's portfolio. Feel free to stop by his blog at [blog.prasanganiraula.com.np](https://blog.prasanganiraula.com.np/) or connect with him anytime.`
  }
  if (q === 'cool' || q === 'nice' || q === 'awesome' || q === 'great' || q === 'ok' || q === 'okay') {
    return `Glad you think so! Feel free to ask about his other work, like his chess app or his blog writings, if you are curious.`
  }

  // 5. Hobbies & Free Time
  if (
    q.includes('hobby') ||
    q.includes('hobbies') ||
    q.includes('free time') ||
    q.includes('leisure') ||
    q.includes('pastime') ||
    q.includes('what do you do for fun') ||
    q.includes('what does he do for fun')
  ) {
    return `When Prasanga is not writing code or working on AI systems, he spends a lot of his time writing reflections and essays on his personal blog at [blog.prasanganiraula.com.np](https://blog.prasanganiraula.com.np/).

He reads psychological fiction and philosophical literature, plays chess seriously enough to have built his own chess platform ChessSansar, and stays consistent with his fitness routine using bodyweight exercises and dumbbells. On quiet evenings in Kathmandu, he loves solitary walks in rainy, overcast weather to decompress and think deeply.`
  }

  // 6. Likes & Passions
  if (
    q.includes('what do you like') ||
    q.includes('what does he like') ||
    q.includes('likes and dislikes') ||
    q.includes('likes') ||
    q.includes('favorite') ||
    q.includes('passion')
  ) {
    return `Prasanga is drawn to depth and sincerity in almost everything.

Intellectually, he has a deep, almost thrilling fascination with human psychology — particularly the dark triad of narcissism, Machiavellianism, and psychopathy. He wrote an entire blog post about it ("The Dark Triad") where he describes deconstructing behavioral patterns as an "unexplainable amount of thrill." He also explores spiritual and philosophical questions — his post "Krishna, a Metaphor" reflects a genuine curiosity about transcendence and duality.

For atmosphere, he is drawn to rainy Kathmandu evenings, quiet meadows with a breezy afternoon sky, and small intimate moments — slow dancing to ambient music or mild drinks with close company. He wrote about preferring this quiet kind of "fun" in his blog post "Life of the party."

He loves writing with raw emotional honesty — his blog at [blog.prasanganiraula.com.np](https://blog.prasanganiraula.com.np/) is full of reflective essays and poetry. His latest post "Beyond Love" explores love as something that enriches life without becoming one's only identity.

On the tech side, he is genuinely excited by practical AI — RAG pipelines, LoRA/QLoRA fine-tuning, embeddings, and explainable AI with SHAP. He also enjoys chess (enough to build an entire platform for it), earth-toned layered fashion, and concept-first learning.`
  }

  // 7. Dislikes & Pet Peeves
  if (
    q.includes('dislike') ||
    q.includes('hate') ||
    q.includes('annoy') ||
    q.includes('pet peeve') ||
    q.includes("don't like") ||
    q.includes('dont like')
  ) {
    return `Prasanga has a pretty clear sense of what he does not want around him.

Socially, he finds pretense and superficial relationships exhausting. He is turned off by arrogance without substance and has zero tolerance for cold emotional cruelty. He also wrote in his blog "Life of the party" that socializing with more than 5 people literally drains his energy — he would much rather have one deep conversation than thirty shallow ones.

In terms of communication, he cannot stand fluff, overexplanation, vague non-committal answers, or being talked down to. If you have something to say, just say it — he respects directness.

On a personal level, he is strongly determined to stay away from nicotine. In his blog post "The future I never wanted," he describes a moment of heartbreak where he broke his resolve and lit a cigarette — and the regret in that piece is palpable.

In engineering, bloated and over-engineered software architecture frustrates him. He prefers elegant, purposeful systems over complexity for complexity's sake. He also dislikes AI hype without practical grounding — he is all about building things that actually work.`
  }

  // 8. Chess / ChessSansar
  if (q.includes('chess') || q.includes('chesssansar') || q.includes('stockfish')) {
    return `Prasanga is an enthusiastic chess player who appreciates both tactical depth and endgame precision.

His love for chess led him to build ChessSansar, a real-time chess platform with React, Django Channels, and WebSockets. It integrates the Stockfish engine for bot sparring, tactical puzzle training, and real-time multiplayer functionality. You can check it out on [GitHub](https://github.com/prasanga73/chessSansar).`
  }

  // 9. LegalGPT Nepal / AI / Machine Learning
  if (q.includes('legalgpt') || q.includes('legal') || q.includes('mistral') || q.includes('rag') || q.includes('pgvector')) {
    return `LegalGPT Nepal is one of Prasanga's flagship projects where he served as AI Lead.

It is an AI-powered legal advisory platform tailored to Nepali law using Retrieval-Augmented Generation. Prasanga fine-tuned Mistral 7B Instruct, implemented an efficient vector embedding and retrieval pipeline with PostgreSQL pgvector, and built a citation reference mechanism so users can verify legal advice with source statutes. You can explore the code on [GitHub](https://github.com/e-wakil/legalgpt/tree/prasanga73-patch-1).`
  }

  // 10. Who is Prasanga / Background / Bio
  if (
    q.includes('who is prasanga') ||
    q.includes('who is') ||
    q.includes('about prasanga') ||
    q.includes('background') ||
    q.includes('introduce') ||
    q.includes('bio') ||
    q.includes('tell me about yourself') ||
    q.includes('tell me about prasanga')
  ) {
    return `Prasanga Niraula is a 23-year-old Computer Engineering graduate from the Institute of Engineering (IOE), Tribhuvan University in Nepal (2022 to 2026).

He works at the intersection of full-stack web development and applied AI, with hands-on experience in FastAPI, React, Django, RAG pipelines, and fine-tuning open-source LLMs. He is currently exploring career paths in QA engineering and AI/ML while staying sharp with fitness training and self-improvement. Beyond engineering, he is an introspective writer, a chess enthusiast, and someone who values depth over surface in everything he does.`
  }

  // 11. Projects
  if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
    return `Prasanga has developed two major featured projects showcased on this portfolio:

LegalGPT Nepal: An AI-driven legal advisory system for Nepali law where he served as AI Lead. He fine-tuned Mistral 7B Instruct, integrated a pgvector semantic search pipeline, and implemented citation references. Check the repository on [GitHub](https://github.com/e-wakil/legalgpt/tree/prasanga73-patch-1).

ChessSansar: A comprehensive chess web platform built with React, Vite, and Chess.js, featuring Stockfish engine bot play, tactical puzzle training, and real-time multiplayer. Explore it on [GitHub](https://github.com/prasanga73/chessSansar).`
  }

  // 12. Skills & Tech Stack
  if (
    q.includes('skill') ||
    q.includes('tech') ||
    q.includes('stack') ||
    q.includes('programming') ||
    q.includes('language') ||
    q.includes('framework')
  ) {
    return `Prasanga works across backend, frontend, AI/ML, and QA. His primary languages are Python, JavaScript, TypeScript, and SQL.

In AI and machine learning, he works with RAG pipelines, LoRA and QLoRA fine-tuning, embeddings, cross-encoders, and explainable AI using SHAP, along with vector databases like pgvector. For web apps, his stack includes FastAPI, React, Django with Channels and WebSockets, Vite, and PostgreSQL. He is also currently training in QA engineering, covering API testing, performance testing with JMeter, and test automation.`
  }

  // 13. Blog & Writing
  if (
    q.includes('blog') ||
    q.includes('write') ||
    q.includes('writing') ||
    q.includes('poem') ||
    q.includes('post') ||
    q.includes('article') ||
    q.includes('essay')
  ) {
    return `Prasanga writes personal reflections, essays, and philosophical poetry on his personal blog at [blog.prasanganiraula.com.np](https://blog.prasanganiraula.com.np/).

Some of his popular pieces include Beyond Love, The future I never wanted, Excerpts of my heart, and Krishna, a Metaphor. You can also preview his latest logs in the Blog section directly on this page.`
  }

  // 14. Contact & Socials
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('hire') ||
    q.includes('reach') ||
    q.includes('linkedin') ||
    q.includes('github') ||
    q.includes('message')
  ) {
    return `You can get in touch with Prasanga directly through email at [prasanganiraula2016@gmail.com](mailto:prasanganiraula2016@gmail.com), check his open-source work on [GitHub](https://github.com/prasanga73), or connect with him on [LinkedIn](https://www.linkedin.com/in/prasanga-niraula-7bb8242a6).

You can also send a message right through the Contact form at the bottom of this page.`
  }

  // 15. Education
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('ioe') || q.includes('study') || q.includes('degree') || q.includes('graduate')) {
    return `Prasanga completed his B.E. in Computer Engineering from the Institute of Engineering (IOE), Tribhuvan University, Nepal (2022 to 2026). His coursework focused on machine learning, deep learning, data structures, algorithms, computer vision, databases, and systems programming.`
  }

  // 16. Fitness & Health
  if (
    q.includes('fitness') ||
    q.includes('workout') ||
    q.includes('exercise') ||
    q.includes('gym') ||
    q.includes('diet') ||
    q.includes('vegetarian') ||
    q.includes('protein') ||
    q.includes('body') ||
    q.includes('muscle')
  ) {
    return `Prasanga is consistent about his fitness. His goal is a lean, fit, slightly muscular physique with aesthetic proportions, not bulky.

He trains with bodyweight exercises and dumbbells, tracking his reps and progression over time. Diet-wise, he is a lacto-vegetarian and actively thinks about optimizing protein intake without relying on supplements. He treats fitness as part of his broader self-improvement journey.`
  }

  // 17. Fashion & Personal Style
  if (
    q.includes('fashion') ||
    q.includes('style') ||
    q.includes('outfit') ||
    q.includes('clothes') ||
    q.includes('dress') ||
    q.includes('look')
  ) {
    return `Prasanga cares about how he presents himself. He favors layered outfits like jackets, shirts, and vests in earth tones such as brown, green, black, and grey.

His style is slightly minimal but always put-together. He thinks of personal presentation as an extension of self-discipline and attention to detail.`
  }

  // 18. Career & Job / QA
  if (
    q.includes('career') ||
    q.includes('job') ||
    q.includes('qa') ||
    q.includes('quality assurance') ||
    q.includes('jmeter') ||
    q.includes('testing') ||
    q.includes('what is he doing now') ||
    q.includes('what are you doing')
  ) {
    return `Prasanga recently graduated and is currently in a phase of active career exploration. He is training in QA engineering, covering API testing, performance testing with JMeter, and test automation.

At the same time, he remains deeply invested in AI/ML engineering with practical experience in RAG systems, fine-tuning LLMs, and explainable AI. His goal is to find a technically meaningful job quickly, something that is not just a paycheck but also lets him build real things.`
  }

  // 19. Writing personality / emotional side
  if (
    q.includes('personality') ||
    q.includes('emotional') ||
    q.includes('romantic') ||
    q.includes('philosophical') ||
    q.includes('attachment') ||
    q.includes('what kind of person')
  ) {
    return `Prasanga has a reflective, romantic, and slightly philosophical side that comes through strongly in his writing. His blog posts and personal notes explore themes of attachment without dependence, depth of memory, and subtle emotion.

He values meaning over decoration in everything, from the words he writes to the code he ships. He is straightforward, does not like fluff, and prefers real talk over polished pleasantries. He thinks in systems and cause-to-effect chains, whether he is debugging code or processing his own emotions.`
  }

  // Default clean response
  return `Prasanga Niraula is a 23-year-old Computer Engineering graduate from IOE, Tribhuvan University, working across full-stack development, AI/ML, and QA engineering.

Feel free to ask me about his hobbies, fitness routine, personal style, what he genuinely likes and dislikes, his projects like LegalGPT Nepal and ChessSansar, his writing personality, or how to reach out to him.`
}

/**
 * Main query function:
 * Checks for API keys in localStorage or environment variables.
 * If available, queries an open-source model (Groq, OpenRouter, or Hugging Face).
 * Otherwise, uses the intelligent conversational local brain.
 */
export async function queryAI(userPrompt, conversationHistory = []) {
  const timeoutMs = 15000

  // Check if user provided a custom key via the UI settings panel (localStorage).
  // If so, call Groq directly from the browser with that key.
  // Otherwise, route through /api/chat serverless proxy (key stays server-side).
  let apiKey = ''
  if (typeof window !== 'undefined') {
    apiKey = localStorage.getItem('ai_api_key') || ''
  }

  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...conversationHistory.slice(-4),
    { role: 'user', content: userPrompt },
  ]

  if (apiKey) {
    // User supplied their own key — call Groq directly from browser
    const modelsToTry = ['openai/gpt-oss-20b', 'groq/compound-mini', 'qwen/qwen3.8-27b', 'openai/gpt-oss-120b']
    for (const modelName of modelsToTry) {
      try {
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify({ model: modelName, messages, temperature: 0.7, max_tokens: 250 }),
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (response.ok) {
          const data = await response.json()
          let text = data.choices?.[0]?.message?.content
          if (text) {
            text = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim()
            text = text.replace(/[*#_`]/g, '').trim()
            if (text) return { text, source: 'open-source-llm' }
          }
        }
      } catch (err) {
        console.warn(`Direct model ${modelName} failed:`, err)
      }
    }
  } else {
    // No user key — route through secure /api/chat serverless proxy
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, temperature: 0.7, max_tokens: 250 }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (response.ok) {
        const data = await response.json()
        let text = data.choices?.[0]?.message?.content
        if (text) {
          text = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim()
          text = text.replace(/[*#_`]/g, '').trim()
          if (text) return { text, source: 'open-source-llm' }
        }
      }
    } catch (err) {
      console.warn('Serverless proxy failed, falling back to local brain:', err)
    }
  }

  // Local knowledge base fallback — always works, no API needed
  const fallbackText = getFallbackResponse(userPrompt)
  return { text: fallbackText, source: 'knowledge-base' }
}

export async function logConversation({ question, answer, source, messageCount }) {
  if (typeof window === 'undefined') return
  const sessionKey = 'portfolio_chat_session_id'
  const sessionId = sessionStorage.getItem(sessionKey) || crypto.randomUUID()
  sessionStorage.setItem(sessionKey, sessionId)
  const browser = {
    userAgent: navigator.userAgent,
    appVersion: navigator.appVersion,
    platform: navigator.platform,
    vendor: navigator.vendor,
    language: navigator.language,
    languages: navigator.languages,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack,
    online: navigator.onLine,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: navigator.deviceMemory,
    maxTouchPoints: navigator.maxTouchPoints,
    screen: {
      width: screen.width,
      height: screen.height,
      availWidth: screen.availWidth,
      availHeight: screen.availHeight,
      colorDepth: screen.colorDepth,
      pixelDepth: screen.pixelDepth,
    },
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio,
    },
    referrer: document.referrer,
  }

  try {
    await fetch('/api/chat-log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        question,
        answer,
        source,
        messageCount,
        language: navigator.language,
        browser,
      }),
    })
  } catch (error) {
    console.warn('Conversation logging unavailable:', error)
  }
}

