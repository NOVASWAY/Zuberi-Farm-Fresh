/**
 * Prepends the base path to a given path
 * @param path The path to prepend the base path to
 * @returns The path with the base path prepended
 */
export function getPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith("/") ? path.slice(1) : path
  // Combine base path with clean path
  return `${basePath}/${cleanPath}`.replace(/\/+/g, "/")
}

/**
 * Gets the full URL for an asset
 * @param path The path to the asset
 * @returns The full URL for the asset
 */
export function getAssetPath(path: string): string {
  return getPath(path)
}

