import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'whitepaper.md')
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    // Convert markdown to HTML-like format for better rendering
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>PLAXIN COIN Whitepaper</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              line-height: 1.6;
              max-width: 800px;
              margin: 0 auto;
              padding: 2rem;
              background: #0a0a0a;
              color: #ffffff;
            }
            h1, h2, h3 { color: #e9d5ff; }
            a { color: #a855f7; }
            p { margin: 1em 0; }
            ul { padding-left: 2em; }
          </style>
        </head>
        <body>
          ${fileContent.split('\n').map(line => {
            if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`
            if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`
            if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`
            if (line.startsWith('- ')) return `<li>${line.slice(2)}</li>`
            if (line.trim() === '') return '<br>'
            return `<p>${line}</p>`
          }).join('\n')}
        </body>
      </html>
    `

    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      }
    })
  } catch (error) {
    console.error('Error loading whitepaper:', error)
    return new NextResponse('Error loading whitepaper', { status: 500 })
  }
} 