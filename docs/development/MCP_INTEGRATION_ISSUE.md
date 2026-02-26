# Issue: Local LLM MCP Server Not Appearing in Claude Code UI

**Date Created:** February 26, 2026
**Status:** UNRESOLVED - Needs Debugging
**Severity:** Medium (MCP functionality may be working despite UI visibility issue)
**Related Files:** `/home/nvntr/llmserver/mcp/local-llm-server.py`

---

## Problem Summary

A local LLM MCP (Model Context Protocol) server has been configured in Claude Code settings to use a LAN-based gpt-oss-20b model at `http://192.168.101.70:8001`, but:

1. **The MCP does not appear** in Claude Code's "Manage MCP servers" UI
2. **Multiple restarts** (CLI and Desktop) have not made it appear
3. **Unknown if MCP is actually functional** despite configuration being in place

Expected: User should see `local-llm` in the MCP servers list alongside Gmail and Google Calendar
Actual: Only built-in services (Gmail, Google Calendar) appear in the list

---

## Environment Details

| Item | Value |
|------|-------|
| **OS** | Linux (WSL2 Ubuntu 22.04) |
| **Claude Code CLI** | `/home/nvntr/.local/bin/claude` (binary) |
| **Claude Code Desktop** | Unknown version |
| **Python** | 3.9.21 (`/home/nvntr/.pyenv/shims/python3`) |
| **Config Location** | `~/.claude/settings.json` |
| **LLM Server** | http://192.168.101.70:8001/v1 |
| **LLM Model** | gpt-oss-20b-MXFP4.gguf |

---

## Diagnostic Results

### ✅ What's Working

1. **MCP Server Script**: Runs successfully
   ```
   2026-02-26 03:40:11,093 - local-llm-mcp - INFO - Starting local-llm-mcp server. Backend: http://192.168.101.70:8001/v1
   ```

2. **MCP Protocol**: Responds to initialize requests correctly
   ```json
   {
     "jsonrpc": "2.0",
     "id": 1,
     "result": {
       "protocolVersion": "2024-11-05",
       "serverInfo": { "name": "local-llm-server", "version": "1.0.0" }
     }
   }
   ```

3. **Settings JSON**: Valid syntax
   - Location: `~/.claude/settings.json` (243 lines)
   - JSON parsing: ✅ Valid
   - mcpServers section: Present and properly formatted

4. **LLM Server Connectivity**: ✅ Reachable
   ```bash
   curl http://192.168.101.70:8001/v1/models
   # Returns: gpt-oss-20b-MXFP4.gguf is loaded and responsive
   ```

5. **Script Permissions**: ✅ Executable
   ```
   -rwxr-xr-x /home/nvntr/llmserver/mcp/local-llm-server.py
   ```

6. **Python Path**: ✅ In PATH
   ```
   /home/nvntr/.pyenv/shims/python3
   ```

### ❌ What's Not Working

1. **MCP Visibility**: Does not appear in Claude Code UI
   - Appears in: None
   - Should appear in: "Manage MCP servers" list

2. **Unknown**: Whether MCP is actually used by Claude Code

---

## Configuration Details

### Current MCP Configuration in settings.json

```json
{
  "mcpServers": {
    "local-llm": {
      "command": "python3",
      "args": ["/home/nvntr/llmserver/mcp/local-llm-server.py"],
      "env": {
        "PYTHONUNBUFFERED": "1"
      },
      "timeout": 300000
    }
  }
}
```

### MCP Server Implementation

**File:** `/home/nvntr/llmserver/mcp/local-llm-server.py` (13KB)

**Provides 4 Tools:**
1. `analyze_code` - Find performance/security/style issues
2. `generate_code` - Create boilerplate and solutions
3. `refactor_code` - Improve code readability/performance
4. `write_tests` - Generate unit/integration tests

**Protocol:** MCP 2024-11-05 with JSON-RPC 2.0

---

## Steps Taken to Resolve

1. ✅ Created MCP server script with 4 tools
2. ✅ Updated `~/.claude/settings.json` with `mcpServers` configuration
3. ✅ Verified JSON syntax is valid
4. ✅ Tested MCP server startup (works correctly)
5. ✅ Tested MCP protocol responses (works correctly)
6. ✅ Tested LLM server connectivity (works correctly)
7. ✅ Verified Python path and permissions (correct)
8. ✅ Restarted Claude Code CLI multiple times
9. ✅ Restarted Claude Code Desktop (quit and reopen)
10. ✅ Cleared session cache and restarted CLI
11. ❌ MCP still does not appear in UI

---

## Possible Root Causes

### Theory 1: UI vs Backend Separation
The "Manage MCP servers" UI might only show **built-in cloud services** (Gmail, Google Calendar), not user-configured MCPs. User MCPs might be used in the backend without appearing in this UI.

**Evidence:**
- Built-in services show "△ needs authentication"
- User MCPs might have different status indicators or no UI presence
- MCP might still be functional despite not being visible

### Theory 2: Configuration Format Incorrect
The `mcpServers` section in `settings.json` might need a different structure or additional fields.

**Evidence:**
- No error messages in logs suggest validation passed
- But validation might not be catching the issue

### Theory 3: Path Resolution Issue
Claude Code might not be able to resolve:
- `/home/nvntr/` path in WSL context
- `python3` command from within Claude Code's execution environment
- Path might need to be absolute or relative differently

**Evidence:**
- Paths are absolute and correct in Linux
- But WSL might require different path format

### Theory 4: Permission/Sandbox Issue
Claude Code might have permission restrictions preventing:
- Executing arbitrary Python scripts
- Network access to localhost:8001 (even though it's on LAN)
- Reading from home directory paths

**Evidence:**
- No explicit errors in logs
- But Claude Code might silently skip MCPs it can't execute

### Theory 5: Settings File Not Being Read
The `settings.json` changes might not be picked up by Claude Code.

**Evidence:**
- Settings were modified after Claude Code processes started
- Multiple restarts should have solved this, but...
- Desktop Claude might cache settings differently

---

## Testing Checklist

Use this to debug:

- [ ] Check if other MCPs can be added and appear in UI
- [ ] Verify if local-llm MCP is actually available when Claude Code asks for tools
- [ ] Test if Claude Code logs show any MCP-related errors
- [ ] Check if Claude Code's actual process can see the script at that path
- [ ] Verify if the MCP works when called directly (test payload)
- [ ] Check if Windows path translation is needed (for WSL)
- [ ] Look for Claude Code's MCP initialization logs
- [ ] Test with absolute path vs relative path
- [ ] Test with different Python version
- [ ] Check if there's a separate .clauderc or env file for MCPs

---

## Test Prompt for Verification

Once debugged, use this to verify MCP works:

```
Analyze this code for performance issues:

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

Use the local LLM analyze_code tool if available.
```

**Expected behavior:**
- Claude mentions "analyze_code" tool
- Claude calls the tool and waits 10-20 seconds
- Response shows performance analysis of recursive Fibonacci

---

## Files Related to This Issue

| File | Purpose | Status |
|------|---------|--------|
| `/home/nvntr/llmserver/mcp/local-llm-server.py` | MCP server implementation | ✅ Working |
| `/home/nvntr/llmserver/scripts/delegate.sh` | Direct API calls (no MCP) | ✅ Updated for LAN |
| `/home/nvntr/llmserver/scripts/delegate-agent.py` | Agentic loop (no MCP) | ✅ Updated for LAN |
| `~/.claude/settings.json` | Claude Code config with MCP | ✅ Valid, but MCP not visible |
| `/home/nvntr/llmserver/MCP-SETUP.md` | Setup documentation | Reference |
| `/home/nvntr/llmserver/QUICK_REFERENCE.md` | Usage guide | Reference |

---

## Additional Context

### Why This Matters
- Goal: Reduce Claude Code token usage by ~70% for code tasks
- Local LLM: 5-10 tokens/sec on CPU (slow but saves API tokens)
- Expected saving: 2,000 tokens → 600 tokens per analysis task

### Workarounds Available
1. Use delegate scripts directly (no MCP)
   ```bash
   ~/llmserver/scripts/delegate.sh analyze <file>
   ```

2. Continue using Claude API (no token savings but functional)

3. Use desktop Claude with explicit tool selection (if implemented)

---

## Questions for Debugger

1. Does Claude Code UI show built-in MCPs separately from user MCPs?
2. Is there a separate config file or environment variable needed for MCPs?
3. Does Claude Code validate MCP scripts at startup?
4. Are there any Claude Code logs that show MCP initialization?
5. Does WSL path handling affect MCP script resolution?
6. Is the `mcpServers` format documented anywhere?
7. Can MCPs be added to Claude Code in any other way?

---

## How to Reproduce

1. **Setup MCP Server:**
   ```bash
   mkdir -p /home/nvntr/llmserver/mcp
   # Copy local-llm-server.py to the directory
   chmod +x /home/nvntr/llmserver/mcp/local-llm-server.py
   ```

2. **Update Claude Code Settings:**
   ```bash
   cat >> ~/.claude/settings.json << 'EOF'
   ,
   "mcpServers": {
     "local-llm": {
       "command": "python3",
       "args": ["/home/nvntr/llmserver/mcp/local-llm-server.py"],
       "env": {"PYTHONUNBUFFERED": "1"},
       "timeout": 300000
     }
   }
   EOF
   ```

3. **Restart Claude Code:**
   - CLI: `exit` then `claude`
   - Desktop: Quit then reopen

4. **Check MCP List:**
   - In Claude: Press menu → "Manage MCP servers"
   - Expected: See `local-llm` in the list
   - Actual: Only see Gmail and Google Calendar

---

## Next Steps for Debugger

1. Check Claude Code's internal logging for MCP initialization
2. Look at official Claude MCP documentation
3. Compare with working MCP examples (if any)
4. Check if there's validation happening on settings.json
5. Test if MCP is actually being used despite UI not showing it
6. Look for alternative configuration methods or locations

---

**Created by:** Claude Haiku 4.5
**For:** Debugging and resolution by another AI or developer
**Location:** `/mnt/c/users/nvntr/documents/sanitizer/MCP_INTEGRATION_ISSUE.md`
