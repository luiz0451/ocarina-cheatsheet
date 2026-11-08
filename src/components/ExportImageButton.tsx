import { useState } from "react";
import { ImageDown } from "lucide-react";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";

interface ExportImageButtonProps {
  /** id of the element holding the cheatsheet content. */
  targetId: string;
  label: string;
  busyLabel: string;
  /** Heading drawn at the top of the image, since the page title only lives in the sidebar. */
  title: string;
  subtitle: string;
  fileName: string;
}

// Fixed render width so the image always gets the wide (multi-column) layout,
// whatever device triggers the export. The content grids use container queries.
const EXPORT_WIDTH = 1040;

export function ExportImageButton({ targetId, label, busyLabel, title, subtitle, fileName }: ExportImageButtonProps) {
  const [busy, setBusy] = useState(false);

  async function exportImage() {
    const source = document.getElementById(targetId);
    if (!source) return;
    setBusy(true);

    const frame = document.createElement("div");
    frame.className = "@container bg-background p-10 text-foreground";
    Object.assign(frame.style, { position: "fixed", top: "0", left: "-100000px", width: `${EXPORT_WIDTH}px` });

    const header = document.createElement("header");
    header.className = "mb-10 space-y-1";
    const heading = document.createElement("p");
    heading.className = "text-2xl font-semibold";
    heading.textContent = title;
    const sub = document.createElement("p");
    sub.className = "text-sm text-muted-foreground";
    sub.textContent = subtitle;
    header.append(heading, sub);

    frame.append(header, source.cloneNode(true));
    document.body.append(frame);

    // Bake resolved theme colors into SVG lines; html-to-image drops CSS-derived strokes.
    for (const line of frame.querySelectorAll("line")) {
      line.setAttribute("stroke", getComputedStyle(line).stroke);
    }

    try {
      const dataUrl = await toPng(frame, {
        pixelRatio: 2,
        backgroundColor: getComputedStyle(document.body).backgroundColor,
        // The live frame is parked off-screen; draw the clone at the origin.
        style: { position: "static", left: "0", top: "0" },
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = fileName;
      link.click();
    } finally {
      frame.remove();
      setBusy(false);
    }
  }

  return (
    <Button
      variant="link"
      size="xs"
      onClick={exportImage}
      disabled={busy}
      aria-busy={busy}
      className="h-auto justify-start p-0 text-xs font-normal"
    >
      <ImageDown aria-hidden="true" />
      {busy ? busyLabel : label}
    </Button>
  );
}
