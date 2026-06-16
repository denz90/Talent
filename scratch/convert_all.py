#!/usr/bin/env python3
"""
Convert Day 1-14 components to match KahootDay15 design.
Each day gets:
- Dark purple gradient bg
- Header Hero with yellow badge/sparkle
- 4-tab system: Overview, Features, Guide, Challenge
- Overview: "What is X?" description + 4 benefit cards
- Features: 6 feature cards with How to Use + Benefit
- Guide: step-by-step guide
- Challenge: practical challenge parts + pro tips
- Bottom CTA card
"""

import os, re, sys, json

SRC = "/Users/applestreet/Desktop/HawkmanLabs/ai-academy-frontend-clean/src/components"

ICON_COLORS = [
    "pink", "site-primary", "green", "orange", "indigo", "rose",
    "yellow", "purple", "teal", "cyan", "amber", "sky",
]

PART_COLORS = ["site-primary", "pink", "green", "orange", "indigo", "rose"]

def clean(text):
    text = re.sub(r'<br\s*/?>', ' ', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    # Unescape HTML entities
    text = text.replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&').replace('&nbsp;', ' ')
    return text

def escape_jsx(text):
    """Escape text for safe use inside JSX strings (inside {} or attributes)."""
    return text.replace('\\', '\\\\').replace('`', '\\`').replace('{', '\\{').replace('}', '\\}')

def jsx_text(text):
    """Return text safe to use inside JSX element content (not in attributes)."""
    # Only & needs to be escaped in JSX element content, not { or }
    return text.replace('&', '&amp;')

def extract_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Component name
    m = re.search(r'const\s+(\w+)\s*=\s*\(\{\s*onNext\s*\}\)\s*=>', content)
    comp_name = m.group(1) if m else os.path.basename(path).replace('.jsx','')

    # Day number
    m = re.search(r'Day\s*(\d+)', content)
    day_num = int(m.group(1)) if m else 0

    # Title from h1
    m = re.search(r'<h1[^>]*>([\s\S]*?)</h1>', content)
    title = clean(m.group(1)) if m else comp_name

    # Subtitle from p tag with white/80 text
    m = re.search(r'<p className="text-(?:lg|xl) text-white/80[^"]*">([\s\S]*?)</p>', content)
    subtitle = clean(m.group(1)) if m else ""

    # What is X? description
    m = re.search(r'What is[^<]*?</h2>\s*<p[^>]*>([\s\S]*?)</p>', content)
    if not m:
        m = re.search(r'What is[^<]*?</h2>\s*<div[^>]*>\s*<p[^>]*>([\s\S]*?)</p>', content)
    what_is_desc = clean(m.group(1)) if m else ""

    # Benefits from Why Educators section (li items with strong+span)
    benefits = []
    li_iter = re.finditer(r'<li className="flex items-start gap-3">([\s\S]*?)</li>', content)
    for lm in li_iter:
        li_content = lm.group(1)
        sm = re.search(r'<strong[^>]*>([\s\S]*?)</strong>', li_content)
        sp = re.search(r'<span[^>]*>([\s\S]*?)</span>', li_content)
        im = re.search(r'<(\w+)\s+(?:className|size)=', li_content)
        if sm and sp:
            b_title = clean(sm.group(1))
            b_desc = clean(sp.group(1))
            # Skip if it looks like a pro tip (has colon in strong and no span for description)
            if b_title and b_desc:
                benefits.append({
                    "icon": im.group(1) if im else "CheckCircle2",
                    "title": b_title,
                    "desc": b_desc
                })

    # Pro tips (same structure but different context — filter after benefits)
    # Tips have <strong>Title:</strong> followed by text
    tips = []
    tip_pattern = re.finditer(
        r'<li[^>]*>\s*(?:<div[^>]*>.*?</div>\s*)?<p[^>]*><strong>([\s\S]*?)</strong>([\s\S]*?)</p>',
        content
    )
    for tm in tip_pattern:
        t_title = clean(tm.group(1)).rstrip(':')
        t_desc = clean(tm.group(2)).lstrip(':').strip()
        if t_title and t_desc:
            tips.append({"title": t_title, "desc": t_desc})

    # Features from table rows
    features = []
    if '<table' in content:
        tr_iter = re.finditer(r'<tr>([\s\S]*?)</tr>', content)
        for tr in tr_iter:
            tr_c = tr.group(1)
            tds = re.findall(r'<td[^>]*>([\s\S]*?)</td>', tr_c)
            if len(tds) >= 3:
                im = re.search(r'<(\w+)\s+size=\{16\}', tds[0])
                if not im:
                    im = re.search(r'<(\w+)\s+', tds[0])
                f_name = clean(tds[0])
                how_to = clean(tds[1])
                benefit = clean(tds[2])
                if f_name and how_to and benefit:
                    features.append({
                        "icon": im.group(1) if im else "Layers",
                        "title": f_name,
                        "howTo": how_to,
                        "benefit": benefit
                    })
    else:
        # Grid cards
        # Match the outer div wrapper for feature cards
        card_blocks = re.findall(
            r'<div className="bg-site-bg p-8 rounded-\[2\.5rem\][^"]*">([\s\S]*?)</div>\s*</div>\s*</div>',
            content
        )
        for cb in card_blocks:
            im = re.search(r'<(\w+)\s+size=\{24\}', cb)
            hm = re.search(r'<h3[^>]*>([\s\S]*?)</h3>', cb)
            how_m = re.search(r'HOW TO USE[^<]*?</span>\s*<p[^>]*>([\s\S]*?)</p>', cb)
            ben_m = re.search(r'BENEFIT[^<]*?</span>\s*<p[^>]*>([\s\S]*?)</p>', cb)
            if hm and how_m and ben_m:
                features.append({
                    "icon": im.group(1) if im else "Layers",
                    "title": clean(hm.group(1)),
                    "howTo": clean(how_m.group(1)),
                    "benefit": clean(ben_m.group(1))
                })

    # Steps
    steps = []
    step_pat = re.finditer(
        r'<div className="flex gap-[46] relative z-10">([\s\S]*?)</div>\s*</div>',
        content
    )
    step_num = 1
    for sm in step_pat:
        sc = sm.group(1)
        hm = re.search(r'<h3[^>]*>([\s\S]*?)</h3>', sc)
        # Collect text paragraphs after h3
        if hm:
            s_title = clean(hm.group(1))
            # Get everything after the h3 tag
            after_h3 = sc[sc.find(hm.group(0)) + len(hm.group(0)):]
            # Extract all <p> texts
            p_texts = re.findall(r'<p[^>]*>([\s\S]*?)</p>', after_h3)
            p_text = ' '.join(clean(p) for p in p_texts)
            # Also get div/code box content
            div_texts = re.findall(r'<div[^>]*border[^>]*>([\s\S]*?)</div>', after_h3)
            div_text = ' '.join(clean(d) for d in div_texts)
            combined = (p_text + ' ' + div_text).strip()
            if s_title:
                steps.append({
                    "step": step_num,
                    "title": s_title,
                    "content": combined or s_title
                })
                step_num += 1

    # Challenge parts
    challenge_parts = []
    cp_pat = re.finditer(
        r'<div className="flex gap-4 group cursor-pointer">([\s\S]*?)</div>\s*</div>',
        content
    )
    cp_num = 1
    for cpm in cp_pat:
        cpc = cpm.group(1)
        hm = re.search(r'<h4[^>]*>([\s\S]*?)</h4>', cpc)
        pm = re.search(r'<p[^>]*>([\s\S]*?)</p>', cpc)
        if hm and pm:
            challenge_parts.append({
                "part": cp_num,
                "title": clean(hm.group(1)),
                "desc": clean(pm.group(1))
            })
            cp_num += 1

    # Challenge title
    m = re.search(r'PRACTICAL CHALLENGE[^<]*?</h2>\s*<h2[^>]*>([\s\S]*?)</h2>', content)
    if not m:
        m = re.search(r'PRACTICAL CHALLENGE[^<]*?</div>\s*<h2[^>]*>([\s\S]*?)</h2>', content)
    challenge_title = clean(m.group(1)) if m else f"Complete the Day {day_num} Challenge"

    # Quote
    m = re.search(r'<p className="text-(?:xs|sm) text-amber-(?:800|900) font-medium italic">([\s\S]*?)</p>', content)
    quote = clean(m.group(1)) if m else ""

    # Next day preview
    m = re.search(r"Tomorrow's Preview:\s*([\s\S]*?)</p>", content)
    if not m:
        m = re.search(r'Next Up:\s*([\s\S]*?)</p>', content)
    preview = clean(m.group(1)) if m else f"Next Up: Day {day_num + 1} – Continue your AI education journey"

    # Collect all icon imports needed
    # Default needed icons
    all_icons = {
        "Sparkles", "Clock", "ChevronRight", "Trophy", "Target",
        "CheckCircle2", "Lightbulb", "Zap", "TrendingUp"
    }
    # Add feature icons
    for f in features:
        all_icons.add(f['icon'])
    # Add benefit icons
    for b in benefits:
        all_icons.add(b['icon'])

    return {
        "comp_name": comp_name,
        "day_num": day_num,
        "title": title,
        "subtitle": subtitle,
        "what_is_desc": what_is_desc,
        "benefits": benefits[:4],  # max 4 benefit cards
        "features": features[:6],  # max 6 feature cards
        "steps": steps[:6],        # max 6 steps
        "challenge_title": challenge_title,
        "challenge_parts": challenge_parts[:4],  # max 4 parts
        "tips": tips[:6],           # max 6 tips
        "quote": quote,
        "preview": preview,
        "all_icons": sorted(all_icons),
    }

def get_icon_import(icon_name):
    """Map lucide icon names to valid imports. Some older files use non-standard names."""
    # Map known aliases
    aliases = {
        "CheckSquare": "CheckSquare2",
    }
    return aliases.get(icon_name, icon_name)

def render_jsx(data):
    d = data
    comp = d["comp_name"]
    day = d["day_num"]
    title = d["title"]
    subtitle = d["subtitle"]
    what_is = d["what_is_desc"]
    benefits = d["benefits"]
    features = d["features"]
    steps = d["steps"]
    ch_title = d["challenge_title"]
    ch_parts = d["challenge_parts"]
    tips = d["tips"]
    quote = d["quote"]
    preview = d["preview"]

    # Icon imports
    icon_set = set([
        "Sparkles", "Clock", "ChevronRight", "Trophy", "Target",
        "CheckCircle2", "Lightbulb", "Zap", "TrendingUp",
    ])
    for f in features:
        icon_set.add(get_icon_import(f["icon"]))
    for b in benefits:
        icon_set.add(get_icon_import(b["icon"]))
    icons_str = ",\n  ".join(sorted(icon_set))

    # --- Build overview benefit cards ---
    benefit_colors = ["purple", "site-primary", "green", "pink"]
    benefit_text_colors = ["purple-300", "blue-300", "green-300", "pink-300"]
    benefit_cards = ""
    for i, b in enumerate(benefits):
        bc = benefit_colors[i % len(benefit_colors)]
        btc = benefit_text_colors[i % len(benefit_text_colors)]
        icon = get_icon_import(b["icon"])
        b_title_safe = jsx_text(b["title"])
        b_desc_safe = jsx_text(b["desc"])
        benefit_cards += f"""
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-{bc}-600/30 flex items-center justify-center text-{btc}">
                      <{icon} size={{24}} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">{b_title_safe}:</span>
                      {b_desc_safe}
                    </p>
                  </div>"""

    # If fewer than 2 benefits, add placeholder cards
    while len(benefits) < 2:
        benefit_cards += """
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/30 flex items-center justify-center text-indigo-300">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">AI-Powered:</span>
                      Leverage cutting-edge AI to transform your workflow
                    </p>
                  </div>"""
        benefits.append({"icon": "Sparkles", "title": "placeholder", "desc": ""})

    # --- Build feature cards ---
    feat_colors = [
        ("pink-600/40", "pink-200"),
        ("site-primary/40", "blue-200"),
        ("green-600/40", "green-200"),
        ("orange-600/40", "orange-200"),
        ("indigo-600/40", "indigo-200"),
        ("rose-600/40", "rose-200"),
    ]
    feature_cards = ""
    for i, f in enumerate(features):
        fc_bg, fc_text = feat_colors[i % len(feat_colors)]
        icon = get_icon_import(f["icon"])
        f_title_safe = jsx_text(f["title"])
        f_how_safe = jsx_text(f["howTo"])
        f_ben_safe = jsx_text(f["benefit"])
        feature_cards += f"""
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-{fc_bg} flex items-center justify-center text-{fc_text}">
                    <{icon} size={{24}} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{f_title_safe}</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">{f_how_safe}</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">{f_ben_safe}</p>
                      </div>
                    </div>
                  </div>
                </div>"""

    # --- Build guide steps ---
    guide_steps = ""
    if steps:
        steps_data = json.dumps([
            {"step": s["step"], "title": s["title"], "content": s["content"]}
            for s in steps
        ], indent=10)
        guide_steps = f"""
              <div className="space-y-6">
                {{[
{steps_data}
                ].map((step) => (
                  <div key={{step.step}} className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-[#e61e7d] text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20">
                      {{step.step}}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{{step.title}}</h3>
                      <p className="text-purple-100/80">{{step.content}}</p>
                    </div>
                  </div>
                ))}}
              </div>"""
    else:
        guide_steps = """
              <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 text-purple-100">
                <p>Follow the official documentation to get started with this tool.</p>
              </div>"""

    # --- Build challenge parts ---
    parts_jsx = ""
    if ch_parts:
        for i, p in enumerate(ch_parts):
            pc = PART_COLORS[i % len(PART_COLORS)]
            p_title_safe = jsx_text(p["title"])
            p_desc_safe = jsx_text(p["desc"])
            parts_jsx += f"""
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-{pc}-600/40 flex items-center justify-center text-{pc}-200 text-xs font-bold">Part {i+1}</div>
                    <h3 className="text-xl font-bold">{p_title_safe}</h3>
                  </div>
                  <p className="text-sm text-purple-100/80">{p_desc_safe}</p>
                </div>"""
    else:
        parts_jsx = """
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 text-purple-100">
                  <p>Complete the challenge tasks using what you've learned today.</p>
                </div>"""

    # --- Build pro tips ---
    tip_colors_bg = ["pink", "site-primary", "yellow", "green", "indigo", "rose"]
    tip_colors_text = ["pink", "blue", "yellow", "green", "indigo", "rose"]
    tip_icons = ["Lightbulb", "Zap", "TrendingUp", "CheckCircle2", "Sparkles", "Clock"]
    tips_jsx = ""
    for i, t in enumerate(tips[:6]):
        tc_bg = tip_colors_bg[i % len(tip_colors_bg)]
        tc_text = tip_colors_text[i % len(tip_colors_text)]
        t_icon = tip_icons[i % len(tip_icons)]
        t_title_safe = jsx_text(t["title"])
        t_desc_safe = jsx_text(t["desc"])
        tips_jsx += f"""
                  <div className="bg-[#4b2475] p-6 rounded-3xl border border-purple-400/20 relative overflow-hidden group hover:border-{tc_bg}-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-{tc_bg}-600/30 flex items-center justify-center text-{tc_text}-300 mb-4">
                      <{t_icon} size={{20}} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">{t_title_safe}:</span>
                      {t_desc_safe}
                    </p>
                  </div>"""

    # --- Quote section ---
    quote_jsx = ""
    if quote:
        quote_safe = jsx_text(quote)
        quote_jsx = f"""
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
                  <p className="text-yellow-100 font-medium italic">{quote_safe}</p>
                </div>"""

    # --- What is X? section ---
    what_is_safe = jsx_text(what_is)
    title_safe = jsx_text(title)
    subtitle_safe = jsx_text(subtitle)
    ch_title_safe = jsx_text(ch_title)
    preview_safe = jsx_text(preview)

    # Extract tool name from title for the "What is X?" heading
    # Try to extract the tool name (remove "Day N:" prefix if present)
    tool_name = re.sub(r'^Day\s*\d+[:\s]*', '', title).strip()
    # Remove common suffixes
    tool_name = re.sub(r'\s*(AI\s*)?Challenge\s*$', '', tool_name, flags=re.IGNORECASE).strip()
    what_is_heading = f"What is {tool_name}?"

    jsx = f"""import React, {{ useState }} from 'react';
import {{
  {icons_str}
}} from 'lucide-react';

const {comp} = ({{ onNext }}) => {{
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    {{ id: 'overview', label: 'Overview' }},
    {{ id: 'features', label: 'Features' }},
    {{ id: 'guide', label: 'Guide' }},
    {{ id: 'challenge', label: 'Challenge' }}
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-[#0F172B] via-[#59168B] to-[#0F172B] text-white">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {{/* Header Hero */}}
        <div className="bg-gradient-to-r from-[#9810FA33]/80 to-[#E6007633]/100 rounded-3xl p-10 border border-purple-400/20">
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
              <Sparkles className="text-[#2e0052]" size={{32}} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">{title_safe}</h1>
          <p className="text-xl text-purple-100 font-medium max-w-2xl mx-auto opacity-90">
            {subtitle_safe}
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-purple-200">
              <Clock size={{18}} />
              <span className="text-sm font-bold uppercase tracking-widest">Saves Hours</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Sparkles size={{18}} />
              <span className="text-sm font-bold uppercase tracking-widest">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <TrendingUp size={{18}} />
              <span className="text-sm font-bold uppercase tracking-widest">Boosts Results</span>
            </div>
          </div>
        </div>
        </div>

        {{/* Tab Navigation */}}
        <div className="bg-[#4b2475]/50 backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-purple-400/20 max-w-2xl mx-auto">
          {{tabs.map((tab) => (
            <button
              key={{tab.id}}
              onClick={{() => setActiveTab(tab.id)}}
              className={{`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${{
                activeTab === tab.id 
                ? 'bg-site-bg text-[#2e0052] shadow-lg scale-[1.02]' 
                : 'text-purple-200 hover:bg-site-bg/10'
              }}`}}
            >
              {{tab.label}}
            </button>
          ))}}
        </div>

        {{/* Tab Content */}}
        <div className="min-h-[500px]">
          {{activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-[#4b2475]/40 rounded-3xl p-10 border border-purple-400/20">
                <h2 className="text-3xl font-bold mb-6">{what_is_heading}</h2>
                <p className="text-purple-50 text-lg leading-relaxed opacity-90">
                  {what_is_safe}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  {benefit_cards}
                </div>
              </div>
            </div>
          )}}

          {{activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features &amp; How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {feature_cards}
              </div>
            </div>
          )}}

          {{activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Getting Started Guide</h2>
              {guide_steps}
            </div>
          )}}

          {{activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#2e0052]">
                    <Target size={{24}} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-yellow-400">Practical Challenge Task</h2>
                    <p className="text-yellow-100/70">{ch_title_safe}</p>
                  </div>
                </div>
                <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-yellow-400 text-sm font-bold">
                  <Clock size={{16}} />
                  Time Goal: Under 15 minutes
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {parts_jsx}
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={{32}} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tips_jsx}
                </div>
              </div>
              {quote_jsx}
            </div>
          )}}
        </div>

        {{/* Bottom CTA Card */}}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#e61e7d] to-[#ff4b2b] p-12 text-center space-y-8 shadow-2xl shadow-pink-500/20">
          <div className="absolute inset-0 bg-site-bg/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="flex justify-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-site-bg/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Trophy size={{32}} />
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black max-w-2xl mx-auto leading-tight">
              {title_safe}
            </h2>
            <p className="text-pink-100 font-medium">Complete the challenge and advance your AI skills!</p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={{onNext}}
              className="bg-site-bg text-[#e61e7d] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge
              <ChevronRight size={{24}} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center text-purple-300/60 text-sm pb-10">
          {preview_safe}
        </p>

      </div>
    </div>
  );
}};

export default {comp};
"""
    return jsx


def main():
    day_files = {}
    for fname in os.listdir(SRC):
        m = re.search(r'Day(\d+)\.jsx$', fname)
        if m:
            day_files[int(m.group(1))] = fname

    for day_num in sorted(day_files.keys()):
        if day_num > 14:
            continue
        fname = day_files[day_num]
        path = os.path.join(SRC, fname)
        print(f"Processing Day {day_num}: {fname}...")
        try:
            data = extract_data(path)
            jsx = render_jsx(data)
            with open(path, 'w', encoding='utf-8') as f:
                f.write(jsx)
            print(f"  ✓ Done. Features: {len(data['features'])}, Steps: {len(data['steps'])}, Parts: {len(data['challenge_parts'])}, Tips: {len(data['tips'])}")
        except Exception as e:
            print(f"  ✗ ERROR: {e}")
            import traceback
            traceback.print_exc()

    print("\nAll done!")

if __name__ == "__main__":
    main()
