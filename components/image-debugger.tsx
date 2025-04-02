"use client"

import { useState, useEffect } from "react"

export function ImageDebugger() {
  const [debugInfo, setDebugInfo] = useState<{
    basePath: string
    imagesChecked: { path: string; status: "loading" | "success" | "error" }[]
  }>({
    basePath: "",
    imagesChecked: [],
  })

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
    const imagePaths = [
      "/images/colored-capsicum.png",
      "/images/green-capsicum-new.png",
      "/images/broccoli.png",
      "/images/cauliflower.png",
      "/images/cucumber.png",
      "/images/lettuce-new.png",
      "/images/celery.png",
      "/images/coriander.png",
      "/images/beetroot-new.png",
      "/images/tomatoes.png",
      "/images/strawberry-new.png",
      "/images/nursery-seedlings.png",
    ]

    setDebugInfo({
      basePath,
      imagesChecked: imagePaths.map((path) => ({ path, status: "loading" })),
    })

    // Check each image
    imagePaths.forEach((path, index) => {
      const img = new Image()
      img.onload = () => {
        setDebugInfo((prev) => {
          const newImagesChecked = [...prev.imagesChecked]
          newImagesChecked[index] = { path, status: "success" }
          return { ...prev, imagesChecked: newImagesChecked }
        })
      }
      img.onerror = () => {
        // Try without basePath if it fails with basePath
        if (img.src.includes(basePath)) {
          const imgWithoutBase = new Image()
          imgWithoutBase.onload = () => {
            setDebugInfo((prev) => {
              const newImagesChecked = [...prev.imagesChecked]
              newImagesChecked[index] = { path, status: "success" }
              return { ...prev, imagesChecked: newImagesChecked }
            })
          }
          imgWithoutBase.onerror = () => {
            setDebugInfo((prev) => {
              const newImagesChecked = [...prev.imagesChecked]
              newImagesChecked[index] = { path, status: "error" }
              return { ...prev, imagesChecked: newImagesChecked }
            })
          }
          imgWithoutBase.src = path
        } else {
          setDebugInfo((prev) => {
            const newImagesChecked = [...prev.imagesChecked]
            newImagesChecked[index] = { path, status: "error" }
            return { ...prev, imagesChecked: newImagesChecked }
          })
        }
      }
      img.src = `${basePath}${path}`
    })
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-green-900 p-4 rounded-lg shadow-lg border border-green-200 dark:border-green-800 max-w-xs max-h-96 overflow-auto">
      <h3 className="font-bold mb-2 text-green-800 dark:text-green-300">Image Debug Info</h3>
      <p className="text-sm mb-2">
        Base Path: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{debugInfo.basePath || "(none)"}</code>
      </p>
      <ul className="text-sm space-y-1">
        {debugInfo.imagesChecked.map((img, i) => (
          <li key={i} className="flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                img.status === "loading" ? "bg-yellow-500" : img.status === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            ></span>
            <span className="truncate">{img.path}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => document.location.reload()}
        className="mt-2 text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Reload Page
      </button>
    </div>
  )
}

