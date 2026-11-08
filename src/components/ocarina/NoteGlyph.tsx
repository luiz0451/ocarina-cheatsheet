import type { OcarinaNote } from "@/lib/ocarina";

// N64 controller colors: blue A button, yellow C buttons.
const A_FILL = "#2f5bd3";
const A_STROKE = "#1d3d99";
const C_FILL = "#f4c20d";
const C_STROKE = "#b38c00";
const C_ARROW = "#3a2f00";

const ROTATION: Record<Exclude<OcarinaNote, "A">, number> = {
  "C-up": 0,
  "C-right": 90,
  "C-down": 180,
  "C-left": 270,
};

interface NoteGlyphProps {
  note: OcarinaNote;
  cx: number;
  cy: number;
  r: number;
}

/** SVG `<g>` drawing one N64 button; meant to be placed inside a parent `<svg>`. */
export function NoteGlyph({ note, cx, cy, r }: NoteGlyphProps) {
  const strokeWidth = r * 0.12;

  if (note === "A") {
    return (
      <g>
        <circle cx={cx} cy={cy} r={r - strokeWidth / 2} fill={A_FILL} stroke={A_STROKE} strokeWidth={strokeWidth} />
        <text
          x={cx}
          y={cy}
          fill="#fff"
          fontSize={r * 1.15}
          fontWeight={700}
          fontFamily="Inter Variable, ui-sans-serif, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
        >
          A
        </text>
      </g>
    );
  }

  const tip = r * 0.55;
  const base = r * 0.32;
  const half = r * 0.5;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r - strokeWidth / 2} fill={C_FILL} stroke={C_STROKE} strokeWidth={strokeWidth} />
      <polygon
        points={`${cx},${cy - tip} ${cx + half},${cy + base} ${cx - half},${cy + base}`}
        fill={C_ARROW}
        transform={`rotate(${ROTATION[note]} ${cx} ${cy})`}
      />
    </g>
  );
}
