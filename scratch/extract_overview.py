import os
import re

path = 'src/components'
days = [
    'CuripodDay19',
    'LabsterDay20',
    'Lumen5Day21',
    'TeacherMaticDay22',
    'FetchyDay23',
    'EllieDay24',
    'GradescopeDay25',
    'TurnitinDay26',
    'EdthenaDay27',
    'LoopDay28'
]

for day in days:
    filename = f'{day}.jsx'
    filepath = os.path.join(path, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract Title
    title_match = re.search(r'<h2 className="text-3xl font-bold text-site-text tracking-tight">(.*?)</h2>', content)
    title = title_match.group(1) if title_match else None
    
    # Extract Paragraph
    para_match = re.search(r'<p className="text-site-text/80 leading-relaxed text-lg">(.*?)</p>', content, re.DOTALL)
    para = para_match.group(1).strip() if para_match else None
    
    # Extract Array string
    array_match = re.search(r'\{\s*\[(.*?)\]\s*\}\s*\.map', content, re.DOTALL)
    if not array_match:
        # try fallback search
        array_match = re.search(r'\[\s*\n\s*\[(.*?)\]\s*\n\s*\]\s*\.map', content, re.DOTALL)
    
    array_str = array_match.group(1).strip() if array_match else None
    
    print(f"--- {day} ---")
    print(f"Title: {title}")
    print(f"Para: {para}")
    print(f"Array items count: {len(re.findall(r'\{', array_str)) if array_str else 0}")
