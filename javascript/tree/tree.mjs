import fs from 'fs/promises'
import { join } from 'path'

export const tree = async (directoryPath) => {
  const [,, param, value] = process.argv
  const path = param === '--path' && value ? value : directoryPath

  const result = {
    files: [],
    directories: []
  }
  await directoryReader(path, result)
  console.log('result', result)
  return result
}

const directoryReader = async (dirPath, data) => {
  const readingDir = await fs.readdir(dirPath, { withFileTypes: true })

  for (const dirent of readingDir) {
    const path = join(dirPath, dirent.name)
    if (dirent.isDirectory()) {
      data.directories.push(path)
      await directoryReader(path, data)
    } else {
      data.files.push(path)
    }
  }
}
