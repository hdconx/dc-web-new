# Review Tool User Guide

## Overview

The Page Review Tool (`/admin/review`) is a robust system for systematically reviewing and documenting issues across all website pages. It features automatic persistence, file backup, and efficient workflow management.

---

## ✨ Key Features

### 🔄 Auto-Save Persistence
- **Automatic:** Every change saves to browser storage instantly
- **Survives:** Page refresh, browser close, PC restart
- **Visual feedback:** "Auto-saved" notification appears briefly
- **Zero effort:** No manual save button needed

### 📥 Export / Import
- **Export to File:** Download review session as JSON
- **Import (Replace):** Load saved session, replacing current notes
- **Import (Merge):** Combine saved session with current notes
- **File format:** `dc-review-2026-01-31.json` (auto-dated)

### ✏️ Edit Existing Notes
- Click **Edit** button on any note
- Modify element, action type, or comment
- Click **Update Note** to save changes
- **Cancel Edit** to discard changes

### 🔍 Filter by Action Type
- Filter notes by: Wrong Info, Change, Remove, Add, Discuss
- See count for each action type
- Focus on specific types of issues

### 📊 Notes Count
- Page selector shows count: "Room A Detail (3)"
- Quickly see which pages have issues
- Track review progress at a glance

### 🗑️ Flexible Clearing
- **Clear Page:** Remove all notes for current page only
- **Clear All:** Remove all notes from all pages
- **Confirmation dialogs:** Prevent accidental deletion

---

## 🎯 How to Use

### Starting a Review Session

1. **Open the tool:** Navigate to `/admin/review` or `localhost:3000/admin/review`
2. **Select a page:** Choose from dropdown (e.g., "Rentals Landing")
3. **Open the page:** Click "Open Page" button → Opens in new tab
4. **Review the live page:** Look for issues, inaccuracies, missing content

### Adding Review Notes

1. **Element:** What needs attention? (e.g., "Room A capacity")
2. **Action Type:** Click the appropriate action:
   - **Wrong Info** — Incorrect information
   - **Change** — Needs modification
   - **Remove** — Should be deleted
   - **Add** — Missing content
   - **Discuss** — Needs conversation/clarification
3. **Details:** Explain what's wrong and what it should be
4. **Add Note:** Click to save (auto-saves to localStorage)

### Editing Notes

1. **Click Edit button** (pencil icon) on any note
2. Form populates with note details
3. **Modify** element, action, or comment
4. **Update Note** or **Cancel Edit**
5. Note highlights in green when being edited

### Filtering Notes

1. **See current page notes** in "Notes for [Page Name]" section
2. **Click filter buttons** to show specific action types
3. **All button** to show everything again
4. Filter buttons show count: "Change (5)"

### Exporting for Backup

**When to export:**
- End of review session (daily backup)
- Before clearing browser cache
- To transfer between computers

**How:**
1. Click **Export to File**
2. File downloads: `dc-review-2026-01-31.json`
3. Save to secure location (Documents, Cloud storage)

### Resuming Later

**Same computer:**
- Just reopen `/admin/review`
- Your notes load automatically from localStorage
- Continue where you left off

**Different computer:**
1. Click **Import (Replace)** or **Import (Merge)**
2. Select your saved `.json` file
3. Notes load into tool
4. Continue reviewing

**Import options:**
- **Replace:** Overwrites current notes (use when starting fresh)
- **Merge:** Combines with existing notes (use to add more notes)

### Completing Review

1. **Review all pages** (check dropdown for pages with notes)
2. **Filter** to address specific types (e.g., all "Wrong Info")
3. **When done:** Click **Copy for Claude**
4. **Paste into chat** with Claude
5. Claude will read feedback and make corrections
6. **Export to file** for your records
7. **Clear All** to start next review cycle

---

## 💡 Best Practices

### Systematic Approach

**Option 1: Page by Page**
1. Review one page completely
2. Add all notes for that page
3. Move to next page
4. Repeat

**Option 2: By Action Type**
1. First pass: Note all "Wrong Info"
2. Second pass: Note all "Change" items
3. Third pass: Note "Add" and "Remove"
4. Final pass: "Discuss" complex items

### Writing Effective Notes

**Element name:**
- ✅ Good: "Room A capacity"
- ❌ Bad: "The number"

**Comments:**
- ✅ Good: "Says 50, should be 50-60 depending on activity"
- ❌ Bad: "Wrong"

**Action types:**
- **Wrong Info:** Facts are incorrect
- **Change:** Wording/presentation needs improvement
- **Remove:** Content shouldn't be there
- **Add:** Missing important information
- **Discuss:** Complex issue requiring conversation

### Session Management

**Daily workflow:**
1. Morning: Open tool (auto-loads previous session)
2. Review 2-3 pages, add notes
3. Midday: Continue (notes auto-saved)
4. End of day: Export to file (backup)
5. Next day: Auto-loads, continue

**Long-term workflow:**
1. Complete review cycle (all pages)
2. Export comprehensive file
3. Share with Claude
4. Clear all after corrections made
5. Start fresh review cycle

---

## 🔧 Technical Details

### Data Storage

**LocalStorage:**
- Key: `dc-review-items`
- Format: JSON array of review items
- Persists: Until browser cache cleared
- Scope: Per browser, per domain

**Export file:**
- Format: JSON
- Structure: Array of ReviewItem objects
- Fields: id, page, element, action, comment, timestamp

### Browser Compatibility

- ✅ Chrome / Edge / Brave (Chromium-based)
- ✅ Firefox
- ✅ Safari
- ⚠️ Requires JavaScript enabled
- ⚠️ Requires localStorage enabled

### Data Safety

**Your notes are safe:**
- Auto-save on every change
- Survives page refresh
- Survives browser restart
- Survives PC restart

**Your notes are NOT safe from:**
- Browser cache clearing
- Switching browsers
- Switching computers
- **Solution:** Export to file regularly!

### Import Behavior

**Replace mode:**
```
Current: [A, B, C]
Import:  [D, E, F]
Result:  [D, E, F]
```

**Merge mode:**
```
Current: [A, B, C]
Import:  [C, D, E]  (C has same ID)
Result:  [A, B, C, D, E]  (No duplicate C)
```

---

## 🐛 Troubleshooting

### Notes disappeared after refresh

**Cause:** Browser cleared localStorage or cookies

**Solution:**
1. Check if you exported to file
2. If yes: Import saved file
3. If no: Notes are lost
4. **Prevention:** Export regularly

### Can't import file

**Cause:** Invalid JSON or wrong format

**Solution:**
1. Ensure file is `.json` format
2. Check file wasn't corrupted
3. Re-export from working session
4. **Contact Claude** if persistent issue

### Auto-save notification not appearing

**This is normal:** Notification only shows briefly (1.5 seconds)

**To verify it's working:**
1. Add a note
2. Refresh page
3. Note should still be there

### Filter shows no results

**Cause:** No notes match selected filter for current page

**Solution:**
1. Click "All" filter button
2. Or select different page
3. Or add notes for current filter type

---

## 📋 Quick Reference

| Action | Button | Shortcut |
|--------|--------|----------|
| Add note | Add Note | - |
| Edit note | Edit icon | - |
| Delete note | Trash icon | Confirm dialog |
| Export file | Export to File | - |
| Import replace | Import (Replace) | - |
| Import merge | Import (Merge) | - |
| Copy for Claude | Copy for Claude | - |
| Clear page | Clear Page | Confirm dialog |
| Clear all | Clear All | Confirm dialog |
| Filter all | All (X) | - |
| Cancel edit | Cancel Edit | - |

---

## 🚀 Workflow Example

**Complete review session:**

```
Day 1:
- Open /admin/review
- Review "Rentals Landing" → Add 5 notes
- Review "Room A Detail" → Add 3 notes
- (Auto-saved continuously)
- Export to file: dc-review-2026-01-31.json
- Close browser

Day 2:
- Open /admin/review
- Notes auto-load from localStorage
- Review "Room B Detail" → Add 4 notes
- Filter by "Wrong Info" → Address factual errors
- Export updated file
- Continue reviewing

Day 3:
- Complete remaining pages
- Export final file
- Click "Copy for Claude"
- Paste in chat: "Here's my review feedback: [paste]"
- Claude makes corrections
- Export final record
- Click "Clear All" → Start fresh for next cycle
```

---

## 🎓 Reusability

This review tool can be adapted for other projects:

**To reuse for another website:**
1. Copy `/src/app/admin/review/page.tsx`
2. Update `pages` array with new site pages
3. Update `STORAGE_KEY` to unique name
4. Customize styling if needed

**Example for blog site:**
```typescript
const pages = [
  { id: "home", name: "Home Page", url: "/" },
  { id: "about", name: "About", url: "/about" },
  { id: "blog", name: "Blog Index", url: "/blog" },
  // ... more pages
]
```

---

*Created: 2026-01-31*
*Tool version: 2.0 (Enhanced)*
*Compatible with: Dance Connexions website review workflow*
