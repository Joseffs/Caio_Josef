import React from 'react'

const ProjectCounter = ({ projectIndex, totalProjects } : { projectIndex : number, totalProjects : number }) => {
  // Calcula a largura de cada traço com base no total de projetos
  const lineWidth = `${100 / totalProjects}%`

  // Array para armazenar os traços
  const lines = []

  // Preenche o array com os traços ativados até o índice do projeto atual
  for (let i = 0; i < totalProjects; i++) {
    const isActive = i <= projectIndex
    const lineStyle = {
      width: lineWidth,
      backgroundColor: isActive ? 'rgb(100 116 139)' : 'rgb(30 41 59)',
    }
    lines.push(<div key={i} className="h-2 rounded-xl duration-500" style={lineStyle}></div>)
  }

  return <div className="flex">{lines}</div>
}

export default ProjectCounter
