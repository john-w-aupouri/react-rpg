import React from 'react'

const TilePalette = ({ 
  tileset, 
  position, 
  activeTile, 
  setActiveTile 
}) => {
  const {width, height} = size
  const tiles = []
  let id = 0

  for (let y=0; y < height; y = y + 32) {
    const row = []
    for (let x=0; x < width; x = x + 32) {
      row.push({
        x, y, id: id++
      })
    }
    tiles.push(row)
  }
  
  return (
    <div
      id="palette"
      style={{
        position: "absolute",
        border: "1px solid black",
        top: position.y,
        left: position.x,
        zIndex: 100,
        backgroundColor: "white"
      }}
    >
      <img id="handle" src="/img/drag-handle.png" alt="" style={{cursor: "grabbing"}} />
      <div
        style={{
          background: `url(/sprites/${tileset}.png) -${
            activeTile.x * 32
          }px -${activeTile.y*32}px no-repeat`,
          width: 32,
          height: 32
        }}
      />
      {tiles.map((row, y) => (
        <div style={{display: "flex"}}>
          {row.map((tile, x) => <div
            onClick={() => setActiveTile({ x: x * 32, y: y * 32 })}
            style={{
              borderTop: "1px solid black",
              borderRight: "1px solid black",
              background: `url(/sprites/${tileset}.png) -${
                x * 32
              }px -${y*32}px no-repeat`,
              width: 32,
              height: 32
            }}
          />)}
        </div>
      ))}
    </div>
  )
}

export default TilePalette
