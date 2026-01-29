"use client"

import { useState } from "react"
import { ExternalLink, Plus, Trash2, MessageSquare, AlertCircle, Edit, X as XIcon, HelpCircle } from "lucide-react"

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
]

const actionLabels: Record<ActionType, { label: string; color: string; icon: any }> = {
  wrong: { label: "Wrong Info", color: "bg-red-100 text-red-700 border-red-200", icon: XIcon },
  change: { label: "Change", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: Edit },
  remove: { label: "Remove", color: "bg-gray-100 text-gray-700 border-gray-200", icon: Trash2 },
  add: { label: "Add", color: "bg-green-100 text-green-700 border-green-200", icon: Plus },
  discuss: { label: "Discuss", color: "bg-blue-100 text-blue-700 border-blue-200", icon: HelpCircle },
}

export default function ReviewPage() {
  const [selectedPage, setSelectedPage] = useState(pages[0].id)
  const [element, setElement] = useState("")
  const [action, setAction] = useState<ActionType>("change")
  const [comment, setComment] = useState("")
  const [items, setItems] = useState<ReviewItem[]>([])
  const [copySuccess, setCopySuccess] = useState(false)

  const currentPage = pages.find(p => p.id === selectedPage)

  const addItem = () => {
    if (!element.trim()) return

    const newItem: ReviewItem = {
      id: Date.now().toString(),
      page: selectedPage,
      element: element.trim(),
      action,
      comment: comment.trim(),
      timestamp: new Date().toLocaleTimeString(),
    }

    setItems([...items, newItem])
    setElement("")
    setComment("")
  }

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
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

  const filteredItems = items.filter(item => item.page === selectedPage)
  const allItemsCount = items.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Page Review Tool</h1>
          <p className="text-gray-600 text-sm mt-1">
            Select a page, open it, note what needs to change
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Page Selector */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Page to Review
              </label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {pages.map(page => (
                  <option key={page.id} value={page.id}>
                    {page.name}
                  </option>
                ))}
              </select>
            </div>
            <a
              href={currentPage?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open Page
            </a>
          </div>
        </div>

        {/* Add Review Item Form */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add Review Note</h2>

          <div className="space-y-4">
            {/* Element */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What element/section? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={element}
                onChange={(e) => setElement(e.target.value)}
                placeholder="e.g., Room A capacity, Hero image, Price table..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Action Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What needs to happen?
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.entries(actionLabels) as [ActionType, typeof actionLabels.wrong][]).map(([key, { label, color, icon: Icon }]) => (
                  <button
                    key={key}
                    onClick={() => setAction(key)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      action === key
                        ? color + " ring-2 ring-offset-1 ring-gray-400"
                        : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Add Button */}
            <button
              onClick={addItem}
              disabled={!element.trim()}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Note
            </button>
          </div>
        </div>

        {/* Review Items for Current Page */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Notes for {currentPage?.name}
              {filteredItems.length > 0 && (
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredItems.length} items)
                </span>
              )}
            </h2>
          </div>

          {filteredItems.length === 0 ? (
            <p className="text-gray-500 text-sm py-4 text-center">
              No notes for this page yet. Open the page, review it, and add notes above.
            </p>
          ) : (
            <div className="space-y-3">
              {filteredItems.map(item => {
                const { label, color, icon: Icon } = actionLabels[item.action]
                return (
                  <div key={item.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium border ${color}`}>
                      <Icon className="w-3 h-3" />
                      {label}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{item.element}</p>
                      {item.comment && (
                        <p className="text-sm text-gray-600 mt-1">{item.comment}</p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Summary / Export */}
        {allItemsCount > 0 && (
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-blue-900">
                All Review Notes ({allItemsCount} total)
              </h2>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                {copySuccess ? "Copied!" : "Copy for Claude"}
              </button>
            </div>
            <p className="text-sm text-blue-700 mb-3">
              When done reviewing, click "Copy for Claude" and paste into the chat.
              Claude will process all your feedback.
            </p>
            <div className="bg-white rounded border border-blue-200 p-3 max-h-64 overflow-y-auto">
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                {generateSummary()}
              </pre>
            </div>
          </div>
        )}

        {/* Help */}
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
            <AlertCircle className="w-4 h-4" />
            How to Use
          </h3>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            <li>Select a page from the dropdown</li>
            <li>Click "Open Page" to view it in a new tab</li>
            <li>Review the page, note issues</li>
            <li>Add notes here: element name, action type, details</li>
            <li>Use "Discuss" for complex items needing conversation</li>
            <li>When done, click "Copy for Claude" and paste in chat</li>
          </ol>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <a href="/rentals" className="text-blue-600 hover:underline">← Back to public site</a>
        </div>
      </div>
    </div>
  )
}
