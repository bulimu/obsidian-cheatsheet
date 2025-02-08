# Obsidian Kurzanleitung

### Inhaltsverzeichnis

- [Obsidian Kurzanleitung](#obsidian-kurzanleitung)
  - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Grundlegende Funktionen](#grundlegende-funktionen)
  - [Formatierung](#formatierung)
  - [Listen und Task](#listen-und-task)
  - [Links und Referenzen](#links-und-referenzen)
  - [Empfohlene Plugins](#empfohlene-plugins)
  - [Theme-Einstellungen](#theme-einstellungen)

---

### Grundlegende Funktionen

| Funktion              | Tastenkürzel/Syntax    | Beschreibung                             |
| --------------------- | ---------------------- | ---------------------------------------- |
| Neue Notiz            | `Ctrl/Cmd + N`         | Tastenkürzel drücken, Namen eingeben     |
| Notiz öffnen          | `Ctrl/Cmd + O`         | Quick Switcher, Notizname eingeben       |
| Notiz speichern       | `Ctrl/Cmd + S`         | Aktuelle Notiz speichern                 |
| Editor/Preview        | `Ctrl/Cmd + E`         | Zwischen Editor und Preview wechseln     |
| Notiz durchsuchen     | `Ctrl/Cmd + F`         | In aktueller Notiz suchen                |
| Globale Suche         | `Ctrl/Cmd + Shift + F` | In allen Dateien suchen                  |
| Command Palette       | `Ctrl/Cmd + P`         | Schnellzugriff auf Befehle               |
| Zurück                | `Ctrl/Cmd + Alt + ←`   | Zur vorherigen Position                  |
| Header Ein/Ausklappen | `Ctrl/Cmd + Klick`     | Inhalte unter Überschrift ein/ausklappen |
| Neuer Tab             | `Ctrl/Cmd + T`         | In neuem Tab öffnen                      |
| Tab schließen         | `Ctrl/Cmd + W`         | Aktuellen Tab schließen                  |

### Formatierung

| Format        | Syntax                     | Beispiel                                          |
| ------------- | -------------------------- | ------------------------------------------------- |
| Überschriften | `# Text` bis `###### Text` | `# H1`, `## H2`, `### H3` ...                     |
| Fett          | `**Text**`                 | **Text**                                          |
| Kursiv        | `*Text*`                   | _Text_                                            |
| Durchstrichen | `~~Text~~`                 | ~~Text~~                                          |
| Hervorhebung  | `==Text==`                 | ==Text==                                          |
| Code          | `` `code` ``               | `` `print("Hello")` `` wird zu `print("Hello")`   |
| Code Block    | ` ```code``` `             | ` ```print("Hello")``` ` wird zu `print("Hello")` |
| Trennlinie    | `---` oder `***`           | Horizontale Linie                                 |
| Zitat         | `> Zitattext`              | `> Dies ist ein Zitat`                            |
| Tabelle       | `\| Header1 \| Header2 \|` | Tabellenkopf                                      |
|               | `\|---\|---\|`             | Trennzeile (min. 3 Bindestriche)                  |
|               | `\| Zelle1 \| Zelle2 \|`   | Tabelleninhalt                                    |

Tabellen-Ausrichtung:

- Linksbündig: `:---`
- Rechtsbündig: `---:`
- Zentriert: `:---:`

Beispiel:

```markdown
| Links | Mitte | Rechts |
| :---- | :---: | -----: |
| Text  | Text  |   Text |
```

| Links | Mitte | Rechts |
| :---- | :---: | -----: |
| Text  | Text  |   Text |

### Listen und Task

| Typ          | Syntax                 | Beispiel   |
| ------------ | ---------------------- | ---------- |
| Aufzählung   | `- Item` oder `* Item` | • Item     |
| Nummerierung | `1. Item`              | 1. Item    |
| Task         | `- [ ] Task`           | ☐ Task     |
| Erledigt     | `- [x] Task`           | ☑ Task     |
| Unterliste   | 2 Leerzeichen Einzug   | Unterpunkt |

### Links und Referenzen

| Typ             | Syntax                   | Beschreibung                                                              |
| --------------- | ------------------------ | ------------------------------------------------------------------------- |
| Interner Link   | `[[Notizname]]`          | `[[Note-2025]]` verlinkt zu `Note-2025`                                   |
| Alias Link      | `[[Notiz\|Anzeigename]]` | `[[Note-2025\|Meine Notiz]]` zeigt [[Note-2025\|Meine Notiz]]             |
| Externer Link   | `[Anzeige](URL)`         | `[Google](https://www.google.com)` zeigt [Google](https://www.google.com) |
| Notiz einbetten | `![[Notizname]]`         | `![[Note-2025]]` bettet Inhalt von `Note-2025` ein                        |
| Tag             | `#tag`                   | `#todo` erstellt Tag, Klick zeigt alle `#todo` Notizen                    |
| Block Referenz  | `![[Notiz^blockID]]`     | `^block-id` nach Absatz, Referenz via `[[Notiz^block-id]]`                |
| Header Link     | `[[Notiz#Header]]`       | `[[Note-2025#Header]]` verlinkt zu `## Header` in `Note-2025`             |

### Empfohlene Plugins

| Plugin Name | Typ       | Hauptfunktion        |
| ----------- | --------- | -------------------- |
| Dataview    | Community | Datenabfrage & Stats |
| Calendar    | Community | Kalenderansicht      |
| Kanban      | Community | Kanban Board         |
| Mind Map    | Community | Mind Map Ansicht     |
| Templates   | Core      | Template System      |
| Daily notes | Core      | Tagesnotizen         |
| Graph view  | Core      | Graphenansicht       |

### Theme-Einstellungen

1. Einstellungen öffnen: `Ctrl/Cmd + ,`
2. `Appearance` im linken Menü wählen
3. Auf `Manage` im Bereich Themes klicken
4. Im Marketplace nach Themes suchen
5. `Install` und `Use` klicken

**Empfohlene Themes**

| Theme Name | Feature       | Anwendungsfall   |
| ---------- | ------------- | ---------------- |
| Minimal    | Clean & Light | Tagesnotizen     |
| Blue Topaz | Feature Rich  | Wissensdatenbank |
| Primary    | Modern Design | Schreiben        |
| Things     | Elegant       | Akademisch       |
