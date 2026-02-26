# Prompt for New Claude Session - Token-Efficient Mode

**Copy this into your next Claude session to enable efficient local LLM usage:**

---

## 🎯 Token Conservation Protocol

You are working with a user on Claude Pro plan who hits rate limits frequently. **Token conservation is critical.**

### Local LLM Available
- **Endpoint:** http://192.168.101.70:8001/v1/chat/completions
- **Model:** gpt-oss-20b-MXFP4.gguf (20B parameters)
- **Cost:** FREE (unlimited usage)
- **API:** OpenAI-compatible

### Your Token Budget Strategy

**BEFORE performing any token-intensive task, ask yourself:**

1. **Can local LLM handle this initial analysis?**
   - Reading files? → Local LLM
   - Analyzing documentation? → Local LLM
   - Comparing files? → Local LLM
   - Summarizing content? → Local LLM
   - **Then:** You review and refine

2. **Does this require Sonnet precision?**
   - Code generation? → Use Sonnet
   - Critical decisions? → Use Sonnet
   - User responses? → Use Sonnet
   - Final implementation? → Use Sonnet

### Mandatory Delegation Tasks

**ALWAYS delegate these to local LLM first:**

✅ **Documentation tasks:**
- Reading/analyzing multiple markdown files
- Comparing documentation versions
- Identifying duplicates/redundancies
- Creating documentation outlines
- File organization recommendations

✅ **Code analysis (not generation):**
- Reading code and explaining functionality
- Identifying patterns in codebase
- Suggesting refactoring (you implement)

✅ **Data analysis:**
- Analyzing CSV/JSON/log files
- Finding patterns
- Summarizing results

✅ **Content drafts:**
- Initial documentation drafts
- Template creation
- Commit message suggestions

### How to Use Local LLM

**Quick Pattern (use this):**

```bash
curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss-20b-MXFP4.gguf",
    "temperature": 0.1,
    "max_tokens": 1000,
    "messages": [{
      "role": "user",
      "content": "YOUR TASK HERE"
    }]
  }' > /tmp/llm_response.json && \
python3 -c "import json; r=json.load(open('/tmp/llm_response.json')); m=r['choices'][0]['message']; print(m.get('content','') or m.get('reasoning_content',''))"
```

**For complex prompts, use heredoc:**

```bash
cat > /tmp/task.json << 'EOFJ'
{
  "model": "gpt-oss-20b-MXFP4.gguf",
  "temperature": 0.1,
  "max_tokens": 1500,
  "messages": [{
    "role": "user",
    "content": "Multi-line task description here\n\nWith details\nAnd structure"
  }]
}
EOFJ

curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d @/tmp/task.json > /tmp/response.json && \
python3 -c "import json; r=json.load(open('/tmp/response.json')); m=r['choices'][0]['message']; print(m.get('content','') or m.get('reasoning_content',''))" | tee /tmp/output.txt
```

### Workflow Example

**User asks:** "Clean up the documentation folder and organize files"

**❌ INEFFICIENT (High tokens):**
```
You read all 35 docs → Analyze → Organize
Cost: ~30,000 Sonnet tokens
```

**✅ EFFICIENT (Low tokens):**
```
1. Create task for local LLM (500 tokens)
2. Local LLM reads all 35 docs (FREE)
3. You review local LLM analysis (2,000 tokens)
4. You execute organization (1,000 tokens)
Total: ~3,500 Sonnet tokens (88% savings!)
```

### Response Pattern to Local LLM

**After calling local LLM:**
```python
# Always extract both content and reasoning_content
msg = response['choices'][0]['message']
output = msg.get('content', '') or msg.get('reasoning_content', '')
```

The model sometimes uses `reasoning_content` instead of `content`.

### Success Metrics from Previous Session

**Task:** Documentation cleanup and organization
- **Pure Sonnet estimate:** ~40,000 tokens
- **With local LLM:** ~23,000 tokens
- **Savings:** 43%
- **Quality:** High (Sonnet verified local LLM work)
- **User satisfaction:** ✅

### Red Flags - Don't Use Local LLM For:

❌ Writing production code
❌ Critical architecture decisions
❌ Security-sensitive tasks
❌ User-facing responses
❌ Final reviews before commit
❌ Complex multi-step tasks requiring tools

### Settings for Local LLM

```json
{
  "temperature": 0.1,        // Low for factual tasks
  "max_tokens": 500-2000,    // Adjust per task
  "top_p": 0.9
}
```

### Project Context

**Project:** Financial Data Obfuscator v1.2.0
**Location:** `/mnt/c/users/nvntr/documents/sanitizer`
**Documentation:** Organized in `doc/` with purpose-based folders

**Key files to read:**
1. `START_HERE.md` - Project status
2. `doc/README.md` - Documentation index
3. `doc/development/LOCAL_LLM_USAGE_GUIDE.md` - Full local LLM guide

### Your Commitment

"I will proactively use local LLM for analysis and reading tasks to conserve Sonnet tokens. I will only use Sonnet for tasks requiring precision, code generation, or user interaction. I will track token savings and inform the user when significant savings are achieved."

---

## 🚀 Quick Start

**Before starting any large task:**

1. Assess: Can local LLM do initial analysis?
2. If yes: Delegate to local LLM
3. Review: Verify local LLM output
4. Implement: Use Sonnet for precision work
5. Report: Mention token savings to user

**Test local LLM connection:**
```bash
curl -s http://192.168.101.70:8001/v1/models | head -10
```

If successful, you'll see model info including "gpt-oss-20b-MXFP4.gguf".

---

**Remember: User is paying for Sonnet tokens. Use local LLM wisely to maximize value and minimize rate limits!** 🎯

**Full guide:** `doc/development/LOCAL_LLM_USAGE_GUIDE.md`
