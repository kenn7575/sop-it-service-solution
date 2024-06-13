import { readFileSync } from "fs";
import puppeteer from "puppeteer";

export function generateHtml(
  fileName: string,
  variables: Record<string, string> | any
) {
  const data = readFileSync(`./pdf/${fileName}.html`, "utf8");
  let result = data;

  for (const key in variables) {
    const placeholder = `{{ ${key} }}`;
    result = result.replace(new RegExp(placeholder, "g"), variables[key]);
  }

  return result;
}

// Function to generate PDF from HTML
export async function generatePdf(
  htmlContent: string | string[]
): Promise<Buffer> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let content = "";

  if (Array.isArray(htmlContent)) content += htmlContent.join("");
  else content += htmlContent;

  await page.setContent(content);

  const pdfBuffer = await page.pdf({ format: "A4" });
  await browser.close();

  return pdfBuffer;
}
