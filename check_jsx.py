import re

def check_jsx_balance(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove strings and comments to avoid false matches
    # This is a bit simplistic but might work
    content = re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)
    content = re.sub(r'//.*', '', content)
    
    # We want to find tags like <div>, <motion.div>, <ContentCard>, <BeginnerSidebar>
    # and </div>, </motion.div>, </ContentCard>, </BeginnerSidebar>
    # Also ignore self-closing tags <img />, <br />
    
    tags = re.findall(r'<(?!/)([a-zA-Z0-9\.]+).*?(?<!/)>|</([a-zA-Z0-9\.]+)>', content)
    
    stack = []
    for open_tag, close_tag in tags:
        if open_tag:
            # Filter out known non-JSX tags if any, but in JSX everything is a tag
            # Ignore some logic markers or very common self-closers that might not have /
            # Actually in JSX, all tags must be closed or self-closed.
            # The regex above already handles self-clossers by (?<!/)
            stack.append(open_tag)
        elif close_tag:
            if not stack:
                print(f"Error: Found closing tag </{close_tag}> but stack is empty")
                return
            last_open = stack.pop()
            if last_open != close_tag:
                print(f"Error: Mismatched tags. Last open: <{last_open}>, Found close: </{close_tag}>")
                # return # Continue to find more?
    
    if stack:
        print(f"Error: Unclosed tags remaining: {stack}")
    else:
        print("All tags seem balanced (simplistic check)")

if __name__ == "__main__":
    check_jsx_balance('src/components/BeginnerPage.jsx')
