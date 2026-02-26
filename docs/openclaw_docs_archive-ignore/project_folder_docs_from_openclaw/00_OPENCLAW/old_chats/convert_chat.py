
import json
import os

source_file = r'c:\Users\nvntr\Documents\dc-web-new\00_OPENCLAW\old_chats\53536908-b5fa-4277-b5f7-96513c1d0bd6.jsonl.reset.2026-02-19T00-16-38.055Z'
target_file = r'c:\Users\nvntr\Documents\dc-web-new\00_OPENCLAW\old_chats\53536908-b5fa-4277-b5f7-96513c1d0bd6.md'

with open(source_file, 'r', encoding='utf-8') as f, open(target_file, 'w', encoding='utf-8') as out:
    first_line = True
    for line in f:
        data = json.loads(line)
        
        if first_line and data.get('type') == 'session':
            out.write(f"# Session Transcript: {data.get('id')}\n")
            out.write(f"**Timestamp:** {data.get('timestamp')}\n\n")
            first_line = False
            continue
            
        if data.get('type') == 'message':
            msg = data.get('message', {})
            role = msg.get('role', 'unknown').capitalize()
            content_list = msg.get('content', [])
            
            out.write(f"## {role}\n")
            
            for content in content_list:
                if content.get('type') == 'text':
                    out.write(content.get('text', '') + "\n\n")
                elif content.get('type') == 'image':
                    out.write("*[Image attached]*\n\n")
                elif content.get('type') == 'toolUse':
                    out.write(f"**Tool Call:** `{content.get('name')}`\n")
                    out.write("```json\n")
                    out.write(json.dumps(content.get('arguments'), indent=2) + "\n")
                    out.write("```\n\n")
            
        elif data.get('type') == 'toolResult':
            out.write(f"**Tool Result:** `{data.get('toolName')}`\n")
            if data.get('isError'):
                out.write("*Error:* ")
            
            content_list = data.get('content', [])
            for content in content_list:
                if content.get('type') == 'text':
                    text = content.get('text', '')
                    if len(text) > 1000:
                        text = text[:1000] + "... [truncated]"
                    out.write("```\n" + text + "\n```\n\n")
            
print(f"Conversion complete: {target_file}")
