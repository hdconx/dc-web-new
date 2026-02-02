import activityData from "@/../data/activity-capacity.json"

export interface Activity {
  id: string
  name: string
  category: string
  spacePerPerson: number
  unit: "person" | "couple"
  spacing: string
  breakdown: string
  similarTo: string
  icon: string
}

export interface CapacityResult {
  roomId: string
  roomName: string
  capacity: number
  unit: string
  isIdeal: boolean
  note?: string
}

const COMFORT_FACTOR = 0.85
const USABLE_SPACE_PERCENTAGE = 0.90

/**
 * Get all available activities grouped by category
 */
export function getActivities(): Activity[] {
  return activityData.activities as Activity[]
}

/**
 * Get activities grouped by category
 */
export function getActivitiesByCategory(): Record<string, Activity[]> {
  const activities = getActivities()
  return activities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = []
    }
    acc[activity.category].push(activity)
    return acc
  }, {} as Record<string, Activity[]>)
}

/**
 * Get a specific activity by ID
 */
export function getActivity(activityId: string): Activity | undefined {
  return getActivities().find((a) => a.id === activityId)
}

/**
 * Calculate capacity for a room based on activity type
 */
export function calculateCapacity(
  roomSqft: number,
  spacePerPerson: number
): number {
  const usableSpace = roomSqft * USABLE_SPACE_PERCENTAGE
  const rawCapacity = usableSpace / spacePerPerson
  const comfortableCapacity = rawCapacity * COMFORT_FACTOR
  return Math.floor(comfortableCapacity)
}

/**
 * Calculate capacity for all rooms for a specific activity
 */
export function calculateCapacityForActivity(
  activityId: string,
  rooms: Array<{ id: string; name: string; size: { sqft: number } }>
): CapacityResult[] {
  const activity = getActivity(activityId)
  if (!activity) return []

  return rooms.map((room) => {
    const capacity = calculateCapacity(room.size.sqft, activity.spacePerPerson)

    // Determine if this room is ideal for this activity
    const isIdeal = capacity >= 8 // Arbitrary threshold for "viable"

    // Add notes for special cases
    let note: string | undefined

    if (capacity < 4) {
      note = "Too small for this activity"
    } else if (capacity >= 30) {
      note = "Excellent - plenty of space"
    } else if (capacity >= 15) {
      note = "Good capacity"
    }

    return {
      roomId: room.id,
      roomName: room.name,
      capacity,
      unit: activity.unit === "couple" ? "couples" : "people",
      isIdeal,
      note,
    }
  })
}

/**
 * Get capacity range description for a room
 */
export function getCapacityRange(roomSqft: number): string {
  const minSpace = 50 // Large activities like ballroom
  const maxSpace = 18 // Compact activities like seated workshops

  const min = calculateCapacity(roomSqft, minSpace)
  const max = calculateCapacity(roomSqft, maxSpace)

  return `${min}-${max} people (varies by activity)`
}
