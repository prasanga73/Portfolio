import { useState, useEffect } from 'react'

const FALLBACK_POSTS = [
  {
    title: 'Beyond Love',
    pubDate: '2026-09-12T12:30:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/beyondlove/',
    content: `<p>You flow in my veins,<br/>
Rustle in the air that I breathe,<br/>
But not the only reason to wake up.</p>
<p>You are a part of how I carry myself,<br/>
The way I treat people,<br/>
But not my only root.</p>
<p>You are the color that paints me,<br/>
The light that lights my crevices,<br/>
But not the only greens of my tree.</p>
<p>You are my deepest yearning,<br/>
Your eyes, my gaze would ease into,<br/>
But not my only destination.</p>`,
    excerpt: 'You flow in my veins, rustle in the air that I breathe, but not the only reason to wake up. You are a part of how I carry myself, the way I treat people...',
    readTime: '2 min read',
  },
  {
    title: 'The future I never wanted!',
    pubDate: '2025-08-01T01:38:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/imagine/',
    content: `<p>I still remember that day vividly. It was about 10 in the morning when I had read your message. My heartbeat was pulsating with every word forward. I could not hold my breath still. After reading the message, I went numb and my mind froze. Every hopes of future turned into a pitch black oblivion. "Us" was shredded apart to just "you" and "I".</p>
<p>I scurried out from my room towards the balcony. It was raining heavily with restless air swaying the rain. But, my mind was still in shock processing what had become. What it meant for the picture perfect future I had always desired. A gush of wind suddenly sprinkled waterdrops to my face bringing me back to the present. The rain water was expressing what my eyes couldn't. It was like nature trying to put me to ease.</p>
<p>My hand reach for a cigarette in my pocket. I was determined to abstain from nicotine. But, at that moment it didn't matter. The weight of hopelessness was heavier than my resistance. I lit up the cigarette and filled my lungs with every ounce of my misery. <span class="inner-voice">And, for a fleeting moment, everything was okay until it was not.</span></p>`,
    excerpt: 'I still remember that day vividly. It was about 10 in the morning when I had read your message. My heartbeat was pulsating with every word forward...',
    readTime: '3 min read',
  },
  {
    title: 'Excerpts of my heart',
    pubDate: '2025-03-22T01:38:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/excerpts/',
    content: `<p>How many people have you met so far in your life? I highly doubt that anyone has kept track of it. If you have then congrats, you are insane. Us normal people wouldn't know, so let's call it many. You meet many people in your life. In a way or other, they become a part of you shaping you into the very self you are today. You may have memories of them in various light. Some you remember vividly and some with vague details. You might not remember the things you said, things they conversed back, the meals you enjoyed together, the gossips you shared, but what you can never forget is the way they made you feel. Even the weight of time couldn't erase it.</p>
<p>But then, there are those few who made you feel alive. They breathed life into your heart. They radiated a light which pierced your soul in the very heart of gentleness. Here are some excerpts about such people who knowingly or unknowingly tended to my inner being and taught me ways to live. Live in a sense beyond the dull rituals of survival.</p>
<div class="sky-note">
<div class="date">25th of June, 2022</div> 
<p>A beautiful girl, not only by the outlook of her but also by the actions that define her. Be it her pretty face or her wandering eyes that window the depth of her soul. Her mesmerizing smile, caramel like lips and short brown hair makes me feel like an empty bottle filling slowly with bubbling joy of life that will eventually pass the brim and beyond. She makes me feel the tenderness of a breeze. Breeze with a mellow warmth of the sun.</p>
<p>She pours in me, the ecstasy of being alive and yet she doesn't even know it. She loves reading books of romance and love. But, I love reading the pages of her. Colleen Hoover, her favourite writer. I wanna read heart throbbing stories of Colleen Hoover draped in her arms. She loves to write, loves creating life in her words. I wanna be a life of her tranquil world.</p>
<p>Love, the main theme of poetry has served its true essence to me. She radiates feelings I never asked for but always wanted. "Falling in love", I finally understood the closure and proximity of this sentence. Hope that the fate will always favour a pretty smile on her face and equanimity in her heart. Feelings I share may not be mutual so the precious relationship and bond we share as humans and a social being is all I ask for. Epiphany is what she likes to call herself and epiphany is what she is to me.</p>
</div>
<div class="sky-note">
<div class="date">17th of May, 2024</div>
<p>That freezing evening had etched its occurrences onto my heart. The evening I would never dare to forget. The gentle and blushful laughs I was surrounded with. Those moments had a special light to them, like an old place where comfort finds you.</p>
<p>The plethora of emotions I felt that evening questioned my sanity. "How could someone make me feel so serene without ever realizing it? What kind of dark sorcery did she know?", I wondered letting a slight chuckle out of my mouth like a lovefool. And, in that very moment, I lost myself to her.</p>
</div>
<p><span class="inner-voice">Quote I shouldn't be writing: Even when the eternal flames of sky grow dim to perish, I shall still find sparkle in you</span></p>
<p>I am just a romantic. Don't judge me. Okay?</p>`,
    excerpt: "How many people have you met so far in your life? I highly doubt that anyone has kept track of it. You meet many people in your life. In a way or other, they become a part of you...",
    readTime: '3 min read',
  },
  {
    title: 'Krishna, a Metaphor',
    pubDate: '2025-05-20T01:38:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/krishna/',
    content: `<p>Krishna, meaning “dark” or “dark blue” in Sanskrit, can also be interpreted as “all-attractive” or “charming”. He had a dark complexion and a transcendental physical appearance, hence the name. This is the less vivid and not so colourful depiction of Krishna, kind of like a bookish definition. So, who is Krishna or what is Krishna, if you may ask? But before that, let’s paint a picture of Krishna in the blank canvas of our mind.</p>
<p>Krishna, a son to a cowherd family in Gokul was raised by Nanda and Yashoda. He is known for his divine miracles, playfulness and compassionate nature. Bhagvad Gita, an undoubtedly pristine book was also Krishna’s giving to the humankind for establishing dharma (righteousness not religion).</p>
<p>In the silence of mind, the compassion of heart, the stillness of breath and the unity of thoughts—the distinction of duality merges to one that is Krishna.</p>`,
    excerpt: 'Krishna, meaning “dark” or “dark blue” in Sanskrit, can also be interpreted as “all-attractive” or “charming”. He had a dark complexion and a transcendental physical appearance...',
    readTime: '3 min read',
  },
  {
    title: 'Life of the party',
    pubDate: '2025-06-08T01:38:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/fun/',
    content: `<p>What would be your definition of a party? Ease your mind into the idea of having fun for you. Contemplate for a brief moment about it. Okay, that’s enough. Come back to reality now. For some people, the notion of having fun may be loud music and rather electrifying dance in a gathering of friends and family while a fraction of others might prefer drinking and deloading. Some of us are also thrilled with the concept of camping under the starry sky. But then, among the myriad of choices, there is an another class of people who like the mundane, with a very ordinary idea of having fun. <span class="inner-voice">Well, I have slipped into being one of them, happily sadly.</span></p>`,
    excerpt: 'What would be your definition of a party? Ease your mind into the idea of having fun for you. Contemplate for a brief moment about it...',
    readTime: '2 min read',
  },
  {
    title: 'सपनाको शहर, काठमाडौं',
    pubDate: '2025-03-19T01:38:26+05:45',
    link: 'https://blog.prasanganiraula.com.np/kathmandu/',
    content: `<p>8th of October, 2024</p>
<p>It was winter. Kathmandu was cold and lonely, a city that stirred sadness in my soul. A city whose quiet corners never saw sunlight, only the cold grips of winter. The only warmth they knew came from the wisps of smoke, tossed away by passing strangers.</p>
<p>The colours of city bled like shades of unholy grays with a skin of cruelty. Winter was stepping towards its apex with a slow-burn. The dry and suffocating air spelled unease and intrigue. It searched for traces of melancholy hidden within me.</p>
<p><span class="inner-voice">Quote of the day: Is autumn cruel for letting flowers die or is that just nature's way? (Leonard Hofstader)</span></p>`,
    excerpt: 'It was winter. Kathmandu was cold and lonely, a city that stirred sadness in my soul. A city whose quiet corners never saw sunlight, only the cold grips of winter...',
    readTime: '2 min read',
  },
]

/**
 * Sanitizes and formats the HTML from blog RSS feed:
 * 1. Strips any external <link rel="stylesheet"> or <script> tags
 * 2. Implements the blog's custom inner-voice script: turns [_..._] or [<em>...</em>] into .inner-voice
 * 3. Removes outer square brackets [...]
 * 4. Extracts a clean excerpt from genuine prose
 */
function processBlogHtml(rawHtml) {
  if (!rawHtml) return { cleanHtml: '', excerpt: '', readTime: '2 min read' }

  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(`<body>${rawHtml}</body>`, 'text/html')
    const body = doc.body

    // 1. Remove dangerous or clashing tags like <link rel="stylesheet"> or <script>
    const unwanted = body.querySelectorAll('link, script, style')
    unwanted.forEach((el) => el.remove())

    // 2. Transform [<em>...</em>] and [_..._] by removing brackets and assigning .inner-voice class
    const emElements = body.querySelectorAll('em')
    emElements.forEach((em) => {
      let isEnclosed = false
      const prev = em.previousSibling
      const next = em.nextSibling

      if (prev && prev.nodeType === Node.TEXT_NODE) {
        const text = prev.textContent
        const lastBracket = text.lastIndexOf('[')
        if (lastBracket !== -1 && text.slice(lastBracket).trim() === '[') {
          prev.textContent = text.slice(0, lastBracket)
          isEnclosed = true
        }
      }

      if (next && next.nodeType === Node.TEXT_NODE) {
        const text = next.textContent
        const firstBracket = text.indexOf(']')
        if (firstBracket !== -1 && text.slice(0, firstBracket + 1).trim() === ']') {
          next.textContent = text.slice(firstBracket + 1)
          isEnclosed = true
        }
      }

      if (isEnclosed) {
        em.classList.add('inner-voice')
      }
    })

    // Also remove any stray bracketed quotes e.g. [<em>...</em>] that might be in raw text
    let cleanHtml = body.innerHTML
      .replace(/\[\s*<em class="inner-voice">/gi, '<em class="inner-voice">')
      .replace(/<\/em>\s*\]/gi, '</em>')
      .replace(/\[\s*<em>(.*?)<\/em>\s*\]/gi, '<span class="inner-voice">$1</span>')

    // 3. Extract clean excerpt: find first genuine prose text
    let excerptText = ''
    const candidateNodes = body.querySelectorAll('p, div:not(.date):not(.sky-note)')
    for (const node of candidateNodes) {
      // Skip date lines or pure bracket quotes
      const clone = node.cloneNode(true)
      clone.querySelectorAll('.date, .inner-voice').forEach(e => e.remove())
      const text = (clone.textContent || '').replace(/\[.*?\]/g, '').replace(/\s+/g, ' ').trim()
      if (text.length > 30) {
        excerptText = text
        break
      }
    }

    if (!excerptText) {
      // Fallback: take top body text, removing brackets
      excerptText = (body.textContent || '')
        .replace(/\[.*?\]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    }

    const excerpt = excerptText.length > 165
      ? excerptText.substring(0, 165).trim() + '...'
      : excerptText

    // Calculate reading time
    const totalWords = (body.textContent || '').trim().split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.ceil(totalWords / 180))
    const readTime = `${minutes} min read`

    return {
      cleanHtml,
      excerpt,
      readTime,
    }
  } catch (err) {
    console.error('Error processing blog HTML:', err)
    return {
      cleanHtml: rawHtml,
      excerpt: 'Read article on blog.prasanganiraula.com.np',
      readTime: '2 min read',
    }
  }
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return dateStr
  }
}

export default function Blog() {
  const [posts, setPosts] = useState(FALLBACK_POSTS)
  const [activeModalPost, setActiveModalPost] = useState(null)
  const [modalViewMode, setModalViewMode] = useState('reader') // 'reader' | 'iframe'
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function fetchRssFeed() {
      try {
        const response = await fetch('https://blog.prasanganiraula.com.np/rss.xml')
        if (!response.ok) throw new Error(`HTTP error ${response.status}`)
        const xmlText = await response.text()

        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml')
        const items = xmlDoc.querySelectorAll('item')

        if (items.length > 0 && isMounted) {
          const parsedPosts = Array.from(items).map((item) => {
            const title = item.querySelector('title')?.textContent || 'Untitled'
            const link = item.querySelector('link')?.textContent || 'https://blog.prasanganiraula.com.np/'
            const pubDate = item.querySelector('pubDate')?.textContent || ''
            const rawDescription = item.querySelector('description')?.textContent || ''
            const { cleanHtml, excerpt, readTime } = processBlogHtml(rawDescription)

            return {
              title,
              link,
              pubDate,
              content: cleanHtml,
              excerpt,
              readTime,
            }
          })

          setPosts(parsedPosts)
          setIsLive(true)
        }
      } catch (err) {
        console.warn('Could not fetch live RSS feed, using cached blog posts:', err)
      }
    }

    fetchRssFeed()

    return () => {
      isMounted = false
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModalPost) {
      document.body.style.overflow = 'hidden'
      setModalViewMode('reader')
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeModalPost])

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalPost(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="blog" style={{ padding: '120px 24px', borderTop: '1px solid var(--glass-border)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header with Title and External Link */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                Writing & Logs
              </span>
              {isLive && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                  title="Live synced with blog.prasanganiraula.com.np"
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'inline-block',
                    }}
                  />
                  Live Feed
                </span>
              )}
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                marginTop: '8px',
              }}
            >
              Latest Articles
            </h2>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                marginTop: '8px',
                maxWidth: '600px',
              }}
            >
              Essays, reflections, and philosophical excerpts published on my personal blog.
            </p>
          </div>

          <a
            href="https://blog.prasanganiraula.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            <span>Visit Full Blog</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>

        {/* Blog Post Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {posts.slice(0, 6).map((post, idx) => (
            <div
              key={idx}
              className="card blog-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px',
                position: 'relative',
              }}
            >
              <div>
                {/* Meta info: Date & Reading Time */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '14px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {formatDate(post.pubDate)}
                  </span>
                  <span
                    className="badge"
                    style={{
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                    }}
                  >
                    {post.readTime}
                  </span>
                </div>

                {/* Post Title */}
                <h3
                  className="blog-card-title"
                  style={{
                    marginBottom: '12px',
                  }}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Excerpt */}
                <p className="blog-card-excerpt">
                  {post.excerpt}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--glass-border)',
                  marginTop: 'auto',
                }}
              >
                <button
                  onClick={() => setActiveModalPost(post)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--accent-color)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  <span>Quick Read</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </button>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <span>blog.prasanganiraula.com.np</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader / Embedded Modal Overlay */}
      {activeModalPost && (
        <div
          onClick={() => setActiveModalPost(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              maxWidth: '820px',
              width: '100%',
              height: '88vh',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '20px 24px',
                borderBottom: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                background: 'var(--glass-bg)',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 300px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {formatDate(activeModalPost.pubDate)}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>•</span>
                  <span
                    className="badge"
                    style={{
                      fontSize: '0.72rem',
                    }}
                  >
                    {activeModalPost.readTime}
                  </span>
                </div>
                <h2
                  className="blog-card-title"
                  style={{
                    fontSize: '1.6rem',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}
                >
                  {activeModalPost.title}
                </h2>
              </div>

              {/* Mode Toggle & Close Button */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Toggle: Reader Mode vs Embedded Blog */}
                <div
                  style={{
                    display: 'flex',
                    background: 'var(--glass-bg-secondary)',
                    padding: '3px',
                    borderRadius: '8px',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <button
                    onClick={() => setModalViewMode('reader')}
                    style={{
                      border: 'none',
                      background: modalViewMode === 'reader' ? 'var(--text-primary)' : 'transparent',
                      color: modalViewMode === 'reader' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '5px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    Reader View
                  </button>
                  <button
                    onClick={() => setModalViewMode('iframe')}
                    style={{
                      border: 'none',
                      background: modalViewMode === 'iframe' ? 'var(--text-primary)' : 'transparent',
                      color: modalViewMode === 'iframe' ? 'var(--bg-primary)' : 'var(--text-secondary)',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      padding: '5px 10px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    Live Embed
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setActiveModalPost(null)}
                  aria-label="Close modal"
                  style={{
                    background: 'var(--glass-bg-tertiary)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '8px',
                    color: 'var(--text-secondary)',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bg-tertiary)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--glass-bg-tertiary)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content: Reader View OR Live Embedded Iframe */}
            {modalViewMode === 'reader' ? (
              <div
                className="blog-prose"
                style={{
                  padding: '32px 36px',
                  overflowY: 'auto',
                  fontSize: '1.05rem',
                  lineHeight: 1.85,
                  color: 'var(--text-secondary)',
                  flex: 1,
                }}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: activeModalPost.content }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                />
              </div>
            ) : (
              <div style={{ flex: 1, width: '100%', position: 'relative', background: '#fff' }}>
                <iframe
                  src={activeModalPost.link}
                  title={activeModalPost.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                  }}
                />
              </div>
            )}

            {/* Modal Footer */}
            <div
              style={{
                padding: '14px 24px',
                borderTop: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <span
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                }}
              >
                Published on blog.prasanganiraula.com.np
              </span>

              <a
                href={activeModalPost.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
                style={{
                  fontSize: '0.84rem',
                  padding: '7px 14px',
                  textDecoration: 'none',
                }}
              >
                <span>Open in New Tab</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
