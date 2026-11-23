function Div(elemento)
  if not FORMAT:match("html") then return nil end
  local titulo
  if elemento.classes:includes("pista") then
    titulo = "Ver pista"
  elseif elemento.classes:includes("solucion") then
    titulo = "Ver solución"
  else
    return nil
  end
  local bloques = pandoc.List {
    pandoc.RawBlock("html", "<details><summary>" .. titulo .. "</summary>")
  }
  bloques:extend(elemento.content)
  bloques:insert(pandoc.RawBlock("html", "</details>"))
  return bloques
end
