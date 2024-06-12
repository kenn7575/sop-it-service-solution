import { readFileSync } from "fs";
import puppeteer from "puppeteer";

export function generateHtml(variables: Record<string, string> | any) {
  const data = readFileSync("./pdf/index.html", "utf8");
  let result = data;

  for (const key in variables) {
    const placeholder = `{{ ${key} }}`;
    result = result.replace(new RegExp(placeholder, "g"), variables[key]);
  }

  return result;
}

// Function to generate PDF from HTML
export async function generatePdf(htmlContent: string): Promise<Buffer> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  return pdfBuffer;
}
