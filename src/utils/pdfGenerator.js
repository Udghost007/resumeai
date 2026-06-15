import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";

const sanitizeFileName = (name) =>
  name
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-_.]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .trim();

export const downloadElementAsPdf = async (
  element,
  fileName = "resume.pdf",
) => {
  if (!element) {
    throw new Error("Resume preview element was not found");
  }

  await document.fonts.ready;

  const clone = element.cloneNode(true);
  const width = element.offsetWidth || 800;
  const height = element.offsetHeight || element.scrollHeight || 1200;

  clone.style.position = "fixed";
  clone.style.left = "-9999px";
  clone.style.top = "-9999px";
  clone.style.width = `${width}px`;
  clone.style.minHeight = `${height}px`;
  clone.style.display = "block";
  clone.style.visibility = "visible";
  clone.style.backgroundColor = "#ffffff";
  clone.style.pointerEvents = "none";
  clone.style.zIndex = "-1";

  document.body.appendChild(clone);

  try {
    await new Promise((resolve) => setTimeout(resolve, 150));

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
      scrollX: 0,
      scrollY: -window.scrollY,
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight,
    });

    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imageData, "PNG", 0, 0, pageWidth, imageHeight);

    const totalPages = Math.ceil(imageHeight / pageHeight);
    for (let pageIndex = 1; pageIndex < totalPages; pageIndex += 1) {
      pdf.addPage();
      pdf.addImage(
        imageData,
        "PNG",
        0,
        -(pageHeight * pageIndex),
        pageWidth,
        imageHeight,
      );
    }

    pdf.save(sanitizeFileName(fileName) || "resume.pdf");
  } finally {
    document.body.removeChild(clone);
  }
};
