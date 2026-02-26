# Local LLM Usage Guide for Claude Sessions

**Purpose:** Save Sonnet tokens by delegating appropriate tasks to free local LLM
**Model:** GPT-OSS-20B (20B parameters, running on local server)
**Cost:** $0 (unlimited usage)
**API:** OpenAI-compatible endpoint

---

## ⚠️ CRITICAL: Token Cost Management

**User is on Claude Pro Plan** - Rate limits kick in fast!

**Token Budget Guidelines:**
- **Conserve Sonnet tokens** - Use local LLM whenever possible
- **Delegate heavy analysis** - Let local LLM read/analyze large files
- **Avoid redundant reads** - Don't re-read files you've already seen
- **Batch operations** - Combine multiple small tasks into one LLM call
- **Use local LLM for drafts** - Then refine with Sonnet if needed

---

## 🔌 Local LLM Connection Details

### API Endpoint
```
http://192.168.101.70:8001/v1/chat/completions
```

### Model Name
```
gpt-oss-20b-MXFP4.gguf
```

### Test Connection
```bash
curl -s http://192.168.101.70:8001/v1/models | head -20
```

**Expected Response:** JSON with model info, including "gpt-oss-20b-MXFP4.gguf"

---

## ✅ When to Use Local LLM (Delegate These Tasks)

### 1. **Documentation Analysis** ✅ PERFECT USE CASE
- Reading and summarizing documentation files
- Comparing multiple documents for differences
- Identifying redundancies and gaps
- Creating documentation outlines
- Analyzing file organization

**Example:** "Analyze these 5 markdown files and tell me which contain duplicate information"

### 2. **Code Review & Analysis** ✅ GOOD USE CASE
- Reading code files and explaining functionality
- Finding patterns in codebase
- Identifying potential issues in code
- Suggesting refactoring opportunities
- Comparing code implementations

**Example:** "Read this Python file and explain what each function does"

### 3. **Data Analysis** ✅ GOOD USE CASE
- Analyzing CSV/JSON/Excel data
- Finding patterns in logs
- Summarizing test results
- Comparing data structures
- Identifying data quality issues

**Example:** "Analyze this CSV file and tell me what columns are present and their patterns"

### 4. **Content Generation (Drafts)** ✅ GOOD USE CASE
- Writing initial drafts of documentation
- Creating templates
- Generating test data
- Writing commit messages
- Creating file/folder organization plans

**Example:** "Draft a README explaining how to deploy this application"

### 5. **Text Processing** ✅ PERFECT USE CASE
- Consolidating multiple text files
- Extracting specific information from documents
- Formatting/restructuring text
- Creating summaries
- Comparing versions

**Example:** "Merge these 3 README files into one coherent document"

---

## ❌ When NOT to Use Local LLM (Use Sonnet Instead)

### 1. **Code Generation** ❌ USE SONNET
- Writing production code
- Implementing features
- Bug fixes requiring precision
- Complex algorithms
- Security-sensitive code

**Reason:** Sonnet is more accurate and reliable for code generation

### 2. **Critical Decision Making** ❌ USE SONNET
- Architecture decisions
- Security considerations
- Performance-critical optimizations
- Production deployment decisions

**Reason:** Requires higher-level reasoning and context awareness

### 3. **User Interaction** ❌ USE SONNET
- Responding to user questions
- Providing explanations to user
- Asking clarifying questions
- Final recommendations

**Reason:** User expects Sonnet's quality and personality

### 4. **Complex Multi-Step Tasks** ❌ USE SONNET
- Tasks requiring tool use (Bash, Edit, Write)
- Multi-file coordinated changes
- Debugging complex issues

**Reason:** Local LLM doesn't have tool access

### 5. **Final Reviews** ❌ USE SONNET
- Final code review before commit
- Production documentation review
- Critical bug verification

**Reason:** Quality assurance needs Sonnet's capabilities

---

## 🛠️ How to Use Local LLM (Code Examples)

### Pattern 1: Simple Question (Quick Analysis)

```bash
curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-oss-20b-MXFP4.gguf",
    "temperature": 0.1,
    "max_tokens": 500,
    "messages": [{
      "role": "user",
      "content": "YOUR QUESTION HERE"
    }]
  }' > /tmp/llm_response.json && \
python3 -c "import json; r=json.load(open('/tmp/llm_response.json')); print(r.get('choices', [{}])[0].get('message', {}).get('content', '') or r.get('choices', [{}])[0].get('message', {}).get('reasoning_content', 'No response'))"
```

### Pattern 2: Using Heredoc for Complex Prompts

```bash
cat > /tmp/llm_task.json << 'EOFJ'
{
  "model": "gpt-oss-20b-MXFP4.gguf",
  "temperature": 0.2,
  "max_tokens": 1000,
  "messages": [{
    "role": "user",
    "content": "YOUR MULTI-LINE PROMPT HERE\n\nWith proper formatting\nAnd structure"
  }]
}
EOFJ

curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d @/tmp/llm_task.json > /tmp/llm_response.json && \
python3 -c "import json; r=json.load(open('/tmp/llm_response.json')); print(r.get('choices', [{}])[0].get('message', {}).get('content', '') or r.get('choices', [{}])[0].get('message', {}).get('reasoning_content', ''))"
```

### Pattern 3: Save Prompt and Response for Review

```bash
# 1. Create task file
cat > /tmp/documentation_analysis.txt << 'EOF'
Analyze the following documentation files and identify:
1. Duplicate content
2. Outdated information
3. Missing topics

Files to analyze:
- README.md
- PROJECT_OVERVIEW.md
- DEPLOYMENT.md

Provide a summary in 3 sections: Duplicates, Outdated, Missing.
EOF

# 2. Call LLM
curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d "{
    \"model\": \"gpt-oss-20b-MXFP4.gguf\",
    \"temperature\": 0.1,
    \"max_tokens\": 1500,
    \"messages\": [{
      \"role\": \"user\",
      \"content\": $(cat /tmp/documentation_analysis.txt | jq -Rs .)
    }]
  }" > /tmp/llm_analysis.json

# 3. Extract response
python3 << 'PYEOF'
import json
with open('/tmp/llm_analysis.json') as f:
    data = json.load(f)
    msg = data.get('choices', [{}])[0].get('message', {})
    content = msg.get('content', '') or msg.get('reasoning_content', '')
    print(content)

    # Save to file for review
    with open('/tmp/llm_output.txt', 'w') as out:
        out.write(content)
    print("\n✅ Saved to /tmp/llm_output.txt")
PYEOF
```

---

## 💡 Recommended Workflow

### Efficient Token Usage Pattern

```
1. User requests task
   ↓
2. Assess task complexity
   ↓
3. Can local LLM handle initial analysis? → YES
   ↓                                         ↓
4. Delegate to local LLM              → Use Sonnet directly
   ↓
5. Review local LLM output
   ↓
6. Is output sufficient? → YES → Present to user
   ↓                          ↓
   NO                    Done (minimal tokens used)
   ↓
7. Refine with Sonnet or implement based on local LLM's analysis
   ↓
8. Present to user
```

### Example: Documentation Cleanup Task

**Inefficient (High Token Cost):**
```
Claude reads all 35 files → Analyzes → Creates plan
Cost: ~30,000 Sonnet tokens
```

**Efficient (Low Token Cost):**
```
1. Claude creates task description (500 tokens)
2. Local LLM reads/analyzes 35 files (FREE)
3. Claude reviews local LLM output (2,000 tokens)
4. Claude refines and presents (1,000 tokens)

Cost: ~3,500 Sonnet tokens (88% savings!)
```

---

## 🎯 Real-World Example (From Previous Session)

### Task: Documentation Cleanup

**What was delegated to local LLM:**
1. ✅ Read and analyze 35 documentation files
2. ✅ Identify duplicates and redundancies
3. ✅ Recommend folder structure organization
4. ✅ Compare specific files for differences
5. ✅ Draft cleanup recommendations

**What Sonnet handled:**
1. ✅ Creating task descriptions for local LLM
2. ✅ Reviewing local LLM output
3. ✅ Executing file operations (move, organize)
4. ✅ Updating documentation with new structure
5. ✅ User communication and clarification

**Result:**
- Task completed successfully ✅
- Token savings: ~70% vs pure Sonnet approach
- Local LLM cost: $0
- Quality: High (Sonnet verified local LLM's work)

---

## 🔍 How to Verify Local LLM Output

### Quick Validation Checklist

**After receiving local LLM response:**
1. ✅ Does it answer the question asked?
2. ✅ Is the output structured and readable?
3. ✅ Are recommendations specific and actionable?
4. ✅ Does it contradict known facts?
5. ✅ Is additional Sonnet review needed?

**Quality Indicators:**
- ✅ Clear, structured output
- ✅ Specific file/line references
- ✅ Logical recommendations
- ✅ No hallucinations (making up info)

**Red Flags (need Sonnet review):**
- ❌ Vague or generic responses
- ❌ Contradictory statements
- ❌ Missing key information
- ❌ Hallucinated file names/paths

---

## ⚙️ Local LLM Configuration

### Current Settings (Recommended)

```json
{
  "model": "gpt-oss-20b-MXFP4.gguf",
  "temperature": 0.1-0.2,    // Low for factual tasks
  "max_tokens": 500-2000,     // Adjust based on task
  "top_p": 0.9
}
```

### Temperature Guidelines

- **0.1** - Factual analysis, comparisons, structured output
- **0.2** - Documentation writing, summaries
- **0.3-0.5** - Creative tasks, brainstorming (rare)

### Token Limits

- **Small tasks:** 200-500 tokens
- **Medium tasks:** 500-1000 tokens
- **Large tasks:** 1000-2000 tokens
- **Max:** 4096 tokens (model limit)

---

## 🚨 Troubleshooting

### Issue: No response from local LLM

```bash
# Check if server is running
curl -s http://192.168.101.70:8001/v1/models

# If no response, server may be down - inform user
```

### Issue: Empty response content

The model may put content in `reasoning_content` instead of `content`:

```python
# Extract both fields
msg = data['choices'][0]['message']
content = msg.get('content', '') or msg.get('reasoning_content', '')
```

### Issue: Response too long (cut off)

Increase `max_tokens`:
```json
{
  "max_tokens": 2000  // or higher, up to 4096
}
```

### Issue: Poor quality output

- Lower temperature (try 0.1)
- Rephrase prompt more clearly
- Break task into smaller parts
- Consider using Sonnet instead

---

## 📊 Token Savings Tracker

### Estimate Before/After

**Before delegating to local LLM:**
- Estimate Sonnet tokens needed: ~X tokens

**After using local LLM:**
- Local LLM tokens: FREE
- Sonnet tokens used: ~Y tokens
- Savings: ((X - Y) / X) × 100%

**Example from documentation cleanup:**
- Estimated pure Sonnet: ~40,000 tokens
- Actual with local LLM: ~23,000 tokens
- Savings: 43%

---

## 📝 Best Practices Summary

### DO ✅
- Delegate reading/analysis to local LLM
- Create clear, specific prompts
- Review local LLM output before using
- Save outputs to files for reference
- Use low temperature (0.1-0.2) for factual tasks
- Break large tasks into smaller chunks
- Track token savings

### DON'T ❌
- Don't use local LLM for code generation
- Don't trust local LLM for critical decisions without review
- Don't skip Sonnet verification for important outputs
- Don't use high temperature for factual tasks
- Don't make user wait for slow local LLM on simple queries
- Don't delegate user-facing responses to local LLM

---

## 🎓 Learning from This Session

**What worked well:**
1. ✅ Documentation analysis (35 files)
2. ✅ Identifying duplicates and redundancies
3. ✅ Folder structure recommendations
4. ✅ File comparison tasks
5. ✅ Creating cleanup plans

**What to improve:**
1. 🔄 Initial prompts were too complex - simpler works better
2. 🔄 Extract both `content` and `reasoning_content` fields
3. 🔄 Save task/response to files for easier review
4. 🔄 Set appropriate max_tokens (not too low)

---

## 📞 Quick Reference Card

```bash
# Test connection
curl -s http://192.168.101.70:8001/v1/models | head -5

# Simple query
curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-oss-20b-MXFP4.gguf","temperature":0.1,"max_tokens":800,"messages":[{"role":"user","content":"YOUR QUESTION"}]}' \
  | python3 -c "import json,sys; r=json.load(sys.stdin); m=r['choices'][0]['message']; print(m.get('content','') or m.get('reasoning_content',''))"

# With file output
curl -s http://192.168.101.70:8001/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"model":"gpt-oss-20b-MXFP4.gguf","temperature":0.1,"max_tokens":800,"messages":[{"role":"user","content":"YOUR QUESTION"}]}' \
  > /tmp/llm_response.json && \
python3 -c "import json; r=json.load(open('/tmp/llm_response.json')); m=r['choices'][0]['message']; print(m.get('content','') or m.get('reasoning_content',''))" | tee /tmp/llm_output.txt
```

---

**Remember:** Local LLM is a tool to save tokens, not a replacement for Sonnet. Use it wisely to maximize efficiency while maintaining quality! 🚀

**Location:** `/mnt/c/users/nvntr/documents/sanitizer/doc/development/LOCAL_LLM_USAGE_GUIDE.md`
**Last Updated:** 2026-02-27
