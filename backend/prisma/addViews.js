const fs = require("fs");
const path = require("path");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const viewPath = path.join(__dirname, "./views/sop");

async function Main() {
  const allViews = fs.readdirSync(viewPath);

  for (const view of allViews) {
    const viewName = view.split(".")[0];

    const viewContent = fs.readFileSync(`${viewPath}/${view}`, "utf-8");

    await prisma.$executeRawUnsafe(`DROP VIEW IF EXISTS ${viewName}`);

    await prisma.$executeRawUnsafe(
      `CREATE OR REPLACE VIEW ${viewName} AS ` + viewContent
    );
  }
}

Main();
