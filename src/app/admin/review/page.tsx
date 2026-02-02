"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Plus, Trash2, MessageSquare, AlertCircle, Edit, X as XIcon, HelpCircle, Download, Upload, Filter, Save, CheckCircle } from "lucide-react"

type ActionType = "wrong" | "change" | "remove" | "add" | "discuss"

interface ReviewItem {
  id: string
  page: string
  element: string
  action: ActionType
  comment: string
  timestamp: string
}

const pages = [
  { id: "rentals", name: "Rentals Landing", url: "/rentals" },
  { id: "rooms", name: "Rooms Listing", url: "/rentals/rooms" },
  { id: "room-a", name: "Room A Detail", url: "/rentals/room/room-a" },
  { id: "room-b", name: "Room B Detail", url: "/rentals/room/room-b" },
  { id: "room-c", name: "Room C Detail", url: "/rentals/room/room-c" },
  { id: "room-d", name: "Room D Detail", url: "/rentals/room/room-d" },
  { id: "pricing", name: "Pricing Page", url: "/rentals/pricing" },
  { id: "compare", name: "Compare Page", url: "/rentals/compare" },
  { id: "gallery", name: "Gallery Page", url: "/rentals/gallery" },
  { id: "others", name: "Others (General Notes)", url: "#" },
]

const actionLabels: Record<ActionType, { label: string; color: string; icon: any }> = {
  wrong: { label: "Wrong Info", color: "bg-red-900/50 text-red-300 border-red-700", icon: XIcon },
  change: { label: "Change", color: "bg-yellow-900/50 text-yellow-300 border-yellow-700", icon: Edit },
  remove: { label: "Remove", color: "bg-zinc-700 text-zinc-300 border-zinc-600", icon: Trash2 },
  add: { label: "Add", color: "bg-green-900/50 text-green-300 border-green-700", icon: Plus },
  discuss: { label: "Discuss", color: "bg-blue-900/50 text-blue-300 border-blue-700", icon: HelpCircle },
}

const STORAGE_KEY = "dc-review-items"

export default function ReviewPage() {
  const [selectedPage, setSelectedPage] = useState(pages[0].id)
  const [element, setElement] = useState("")
  const [action, setAction] = useState<ActionType>("change")
  const [comment, setComment] = useState("")
  const [items, setItems] = useState<ReviewItem[]>([])
  const [copySuccess, setCopySuccess] = useState(false)
  const [filterAction, setFilterAction] = useState<ActionType | "all">("all")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [saveNotification, setSaveNotification] = useState(false)

  const currentPage = pages.find(p => p.id === selectedPage)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setItems(parsed)
      } catch (e) {
        console.error("Failed to load stored review items:", e)
      }
    }
  }, [])

  // Auto-save to localStorage whenever items change
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
      // Show brief save notification
      setSaveNotification(true)
      const timer = setTimeout(() => setSaveNotification(false), 1500)
      return () => clearTimeout(timer)
    }
  }, [items])

  const addItem = () => {
    if (!element.trim()) return

    if (editingId) {
      // Update existing item
      setItems(items.map(item =>
        item.id === editingId
          ? { ...item, element: element.trim(), action, comment: comment.trim() }
          : item
      ))
      setEditingId(null)
    } else {
      // Add new item
      const newItem: ReviewItem = {
        id: Date.now().toString(),
        page: selectedPage,
        element: element.trim(),
        action,
        comment: comment.trim(),
        timestamp: new Date().toLocaleTimeString(),
      }
      setItems([...items, newItem])
    }

    setElement("")
    setComment("")
  }

  const editItem = (item: ReviewItem) => {
    setElement(item.element)
    setAction(item.action)
    setComment(item.comment)
    setEditingId(item.id)
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setElement("")
    setComment("")
    setAction("change")
  }

  const removeItem = (id: string) => {
    if (confirm("Delete this review note?")) {
      setItems(items.filter(item => item.id !== id))
    }
  }

  const clearCurrentPage = () => {
    if (confirm(`Clear all notes for ${currentPage?.name}?`)) {
      setItems(items.filter(item => item.page !== selectedPage))
    }
  }

  const clearAll = () => {
    if (confirm("Clear ALL review notes? This cannot be undone!")) {
      setItems([])
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const exportToFile = () => {
    const dataStr = JSON.stringify(items, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `dc-review-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const importFromFile = (merge: boolean) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string)
          if (Array.isArray(imported)) {
            if (merge) {
              // Merge: combine with existing, avoiding duplicates by ID
              const existingIds = new Set(items.map(item => item.id))
              const newItems = imported.filter(item => !existingIds.has(item.id))
              setItems([...items, ...newItems])
            } else {
              // Replace: overwrite all
              setItems(imported)
            }
          } else {
            alert("Invalid file format")
          }
        } catch (err) {
          alert("Failed to import file: " + err)
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  const generateSummary = () => {
    if (items.length === 0) return "No review items yet."

    let summary = "## Review Feedback\n\n"

    // Group by page
    const grouped: Record<string, ReviewItem[]> = {}
    items.forEach(item => {
      const pageName = pages.find(p => p.id === item.page)?.name || item.page
      if (!grouped[pageName]) grouped[pageName] = []
      grouped[pageName].push(item)
    })

    Object.entries(grouped).forEach(([pageName, pageItems]) => {
      summary += `### ${pageName}\n\n`
      pageItems.forEach(item => {
        const actionLabel = actionLabels[item.action].label.toUpperCase()
        summary += `**[${actionLabel}]** ${item.element}\n`
        if (item.comment) {
          summary += `> ${item.comment}\n`
        }
        summary += "\n"
      })
    })

    return summary
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateSummary())
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  const filteredItems = items
    .filter(item => item.page === selectedPage)
    .filter(item => filterAction === "all" || item.action === filterAction)

  const allItemsCount = items.length
  const currentPageCount = items.filter(item => item.page === selectedPage).length

  // Get count per page for selector
  const getPageCount = (pageId: string) => {
    return items.filter(item => item.page === pageId).length
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50">
      {/* Header */}
      <div className="bg-zinc-900 border-b border-zinc-800 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-50">Page Review Tool</h1>
              <p className="text-slate-400 text-sm mt-1">
                Select a page, open it, note what needs to change
              </p>
            </div>
            {saveNotification && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                Auto-saved
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Page Selector */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 mb-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Select Page to Review
              </label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-slate-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {pages.map(page => {
                  const count = getPageCount(page.id)
                  return (
                    <option key={page.id} value={page.id}>
                      {page.name} {count > 0 ? `(${count})` : ''}
                    </option>
                  )
                })}
              </select>
            </div>
            {currentPage?.url !== "#" && (
              <a
                href={currentPage?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open Page
              </a>
            )}
          </div>
        </div>

        {/* Add/Edit Review Item Form */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-50">
              {editingId ? "Edit Review Note" : "Add Review Note"}
            </h2>
            {editingId && (
              <button
                onClick={cancelEdit}
                className="text-slate-400 hover:text-slate-200 text-sm flex items-center gap-1"
              >
                <XIcon className="w-4 h-4" />
                Cancel Edit
              </button>
            )}
          </div>

          <div className="space-y-4">
            {/* Element */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                What element/section? <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={element}
                onChange={(e) => setElement(e.target.value)}
                placeholder="e.g., Room A capacity, Hero image, Price table..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Action Type */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What needs to happen?
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(actionLabels) as [ActionType, typeof actionLabels.wrong][]).map(([key, { label, color, icon: Icon }]) => (
                  <button
                    key={key}
                    onClick={() => setAction(key)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      action === key
                        ? color + " ring-2 ring-offset-2 ring-offset-zinc-900 ring-emerald-500"
                        : "bg-zinc-800 text-slate-400 border-zinc-700 hover:bg-zinc-700"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                Details / What should it be?
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                  action === "wrong" ? "What's the correct information?" :
                  action === "change" ? "What should it change to?" :
                  action === "remove" ? "Why remove it? (optional)" :
                  action === "add" ? "What should be added?" :
                  "What needs to be discussed?"
                }
                rows={3}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-slate-50 placeholder-slate-500 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Add/Update Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={addItem}
                disabled={!element.trim()}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {editingId ? (
                  <>
                    <Save className="w-4 h-4" />
                    Update Note
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" />
                    Add Note
                  </>
                )}
              </button>
              {editingId && (
                <button
                  onClick={cancelEdit}
                  className="inline-flex items-center gap-2 border-2 border-slate-600 text-slate-300 hover:border-emerald-600 hover:text-emerald-400 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <XIcon className="w-4 h-4" />
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Review Items for Current Page */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-50">
              Notes for {currentPage?.name}
              {currentPageCount > 0 && (
                <span className="ml-2 text-sm font-normal text-slate-500">
                  ({currentPageCount} items)
                </span>
              )}
            </h2>
            {currentPageCount > 0 && (
              <button
                onClick={clearCurrentPage}
                className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                Clear Page
              </button>
            )}
          </div>

          {/* Filter */}
          {currentPageCount > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter by Action
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterAction("all")}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    filterAction === "all"
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-800 text-slate-400 hover:bg-zinc-700"
                  }`}
                >
                  All ({currentPageCount})
                </button>
                {(Object.keys(actionLabels) as ActionType[]).map(key => {
                  const count = items.filter(item => item.page === selectedPage && item.action === key).length
                  if (count === 0) return null
                  return (
                    <button
                      key={key}
                      onClick={() => setFilterAction(key)}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                        filterAction === key
                          ? actionLabels[key].color
                          : "bg-zinc-800 text-slate-400 hover:bg-zinc-700"
                      }`}
                    >
                      {actionLabels[key].label} ({count})
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {filteredItems.length === 0 ? (
            <p className="text-slate-500 text-sm py-4 text-center">
              {currentPageCount === 0
                ? "No notes for this page yet. Open the page, review it, and add notes above."
                : "No notes match the current filter."}
            </p>
          ) : (
            <div className="space-y-3">
              {filteredItems.map(item => {
                const { label, color, icon: Icon } = actionLabels[item.action]
                const isEditing = editingId === item.id
                return (
                  <div key={item.id} className={`flex items-start gap-3 p-3 rounded-lg ${isEditing ? 'bg-emerald-900/20 border-2 border-emerald-700' : 'bg-zinc-800/50'}`}>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${color}`}>
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-50">{item.element}</p>
                      {item.comment && (
                        <p className="text-sm text-slate-400 mt-1">{item.comment}</p>
                      )}
                      <p className="text-xs text-slate-600 mt-1">{item.timestamp}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => editItem(item)}
                        className="text-slate-500 hover:text-emerald-400 transition-colors"
                        title="Edit note"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-500 hover:text-red-400 transition-colors"
                        title="Delete note"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Export/Import Controls */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 mb-6">
          <h2 className="text-lg font-semibold text-slate-50 mb-3">Session Management</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={exportToFile}
              disabled={items.length === 0}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Download className="w-4 h-4" />
              Export to File
            </button>
            <button
              onClick={() => importFromFile(false)}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Upload className="w-4 h-4" />
              Import (Replace)
            </button>
            <button
              onClick={() => importFromFile(true)}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Upload className="w-4 h-4" />
              Import (Merge)
            </button>
            <button
              onClick={clearAll}
              disabled={items.length === 0}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            💾 Your notes auto-save to browser storage and persist across sessions. Export to file for backup or to transfer between devices.
          </p>
        </div>

        {/* Summary / Export */}
        {allItemsCount > 0 && (
          <div className="bg-emerald-900/20 rounded-lg border border-emerald-700/50 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-emerald-300">
                All Review Notes ({allItemsCount} total)
              </h2>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                {copySuccess ? "Copied!" : "Copy for Claude"}
              </button>
            </div>
            <p className="text-sm text-emerald-400/70 mb-3">
              When done reviewing, click "Copy for Claude" and paste into the chat.
            </p>
            <div className="bg-zinc-900 rounded border border-zinc-700 p-3 max-h-64 overflow-y-auto">
              <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono">
                {generateSummary()}
              </pre>
            </div>
          </div>
        )}

        {/* Help */}
        <div className="mt-6 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
          <h3 className="font-medium text-slate-50 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-slate-400" />
            How to Use
          </h3>
          <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
            <li>Select a page from the dropdown (pages with notes show count)</li>
            <li>Click "Open Page" to view it in a new tab</li>
            <li>Review the page, note issues</li>
            <li>Add notes here: element name, action type, details</li>
            <li>Use "Edit" to modify existing notes, "Delete" to remove</li>
            <li>Use "Discuss" for complex items needing conversation</li>
            <li>Filter notes by action type to focus on specific issues</li>
            <li>Notes auto-save to browser - safe to close and resume later</li>
            <li>Export to file for backup or to transfer between computers</li>
            <li>When done, click "Copy for Claude" and paste in chat</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-zinc-800 text-center text-sm text-slate-500">
          <a href="/rentals" className="text-emerald-400 hover:text-emerald-300">← Back to public site</a>
        </div>
      </div>
    </div>
  )
}
